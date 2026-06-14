/* ===================================================================
   SEGURIDAD / ANTI-TRAMPA
   Pone barreras para que sea difícil inspeccionar o copiar:
   - Bloquea clic derecho y atajos del inspector (F12, Ctrl+U, etc.)
   - Detecta si abren las herramientas de desarrollador (inspector)

   ⚠️ IMPORTANTE (la verdad): NINGUNA página web puede impedir el
   inspector al 100% (el navegador siempre puede ver lo que carga).
   Esto DETIENE a la gran mayoría de los alumnos, no a un experto.
   La defensa más fuerte sigue siendo: preguntas al azar de un banco
   grande + trabajo en libreta + el registro de salidas en la imagen.
   =================================================================== */

window.Seguridad = (function () {

  /* --- Bloquear clic derecho y atajos comunes --- */
  function bloquearAtajos() {
    // Clic derecho (menú contextual → "Inspeccionar")
    document.addEventListener("contextmenu", function (e) { e.preventDefault(); });

    document.addEventListener("keydown", function (e) {
      const k = e.key ? e.key.toUpperCase() : "";
      // F12
      if (e.key === "F12") { e.preventDefault(); return false; }
      // Ctrl/Cmd + Shift + I / J / C  (inspector, consola, selector)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && ["I", "J", "C"].includes(k)) {
        e.preventDefault(); return false;
      }
      // Ctrl/Cmd + U (ver código fuente)  /  Ctrl/Cmd + S (guardar página)
      if ((e.ctrlKey || e.metaKey) && ["U", "S"].includes(k)) {
        e.preventDefault(); return false;
      }
    });
  }

  /* --- Detectar si el inspector está abierto ---
     Truco: cuando se abre el inspector, la ventana "exterior" se hace
     más grande que el área visible. Si la diferencia es grande, casi
     seguro hay un inspector acoplado. 'callback(abierto)' avisa cuando
     cambia el estado. Devuelve una función para detener la vigilancia. */
  function vigilarInspector(callback) {
    let abiertoAntes = false;
    // Umbral alto para NO molestar a alumnos con barras de marcadores o
    // ventanas chicas. El inspector acoplado suele agregar 250–400 px.
    const UMBRAL = 220;

    function revisar() {
      const dw = window.outerWidth - window.innerWidth;
      const dh = window.outerHeight - window.innerHeight;
      const abierto = dw > UMBRAL || dh > UMBRAL;
      if (abierto !== abiertoAntes) {
        abiertoAntes = abierto;
        callback(abierto);
      }
    }
    revisar();
    const id = setInterval(revisar, 900);
    return function detener() { clearInterval(id); };
  }

  return { bloquearAtajos: bloquearAtajos, vigilarInspector: vigilarInspector };
})();
