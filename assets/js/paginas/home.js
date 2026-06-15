/* ===================================================================
   PÁGINA DE INICIO
   =================================================================== */

(function () {
  if (window.Seguridad) Seguridad.bloquearAtajos();
  var cont     = document.getElementById("lista-temas");
  var buscador = document.getElementById("buscador");

  function icono(t) {
    var svg = window.ICONOS && window.ICONOS.temas ? (window.ICONOS.temas[t.slug] || "") : "";
    return '<div class="icono-tema">' + svg + '</div>';
  }

  function tarjeta(t) {
    return '<a class="tarjeta-tema" href="pages/quiz.html#tema=' + t.slug + '"' +
           ' data-nombre="' + Util.normalizar(t.titulo + " " + t.descripcion) + '">' +
      icono(t) +
      '<div class="nombre-tema">' + Util.escapar(t.titulo) + '</div>' +
      '<div class="desc-tema">' + Util.escapar(t.descripcion) + '</div>' +
      '<div class="pie-tema">' +
        '<span>Practicar</span>' +
        '<span class="num-preguntas">Quiz</span>' +
      '</div>' +
    '</a>';
  }

  function pintar(filtro) {
    var f = Util.normalizar(filtro || "");
    var html = "";
    window.Temas.unidades().forEach(function (unidad) {
      var temas = window.Temas.porUnidad(unidad).filter(function (t) {
        return !f || Util.normalizar(t.titulo + " " + t.descripcion).indexOf(f) !== -1;
      });
      if (!temas.length) return;
      var esIntegral = unidad === "Cálculo integral";
      var estrella = esIntegral && window.ICONOS
        ? '<span class="estrella-unidad">' + ICONOS.estrellaUnidad + '</span> '
        : '';
      var etiqueta = esIntegral
        ? '<span class="insignia insignia-roja" style="margin-left:8px">Tema actual</span>'
        : '';
      html += '<div class="titulo-unidad">' + estrella + Util.escapar(unidad) + etiqueta + '<span class="linea"></span></div>';
      html += '<div class="grid-temas">' + temas.map(tarjeta).join("") + '</div>';
    });
    cont.innerHTML = html ||
      '<p class="centrado" style="color:var(--gris-texto)">No se encontraron temas con ese nombre.</p>';
  }

  pintar("");
  if (buscador) buscador.addEventListener("input", function () { pintar(buscador.value); });
})();
