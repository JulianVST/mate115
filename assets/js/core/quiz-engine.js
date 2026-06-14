/* ===================================================================
   MOTOR DEL QUIZ  (con animaciones estilo Educaplay)
   Flujo de cada pregunta:  responder → COMPROBAR (feedback al
   instante) → SIGUIENTE. Al final: puntaje animado, confeti e imagen.
   =================================================================== */

window.Quiz = (function () {

  const CONFIG = { numPreguntas: 10, tiempoMin: 12, aprobado: 60 };
  let S = {};

  /* ============================ ARRANQUE ============================ */
  function iniciar() {
    if (window.Seguridad) Seguridad.bloquearAtajos();

    const slug = Util.parametroURL("tema");
    const tema = window.Temas.obtener(slug);
    const banco = window.BANCO && window.BANCO[slug];

    if (!tema || !banco) {
      document.getElementById("contenido").innerHTML =
        '<div class="tarjeta"><h2>Tema no encontrado 😕</h2>' +
        '<p>Revisa que el enlace tenga un tema válido.</p>' +
        '<a class="btn btn-principal mt-2" href="../index.html">Volver al inicio</a></div>';
      return;
    }
    S = { slug: slug, tema: tema, banco: banco, cfg: Object.assign({}, CONFIG, banco.config || {}) };
    pintarInicio();
  }

  /* ====================== PANTALLA DE INICIO ======================= */
  function pintarInicio() {
    const total = S.banco.preguntas.length;
    const saldran = Math.min(S.cfg.numPreguntas, total);
    const tiempoTxt = S.cfg.tiempoMin > 0 ? S.cfg.tiempoMin + " minutos" : "Sin límite";

    document.getElementById("contenido").innerHTML = `
      <div class="inicio-quiz tarjeta anim-entrada">
        <span class="insignia insignia-roja">${Util.escapar(S.tema.unidad)}</span>
        <h1 class="titulo-seccion mt-1">${S.tema.icono} ${Util.escapar(S.tema.titulo)}</h1>
        <p class="subtexto-seccion">${Util.escapar(S.tema.descripcion)}</p>

        <div class="campo">
          <label for="in-nombre">Tu nombre completo *</label>
          <input type="text" id="in-nombre" placeholder="Ej. Juan Pérez García" autocomplete="off">
        </div>
        <div class="campo">
          <label for="in-grupo">Grupo (opcional)</label>
          <input type="text" id="in-grupo" placeholder="Ej. 4°A" autocomplete="off">
        </div>

        <ul class="reglas-lista">
          <li><span class="ic">●</span> Saldrán <strong>${saldran}</strong> preguntas al azar de un banco de ${total}.</li>
          <li><span class="ic">●</span> Tiempo: <strong>${tiempoTxt}</strong>.</li>
          <li><span class="ic">✏️</span> Haz las operaciones en tu <strong>libreta</strong> y escribe el resultado.</li>
          <li><span class="ic">📷</span> Al final, toma <strong>captura</strong> y descarga tu <strong>imagen</strong> para tu maestra.</li>
        </ul>

        <div id="aviso-nombre" class="aviso aviso-amarillo oculto">
          <span class="icono">⚠️</span><span>Escribe tu nombre para empezar.</span>
        </div>

        <button id="btn-empezar" class="btn btn-principal btn-grande btn-bloque mt-1">Empezar quiz ▶</button>
      </div>`;

    document.getElementById("btn-empezar").addEventListener("click", empezar);
    document.getElementById("in-nombre").addEventListener("keydown", function (e) {
      if (e.key === "Enter") empezar();
    });
  }

  /* ============================ EMPEZAR ============================ */
  function empezar() {
    const nombre = document.getElementById("in-nombre").value.trim();
    if (nombre.length < 3) { document.getElementById("aviso-nombre").classList.remove("oculto"); return; }
    S.nombre = nombre;
    S.grupo = document.getElementById("in-grupo").value.trim();

    S.preguntas = Util.tomarAlAzar(S.banco.preguntas, S.cfg.numPreguntas).map(prepararPregunta);
    S.indice = 0;
    S.respuestas = [];
    S.cambiosPestana = 0;
    S.aperturasInspector = 0;
    S.inicio = Date.now();

    activarAntiTrampa();
    if (S.cfg.tiempoMin > 0) iniciarCronometro(S.cfg.tiempoMin * 60);
    pintarPregunta();
  }

  function prepararPregunta(p) {
    const copia = Object.assign({}, p);
    if (p.tipo === "opcion") {
      copia.opcionesRevueltas = Util.revolver(
        p.opciones.map(function (texto, i) { return { texto: texto, esCorrecta: i === p.correcta }; })
      );
    }
    return copia;
  }

  /* ======================= MOSTRAR PREGUNTA ======================= */
  function pintarPregunta() {
    const p = S.preguntas[S.indice];
    const n = S.indice + 1;
    const total = S.preguntas.length;
    const pct = Math.round((S.indice / total) * 100);
    S.comprobada = false;
    S.seleccion = undefined;

    let cuerpo = "";
    if (p.tipo === "opcion") cuerpo = htmlOpciones(p);
    if (p.tipo === "abierta") cuerpo = htmlAbierta(p);
    if (p.tipo === "vf") cuerpo = htmlVF(p);

    const formula = p.formula ? `<div class="pregunta-formula">${Util.escapar(p.formula)}</div>` : "";

    document.getElementById("contenido").innerHTML = `
      <div class="quiz-barra-superior">
        <span class="info-tema">${S.tema.icono} ${Util.escapar(S.tema.titulo)}</span>
        <span id="cronometro" class="quiz-cronometro ${S.cfg.tiempoMin > 0 ? "" : "oculto"}">⏱ <span id="crono-txt">--:--</span></span>
      </div>
      <div class="progreso"><div class="relleno" style="width:${pct}%"></div></div>
      <div class="progreso-texto">Pregunta ${n} de ${total}</div>

      <div class="pregunta-card mt-2 anim-entrada" id="zona-pregunta">
        <div class="pregunta-numero">Pregunta ${n}</div>
        <div class="pregunta-enunciado">${Util.escapar(p.enunciado)}</div>
        ${formula}
        <div class="pregunta-instruccion">${instruccionPorTipo(p.tipo)}</div>
        ${cuerpo}

        ${p.pista ? `<div class="zona-pista">
          <button class="btn-pista" id="btn-pista">💡 Ver pista</button>
          <div class="texto-pista oculto" id="texto-pista">${Util.escapar(p.pista)}</div>
        </div>` : ""}

        <div id="zona-feedback"></div>

        <div class="pregunta-pie">
          <span class="insignia insignia-gris">${etiquetaDificultad(p.dificultad)}</span>
          <button class="btn btn-principal" id="btn-accion" disabled>Comprobar ✓</button>
        </div>
      </div>`;

    conectarEventos(p);
  }

  function instruccionPorTipo(tipo) {
    if (tipo === "opcion") return "Selecciona la respuesta correcta.";
    if (tipo === "abierta") return "Escribe el resultado (ej. x^2+C). No importan espacios ni mayúsculas.";
    if (tipo === "vf") return "Indica si la afirmación es verdadera o falsa.";
    return "";
  }
  function etiquetaDificultad(d) {
    if (d === "facil") return "🟢 Fácil";
    if (d === "dificil") return "🔴 Difícil";
    return "🟡 Media";
  }

  function htmlOpciones(p) {
    const letras = ["A", "B", "C", "D", "E", "F"];
    const items = p.opcionesRevueltas.map(function (op, i) {
      return `<button class="opcion" data-i="${i}" style="animation-delay:${i * 0.05}s">
        <span class="letra">${letras[i]}</span><span class="texto-mat">${Util.escapar(op.texto)}</span></button>`;
    }).join("");
    return `<div class="opciones">${items}</div>`;
  }
  function htmlAbierta() {
    return `<div class="respuesta-abierta">
      <input type="text" id="in-respuesta" placeholder="Escribe aquí tu resultado" autocomplete="off"></div>`;
  }
  function htmlVF() {
    return `<div class="vf-opciones">
      <button class="opcion" data-vf="true"><span class="letra">V</span><span>Verdadero</span></button>
      <button class="opcion" data-vf="false"><span class="letra">F</span><span>Falso</span></button></div>`;
  }

  /* ==================== EVENTOS DE LA PREGUNTA ==================== */
  function conectarEventos(p) {
    const btn = document.getElementById("btn-accion");

    const btnPista = document.getElementById("btn-pista");
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
          S.seleccion = p.tipo === "opcion" ? parseInt(b.dataset.i, 10) : (b.dataset.vf === "true");
          btn.disabled = false;
        });
      });
    }

    if (p.tipo === "abierta") {
      const inp = document.getElementById("in-respuesta");
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
    let correcta = false, dada = "", esperada = "";

    if (p.tipo === "opcion") {
      const op = p.opcionesRevueltas[S.seleccion];
      dada = op.texto; correcta = op.esCorrecta; esperada = p.opciones[p.correcta];
      const letras = document.querySelectorAll(".opcion");
      letras.forEach(function (el, i) {
        el.classList.add("bloqueada");
        const o = p.opcionesRevueltas[i];
        if (o.esCorrecta) { el.classList.add("correcta"); agregarMarca(el, "✓"); }
        else if (i === S.seleccion) { el.classList.add("incorrecta"); agregarMarca(el, "✗"); }
      });
    } else if (p.tipo === "vf") {
      dada = S.seleccion ? "Verdadero" : "Falso";
      correcta = S.seleccion === p.correcta;
      esperada = p.correcta ? "Verdadero" : "Falso";
      document.querySelectorAll(".opcion").forEach(function (el) {
        el.classList.add("bloqueada");
        const val = el.dataset.vf === "true";
        if (val === p.correcta) { el.classList.add("correcta"); agregarMarca(el, "✓"); }
        else if (val === S.seleccion) { el.classList.add("incorrecta"); agregarMarca(el, "✗"); }
      });
    } else if (p.tipo === "abierta") {
      const inp = document.getElementById("in-respuesta");
      dada = inp.value.trim();
      correcta = Util.respuestaCoincide(dada, p.respuestas);
      esperada = Array.isArray(p.respuestas) ? p.respuestas[0] : p.respuestas;
      inp.disabled = true;
      inp.style.borderColor = correcta ? "var(--verde-ok)" : "var(--rojo-error)";
      inp.classList.add(correcta ? "" : "anim-sacudir");
    }

    S.respuestas.push({
      enunciado: p.enunciado + (p.formula ? "  " + p.formula : ""),
      dada: dada || "(sin responder)", esperada: esperada, correcta: correcta, retro: p.retro || ""
    });

    mostrarFeedback(correcta, esperada, p.retro);

    const ultima = S.indice === S.preguntas.length - 1;
    btn.textContent = ultima ? "Ver resultados ✓" : "Siguiente ▶";
    btn.disabled = false;
  }

  function agregarMarca(el, simbolo) {
    const s = document.createElement("span");
    s.className = "marca-res";
    s.textContent = simbolo;
    el.appendChild(s);
  }

  function mostrarFeedback(correcta, esperada, retro) {
    const zona = document.getElementById("zona-feedback");
    zona.innerHTML = `
      <div class="feedback-panel ${correcta ? "ok" : "mal"}">
        <span class="fb-emoji">${correcta ? "🎉" : "❌"}</span>
        <div>
          <div class="fb-titulo">${correcta ? "¡Correcto!" : "Incorrecto"}</div>
          ${!correcta ? `<div class="fb-correcta">Respuesta correcta: <strong>${Util.escapar(esperada)}</strong></div>` : ""}
          ${retro ? `<div class="fb-retro">💡 ${Util.escapar(retro)}</div>` : ""}
        </div>
      </div>`;
  }

  /* ========================== SIGUIENTE ========================== */
  function siguiente() {
    const card = document.getElementById("zona-pregunta");
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

    // Overlay para cuando se abre el inspector
    if (!document.getElementById("overlay-inspector")) {
      const ov = document.createElement("div");
      ov.id = "overlay-inspector";
      ov.className = "overlay-bloqueo oculto";
      ov.innerHTML = '<div class="ico">🔒</div><h2>Cierra el inspector para continuar</h2>' +
        '<p>Se detectaron las herramientas de desarrollador. Esto queda registrado en tu imagen de resultados.</p>';
      document.body.appendChild(ov);
    }
    if (window.Seguridad) {
      S.detenerVigilancia = Seguridad.vigilarInspector(function (abierto) {
        const ov = document.getElementById("overlay-inspector");
        if (abierto) { S.aperturasInspector = (S.aperturasInspector || 0) + 1; ov.classList.remove("oculto"); }
        else if (ov) ov.classList.add("oculto");
      });
    }
  }
  function desactivarAntiTrampa() {
    document.removeEventListener("visibilitychange", onCambioPestana);
    window.removeEventListener("blur", onCambioPestana);
    document.body.classList.remove("sin-seleccion");
    if (S.detenerVigilancia) S.detenerVigilancia();
    const ov = document.getElementById("overlay-inspector");
    if (ov) ov.remove();
  }
  let ultimoCambio = 0;
  function onCambioPestana() {
    if (document.hidden || !document.hasFocus()) {
      const ahora = Date.now();
      if (ahora - ultimoCambio > 800) { S.cambiosPestana = (S.cambiosPestana || 0) + 1; ultimoCambio = ahora; }
    }
  }

  /* ========================== CRONÓMETRO ========================== */
  function iniciarCronometro(segundos) {
    S.restante = segundos;
    actualizarCrono();
    S.cronoId = setInterval(function () {
      S.restante--;
      actualizarCrono();
      if (S.restante <= 0) {
        clearInterval(S.cronoId);
        while (S.respuestas.length < S.preguntas.length) {
          const p = S.preguntas[S.respuestas.length];
          S.respuestas.push({ enunciado: p.enunciado, dada: "(tiempo agotado)", esperada: textoEsperado(p), correcta: false, retro: p.retro || "" });
        }
        terminar();
      }
    }, 1000);
  }
  function actualizarCrono() {
    const el = document.getElementById("crono-txt");
    if (!el) return;
    const m = Math.floor(S.restante / 60), s = S.restante % 60;
    el.textContent = m + ":" + String(s).padStart(2, "0");
    const cont = document.getElementById("cronometro");
    if (cont) cont.classList.toggle("alerta", S.restante <= 30);
  }
  function textoEsperado(p) {
    if (p.tipo === "opcion") return p.opciones[p.correcta];
    if (p.tipo === "vf") return p.correcta ? "Verdadero" : "Falso";
    return Array.isArray(p.respuestas) ? p.respuestas[0] : p.respuestas;
  }

  /* =========================== TERMINAR =========================== */
  function terminar() {
    if (S.cronoId) clearInterval(S.cronoId);
    desactivarAntiTrampa();

    const total = S.respuestas.length;
    const aciertos = S.respuestas.filter(function (r) { return r.correcta; }).length;
    const R = {
      nombre: S.nombre, grupo: S.grupo,
      temaSlug: S.slug, temaTitulo: S.tema.titulo, unidad: S.tema.unidad,
      aciertos: aciertos, total: total, porcentaje: Math.round((aciertos / total) * 100),
      fecha: Util.fechaHoy(), tiempoUsado: Math.round((Date.now() - S.inicio) / 1000),
      cambiosPestana: S.cambiosPestana || 0, aperturasInspector: S.aperturasInspector || 0,
      respuestas: S.respuestas
    };
    R.codigo = Util.codigoVerificacion(R);
    S.resultado = R;
    pintarResultado(R);
  }

  /* ====================== PANTALLA DE RESULTADOS ====================== */
  function pintarResultado(R) {
    const aprobado = R.porcentaje >= S.cfg.aprobado;
    const color = R.porcentaje >= 80 ? "var(--verde-ok)" : R.porcentaje >= S.cfg.aprobado ? "#E0A100" : "var(--rojo-error)";
    const emoji = R.porcentaje >= 80 ? "🏆" : R.porcentaje >= S.cfg.aprobado ? "👍" : "💪";
    const mensaje = R.porcentaje >= 80 ? "¡Excelente trabajo!" : R.porcentaje >= S.cfg.aprobado ? "¡Bien hecho! Puedes mejorar." : "Sigue practicando, ¡tú puedes!";
    const errores = R.respuestas.filter(function (r) { return !r.correcta; });

    let repaso = "";
    if (errores.length) {
      repaso = '<div class="repaso-titulo">📌 Repaso: lo que debes reforzar</div>';
      errores.forEach(function (r) {
        repaso += `<div class="repaso-item">
          <div class="preg">${Util.escapar(r.enunciado)}</div>
          <div class="linea-resp tu-resp">✗ Tu respuesta: ${Util.escapar(r.dada)}</div>
          <div class="linea-resp resp-correcta">✓ Respuesta correcta: ${Util.escapar(r.esperada)}</div>
          ${r.retro ? `<div class="retro">💡 ${Util.escapar(r.retro)}</div>` : ""}
        </div>`;
      });
    } else {
      repaso = '<div class="repaso-item ok"><div class="preg">🎉 ¡Contestaste todo bien! No hay nada que repasar.</div></div>';
    }

    const flags = [];
    if (R.cambiosPestana > 0) flags.push(`salió de la página <strong>${R.cambiosPestana}</strong> vez(ces)`);
    if (R.aperturasInspector > 0) flags.push(`abrió el inspector <strong>${R.aperturasInspector}</strong> vez(ces)`);
    const avisoFlags = flags.length
      ? `<div class="aviso aviso-amarillo mt-2"><span class="icono">⚠️</span><span>Durante el quiz se registró que ${flags.join(" y ")}. Esto aparece en tu imagen.</span></div>` : "";

    document.getElementById("contenido").innerHTML = `
      <div class="tarjeta anim-entrada">
        <div class="resultado-cabecera">
          <div class="resultado-emoji">${emoji}</div>
          <div class="resultado-titulo">${mensaje}</div>
          <span class="insignia ${aprobado ? "insignia-verde" : "insignia-roja"} mt-1">${aprobado ? "APROBADO" : "A REFORZAR"}</span>
          <div class="resultado-anillo" style="background:${color}">
            <div class="porcentaje" id="pct-anim">0%</div>
            <div class="fraccion">${R.aciertos} de ${R.total}</div>
          </div>
          <div class="resultado-stats">
            <div class="stat-chip"><div class="num" style="color:var(--verde-ok)">${R.aciertos}</div><div class="et">Correctas</div></div>
            <div class="stat-chip"><div class="num" style="color:var(--rojo-error)">${R.total - R.aciertos}</div><div class="et">Incorrectas</div></div>
            <div class="stat-chip"><div class="num">${formatoTiempo(R.tiempoUsado)}</div><div class="et">Tiempo</div></div>
          </div>
          <div class="codigo-verificacion">
            <div class="et">Código de verificación</div><div class="cod">${R.codigo}</div>
          </div>
          <p style="font-size:.8rem;color:var(--gris-texto)">${Util.escapar(R.nombre)}${R.grupo ? " · " + Util.escapar(R.grupo) : ""} · ${R.fecha}</p>
        </div>
        ${avisoFlags}

        <div class="aviso aviso-info mt-2">
          <span class="icono">📷</span>
          <span><strong>Para tu maestra:</strong> toma <strong>captura de esta pantalla</strong> y además
          <strong>descarga la imagen</strong> de abajo. Envíale las dos.</span>
        </div>

        <div class="centrado mt-2">
          <button id="btn-descargar" class="btn btn-principal btn-grande">⬇️ Descargar imagen de resultados</button>
        </div>
        <canvas id="lienzo-resultado" class="oculto"></canvas>

        ${repaso}

        <div class="centrado mt-3">
          <a class="btn btn-secundario" href="../index.html">← Otros temas</a>
          <a class="btn btn-secundario" href="quiz.html#tema=${S.slug}">🔁 Repetir</a>
          <a class="btn btn-secundario" href="guias.html#tema=${S.slug}">📚 Ver guía</a>
        </div>
      </div>`;

    // Animaciones: contador + confeti + imagen lista
    Util.contarHasta(document.getElementById("pct-anim"), R.porcentaje, 900, "%");
    if (R.porcentaje >= 80 && window.Util.confeti) Util.confeti(2600);

    document.getElementById("btn-descargar").addEventListener("click", function () { ImagenResultado.generar(R); });
    ImagenResultado.dibujar(R, document.getElementById("lienzo-resultado"));
  }

  function formatoTiempo(seg) {
    const m = Math.floor(seg / 60), s = seg % 60;
    return m + "m " + String(s).padStart(2, "0") + "s";
  }

  return { iniciar: iniciar };
})();
