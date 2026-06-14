/* ===================================================================
   PÁGINA DE INICIO
   Dibuja la cuadrícula de temas agrupados por unidad, con buscador.
   =================================================================== */

(function () {
  if (window.Seguridad) Seguridad.bloquearAtajos();
  const cont = document.getElementById("lista-temas");
  const buscador = document.getElementById("buscador");

  function tarjeta(t) {
    return `<a class="tarjeta-tema" href="pages/quiz.html#tema=${t.slug}"
              data-nombre="${Util.normalizar(t.titulo + " " + t.descripcion)}">
      <div class="icono-tema">${t.icono}</div>
      <div class="nombre-tema">${Util.escapar(t.titulo)}</div>
      <div class="desc-tema">${Util.escapar(t.descripcion)}</div>
      <div class="pie-tema">
        <span>▶ Practicar</span>
        <span class="num-preguntas">Quiz</span>
      </div>
    </a>`;
  }

  function pintar(filtro) {
    const f = Util.normalizar(filtro || "");
    let html = "";
    window.Temas.unidades().forEach(function (unidad) {
      const temas = window.Temas.porUnidad(unidad).filter(function (t) {
        return !f || Util.normalizar(t.titulo + " " + t.descripcion).indexOf(f) !== -1;
      });
      if (!temas.length) return;
      const esIntegral = unidad === "Cálculo integral";
      const estrella = esIntegral ? '⭐ ' : '';
      const etiqueta = esIntegral ? '<span class="insignia insignia-roja" style="margin-left:8px">Tema actual</span>' : '';
      html += `<div class="titulo-unidad">${estrella}${Util.escapar(unidad)}${etiqueta}<span class="linea"></span></div>`;
      html += `<div class="grid-temas">${temas.map(tarjeta).join("")}</div>`;
    });
    cont.innerHTML = html || '<p class="centrado" style="color:var(--gris-texto)">No se encontraron temas con ese nombre.</p>';
  }

  pintar("");
  if (buscador) buscador.addEventListener("input", function () { pintar(buscador.value); });
})();
