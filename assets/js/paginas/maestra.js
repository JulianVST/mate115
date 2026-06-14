/* ===================================================================
   PANEL DE LA MAESTRA
   1) Verificador de códigos: confirma que una imagen de resultados
      NO fue editada por el alumno.
   2) Lista de temas con enlaces directos a cada quiz y guía.
   =================================================================== */

(function () {
  if (window.Seguridad) Seguridad.bloquearAtajos();

  /* ---------- 1) Llenar el menú de temas del verificador ---------- */
  const selTema = document.getElementById("v-tema");
  window.TEMAS.forEach(function (t) {
    const op = document.createElement("option");
    op.value = t.slug;
    op.textContent = t.titulo + " (" + t.unidad + ")";
    selTema.appendChild(op);
  });

  /* ---------- 2) Verificar el código ---------- */
  document.getElementById("form-verificar").addEventListener("submit", function (e) {
    e.preventDefault();
    const datos = {
      nombre: document.getElementById("v-nombre").value.trim(),
      temaSlug: selTema.value,
      aciertos: parseInt(document.getElementById("v-aciertos").value, 10),
      total: parseInt(document.getElementById("v-total").value, 10),
      fecha: document.getElementById("v-fecha").value.trim()
    };
    const codigoEsperado = Util.codigoVerificacion(datos);
    const codigoIngresado = document.getElementById("v-codigo").value
      .trim().toUpperCase().replace(/\s/g, "");
    const codigoNorm = codigoEsperado.replace("-", "");
    const ingNorm = codigoIngresado.replace("-", "");

    const caja = document.getElementById("v-resultado");
    if (ingNorm === codigoNorm) {
      caja.className = "aviso aviso-verde-fuerte";
      caja.innerHTML = '<span class="icono">✅</span><span><strong>VÁLIDO.</strong> ' +
        'El código coincide. La imagen no fue alterada: el alumno obtuvo <strong>' +
        datos.aciertos + ' de ' + datos.total + '</strong>.</span>';
    } else {
      caja.className = "aviso aviso-rojo-fuerte";
      caja.innerHTML = '<span class="icono">❌</span><span><strong>NO COINCIDE.</strong> ' +
        'Revisa que los datos estén EXACTAMENTE como en la imagen (nombre, fecha y hora). ' +
        'Si están bien y aún no coincide, la imagen pudo ser editada.<br>' +
        '<small>Código esperado para estos datos: <code>' + codigoEsperado + '</code></small></span>';
    }
    caja.classList.remove("oculto");
  });

  /* ---------- 3) Tabla de temas con enlaces ---------- */
  const tabla = document.getElementById("tabla-temas");
  let filas = "";
  window.Temas.unidades().forEach(function (unidad) {
    filas += `<tr class="fila-unidad"><td colspan="3">${unidad}</td></tr>`;
    window.Temas.porUnidad(unidad).forEach(function (t) {
      filas += `<tr>
        <td>${t.icono} ${Util.escapar(t.titulo)}</td>
        <td><a class="btn btn-secundario btn-mini" href="quiz.html#tema=${t.slug}" target="_blank">Quiz</a></td>
        <td><a class="btn btn-secundario btn-mini" href="guias.html#tema=${t.slug}" target="_blank">Guía</a></td>
      </tr>`;
    });
  });
  tabla.innerHTML = filas;
})();
