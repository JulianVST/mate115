/* ===================================================================
   PÁGINA DE GUÍAS
   Muestra, por cada tema, una tarjeta con video de YouTube (si tiene
   ID) o un botón para buscar videos del tema, más el enlace al quiz.
   =================================================================== */

(function () {
  if (window.Seguridad) Seguridad.bloquearAtajos();
  const cont = document.getElementById("lista-guias");
  const temaParam = Util.parametroURL("tema"); // para resaltar un tema

  function enlaceBusqueda(consulta) {
    return "https://www.youtube.com/results?search_query=" + encodeURIComponent(consulta);
  }

  function bloqueVideos(t) {
    const videosValidos = (t.videos || []).filter(function (v) { return v.id; });
    if (videosValidos.length) {
      return videosValidos.map(function (v) {
        return `<div class="video-embed">
          <iframe src="https://www.youtube.com/embed/${v.id}"
            title="${Util.escapar(v.titulo || t.titulo)}"
            loading="lazy" allowfullscreen></iframe>
        </div>`;
      }).join("");
    }
    // Sin video cargado: botón de búsqueda
    return `<a class="btn btn-secundario btn-bloque" target="_blank" rel="noopener"
              href="${enlaceBusqueda(t.videoBusqueda)}">
              🔍 Buscar videos de este tema en YouTube
            </a>
            <p class="nota-video">La maestra puede pegar un video fijo aquí
            (ver <a href="../docs/COMO-AGREGAR-PREGUNTAS.md">documentación</a>).</p>`;
  }

  function tarjetaGuia(t) {
    const resaltar = t.slug === temaParam ? " resaltado" : "";
    return `<div class="guia-card${resaltar}" id="guia-${t.slug}">
      <div class="guia-cabecera">
        <span class="icono-tema">${t.icono}</span>
        <div>
          <div class="nombre-tema">${Util.escapar(t.titulo)}</div>
          <div class="desc-tema">${Util.escapar(t.descripcion)}</div>
        </div>
      </div>
      ${bloqueVideos(t)}
      <a class="btn btn-principal btn-bloque mt-1" href="quiz.html#tema=${t.slug}">
        ✏️ Hacer el quiz de este tema
      </a>
    </div>`;
  }

  let html = "";
  window.Temas.unidades().forEach(function (unidad) {
    html += `<div class="titulo-unidad">${Util.escapar(unidad)}<span class="linea"></span></div>`;
    html += `<div class="grid-guias">` +
      window.Temas.porUnidad(unidad).map(tarjetaGuia).join("") + `</div>`;
  });
  cont.innerHTML = html;

  // Si llegó con ?tema=, desplazarse a esa guía
  if (temaParam) {
    const el = document.getElementById("guia-" + temaParam);
    if (el) setTimeout(function () { el.scrollIntoView({ behavior: "smooth", block: "center" }); }, 200);
  }
})();
