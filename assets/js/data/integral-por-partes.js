/* ===================================================================
   BANCO DE PREGUNTAS · Integral por partes  ( ∫ u dv = uv − ∫ v du )
   =================================================================== */
window.BANCO = window.BANCO || {};
window.BANCO["integral-por-partes"] = {
  config: { numPreguntas: 8, tiempoMin: 14 },
  preguntas: [
    {
      id: "id-01", tipo: "opcion", dificultad: "media",
      enunciado: "Calcula por partes:", formula: "∫ x eˣ dx",
      opciones: ["eˣ(x − 1) + C", "x eˣ + C", "eˣ(x + 1) + C", "x² eˣ/2 + C"], correcta: 0,
      pista: "Toma u = x y dv = eˣ dx.",
      retro: "uv − ∫v du = x eˣ − ∫eˣ dx = x eˣ − eˣ = eˣ(x − 1) + C."
    },
    {
      id: "id-02", tipo: "opcion", dificultad: "media",
      enunciado: "Calcula por partes:", formula: "∫ x cos x dx",
      opciones: ["x sen x + cos x + C", "x sen x − cos x + C", "−x sen x + cos x + C", "x cos x + sen x + C"], correcta: 0,
      pista: "u = x, dv = cos x dx.",
      retro: "x sen x − ∫sen x dx = x sen x + cos x + C."
    },
    {
      id: "id-03", tipo: "opcion", dificultad: "dificil",
      enunciado: "Calcula por partes:", formula: "∫ ln x dx",
      opciones: ["x ln x − x + C", "1/x + C", "x ln x + x + C", "ln x − x + C"], correcta: 0,
      pista: "u = ln x, dv = dx.",
      retro: "x ln x − ∫x·(1/x)dx = x ln x − x + C."
    },
    {
      id: "id-04", tipo: "opcion", dificultad: "media",
      enunciado: "Calcula por partes:", formula: "∫ x sen x dx",
      opciones: ["−x cos x + sen x + C", "x cos x − sen x + C", "−x cos x − sen x + C", "x cos x + sen x + C"], correcta: 0,
      retro: "u = x, dv = sen x dx → −x cos x + ∫cos x dx = −x cos x + sen x + C."
    },
    {
      id: "id-05", tipo: "opcion", dificultad: "facil",
      enunciado: "Según la regla LIATE, en ∫ x eˣ dx, ¿qué se toma como u?",
      opciones: ["u = x", "u = eˣ", "u = x eˣ", "u = dx"], correcta: 0,
      retro: "LIATE: la parte algebraica (x) se elige como u para derivarla."
    },
    {
      id: "id-06", tipo: "opcion", dificultad: "facil",
      enunciado: "¿Cuál es la fórmula de integración por partes?",
      opciones: ["∫ u dv = uv − ∫ v du", "∫ u dv = uv + ∫ v du", "∫ u dv = u · v", "∫ u dv = ∫u · ∫dv"], correcta: 0,
      retro: "La fórmula correcta es ∫ u dv = uv − ∫ v du."
    },
    {
      id: "id-07", tipo: "opcion", dificultad: "dificil",
      enunciado: "Calcula (aplicando por partes dos veces):", formula: "∫ x² eˣ dx",
      opciones: ["eˣ(x² − 2x + 2) + C", "eˣ(x² + 2x + 2) + C", "x² eˣ − 2eˣ + C", "eˣ(x² − 2x − 2) + C"], correcta: 0,
      retro: "Se aplica por partes dos veces: eˣ(x² − 2x + 2) + C."
    },
    {
      id: "id-08", tipo: "vf", dificultad: "facil",
      enunciado: "¿Verdadero o falso? La integración por partes sirve para integrar productos de funciones.",
      correcta: true,
      retro: "Verdadero, sobre todo cuando un factor se simplifica al derivar (como x)."
    },
    {
      id: "id-09", tipo: "opcion", dificultad: "media",
      enunciado: "Calcula por partes:", formula: "∫ x e^(2x) dx",
      opciones: ["(1/2)x e^(2x) − (1/4) e^(2x) + C", "x e^(2x) + C", "(1/2)x e^(2x) + C", "e^(2x)(x − 1) + C"], correcta: 0,
      retro: "u = x, dv = e^(2x)dx → v = (1/2)e^(2x). Queda (1/2)x e^(2x) − (1/4)e^(2x) + C."
    },
    {
      id: "id-10", tipo: "opcion", dificultad: "dificil",
      enunciado: "Calcula por partes:", formula: "∫ x² ln x dx",
      opciones: ["(x³/3) ln x − x³/9 + C", "(x³/3) ln x + C", "x³ ln x − x³ + C", "(x³/3) ln x − x³/3 + C"], correcta: 0,
      retro: "u = ln x, dv = x²dx → (x³/3)ln x − ∫(x³/3)(1/x)dx = (x³/3)ln x − x³/9 + C."
    },
    {
      id: "id-11", tipo: "opcion", dificultad: "dificil",
      enunciado: "Calcula por partes:", formula: "∫ x cos(2x) dx",
      opciones: ["(1/2)x sen(2x) + (1/4)cos(2x) + C", "(1/2)x sen(2x) − (1/4)cos(2x) + C", "x sen(2x) + cos(2x) + C", "−(1/2)x sen(2x) + C"], correcta: 0,
      retro: "u = x, dv = cos(2x)dx → (1/2)x sen(2x) − ∫(1/2)sen(2x)dx = (1/2)x sen(2x) + (1/4)cos(2x) + C."
    },
    {
      id: "id-12", tipo: "vf", dificultad: "facil",
      enunciado: "¿Verdadero o falso? Para ∫ x ln x dx conviene tomar u = ln x porque al derivar se simplifica.",
      correcta: true,
      retro: "Verdadero. Por LIATE, el logaritmo va como u."
    },
    {
      id: "id-13", tipo: "opcion", dificultad: "media",
      enunciado: "En la regla LIATE, ¿qué tipo de función se elige primero como u?",
      opciones: ["Logarítmica", "Exponencial", "Trigonométrica", "Constante"], correcta: 0,
      retro: "LIATE: Logarítmica, Inversa trig., Algebraica, Trigonométrica, Exponencial."
    }
  ]
};
