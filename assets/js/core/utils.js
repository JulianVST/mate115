/* ===================================================================
   UTILIDADES GENERALES
   Funciones pequeñas que usa todo el sitio.
   =================================================================== */

window.Util = (function () {

  /* --- Revolver un arreglo (algoritmo Fisher-Yates) ---
     Sirve para que las preguntas y las opciones salgan en orden
     distinto cada vez = anti-trampa. */
  function revolver(arreglo) {
    const a = arreglo.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  /* --- Tomar N elementos al azar de un arreglo --- */
  function tomarAlAzar(arreglo, n) {
    return revolver(arreglo).slice(0, Math.min(n, arreglo.length));
  }

  /* --- Normalizar texto de una respuesta abierta ---
     Quita espacios, acentos, mayúsculas y signos comunes para que
     "X^2 + C", "x^2+c" y "x²+c" cuenten como iguales. */
  function normalizar(texto) {
    if (texto === null || texto === undefined) return "";
    return String(texto)
      .toLowerCase()
      .normalize("NFD").replace(/[̀-ͯ]/g, "") // quita acentos
      .replace(/²/g, "^2").replace(/³/g, "^3")
      .replace(/\s+/g, "")        // quita TODOS los espacios
      .replace(/\*/g, "")         // quita signos de multiplicar
      .replace(/·/g, "")
      .replace(/,/g, ".")          // 3,5 = 3.5
      .replace(/\+c$/i, "+c");     // deja la constante uniforme
  }

  /* --- ¿La respuesta del alumno coincide con alguna correcta? ---
     'correctas' puede ser un texto o un arreglo de textos aceptados. */
  function respuestaCoincide(escrita, correctas) {
    const lista = Array.isArray(correctas) ? correctas : [correctas];
    const n = normalizar(escrita);
    return lista.some(function (c) { return normalizar(c) === n; });
  }

  /* --- Código de verificación anti-trampa ---
     Genera un código corto a partir de los datos del resultado.
     Si el alumno edita el puntaje en la imagen, el código ya no
     corresponderá y la maestra lo detecta en la página de la maestra. */
  function codigoVerificacion(datos) {
    const base = [
      normalizar(datos.nombre),
      datos.temaSlug,
      datos.aciertos,
      datos.total,
      datos.fecha
    ].join("|");
    // Hash simple tipo djb2
    let hash = 5381;
    for (let i = 0; i < base.length; i++) {
      hash = ((hash << 5) + hash + base.charCodeAt(i)) >>> 0;
    }
    // Convertir a base 36 y dar formato XXXX-XXXX
    let cod = hash.toString(36).toUpperCase().padStart(8, "0").slice(0, 8);
    return cod.slice(0, 4) + "-" + cod.slice(4, 8);
  }

  /* --- Escapar HTML para evitar que se rompa la página --- */
  function escapar(texto) {
    const div = document.createElement("div");
    div.textContent = texto == null ? "" : String(texto);
    return div.innerHTML;
  }

  /* --- Fecha legible en español --- */
  function fechaHoy() {
    const d = new Date();
    const dd = String(d.getDate()).padStart(2, "0");
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const yyyy = d.getFullYear();
    const hh = String(d.getHours()).padStart(2, "0");
    const min = String(d.getMinutes()).padStart(2, "0");
    return `${dd}/${mm}/${yyyy} ${hh}:${min}`;
  }

  /* --- Leer parámetro del enlace ---
     Primero busca en el "hash" (#tema=...) y luego en la query (?tema=...).
     Se usa el hash porque NUNCA se pierde, sin importar el servidor. */
  function parametroURL(nombre) {
    const hash = (window.location.hash || "").replace(/^#/, "");
    const enHash = new URLSearchParams(hash).get(nombre);
    if (enHash) return enHash;
    return new URLSearchParams(window.location.search).get(nombre);
  }

  /* --- Animar un número de 0 hasta 'fin' dentro de un elemento --- */
  function contarHasta(elemento, fin, ms, sufijo) {
    sufijo = sufijo || "";
    const inicio = performance.now();
    function paso(t) {
      const p = Math.min((t - inicio) / ms, 1);
      const valor = Math.round(p * fin);
      elemento.textContent = valor + sufijo;
      if (p < 1) requestAnimationFrame(paso);
    }
    requestAnimationFrame(paso);
  }

  /* --- Confeti de celebración (sin librerías) --- */
  function confeti(duracionMs) {
    duracionMs = duracionMs || 2500;
    const lienzo = document.createElement("canvas");
    lienzo.id = "capa-confeti";
    document.body.appendChild(lienzo);
    const ctx = lienzo.getContext("2d");
    function tamano() { lienzo.width = innerWidth; lienzo.height = innerHeight; }
    tamano(); window.addEventListener("resize", tamano);

    const colores = ["#B3121A", "#E23A42", "#FFC400", "#1E9E5A", "#2563C9", "#FFFFFF"];
    const piezas = [];
    for (let i = 0; i < 140; i++) {
      piezas.push({
        x: Math.random() * lienzo.width,
        y: Math.random() * -lienzo.height,
        r: 5 + Math.random() * 7,
        c: colores[Math.floor(Math.random() * colores.length)],
        vy: 2 + Math.random() * 4,
        vx: -2 + Math.random() * 4,
        giro: Math.random() * 6.28,
        vgiro: -0.2 + Math.random() * 0.4
      });
    }
    const fin = performance.now() + duracionMs;
    function dibujar() {
      ctx.clearRect(0, 0, lienzo.width, lienzo.height);
      piezas.forEach(function (p) {
        p.y += p.vy; p.x += p.vx; p.giro += p.vgiro;
        if (p.y > lienzo.height + 20) { p.y = -10; p.x = Math.random() * lienzo.width; }
        ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.giro);
        ctx.fillStyle = p.c; ctx.fillRect(-p.r / 2, -p.r / 2, p.r, p.r * 0.6);
        ctx.restore();
      });
      if (performance.now() < fin) requestAnimationFrame(dibujar);
      else { window.removeEventListener("resize", tamano); lienzo.remove(); }
    }
    requestAnimationFrame(dibujar);
  }

  return {
    revolver, tomarAlAzar, normalizar, respuestaCoincide,
    codigoVerificacion, escapar, fechaHoy, parametroURL,
    contarHasta, confeti
  };
})();
