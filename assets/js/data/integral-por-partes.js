/* ===================================================================
   BANCO DE PREGUNTAS · Integral por partes  ( ∫ u dv = uv − ∫ v du )
   =================================================================== */
window.BANCO = window.BANCO || {};
window.BANCO["integral-por-partes"] = {
  config: { numPreguntas: 8, tiempoMin: 0 },
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
    },
    {
      id: "id-14", tipo: "opcion", dificultad: "dificil",
      enunciado: "Calcula por partes (aplica dos veces):", formula: "∫ x³ eˣ dx",
      opciones: ["eˣ(x³ − 3x² + 6x − 6) + C", "eˣ(x³ + 3x² + 6x + 6) + C", "x³ eˣ − 3x² eˣ + C", "eˣ(x³ − 3x²) + C"], correcta: 0,
      retro: "Aplicando por partes repetidamente se obtiene eˣ(x³ − 3x² + 6x − 6) + C."
    },
    {
      id: "id-15", tipo: "opcion", dificultad: "media",
      enunciado: "Calcula por partes:", formula: "∫ x e^(3x) dx",
      opciones: ["(x/3) e^(3x) − (1/9) e^(3x) + C", "(x/3) e^(3x) + C", "x e^(3x)/9 + C", "(1/3) e^(3x)(x + 1) + C"], correcta: 0,
      pista: "u = x, dv = e^(3x)dx → v = (1/3)e^(3x).",
      retro: "uv − ∫v du = (x/3)e^(3x) − ∫(1/3)e^(3x)dx = (x/3)e^(3x) − (1/9)e^(3x) + C."
    },
    {
      id: "id-16", tipo: "opcion", dificultad: "media",
      enunciado: "Calcula por partes:", formula: "∫ x e^(−x) dx",
      opciones: ["−e^(−x)(x + 1) + C", "e^(−x)(x + 1) + C", "−x e^(−x) + C", "e^(−x)(x − 1) + C"], correcta: 0,
      pista: "u = x, dv = e^(−x)dx → v = −e^(−x).",
      retro: "−x e^(−x) − ∫(−e^(−x))dx = −x e^(−x) − e^(−x) = −e^(−x)(x + 1) + C."
    },
    {
      id: "id-17", tipo: "opcion", dificultad: "dificil",
      enunciado: "Calcula por partes:", formula: "∫ x² sen x dx",
      opciones: ["−x² cos x + 2x sen x + 2 cos x + C", "−x² cos x − 2x sen x + C", "x² sen x − 2x cos x + C", "−x² cos x + 2 cos x + C"], correcta: 0,
      retro: "Primera parte: u = x², dv = sen x dx → −x² cos x + ∫2x cos x dx. Segunda parte da 2x sen x + 2 cos x. Resultado: −x² cos x + 2x sen x + 2 cos x + C."
    },
    {
      id: "id-18", tipo: "opcion", dificultad: "dificil",
      enunciado: "Calcula por partes:", formula: "∫ x² cos x dx",
      opciones: ["x² sen x + 2x cos x − 2 sen x + C", "x² cos x − 2x sen x + C", "x² sen x − 2 cos x + C", "x² sen x + 2 cos x + C"], correcta: 0,
      retro: "u = x², dv = cos x dx. Dos aplicaciones dan: x² sen x + 2x cos x − 2 sen x + C."
    },
    {
      id: "id-19", tipo: "opcion", dificultad: "media",
      enunciado: "Calcula por partes:", formula: "∫ x sen(2x) dx",
      opciones: ["−(x/2)cos(2x) + (1/4)sen(2x) + C", "(x/2)cos(2x) + (1/4)sen(2x) + C", "−(x/2)cos(2x) − (1/4)sen(2x) + C", "(x/2)sen(2x) + C"], correcta: 0,
      pista: "u = x, dv = sen(2x)dx → v = −(1/2)cos(2x).",
      retro: "uv − ∫v du = −(x/2)cos(2x) + (1/2)∫cos(2x)dx = −(x/2)cos(2x) + (1/4)sen(2x) + C."
    },
    {
      id: "id-20", tipo: "opcion", dificultad: "media",
      enunciado: "Calcula por partes:", formula: "∫ x cos(3x) dx",
      opciones: ["(x/3)sen(3x) + (1/9)cos(3x) + C", "(x/3)cos(3x) + (1/9)sen(3x) + C", "(x/3)sen(3x) − (1/9)cos(3x) + C", "x sen(3x)/9 + C"], correcta: 0,
      pista: "u = x, dv = cos(3x)dx → v = (1/3)sen(3x).",
      retro: "(x/3)sen(3x) − ∫(1/3)sen(3x)dx = (x/3)sen(3x) + (1/9)cos(3x) + C."
    },
    {
      id: "id-21", tipo: "opcion", dificultad: "media",
      enunciado: "Calcula por partes:", formula: "∫ ln(x²) dx",
      opciones: ["2x ln x − 2x + C", "x ln(x²) + C", "2 ln x + C", "x ln(x²) − 2x + C"], correcta: 0,
      pista: "Recuerda que ln(x²) = 2 ln x. Toma u = ln(x²), dv = dx.",
      retro: "u = ln(x²), dv = dx. uv − ∫v du = x ln(x²) − ∫x·(2/x)dx = x·2 ln x − 2x = 2x ln x − 2x + C."
    },
    {
      id: "id-22", tipo: "opcion", dificultad: "dificil",
      enunciado: "Calcula por partes:", formula: "∫ √x · ln x dx",
      opciones: ["(2/3)x^(3/2) ln x − (4/9)x^(3/2) + C", "(2/3)x^(3/2) ln x + C", "x^(3/2) ln x − x^(3/2) + C", "(1/2)x^(3/2) ln x + C"], correcta: 0,
      pista: "u = ln x, dv = √x dx = x^(1/2) dx → v = (2/3)x^(3/2).",
      retro: "uv − ∫v du = (2/3)x^(3/2) ln x − ∫(2/3)x^(3/2)·(1/x)dx = (2/3)x^(3/2) ln x − (2/3)∫x^(1/2)dx = (2/3)x^(3/2) ln x − (4/9)x^(3/2) + C."
    },
    {
      id: "id-23", tipo: "opcion", dificultad: "dificil",
      enunciado: "Calcula por partes:", formula: "∫ arctan x dx",
      opciones: ["x arctan x − (1/2)ln(1 + x²) + C", "x arctan x + ln(1 + x²) + C", "arctan x + C", "x arctan x + C"], correcta: 0,
      pista: "u = arctan x, dv = dx → du = dx/(1 + x²), v = x.",
      retro: "uv − ∫v du = x arctan x − ∫x/(1 + x²)dx = x arctan x − (1/2)ln(1 + x²) + C."
    },
    {
      id: "id-24", tipo: "opcion", dificultad: "dificil",
      enunciado: "Calcula por partes:", formula: "∫ arcsin x dx",
      opciones: ["x arcsin x + √(1 − x²) + C", "x arcsin x − √(1 − x²) + C", "arcsin x + x + C", "x arcsin x + C"], correcta: 0,
      pista: "u = arcsin x, dv = dx → du = dx/√(1 − x²), v = x.",
      retro: "uv − ∫v du = x arcsin x − ∫x/√(1 − x²)dx. La segunda integral vale −√(1 − x²) + C."
    },
    {
      id: "id-25", tipo: "opcion", dificultad: "dificil",
      enunciado: "Calcula por partes:", formula: "∫ x arctan x dx",
      opciones: ["(x²/2) arctan x − x/2 + (1/2) arctan x + C", "(x²/2) arctan x + C", "x² arctan x − x + C", "(x²/2) arctan x − x + C"], correcta: 0,
      pista: "u = arctan x, dv = x dx → v = x²/2.",
      retro: "(x²/2)arctan x − ∫(x²/2)/(1+x²)dx. La integral restante es (1/2)∫(1 − 1/(1+x²))dx = x/2 − (1/2)arctan x. Resultado final: (x²/2)arctan x − x/2 + (1/2)arctan x + C."
    },
    {
      id: "id-26", tipo: "opcion", dificultad: "dificil",
      enunciado: "Para ∫ eˣ sen x dx, al aplicar por partes dos veces y despejar, ¿cuál es el resultado?",
      opciones: ["(eˣ/2)(sen x − cos x) + C", "eˣ sen x + C", "(eˣ/2)(sen x + cos x) + C", "eˣ(sen x − cos x) + C"], correcta: 0,
      pista: "Aplica por partes dos veces y pasa el término de la izquierda.",
      retro: "Tras dos aplicaciones aparece −∫eˣ sen x dx en el lado derecho. Despejando: 2∫eˣ sen x dx = eˣ(sen x − cos x), así ∫eˣ sen x dx = (eˣ/2)(sen x − cos x) + C."
    },
    {
      id: "id-27", tipo: "opcion", dificultad: "dificil",
      enunciado: "Calcula por partes (doble integración):", formula: "∫ eˣ cos x dx",
      opciones: ["(eˣ/2)(sen x + cos x) + C", "eˣ cos x + C", "(eˣ/2)(sen x − cos x) + C", "eˣ(cos x − sen x) + C"], correcta: 0,
      retro: "Dos aplicaciones y despejando: 2∫eˣ cos x dx = eˣ(sen x + cos x), resultado: (eˣ/2)(sen x + cos x) + C."
    },
    {
      id: "id-28", tipo: "vf", dificultad: "media",
      enunciado: "¿Verdadero o falso? En la integral ∫ eˣ sen x dx es necesario aplicar por partes dos veces.",
      correcta: true,
      retro: "Verdadero. La primera aplicación genera ∫eˣ cos x dx, y la segunda permite despejar la integral original."
    },
    {
      id: "id-29", tipo: "vf", dificultad: "facil",
      enunciado: "¿Verdadero o falso? En la regla LIATE, la exponencial se elige como u antes que la trigonométrica.",
      correcta: false,
      retro: "Falso. LIATE: Logarítmica, Inversa trig., Algebraica, Trigonométrica, Exponencial. La trigonométrica va antes que la exponencial."
    },
    {
      id: "id-30", tipo: "opcion", dificultad: "facil",
      enunciado: "Al aplicar partes en ∫ ln x dx, ¿cuál es la elección de dv?",
      opciones: ["dv = dx", "dv = ln x dx", "dv = (1/x) dx", "dv = x dx"], correcta: 0,
      retro: "Se toma u = ln x y dv = dx (lo único que queda). v = x."
    },
    {
      id: "id-31", tipo: "opcion", dificultad: "media",
      enunciado: "Calcula por partes:", formula: "∫ x ln x dx",
      opciones: ["(x²/2) ln x − x²/4 + C", "(x²/2) ln x + C", "x² ln x − x² + C", "(x²/2) ln x − x²/2 + C"], correcta: 0,
      pista: "u = ln x, dv = x dx → v = x²/2.",
      retro: "(x²/2)ln x − ∫(x²/2)·(1/x)dx = (x²/2)ln x − (1/2)∫x dx = (x²/2)ln x − x²/4 + C."
    },
    {
      id: "id-32", tipo: "opcion", dificultad: "media",
      enunciado: "En ∫ x² eˣ dx, ¿cuántas veces hay que aplicar integración por partes?",
      opciones: ["2 veces", "1 vez", "3 veces", "No aplica por partes"], correcta: 0,
      retro: "El grado del polinomio es 2, por lo que se aplica por partes dos veces para reducirlo a cero."
    },
    {
      id: "id-33", tipo: "opcion", dificultad: "facil",
      enunciado: "¿Cuál de las siguientes integrales NO requiere integración por partes?",
      opciones: ["∫ eˣ dx", "∫ x eˣ dx", "∫ ln x dx", "∫ x² cos x dx"], correcta: 0,
      retro: "∫eˣ dx = eˣ + C es una integral directa. Las otras tres requieren integración por partes."
    },
    {
      id: "id-34", tipo: "vf", dificultad: "media",
      enunciado: "¿Verdadero o falso? Para ∫ x² eˣ dx conviene tomar u = eˣ según la regla LIATE.",
      correcta: false,
      retro: "Falso. Por LIATE, la parte algebraica (x²) se toma como u, y eˣ como dv, ya que al derivar x² se reduce el grado."
    },
    {
      id: "id-35", tipo: "opcion", dificultad: "media",
      enunciado: "Calcula por partes:", formula: "∫ x sen x dx",
      opciones: ["sen x − x cos x + C", "x cos x + sen x + C", "−x cos x − sen x + C", "cos x − x sen x + C"], correcta: 0,
      retro: "u = x, dv = sen x dx → v = −cos x. uv − ∫v du = −x cos x + ∫cos x dx = −x cos x + sen x = sen x − x cos x + C."
    },
    {
      id: "id-36", tipo: "opcion", dificultad: "dificil",
      enunciado: "Calcula por partes:", formula: "∫ x² sen x dx",
      opciones: ["(2 − x²) cos x + 2x sen x + C", "x² cos x + 2x sen x + C", "−x² cos x + 2x sen x + C", "(x² − 2) cos x + 2x sen x + C"], correcta: 0,
      retro: "Primera parte u = x²: −x² cos x + ∫2x cos x dx. Segunda parte: 2x sen x + 2 cos x. Total: −x² cos x + 2x sen x + 2 cos x = (2 − x²)cos x + 2x sen x + C."
    },
    {
      id: "id-37", tipo: "opcion", dificultad: "facil",
      enunciado: "¿Verdadero o falso? Para ∫ arctan x dx se toma u = arctan x y dv = dx.",
      opciones: ["Verdadero, porque arctan x precede a dx en LIATE", "Falso, u = 1/(1+x²)", "Falso, dv = arctan x dx", "Falso, no se usa por partes"], correcta: 0,
      retro: "Correcto. u = arctan x (inversa trigonométrica, alta en LIATE), dv = dx."
    },
    {
      id: "id-38", tipo: "opcion", dificultad: "media",
      enunciado: "Si u = x y dv = e^(2x) dx, ¿cuánto vale v?",
      opciones: ["(1/2) e^(2x)", "e^(2x)", "2 e^(2x)", "x e^(2x)"], correcta: 0,
      retro: "Se integra dv: v = ∫e^(2x)dx = (1/2)e^(2x)."
    },
    {
      id: "id-39", tipo: "abierta", dificultad: "facil",
      enunciado: "En la fórmula ∫ u dv = uv − ∫ v du, si u = x y v = eˣ, ¿cuánto vale v·du? (escribe la expresión)",
      respuestas: ["eˣ dx", "eˣdx"],
      retro: "du = dx (derivada de x), y v = eˣ, así que v du = eˣ dx."
    },
    {
      id: "id-40", tipo: "vf", dificultad: "facil",
      enunciado: "¿Verdadero o falso? La integración por partes se puede ver como la regla del producto de derivadas aplicada al revés.",
      correcta: true,
      retro: "Verdadero. (uv)' = u'v + uv' ↔ ∫u dv = uv − ∫v du."
    },
    {
      id: "id-41", tipo: "opcion", dificultad: "media",
      enunciado: "¿Qué ocurre si en ∫ eˣ cos x dx se elige cada vez eˣ como u?",
      opciones: ["Se puede resolver despejando la integral original", "Se obtiene 0 y la integral es indeterminada", "Se obtiene directamente la solución", "Se complica sin llegar a solución"], correcta: 0,
      retro: "Al aplicar dos veces y elegir siempre eˣ como u, aparece −∫eˣ cos x dx, que se puede despejar algebraicamente."
    },
    {
      id: "id-42", tipo: "opcion", dificultad: "dificil",
      enunciado: "Calcula por partes:", formula: "∫ x³ sen x dx",
      opciones: ["(6x − x³) cos x + (3x² − 6) sen x + C", "−x³ cos x + 3x² sen x + C", "(x³ − 6x) cos x + 3x² sen x + C", "x³ sen x − 3x² cos x + C"], correcta: 0,
      retro: "Tres aplicaciones sucesivas de partes producen: (6x − x³)cos x + (3x² − 6)sen x + C."
    },
    {
      id: "id-43", tipo: "opcion", dificultad: "media",
      enunciado: "Calcula por partes:", formula: "∫ x e^(−x) dx",
      opciones: ["−e^(−x)(x + 1) + C", "e^(−x)(x − 1) + C", "−x e^(−x) + C", "e^(−x)(x + 1) + C"], correcta: 0,
      retro: "u = x, dv = e^(−x)dx → v = −e^(−x). uv − ∫v du = −xe^(−x) + ∫e^(−x)dx = −xe^(−x) − e^(−x) = −e^(−x)(x+1) + C."
    },
    {
      id: "id-44", tipo: "opcion", dificultad: "media",
      enunciado: "Calcula por partes:", formula: "∫ x cos x dx",
      opciones: ["x sen x + cos x + C", "−x sen x + cos x + C", "x cos x − sen x + C", "x sen x − cos x + C"], correcta: 0,
      retro: "u = x, dv = cos x dx → v = sen x. x sen x − ∫sen x dx = x sen x + cos x + C."
    },
    {
      id: "id-45", tipo: "vf", dificultad: "media",
      enunciado: "¿Verdadero o falso? ∫ x² ln x dx se resuelve con u = x² y dv = ln x dx.",
      correcta: false,
      retro: "Falso. Lo correcto es u = ln x y dv = x² dx, porque ln x tiene derivada sencilla (1/x) y x² se integra fácilmente."
    },
    {
      id: "id-46", tipo: "opcion", dificultad: "dificil",
      enunciado: "Calcula por partes:", formula: "∫ (ln x)² dx",
      opciones: ["x(ln x)² − 2x ln x + 2x + C", "x(ln x)² + C", "2x ln x − 2x + C", "x(ln x)² − 2 ln x + C"], correcta: 0,
      pista: "u = (ln x)², dv = dx. Necesitarás por partes una segunda vez.",
      retro: "Primera parte: x(ln x)² − ∫2 ln x dx. Segunda parte: 2∫ln x dx = 2(x ln x − x). Total: x(ln x)² − 2x ln x + 2x + C."
    },
    {
      id: "id-47", tipo: "opcion", dificultad: "facil",
      enunciado: "En ∫ x cos x dx, ¿cuál es du si u = x?",
      opciones: ["du = dx", "du = x dx", "du = cos x dx", "du = sen x dx"], correcta: 0,
      retro: "La derivada de u = x es du = (d/dx)(x)dx = 1·dx = dx."
    },
    {
      id: "id-48", tipo: "opcion", dificultad: "media",
      enunciado: "¿Cuál de las siguientes sí requiere integración por partes?",
      opciones: ["∫ x ln x dx", "∫ x² dx", "∫ e^(x²)·2x dx", "∫ cos(2x) dx"], correcta: 0,
      retro: "∫ x ln x dx requiere por partes (producto de algebraica y logarítmica). Las otras se resuelven con regla de potencia, sustitución o directa."
    },
    {
      id: "id-49", tipo: "abierta", dificultad: "media",
      enunciado: "Para ∫ x e^(3x) dx con u = x y dv = e^(3x)dx, ¿cuánto vale v? (escribe la expresión sin espacios)",
      respuestas: ["(1/3)e^(3x)", "e^(3x)/3"],
      retro: "v = ∫e^(3x)dx = (1/3)e^(3x)."
    },
    {
      id: "id-50", tipo: "vf", dificultad: "dificil",
      enunciado: "¿Verdadero o falso? La integral ∫ arcsin x dx da como resultado x arcsin x + √(1 − x²) + C.",
      correcta: true,
      retro: "Verdadero. Con u = arcsin x, dv = dx: x arcsin x − ∫x/√(1−x²)dx. La segunda integral es −√(1−x²) + C, de modo que el resultado es x arcsin x + √(1−x²) + C."
    }
  ]
};
