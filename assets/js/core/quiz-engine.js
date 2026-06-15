/* ===================================================================
   MOTOR DEL QUIZ
   Timer: cuenta HACIA ARRIBA (cuánto tiempo lleva el alumno).
   =================================================================== */

window.Quiz = (function () {

  var CONFIG = { numPreguntas: 10, tiempoMin: 0 };
  var S = {};

  /* ============================ ARRANQUE ============================ */
  function iniciar() {
    if (window.Seguridad) Seguridad.bloquearAtajos();

    var slug  = Util.parametroURL("tema");
    var tema  = window.Temas.obtener(slug);
    var banco = window.BANCO && window.BANCO[slug];

    if (!tema || !banco) {
      document.getElementById("contenido").innerHTML =
        '<div class="tarjeta"><h2>Tema no encontrado</h2>' +
        '<p>Revisa que el enlace tenga un tema válido.</p>' +
        '<a class="btn btn-principal mt-2" href="../index.html">Volver al inicio</a></div>';
      return;
    }
    S = { slug: slug, tema: tema, banco: banco, cfg: Object.assign({}, CONFIG, banco.config || {}, { tiempoMin: 0 }) };
    pintarInicio();
  }

  /* ====================== PANTALLA DE INICIO ======================= */
  function pintarInicio() {
    var total   = S.banco.preguntas.length;
    var saldran = Math.min(S.cfg.numPreguntas, total);
    var ico     = window.ICONOS ? ICONOS.temas[S.slug] || "" : "";
    var lapiz   = window.ICONOS ? ICONOS.lapiz : "";
    var camara  = window.ICONOS ? ICONOS.camara : "";

    document.getElementById("contenido").innerHTML =
      '<div class="inicio-quiz tarjeta anim-entrada">' +
        '<span class="insignia insignia-roja">' + Util.escapar(S.tema.unidad) + '</span>' +
        '<h1 class="titulo-seccion mt-1">' +
          '<span class="icono-tema icono-tema-inline">' + ico + '</span> ' +
          Util.escapar(S.tema.titulo) +
        '</h1>' +
        '<p class="subtexto-seccion">' + Util.escapar(S.tema.descripcion) + '</p>' +

        '<div class="campo">' +
          '<label for="in-nombre">Tu nombre completo *</label>' +
          '<input type="text" id="in-nombre" placeholder="Ej. Juan Pérez García" autocomplete="off">' +
        '</div>' +
        '<div class="campo">' +
          '<label for="in-grupo">Grupo (opcional)</label>' +
          '<input type="text" id="in-grupo" placeholder="Ej. 4°A" autocomplete="off">' +
        '</div>' +

        '<ul class="reglas-lista">' +
          '<li><span class="ic-reg">●</span> Saldrán <strong>' + saldran + '</strong> preguntas al azar de un banco de ' + total + '.</li>' +
          '<li><span class="ic-reg">' + lapiz + '</span> Haz las operaciones en tu <strong>libreta</strong> y escribe el resultado.</li>' +
          '<li><span class="ic-reg">' + camara + '</span> Al final, toma <strong>captura</strong> y descarga tu <strong>imagen</strong> para tu maestra.</li>' +
        '</ul>' +

        '<div id="aviso-nombre" class="aviso aviso-amarillo oculto">' +
          '<span class="icono-aviso">' + (window.ICONOS ? ICONOS.aviso : '') + '</span>' +
          '<span>Escribe tu nombre para empezar.</span>' +
        '</div>' +

        '<button id="btn-empezar" class="btn btn-principal btn-grande btn-bloque mt-1">Empezar quiz</button>' +
      '</div>';

    document.getElementById("btn-empezar").addEventListener("click", empezar);
    document.getElementById("in-nombre").addEventListener("keydown", function (e) {
      if (e.key === "Enter") empezar();
    });
  }

  /* ============================ EMPEZAR ============================ */
  function empezar() {
    var nombre = document.getElementById("in-nombre").value.trim();
    if (nombre.length < 3) { document.getElementById("aviso-nombre").classList.remove("oculto"); return; }
    S.nombre = nombre;
    S.grupo  = document.getElementById("in-grupo").value.trim();

    S.preguntas         = Util.tomarAlAzar(S.banco.preguntas, S.cfg.numPreguntas).map(prepararPregunta);
    S.indice            = 0;
    S.respuestas        = [];
    S.cambiosPestana    = 0;
    S.aperturasInspector = 0;
    S.inicio            = Date.now();

    activarAntiTrampa();
    iniciarConteo();
    pintarPregunta();
  }

  function prepararPregunta(p) {
    var copia = Object.assign({}, p);
    if (p.tipo === "opcion") {
      copia.opcionesRevueltas = Util.revolver(
        p.opciones.map(function (texto, i) { return { texto: texto, esCorrecta: i === p.correcta }; })
      );
    }
    return copia;
  }

  /* ======================= MOSTRAR PREGUNTA ======================= */
  function pintarPregunta() {
    var p     = S.preguntas[S.indice];
    var n     = S.indice + 1;
    var total = S.preguntas.length;
    var pct   = Math.round((S.indice / total) * 100);
    S.comprobada = false;
    S.seleccion  = undefined;

    var cuerpo  = "";
    if (p.tipo === "opcion") cuerpo = htmlOpciones(p);
    if (p.tipo === "abierta") cuerpo = htmlAbierta(p);
    if (p.tipo === "vf")     cuerpo = htmlVF(p);

    var formula = p.formula
      ? '<div class="pregunta-formula">' + Util.escapar(p.formula) + '</div>'
      : "";

    var pista = p.pista
      ? '<div class="zona-pista">' +
          '<button class="btn-pista" id="btn-pista">' +
            (window.ICONOS ? ICONOS.foco : '') + ' Ver pista' +
          '</button>' +
          '<div class="texto-pista oculto" id="texto-pista">' + Util.escapar(p.pista) + '</div>' +
        '</div>'
      : "";

    var relojSvg = window.ICONOS ? ICONOS.reloj : '';

    document.getElementById("contenido").innerHTML =
      '<div class="quiz-barra-superior">' +
        '<span class="info-tema">' +
          '<span class="icono-tema-mini">' + (window.ICONOS ? (ICONOS.temas[S.slug] || '') : '') + '</span>' +
          Util.escapar(S.tema.titulo) +
        '</span>' +
        '<span id="cronometro" class="quiz-cronometro">' +
          relojSvg + ' <span id="crono-txt">0:00</span>' +
        '</span>' +
      '</div>' +
      '<div class="progreso"><div class="relleno" style="width:' + pct + '%"></div></div>' +
      '<div class="progreso-texto">Pregunta ' + n + ' de ' + total + '</div>' +

      '<div class="pregunta-card mt-2 anim-entrada" id="zona-pregunta">' +
        '<div class="pregunta-numero">Pregunta ' + n + '</div>' +
        '<div class="pregunta-enunciado">' + Util.escapar(p.enunciado) + '</div>' +
        formula +
        '<div class="pregunta-instruccion">' + instruccionPorTipo(p.tipo) + '</div>' +
        cuerpo +
        pista +
        '<div id="zona-feedback"></div>' +
        '<div class="pregunta-pie">' +
          '<span class="insignia insignia-gris">' + etiquetaDificultad(p.dificultad) + '</span>' +
          '<button class="btn btn-principal" id="btn-accion" disabled>Comprobar ✓</button>' +
        '</div>' +
      '</div>';

    conectarEventos(p);
  }

  function instruccionPorTipo(tipo) {
    if (tipo === "opcion")  return "Selecciona la respuesta correcta.";
    if (tipo === "abierta") return "Escribe el resultado (ej. x^2+C). No importan espacios ni mayúsculas.";
    if (tipo === "vf")      return "Indica si la afirmación es verdadera o falsa.";
    return "";
  }
  function etiquetaDificultad(d) {
    if (d === "facil")   return '<span class="dif-punto dif-verde"></span>Fácil';
    if (d === "dificil") return '<span class="dif-punto dif-rojo"></span>Difícil';
    return '<span class="dif-punto dif-amarillo"></span>Media';
  }

  function htmlOpciones(p) {
    var letras = ["A", "B", "C", "D", "E", "F"];
    var items  = p.opcionesRevueltas.map(function (op, i) {
      return '<button class="opcion" data-i="' + i + '" style="animation-delay:' + (i * 0.05) + 's">' +
        '<span class="letra">' + letras[i] + '</span>' +
        '<span class="texto-mat">' + Util.escapar(op.texto) + '</span>' +
        '</button>';
    }).join("");
    return '<div class="opciones">' + items + '</div>';
  }
  function htmlAbierta() {
    return '<div class="respuesta-abierta">' +
      '<input type="text" id="in-respuesta" placeholder="Escribe aquí tu resultado" autocomplete="off">' +
      '</div>';
  }
  function htmlVF() {
    return '<div class="vf-opciones">' +
      '<button class="opcion" data-vf="true"><span class="letra">V</span><span>Verdadero</span></button>' +
      '<button class="opcion" data-vf="false"><span class="letra">F</span><span>Falso</span></button>' +
      '</div>';
  }

  /* ==================== EVENTOS DE LA PREGUNTA ==================== */
  function conectarEventos(p) {
    var btn = document.getElementById("btn-accion");

    var btnPista = document.getElementById("btn-pista");
    if (btnPista) btnPista.addEventListener("click", function () {
      document.getElementById("texto-pista").classList.remove("oculto");
      btnPista.classList.add("oculto");
    });

    if (p.tipo === "opcion" || p.tipo === "vf") {
      document.querySelectorAll(".opcion").forEach(function (b) {
        b.addEventListener("click", function () {
          if (S.comprobada) return;
          document.querySelectorAll(".opcion").forEach(function (x) { x.classList.remove("seleccionada"); });
          b.classList.add("seleccionada");
          S.seleccion = p.tipo === "opcion"
            ? parseInt(b.dataset.i, 10)
            : (b.dataset.vf === "true");
          btn.disabled = false;
        });
      });
    }

    if (p.tipo === "abierta") {
      var inp = document.getElementById("in-respuesta");
      inp.focus();
      inp.addEventListener("input", function () { btn.disabled = inp.value.trim().length === 0; });
      inp.addEventListener("keydown", function (e) {
        if (e.key === "Enter" && !btn.disabled) btn.click();
      });
    }

    btn.addEventListener("click", function () {
      if (!S.comprobada) comprobar(p, btn);
      else siguiente();
    });
  }

  /* ======================= COMPROBAR (feedback) ======================= */
  function comprobar(p, btn) {
    S.comprobada = true;
    var correcta = false, dada = "", esperada = "";

    if (p.tipo === "opcion") {
      var op = p.opcionesRevueltas[S.seleccion];
      dada = op.texto; correcta = op.esCorrecta; esperada = p.opciones[p.correcta];
      var letras = document.querySelectorAll(".opcion");
      letras.forEach(function (el, i) {
        el.classList.add("bloqueada");
        var o = p.opcionesRevueltas[i];
        if (o.esCorrecta)    { el.classList.add("correcta");   agregarMarca(el, "✓"); }
        else if (i === S.seleccion) { el.classList.add("incorrecta"); agregarMarca(el, "✗"); }
      });
    } else if (p.tipo === "vf") {
      dada     = S.seleccion ? "Verdadero" : "Falso";
      correcta = S.seleccion === p.correcta;
      esperada = p.correcta ? "Verdadero" : "Falso";
      document.querySelectorAll(".opcion").forEach(function (el) {
        el.classList.add("bloqueada");
        var val = el.dataset.vf === "true";
        if (val === p.correcta)  { el.classList.add("correcta");   agregarMarca(el, "✓"); }
        else if (val === S.seleccion) { el.classList.add("incorrecta"); agregarMarca(el, "✗"); }
      });
    } else if (p.tipo === "abierta") {
      var inp2 = document.getElementById("in-respuesta");
      dada     = inp2.value.trim();
      correcta = Util.respuestaCoincide(dada, p.respuestas);
      esperada = Array.isArray(p.respuestas) ? p.respuestas[0] : p.respuestas;
      inp2.disabled = true;
      inp2.style.borderColor = correcta ? "var(--verde-ok)" : "var(--rojo-error)";
      if (!correcta) inp2.classList.add("anim-sacudir");
    }

    S.respuestas.push({
      enunciado: p.enunciado + (p.formula ? "  " + p.formula : ""),
      dada: dada || "(sin responder)", esperada: esperada, correcta: correcta, retro: p.retro || ""
    });

    mostrarFeedback(correcta, esperada, p.retro);

    var ultima = S.indice === S.preguntas.length - 1;
    btn.textContent = ultima ? "Ver resultados ✓" : "Siguiente";
    btn.disabled = false;
  }

  function agregarMarca(el, simbolo) {
    var s = document.createElement("span");
    s.className   = "marca-res";
    s.textContent = simbolo;
    el.appendChild(s);
  }

  function mostrarFeedback(correcta, esperada, retro) {
    var zona     = document.getElementById("zona-feedback");
    var icoFb    = correcta
      ? (window.ICONOS ? ICONOS.checkOk : '✓')
      : (window.ICONOS ? ICONOS.xMal    : '✗');
    var icoRetro = window.ICONOS ? ICONOS.foco : '';
    zona.innerHTML =
      '<div class="feedback-panel ' + (correcta ? "ok" : "mal") + '">' +
        '<span class="fb-ico">' + icoFb + '</span>' +
        '<div>' +
          '<div class="fb-titulo">' + (correcta ? "¡Correcto!" : "Incorrecto") + '</div>' +
          (!correcta ? '<div class="fb-correcta">Respuesta correcta: <strong>' + Util.escapar(esperada) + '</strong></div>' : '') +
          (retro ? '<div class="fb-retro">' + icoRetro + ' ' + Util.escapar(retro) + '</div>' : '') +
        '</div>' +
      '</div>';
  }

  /* ========================== SIGUIENTE ========================== */
  function siguiente() {
    var card = document.getElementById("zona-pregunta");
    card.classList.remove("anim-entrada");
    card.classList.add("anim-salida");
    setTimeout(function () {
      S.indice++;
      if (S.indice < S.preguntas.length) pintarPregunta();
      else terminar();
    }, 200);
  }

  /* ========================== ANTI-TRAMPA ========================== */
  function activarAntiTrampa() {
    document.addEventListener("visibilitychange", onCambioPestana);
    window.addEventListener("blur", onCambioPestana);
    document.body.classList.add("sin-seleccion");

    if (!document.getElementById("overlay-inspector")) {
      var ov = document.createElement("div");
      ov.id        = "overlay-inspector";
      ov.className = "overlay-bloqueo oculto";
      var icoLock  = window.ICONOS ? ICONOS.cerradura : '';
      ov.innerHTML = '<div class="ico-bloqueo">' + icoLock + '</div>' +
        '<h2>Cierra el inspector para continuar</h2>' +
        '<p>Se detectaron las herramientas de desarrollador. Esto queda registrado en tu imagen de resultados.</p>';
      document.body.appendChild(ov);
    }
    if (window.Seguridad) {
      S.detenerVigilancia = Seguridad.vigilarInspector(function (abierto) {
        var ov = document.getElementById("overlay-inspector");
        if (abierto) { S.aperturasInspector = (S.aperturasInspector || 0) + 1; ov.classList.remove("oculto"); }
        else if (ov)  ov.classList.add("oculto");
      });
    }
  }
  function desactivarAntiTrampa() {
    document.removeEventListener("visibilitychange", onCambioPestana);
    window.removeEventListener("blur", onCambioPestana);
    document.body.classList.remove("sin-seleccion");
    if (S.detenerVigilancia) S.detenerVigilancia();
    var ov = document.getElementById("overlay-inspector");
    if (ov) ov.remove();
  }
  var ultimoCambio = 0;
  function onCambioPestana() {
    if (document.hidden || !document.hasFocus()) {
      var ahora = Date.now();
      if (ahora - ultimoCambio > 800) { S.cambiosPestana = (S.cambiosPestana || 0) + 1; ultimoCambio = ahora; }
    }
  }

  /* ======================== CRONÓMETRO (CUENTA ARRIBA) ======================== */
  function iniciarConteo() {
    S.inicioCrono = Date.now();
    actualizarConteo();
    S.cronoId = setInterval(actualizarConteo, 1000);
  }
  function actualizarConteo() {
    var el = document.getElementById("crono-txt");
    if (!el) return;
    var seg = Math.floor((Date.now() - S.inicioCrono) / 1000);
    var m   = Math.floor(seg / 60), s = seg % 60;
    el.textContent = m + ":" + String(s).padStart(2, "0");
  }

  /* =========================== TERMINAR =========================== */
  function terminar() {
    if (S.cronoId) clearInterval(S.cronoId);
    desactivarAntiTrampa();

    var total    = S.respuestas.length;
    var aciertos = S.respuestas.filter(function (r) { return r.correcta; }).length;
    var R = {
      nombre: S.nombre, grupo: S.grupo,
      temaSlug: S.slug, temaTitulo: S.tema.titulo, unidad: S.tema.unidad,
      aciertos: aciertos, total: total, porcentaje: Math.round((aciertos / total) * 100),
      fecha: Util.fechaHoy(), tiempoUsado: Math.round((Date.now() - S.inicio) / 1000),
      cambiosPestana: S.cambiosPestana || 0, aperturasInspector: S.aperturasInspector || 0,
      respuestas: S.respuestas
    };
    R.codigo    = Util.codigoVerificacion(R);
    S.resultado = R;
    pintarResultado(R);
  }

  /* ====================== PANTALLA DE RESULTADOS ====================== */
  function pintarResultado(R) {
    var aprobado = R.porcentaje >= S.cfg.aprobado;
    var color    = R.porcentaje >= 80  ? "var(--verde-ok)"    :
                   R.porcentaje >= (S.cfg.aprobado || 60) ? "#E0A100" : "var(--rojo-error)";
    var icoRes   = R.porcentaje >= 80
      ? (window.ICONOS ? ICONOS.trofeo  : '')
      : R.porcentaje >= (S.cfg.aprobado || 60)
        ? (window.ICONOS ? ICONOS.pulgar  : '')
        : (window.ICONOS ? ICONOS.estrella : '');
    var mensaje  = R.porcentaje >= 80
      ? "¡Excelente trabajo!"
      : R.porcentaje >= (S.cfg.aprobado || 60)
        ? "¡Bien hecho! Puedes mejorar."
        : "Sigue practicando, ¡tú puedes!";
    var errores  = R.respuestas.filter(function (r) { return !r.correcta; });

    var pinSvg    = window.ICONOS ? ICONOS.pin      : '';
    var focoSvg   = window.ICONOS ? ICONOS.foco     : '';
    var avisoDSvg = window.ICONOS ? ICONOS.aviso    : '';
    var camaraSvg = window.ICONOS ? ICONOS.camara   : '';
    var descSvg   = window.ICONOS ? ICONOS.descarga : '';
    var repSvg    = window.ICONOS ? ICONOS.repetir  : '';
    var libroSvg  = window.ICONOS
      ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>'
      : '';
    var checkSvg  = window.ICONOS ? ICONOS.checkOk : '✓';
    var xSvg      = window.ICONOS ? ICONOS.xMal    : '✗';

    var repaso = "";
    if (errores.length) {
      repaso = '<div class="repaso-titulo">' + pinSvg + ' Repaso: lo que debes reforzar</div>';
      errores.forEach(function (r) {
        repaso +=
          '<div class="repaso-item">' +
            '<div class="preg">' + Util.escapar(r.enunciado) + '</div>' +
            '<div class="linea-resp tu-resp">✗ Tu respuesta: ' + Util.escapar(r.dada) + '</div>' +
            '<div class="linea-resp resp-correcta">✓ Respuesta correcta: ' + Util.escapar(r.esperada) + '</div>' +
            (r.retro ? '<div class="retro">' + focoSvg + ' ' + Util.escapar(r.retro) + '</div>' : '') +
          '</div>';
      });
    } else {
      repaso =
        '<div class="repaso-item ok">' +
          '<div class="preg">' + checkSvg + ' ¡Contestaste todo bien! No hay nada que repasar.</div>' +
        '</div>';
    }

    var flags = [];
    if (R.cambiosPestana > 0)    flags.push('salió de la página <strong>' + R.cambiosPestana + '</strong> vez(ces)');
    if (R.aperturasInspector > 0) flags.push('abrió el inspector <strong>' + R.aperturasInspector + '</strong> vez(ces)');
    var avisoFlags = flags.length
      ? '<div class="aviso aviso-amarillo mt-2"><span class="icono-aviso">' + avisoDSvg + '</span><span>Durante el quiz se registró que ' + flags.join(" y ") + '. Esto aparece en tu imagen.</span></div>'
      : "";

    document.getElementById("contenido").innerHTML =
      '<div class="tarjeta anim-entrada">' +
        '<div class="resultado-cabecera">' +
          '<div class="resultado-ico">' + icoRes + '</div>' +
          '<div class="resultado-titulo">' + mensaje + '</div>' +
          '<span class="insignia ' + (aprobado ? "insignia-verde" : "insignia-roja") + ' mt-1">' +
            (aprobado ? "APROBADO" : "A REFORZAR") +
          '</span>' +
          '<div class="resultado-anillo" style="background:' + color + '">' +
            '<div class="porcentaje" id="pct-anim">0%</div>' +
            '<div class="fraccion">' + R.aciertos + ' de ' + R.total + '</div>' +
          '</div>' +
          '<div class="resultado-stats">' +
            '<div class="stat-chip"><div class="num" style="color:var(--verde-ok)">' + R.aciertos + '</div><div class="et">Correctas</div></div>' +
            '<div class="stat-chip"><div class="num" style="color:var(--rojo-error)">' + (R.total - R.aciertos) + '</div><div class="et">Incorrectas</div></div>' +
            '<div class="stat-chip"><div class="num">' + formatoTiempo(R.tiempoUsado) + '</div><div class="et">Tiempo</div></div>' +
          '</div>' +
          '<div class="codigo-verificacion">' +
            '<div class="et">Código de verificación</div><div class="cod">' + R.codigo + '</div>' +
          '</div>' +
          '<p style="font-size:.8rem;color:var(--gris-texto)">' +
            Util.escapar(R.nombre) + (R.grupo ? " · " + Util.escapar(R.grupo) : "") + " · " + R.fecha +
          '</p>' +
        '</div>' +
        avisoFlags +

        '<div class="aviso aviso-info mt-2">' +
          '<span class="icono-aviso">' + camaraSvg + '</span>' +
          '<span><strong>Para tu maestra:</strong> toma <strong>captura de esta pantalla</strong> y además ' +
          '<strong>descarga la imagen</strong> de abajo. Envíale las dos.</span>' +
        '</div>' +

        '<div class="centrado mt-2">' +
          '<button id="btn-descargar" class="btn btn-principal btn-grande">' +
            descSvg + ' Descargar imagen de resultados' +
          '</button>' +
        '</div>' +
        '<canvas id="lienzo-resultado" class="oculto"></canvas>' +

        repaso +

        '<div class="centrado mt-3">' +
          '<a class="btn btn-secundario" href="../index.html">← Otros temas</a>' +
          '<a class="btn btn-secundario" href="quiz.html#tema=' + S.slug + '">' + repSvg + ' Repetir</a>' +
          '<a class="btn btn-secundario" href="guias.html#tema=' + S.slug + '">' + libroSvg + ' Ver guía</a>' +
        '</div>' +
      '</div>';

    Util.contarHasta(document.getElementById("pct-anim"), R.porcentaje, 900, "%");
    if (R.porcentaje >= 80 && window.Util.confeti) Util.confeti(2600);

    document.getElementById("btn-descargar").addEventListener("click", function () {
      ImagenResultado.generar(R);
    });
    ImagenResultado.dibujar(R, document.getElementById("lienzo-resultado"));
  }

  function formatoTiempo(seg) {
    var m = Math.floor(seg / 60), s = seg % 60;
    return m + "m " + String(s).padStart(2, "0") + "s";
  }

  return { iniciar: iniciar };
})();
