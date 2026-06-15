/* ===================================================================
   ICONOS SVG — reemplaza todos los emojis de la aplicación.
   Uso: ICONOS.lupa  →  devuelve string con SVG inline.
   =================================================================== */
window.ICONOS = (function () {

  /* ---- Atributos comunes ---- */
  function ui(body, s) {
    s = s || 18;
    return '<svg width="' + s + '" height="' + s + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + body + '</svg>';
  }
  function tema(body) {
    return '<svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' + body + '</svg>';
  }

  /* ================================================================
     ICONOS DE INTERFAZ
     ================================================================ */
  var libro    = ui('<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>');
  var lupa     = ui('<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>', 18);
  var lapiz    = ui('<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>', 16);
  var camara   = ui('<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>', 16);
  var reloj    = ui('<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>', 16);
  var descarga = ui('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>', 16);
  var repetir  = ui('<polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3"/>', 16);
  var aviso    = ui('<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>', 16);
  var foco     = ui('<line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="22" x2="14" y2="22"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/>', 16);
  var pin      = ui('<line x1="12" y1="17" x2="12" y2="22"/><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V17z"/>', 16);
  var cerradura = '<svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>';

  /* Resultado */
  var trofeo   = '<svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#B3121A" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2"/><rect x="6" y="18" width="12" height="4"/><path d="M6 9a6 6 0 0 0 12 0"/></svg>';
  var pulgar   = '<svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#E0A100" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"/><path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>';
  var estrella = '<svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#D23B3B" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';

  /* Feedback inmediato */
  var checkOk  = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>';
  var xMal     = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>';

  /* ================================================================
     ICONOS DE TEMAS (van dentro del div .icono-tema 46x46)
     ================================================================ */

  /* Integral ∫ como path S-curve */
  var svgInt = '<path d="M16 4C13.5 4 12.5 5.5 13 9C13.5 12 13.5 16 13 19C12.5 22 11 23.5 9 23.5" stroke="#B3121A" stroke-width="2.5" stroke-linecap="round"/>';

  var intPartes = tema(
    svgInt +
    '<text x="17" y="20" font-size="9" font-family="Arial,sans-serif" font-weight="700" fill="#B3121A">uv</text>'
  );

  var sustitucion = tema(
    '<path d="M6 14a8 8 0 1 0 16 0 8 8 0 0 0-16 0" stroke="#B3121A" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="5 3"/>' +
    '<polyline points="20 7 23 11 19 11" stroke="#B3121A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>'
  );

  var intDirecta = tema(
    svgInt +
    '<text x="15" y="22" font-size="9" font-family="serif" fill="#B3121A" font-style="italic">xⁿ</text>'
  );

  var constanteC = tema(
    '<text x="3" y="22" font-size="18" font-family="Arial,sans-serif" font-weight="700" fill="#B3121A">+C</text>'
  );

  var tfc = tema(
    '<line x1="4" y1="5" x2="4" y2="23" stroke="#B3121A" stroke-width="2.5" stroke-linecap="round"/>' +
    '<line x1="24" y1="5" x2="24" y2="23" stroke="#B3121A" stroke-width="2.5" stroke-linecap="round"/>' +
    '<text x="7" y="19" font-size="9" font-family="Arial,sans-serif" fill="#B3121A" font-weight="700">b-a</text>'
  );

  var areaCurva = tema(
    '<path d="M2 24 Q7 6 14 14 Q20 22 26 8" stroke="#B3121A" stroke-width="2" fill="none" stroke-linecap="round"/>' +
    '<path d="M2 24 Q7 6 14 14 Q20 22 26 8 L26 24 Z" fill="#B3121A" opacity="0.2"/>' +
    '<line x1="2" y1="24" x2="26" y2="24" stroke="#B3121A" stroke-width="1.5"/>'
  );

  var maxMin = tema(
    '<path d="M2 20 Q5 8 9 15 Q13 22 17 10 Q19 5 24 12" stroke="#B3121A" stroke-width="2" fill="none" stroke-linecap="round"/>' +
    '<circle cx="9" cy="15" r="2.5" fill="#B3121A"/>' +
    '<circle cx="17" cy="10" r="2.5" fill="#B3121A"/>'
  );

  var aplicacion = tema(
    '<line x1="14" y1="24" x2="14" y2="4" stroke="#B3121A" stroke-width="2.5" stroke-linecap="round"/>' +
    '<polyline points="9 9 14 4 19 9" stroke="#B3121A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>' +
    '<line x1="8" y1="18" x2="20" y2="18" stroke="#B3121A" stroke-width="1.5" stroke-linecap="round"/>'
  );

  var historia = tema(
    '<rect x="4" y="4" width="20" height="22" rx="2" stroke="#B3121A" stroke-width="2"/>' +
    '<line x1="8" y1="10" x2="20" y2="10" stroke="#B3121A" stroke-width="1.5" stroke-linecap="round"/>' +
    '<line x1="8" y1="14" x2="20" y2="14" stroke="#B3121A" stroke-width="1.5" stroke-linecap="round"/>' +
    '<line x1="8" y1="18" x2="16" y2="18" stroke="#B3121A" stroke-width="1.5" stroke-linecap="round"/>'
  );

  var factorizacion = tema(
    '<text x="2" y="22" font-size="19" font-family="Arial,sans-serif" fill="#B3121A" font-weight="700">(x)</text>' +
    '<text x="15" y="12" font-size="11" font-family="Arial,sans-serif" fill="#B3121A" font-weight="700">·</text>'
  );

  var prodNot1 = tema(
    '<text x="2" y="20" font-size="11" font-family="Arial,sans-serif" fill="#B3121A" font-weight="700">(a+b)</text>' +
    '<text x="19" y="13" font-size="10" font-family="Arial,sans-serif" fill="#B3121A" font-weight="700">2</text>'
  );

  var prodNot2 = tema(
    '<text x="2" y="20" font-size="11" font-family="Arial,sans-serif" fill="#B3121A" font-weight="700">(a+b)</text>' +
    '<text x="19" y="13" font-size="10" font-family="Arial,sans-serif" fill="#B3121A" font-weight="700">3</text>'
  );

  var reduccion = tema(
    '<text x="3" y="14" font-size="9" font-family="Arial,sans-serif" fill="#B3121A">3x+x</text>' +
    '<line x1="3" y1="17" x2="25" y2="17" stroke="#B3121A" stroke-width="1.5"/>' +
    '<text x="9" y="26" font-size="11" font-family="Arial,sans-serif" fill="#B3121A" font-weight="700">4x</text>'
  );

  var valorNum = tema(
    '<text x="2" y="13" font-size="9" font-family="Arial,sans-serif" fill="#B3121A">x=3</text>' +
    '<polyline points="4 17 14 22 24 17" stroke="#B3121A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' +
    '<text x="10" y="28" font-size="9" font-family="Arial,sans-serif" fill="#B3121A">= 9</text>'
  );

  var signosAgrup = tema(
    '<text x="0" y="22" font-size="22" font-family="Arial,sans-serif" fill="#B3121A" font-weight="300">[()]</text>'
  );

  var simplificacion = tema(
    '<text x="2" y="12" font-size="8" font-family="Arial,sans-serif" fill="#B3121A">4x+2x</text>' +
    '<polyline points="14 16 14 22" stroke="#B3121A" stroke-width="2" stroke-linecap="round"/>' +
    '<polyline points="11 20 14 24 17 20" stroke="#B3121A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' +
    '<text x="9" y="28" font-size="10" font-family="Arial,sans-serif" fill="#B3121A" font-weight="700">6x</text>'
  );

  /* Estrella para unidad Cálculo integral */
  var estrellaUnidad = '<svg width="16" height="16" viewBox="0 0 24 24" fill="#B3121A" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';

  return {
    libro, lupa, lapiz, camara, reloj, descarga, repetir,
    aviso, foco, pin, cerradura, trofeo, pulgar, estrella,
    checkOk, xMal, estrellaUnidad,
    temas: {
      "integral-por-partes":                    intPartes,
      "integracion-por-sustitucion":             sustitucion,
      "integracion-directa":                     intDirecta,
      "constante-de-integracion":                constanteC,
      "teorema-fundamental-calculo":             tfc,
      "area-bajo-la-curva":                      areaCurva,
      "maximos-y-minimos":                       maxMin,
      "aplicacion-calculo-integral-tfc":         aplicacion,
      "historia-calculo-integral":               historia,
      "factorizacion":                           factorizacion,
      "productos-notables-1":                    prodNot1,
      "productos-notables-2":                    prodNot2,
      "reduccion-terminos-semejantes":           reduccion,
      "valor-numerico":                          valorNum,
      "signos-de-agrupacion":                    signosAgrup,
      "simplificacion-expresiones-algebraicas":  simplificacion
    }
  };
})();
