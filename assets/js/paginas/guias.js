/* ===================================================================
   PÁGINA DE GUÍAS
   =================================================================== */

(function () {
  if (window.Seguridad) Seguridad.bloquearAtajos();
  var cont      = document.getElementById("lista-guias");
  var temaParam = Util.parametroURL("tema");

  var svgLupa = window.ICONOS ? ICONOS.lupa : '';
  var svgLapiz = window.ICONOS ? ICONOS.lapiz : '';
  var svgLibro = window.ICONOS
    ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>'
    : '';

  function iconoTema(t) {
    var svg = window.ICONOS && window.ICONOS.temas ? (window.ICONOS.temas[t.slug] || "") : "";
    return svg;
  }

  function bloqueVideos(t) {
    var videosValidos = (t.videos || []).filter(function (v) { return v.id; });
    if (videosValidos.length) {
      return videosValidos.map(function (v) {
        return '<div class="video-embed">' +
          '<iframe src="https://www.youtube.com/embed/' + v.id + '"' +
          ' title="' + Util.escapar(v.titulo || t.titulo) + '"' +
          ' loading="lazy" allowfullscreen></iframe>' +
          '</div>';
      }).join("");
    }

    /* Con canales específicos del tema */
    if (t.videoCanales && t.videoCanales.length) {
      var bts = t.videoCanales.map(function (c) {
        return '<a class="btn btn-secundario btn-bloque" target="_blank" rel="noopener" href="' + c.url + '">' +
          svgLupa + ' Buscar en ' + Util.escapar(c.nombre) +
          '</a>';
      }).join("");
      return '<div class="canales-tema">' + bts + '</div>';
    }

    /* Sin canales específicos: botón genérico */
    return '<a class="btn btn-secundario btn-bloque" target="_blank" rel="noopener"' +
      ' href="https://www.youtube.com/results?search_query=' + encodeURIComponent(t.videoBusqueda) + '">' +
      svgLupa + ' Buscar videos de este tema en YouTube' +
      '</a>' +
      '<p class="nota-video">La maestra puede pegar un video fijo aquí.</p>';
  }

  function tarjetaGuia(t) {
    var resaltar = t.slug === temaParam ? " resaltado" : "";
    return '<div class="guia-card' + resaltar + '" id="guia-' + t.slug + '">' +
      '<div class="guia-cabecera">' +
        '<span class="icono-tema">' + iconoTema(t) + '</span>' +
        '<div>' +
          '<div class="nombre-tema">' + Util.escapar(t.titulo) + '</div>' +
          '<div class="desc-tema">' + Util.escapar(t.descripcion) + '</div>' +
        '</div>' +
      '</div>' +
      bloqueVideos(t) +
      '<a class="btn btn-principal btn-bloque mt-1" href="quiz.html#tema=' + t.slug + '">' +
        svgLapiz + ' Hacer el quiz de este tema' +
      '</a>' +
    '</div>';
  }

  var html = "";
  window.Temas.unidades().forEach(function (unidad) {
    html += '<div class="titulo-unidad">' + Util.escapar(unidad) + '<span class="linea"></span></div>';
    html += '<div class="grid-guias">' +
      window.Temas.porUnidad(unidad).map(tarjetaGuia).join("") + '</div>';
  });
  cont.innerHTML = html;

  if (temaParam) {
    var el = document.getElementById("guia-" + temaParam);
    if (el) setTimeout(function () { el.scrollIntoView({ behavior: "smooth", block: "center" }); }, 200);
  }
})();
