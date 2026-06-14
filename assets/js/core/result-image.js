/* ===================================================================
   GENERADOR DE LA IMAGEN DE RESULTADOS
   Dibuja una "boleta" compacta con Canvas (sin librerías ni logo).
   Los iconos (✓ ✗ aviso) se DIBUJAN como vectores, no son emojis,
   para que se vean nítidos e iguales en cualquier dispositivo.
   =================================================================== */

window.ImagenResultado = (function () {

  const ANCHO = 880;
  const MARGEN = 44;
  const COL = {
    rojo: "#B3121A", rojoOsc: "#7E0C12", blanco: "#FFFFFF",
    gris: "#5A616B", grisClaro: "#E2E5EA", negro: "#1C2025",
    verde: "#1E9E5A", rojoErr: "#D23B3B", rosa: "#FDE9EA",
    ambar: "#8A6300", ambarBg: "#FFF6E0", fondoItem: "#FAFAFB"
  };

  /* --------- helpers de dibujo --------- */
  function rredondo(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }
  function partir(ctx, texto, maxW) {
    const palabras = String(texto).split(" ");
    const lineas = []; let actual = "";
    palabras.forEach(function (p) {
      const prueba = actual ? actual + " " + p : p;
      if (ctx.measureText(prueba).width > maxW && actual) { lineas.push(actual); actual = p; }
      else actual = prueba;
    });
    if (actual) lineas.push(actual);
    return lineas;
  }

  /* --------- ICONOS VECTORIALES (no emojis) --------- */
  function icoCheck(ctx, cx, cy, s, color) {
    ctx.save();
    ctx.strokeStyle = color; ctx.lineWidth = s * 0.18; ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.beginPath();
    ctx.moveTo(cx - s * 0.36, cy + s * 0.02);
    ctx.lineTo(cx - s * 0.08, cy + s * 0.30);
    ctx.lineTo(cx + s * 0.40, cy - s * 0.32);
    ctx.stroke(); ctx.restore();
  }
  function icoCross(ctx, cx, cy, s, color) {
    ctx.save();
    ctx.strokeStyle = color; ctx.lineWidth = s * 0.18; ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(cx - s * 0.32, cy - s * 0.32); ctx.lineTo(cx + s * 0.32, cy + s * 0.32);
    ctx.moveTo(cx + s * 0.32, cy - s * 0.32); ctx.lineTo(cx - s * 0.32, cy + s * 0.32);
    ctx.stroke(); ctx.restore();
  }
  function icoAviso(ctx, cx, cy, s, color) {
    ctx.save();
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(cx, cy - s * 0.5);
    ctx.lineTo(cx + s * 0.5, cy + s * 0.42);
    ctx.lineTo(cx - s * 0.5, cy + s * 0.42);
    ctx.closePath(); ctx.fill();
    ctx.fillStyle = "#fff";
    ctx.font = "bold " + (s * 0.5) + "px Segoe UI, sans-serif";
    ctx.textAlign = "center"; ctx.textBaseline = "middle";
    ctx.fillText("!", cx, cy + s * 0.1);
    ctx.textAlign = "left"; ctx.textBaseline = "alphabetic";
    ctx.restore();
  }
  function icoBombilla(ctx, cx, cy, s, color) {
    // pequeño foco: círculo + base
    ctx.save();
    ctx.fillStyle = color;
    ctx.beginPath(); ctx.arc(cx, cy - s * 0.1, s * 0.34, 0, Math.PI * 2); ctx.fill();
    ctx.fillRect(cx - s * 0.16, cy + s * 0.18, s * 0.32, s * 0.18);
    ctx.restore();
  }

  /* --------- altura de un item de error (para medir y dibujar igual) --------- */
  function altoItemError(ctx, r) {
    ctx.font = "bold 16px Segoe UI, sans-serif";
    const ql = partir(ctx, r.enunciado, ANCHO - 2 * MARGEN - 34).length;
    let h = 16 + ql * 22 + 6 + 22 + 22;
    if (r.retro) {
      ctx.font = "14px Segoe UI, sans-serif";
      h += partir(ctx, r.retro, ANCHO - 2 * MARGEN - 46).length * 19 + 4;
    }
    return h + 14;
  }

  /* --------- PASO 1: altura total --------- */
  function medirAltura(ctx, R) {
    let h = 78;        // encabezado
    h += 44;           // datos del alumno
    h += 48;           // tema
    h += 160;          // puntaje + stats
    h += 64;           // código
    const nFlags = (R.cambiosPestana > 0 ? 1 : 0) + (R.aperturasInspector > 0 ? 1 : 0);
    h += nFlags * 52;
    h += 38;           // título "reforzar"
    const errores = R.respuestas.filter(function (r) { return !r.correcta; });
    if (!errores.length) h += 58;
    else errores.forEach(function (r) { h += altoItemError(ctx, r) + 10; });
    h += 44;           // pie
    return h;
  }

  /* --------- PASO 2: dibujar --------- */
  function dibujar(R, lienzo) {
    const escala = 2;
    const ctx = lienzo.getContext("2d");
    ctx.font = "bold 16px Segoe UI, sans-serif";
    const alto = medirAltura(ctx, R);

    lienzo.width = ANCHO * escala;
    lienzo.height = alto * escala;
    lienzo.style.width = ANCHO + "px";
    lienzo.style.height = "auto";
    ctx.scale(escala, escala);

    ctx.fillStyle = COL.blanco; ctx.fillRect(0, 0, ANCHO, alto);
    ctx.textBaseline = "alphabetic"; ctx.textAlign = "left";
    let y = 0;

    /* ---- ENCABEZADO (sin logo) ---- */
    ctx.fillStyle = COL.rojo; ctx.fillRect(0, 0, ANCHO, 78);
    ctx.fillStyle = COL.blanco;
    ctx.font = "bold 26px Segoe UI, sans-serif";
    ctx.fillText("CETIS 115", MARGEN, 36);
    ctx.font = "14px Segoe UI, sans-serif";
    ctx.fillText("Boleta de resultados · Temas Selectos de Matemáticas", MARGEN, 60);
    y = 78;

    /* ---- DATOS DEL ALUMNO ---- */
    y += 40;
    ctx.fillStyle = COL.negro; ctx.font = "bold 23px Segoe UI, sans-serif";
    ctx.fillText(R.nombre, MARGEN, y);
    ctx.fillStyle = COL.gris; ctx.font = "15px Segoe UI, sans-serif";
    ctx.textAlign = "right";
    ctx.fillText((R.grupo ? "Grupo " + R.grupo + "  ·  " : "") + R.fecha, ANCHO - MARGEN, y);
    ctx.textAlign = "left";
    y += 4;

    /* ---- TEMA ---- */
    ctx.fillStyle = COL.rojo; ctx.font = "bold 19px Segoe UI, sans-serif";
    ctx.fillText("Tema: " + R.temaTitulo, MARGEN, y + 24);
    ctx.fillStyle = COL.gris; ctx.font = "14px Segoe UI, sans-serif";
    ctx.fillText(R.unidad, MARGEN, y + 43);
    y += 48;

    /* ---- PUNTAJE (anillo) + STATS ---- */
    const colorPct = R.porcentaje >= 80 ? COL.verde : R.porcentaje >= 60 ? "#E0A100" : COL.rojoErr;
    const cx = MARGEN + 72, cy = y + 78;
    ctx.beginPath(); ctx.arc(cx, cy, 68, 0, Math.PI * 2); ctx.fillStyle = colorPct; ctx.fill();
    ctx.beginPath(); ctx.arc(cx, cy, 51, 0, Math.PI * 2); ctx.fillStyle = COL.blanco; ctx.fill();
    ctx.fillStyle = colorPct; ctx.font = "bold 38px Segoe UI, sans-serif"; ctx.textAlign = "center";
    ctx.fillText(R.porcentaje + "%", cx, cy + 5);
    ctx.fillStyle = COL.gris; ctx.font = "14px Segoe UI, sans-serif";
    ctx.fillText(R.aciertos + " / " + R.total, cx, cy + 27);
    ctx.textAlign = "left";

    const sx = cx + 100;
    const stats = [["Correctas", R.aciertos, COL.verde], ["Incorrectas", R.total - R.aciertos, COL.rojoErr], ["Tiempo", formatoTiempo(R.tiempoUsado), COL.negro]];
    let syy = y + 34;
    stats.forEach(function (st) {
      ctx.fillStyle = COL.gris; ctx.font = "15px Segoe UI, sans-serif"; ctx.fillText(st[0], sx, syy);
      ctx.fillStyle = st[2]; ctx.font = "bold 26px Segoe UI, sans-serif"; ctx.textAlign = "right";
      ctx.fillText(String(st[1]), ANCHO - MARGEN, syy + 3); ctx.textAlign = "left";
      syy += 46;
    });
    y += 160;

    /* ---- CÓDIGO DE VERIFICACIÓN ---- */
    ctx.fillStyle = COL.rosa; rredondo(ctx, MARGEN, y, ANCHO - 2 * MARGEN, 50, 12); ctx.fill();
    ctx.strokeStyle = COL.rojo; ctx.lineWidth = 1.5; ctx.setLineDash([6, 5]);
    rredondo(ctx, MARGEN, y, ANCHO - 2 * MARGEN, 50, 12); ctx.stroke(); ctx.setLineDash([]);
    ctx.fillStyle = COL.rojoOsc; ctx.font = "12px Segoe UI, sans-serif";
    ctx.fillText("CÓDIGO DE VERIFICACIÓN (no editar)", MARGEN + 18, y + 21);
    ctx.fillStyle = COL.rojo; ctx.font = "bold 24px Consolas, monospace"; ctx.textAlign = "right";
    ctx.fillText(R.codigo, ANCHO - MARGEN - 18, y + 34); ctx.textAlign = "left";
    y += 64;

    /* ---- AVISOS ANTI-TRAMPA (icono de aviso vectorial) ---- */
    function avisoFlag(texto) {
      ctx.fillStyle = COL.ambarBg; rredondo(ctx, MARGEN, y, ANCHO - 2 * MARGEN, 42, 10); ctx.fill();
      icoAviso(ctx, MARGEN + 24, y + 21, 22, "#E0A100");
      ctx.fillStyle = COL.ambar; ctx.font = "bold 15px Segoe UI, sans-serif";
      ctx.fillText(texto, MARGEN + 44, y + 26);
      y += 52;
    }
    if (R.cambiosPestana > 0) avisoFlag("Salió de la página " + R.cambiosPestana + " vez(ces) durante el quiz");
    if (R.aperturasInspector > 0) avisoFlag("Abrió el inspector " + R.aperturasInspector + " vez(ces) durante el quiz");

    /* ---- TÍTULO DE ERRORES ---- */
    ctx.fillStyle = COL.negro; ctx.font = "bold 20px Segoe UI, sans-serif";
    ctx.fillText("Lo que debes reforzar", MARGEN, y + 26);
    y += 38;

    const errores = R.respuestas.filter(function (r) { return !r.correcta; });
    if (!errores.length) {
      ctx.fillStyle = "#E7F6EE"; rredondo(ctx, MARGEN, y, ANCHO - 2 * MARGEN, 48, 10); ctx.fill();
      icoCheck(ctx, MARGEN + 26, y + 24, 22, COL.verde);
      ctx.fillStyle = COL.verde; ctx.font = "bold 17px Segoe UI, sans-serif";
      ctx.fillText("¡Contestaste todo bien! Excelente dominio del tema.", MARGEN + 48, y + 30);
      y += 58;
    } else {
      errores.forEach(function (r) {
        const altoItem = altoItemError(ctx, r);
        ctx.fillStyle = COL.fondoItem; rredondo(ctx, MARGEN, y, ANCHO - 2 * MARGEN, altoItem, 10); ctx.fill();
        ctx.fillStyle = COL.rojoErr; ctx.fillRect(MARGEN, y, 5, altoItem);

        let yy = y + 26;
        ctx.fillStyle = COL.negro; ctx.font = "bold 16px Segoe UI, sans-serif";
        partir(ctx, r.enunciado, ANCHO - 2 * MARGEN - 34).forEach(function (ln) { ctx.fillText(ln, MARGEN + 20, yy); yy += 22; });
        yy += 4;
        icoCross(ctx, MARGEN + 28, yy - 5, 15, COL.rojoErr);
        ctx.fillStyle = COL.rojoErr; ctx.font = "15px Segoe UI, sans-serif";
        ctx.fillText("Tu respuesta: " + r.dada, MARGEN + 44, yy); yy += 24;
        icoCheck(ctx, MARGEN + 28, yy - 5, 15, COL.verde);
        ctx.fillStyle = COL.verde;
        ctx.fillText("Correcta: " + r.esperada, MARGEN + 44, yy); yy += 22;

        if (r.retro) {
          icoBombilla(ctx, MARGEN + 28, yy - 4, 14, "#C79100");
          ctx.fillStyle = COL.ambar; ctx.font = "14px Segoe UI, sans-serif";
          partir(ctx, r.retro, ANCHO - 2 * MARGEN - 46).forEach(function (ln) { ctx.fillText(ln, MARGEN + 44, yy); yy += 19; });
        }
        y += altoItem + 10;
      });
    }

    /* ---- PIE ---- */
    ctx.fillStyle = COL.grisClaro; ctx.fillRect(0, alto - 40, ANCHO, 40);
    ctx.fillStyle = COL.gris; ctx.font = "13px Segoe UI, sans-serif"; ctx.textAlign = "center";
    ctx.fillText("CETIS 115 · Boleta de resultados de práctica de Matemáticas", ANCHO / 2, alto - 16);
    ctx.textAlign = "left";

    return lienzo;
  }

  function formatoTiempo(seg) {
    const m = Math.floor(seg / 60), s = seg % 60;
    return m + "m " + String(s).padStart(2, "0") + "s";
  }

  /* --------- generar y descargar --------- */
  function generar(R) {
    const lienzo = document.createElement("canvas");
    dibujar(R, lienzo);
    const nombreArch = "Resultado_" + limpiarNombre(R.nombre) + "_" + limpiarNombre(R.temaTitulo) + ".png";
    lienzo.toBlob(function (blob) {
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url; a.download = nombreArch;
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(function () { URL.revokeObjectURL(url); }, 1500);
    }, "image/png");
  }
  function limpiarNombre(t) {
    return String(t).normalize("NFD").replace(/[̀-ͯ]/g, "")
      .replace(/[^a-zA-Z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 40);
  }

  return { dibujar: dibujar, generar: generar };
})();
