/* ===================================================================
   BANCO DE PREGUNTAS · Integración por sustitución (cambio de variable)
   =================================================================== */
window.BANCO = window.BANCO || {};
window.BANCO["integracion-por-sustitucion"] = {
  config: { numPreguntas: 8, tiempoMin: 0 },
  preguntas: [
    {
      id: "id-01", tipo: "opcion", dificultad: "media",
      enunciado: "Resuelve usando u = x² + 1:", formula: "∫ 2x (x² + 1)³ dx",
      opciones: ["(x² + 1)⁴/4 + C", "(x² + 1)⁴ + C", "2(x² + 1)⁴ + C", "(x² + 1)²/2 + C"], correcta: 0,
      pista: "Si u = x² + 1, entonces du = 2x dx.",
      retro: "Queda ∫u³ du = u⁴/4 = (x² + 1)⁴/4 + C."
    },
    {
      id: "id-02", tipo: "opcion", dificultad: "media",
      enunciado: "Calcula la integral:", formula: "∫ cos(3x) dx",
      opciones: ["(1/3) sen(3x) + C", "3 sen(3x) + C", "sen(3x) + C", "−(1/3) sen(3x) + C"], correcta: 0,
      retro: "Divide entre la derivada del interior (3): (1/3) sen(3x) + C."
    },
    {
      id: "id-03", tipo: "opcion", dificultad: "media",
      enunciado: "Calcula la integral:", formula: "∫ e^(2x) dx",
      opciones: ["(1/2) e^(2x) + C", "e^(2x) + C", "2 e^(2x) + C", "e^(2x)/x + C"], correcta: 0,
      retro: "Con u = 2x, du = 2dx: (1/2) e^(2x) + C."
    },
    {
      id: "id-04", tipo: "opcion", dificultad: "dificil",
      enunciado: "Calcula la integral:", formula: "∫ 2x / (x² + 1) dx",
      opciones: ["ln|x² + 1| + C", "(x² + 1)² + C", "1/(x² + 1) + C", "2 ln|x| + C"], correcta: 0,
      pista: "Tiene la forma ∫ u'/u dx.",
      retro: "∫ u'/u dx = ln|u|: ln|x² + 1| + C."
    },
    {
      id: "id-05", tipo: "opcion", dificultad: "media",
      enunciado: "Calcula la integral:", formula: "∫ sen(5x) dx",
      opciones: ["−(1/5) cos(5x) + C", "(1/5) cos(5x) + C", "−cos(5x) + C", "5 cos(5x) + C"], correcta: 0,
      retro: "∫sen(5x)dx = −(1/5)cos(5x) + C (signo negativo y divides entre 5)."
    },
    {
      id: "id-06", tipo: "opcion", dificultad: "dificil",
      enunciado: "Resuelve usando u = x³ + 2:", formula: "∫ 3x² (x³ + 2)⁴ dx",
      opciones: ["(x³ + 2)⁵/5 + C", "(x³ + 2)⁵ + C", "5(x³ + 2)⁴ + C", "(x³ + 2)⁶/6 + C"], correcta: 0,
      retro: "du = 3x² dx → ∫u⁴ du = u⁵/5 = (x³ + 2)⁵/5 + C."
    },
    {
      id: "id-07", tipo: "opcion", dificultad: "dificil",
      enunciado: "Calcula la integral:", formula: "∫ 2x · e^(x²) dx",
      opciones: ["e^(x²) + C", "2x e^(x²) + C", "e^(x²)/2 + C", "x² e^(x²) + C"], correcta: 0,
      retro: "Con u = x², du = 2x dx → ∫eᵘ du = eᵘ = e^(x²) + C."
    },
    {
      id: "id-08", tipo: "opcion", dificultad: "media",
      enunciado: "En la integral ∫ 2x (x² + 5)⁴ dx, ¿qué conviene tomar como u?",
      opciones: ["u = x² + 5", "u = 2x", "u = x⁴", "u = (x² + 5)⁴"], correcta: 0,
      retro: "Se elige el interior de la potencia: u = x² + 5, así du = 2x dx."
    },
    {
      id: "id-09", tipo: "vf", dificultad: "facil",
      enunciado: "¿Verdadero o falso? En la sustitución hay que cambiar también el diferencial dx por du.",
      correcta: true,
      retro: "Verdadero. Todo debe quedar en términos de u, incluido el dx."
    },
    {
      id: "id-10", tipo: "opcion", dificultad: "media",
      enunciado: "Calcula la integral:", formula: "∫ cos(2x) dx",
      opciones: ["(1/2) sen(2x) + C", "2 sen(2x) + C", "sen(2x) + C", "−(1/2) sen(2x) + C"], correcta: 0,
      retro: "Divide entre la derivada del interior (2)."
    },
    {
      id: "id-11", tipo: "opcion", dificultad: "media",
      enunciado: "Calcula la integral:", formula: "∫ e^(5x) dx",
      opciones: ["(1/5) e^(5x) + C", "e^(5x) + C", "5 e^(5x) + C", "e^(5x)/x + C"], correcta: 0,
      retro: "Con u = 5x: (1/5) e^(5x) + C."
    },
    {
      id: "id-12", tipo: "opcion", dificultad: "media",
      enunciado: "Resuelve usando u = x² + 3:", formula: "∫ 2x (x² + 3)⁵ dx",
      opciones: ["(x² + 3)⁶/6 + C", "(x² + 3)⁶ + C", "6(x² + 3)⁵ + C", "(x² + 3)⁵/5 + C"], correcta: 0,
      retro: "du = 2x dx → ∫u⁵ du = u⁶/6."
    },
    {
      id: "id-13", tipo: "opcion", dificultad: "dificil",
      enunciado: "Calcula la integral:", formula: "∫ 3x² / (x³ + 1) dx",
      opciones: ["ln|x³ + 1| + C", "(x³ + 1)² + C", "3 ln|x| + C", "1/(x³ + 1) + C"], correcta: 0,
      retro: "Forma u'/u con u = x³ + 1: ln|x³ + 1| + C."
    },
    {
      id: "id-14", tipo: "opcion", dificultad: "dificil",
      enunciado: "Resuelve usando u = 3x + 1:", formula: "∫ (3x + 1)⁴ · 3 dx",
      opciones: ["(3x + 1)⁵/5 + C", "(3x + 1)⁵ + C", "5(3x + 1)⁴ + C", "(3x + 1)⁶/6 + C"], correcta: 0,
      retro: "du = 3 dx → ∫u⁴ du = u⁵/5."
    },
    {
      id: "id-15", tipo: "opcion", dificultad: "media",
      enunciado: "En ∫ cos(7x) dx, después de integrar se debe:",
      opciones: ["Dividir entre 7", "Multiplicar por 7", "Sumar 7", "No cambia nada"], correcta: 0,
      retro: "Se divide entre la derivada del interior, que es 7."
    },
    {
      id: "id-16", tipo: "vf", dificultad: "media",
      enunciado: "¿Verdadero o falso? ∫ e^(kx) dx = (1/k) e^(kx) + C.",
      correcta: true,
      retro: "Verdadero. Por ejemplo ∫ e^(2x) dx = (1/2) e^(2x) + C."
    },
    {
      id: "id-17", tipo: "opcion", dificultad: "media",
      enunciado: "Calcula la integral con sustitución u = 2x + 1:", formula: "∫ (2x + 1)⁵ · 2 dx",
      opciones: ["(2x + 1)⁶/6 + C", "(2x + 1)⁶ + C", "2(2x + 1)⁶ + C", "(2x + 1)⁵ + C"], correcta: 0,
      pista: "du = 2 dx → ∫u⁵ du.",
      retro: "du = 2 dx → ∫u⁵ du = u⁶/6 = (2x + 1)⁶/6 + C."
    },
    {
      id: "id-18", tipo: "opcion", dificultad: "dificil",
      enunciado: "Calcula la integral:", formula: "∫ 4x (x² − 3)⁴ dx",
      opciones: ["2(x² − 3)⁵/5 + C", "(x² − 3)⁵/5 + C", "4(x² − 3)⁵ + C", "(x² − 3)⁴/4 + C"], correcta: 0,
      pista: "u = x² − 3, du = 2x dx, reescribe 4x dx = 2·(2x dx) = 2 du.",
      retro: "u = x² − 3, du = 2x dx → 4x dx = 2 du. ∫2u⁴ du = 2u⁵/5 = 2(x² − 3)⁵/5 + C."
    },
    {
      id: "id-19", tipo: "opcion", dificultad: "media",
      enunciado: "Calcula la integral:", formula: "∫ sen(4x) dx",
      opciones: ["−(1/4) cos(4x) + C", "(1/4) cos(4x) + C", "−cos(4x) + C", "4 cos(4x) + C"], correcta: 0,
      retro: "u = 4x, du = 4 dx → (1/4)∫sen u du = −(1/4)cos(4x) + C."
    },
    {
      id: "id-20", tipo: "opcion", dificultad: "media",
      enunciado: "Calcula la integral:", formula: "∫ cos(x/2) dx",
      opciones: ["2 sen(x/2) + C", "(1/2) sen(x/2) + C", "sen(x/2) + C", "−2 sen(x/2) + C"], correcta: 0,
      pista: "u = x/2, du = (1/2)dx → dx = 2 du.",
      retro: "dx = 2 du → 2∫cos u du = 2 sen(x/2) + C."
    },
    {
      id: "id-21", tipo: "opcion", dificultad: "media",
      enunciado: "Calcula la integral:", formula: "∫ tan(2x) dx",
      opciones: ["−(1/2) ln|cos(2x)| + C", "(1/2) ln|cos(2x)| + C", "ln|sen(2x)| + C", "−ln|cos(2x)| + C"], correcta: 0,
      pista: "tan θ = sen θ / cos θ. Con u = cos(2x).",
      retro: "∫tan(2x)dx = ∫sen(2x)/cos(2x)dx. Sea u = cos(2x), du = −2sen(2x)dx → −(1/2)∫du/u = −(1/2)ln|u| = −(1/2)ln|cos(2x)| + C."
    },
    {
      id: "id-22", tipo: "opcion", dificultad: "media",
      enunciado: "Calcula la integral:", formula: "∫ sec²(3x) dx",
      opciones: ["(1/3) tan(3x) + C", "3 tan(3x) + C", "tan(3x) + C", "−(1/3) cot(3x) + C"], correcta: 0,
      retro: "u = 3x, du = 3 dx → (1/3)∫sec²u du = (1/3)tan(3x) + C."
    },
    {
      id: "id-23", tipo: "opcion", dificultad: "media",
      enunciado: "Calcula la integral:", formula: "∫ e^(−x) dx",
      opciones: ["−e^(−x) + C", "e^(−x) + C", "−x e^(−x) + C", "e^(x) + C"], correcta: 0,
      pista: "u = −x, du = −dx.",
      retro: "u = −x → du = −dx. −∫eᵘ du = −eᵘ = −e^(−x) + C."
    },
    {
      id: "id-24", tipo: "opcion", dificultad: "media",
      enunciado: "Calcula la integral:", formula: "∫ e^(x/2) dx",
      opciones: ["2 e^(x/2) + C", "(1/2) e^(x/2) + C", "e^(x/2) + C", "e^(x/2)/x + C"], correcta: 0,
      retro: "u = x/2, du = (1/2)dx → dx = 2 du. 2∫eᵘ du = 2e^(x/2) + C."
    },
    {
      id: "id-25", tipo: "opcion", dificultad: "dificil",
      enunciado: "Calcula la integral:", formula: "∫ e^(3x + 1) dx",
      opciones: ["(1/3) e^(3x + 1) + C", "e^(3x + 1) + C", "3 e^(3x + 1) + C", "(1/3) e^(3x) + C"], correcta: 0,
      retro: "u = 3x + 1, du = 3 dx → (1/3)∫eᵘ du = (1/3)e^(3x+1) + C."
    },
    {
      id: "id-26", tipo: "opcion", dificultad: "dificil",
      enunciado: "Calcula la integral:", formula: "∫ x / (x² + 1) dx",
      opciones: ["(1/2) ln(x² + 1) + C", "ln(x² + 1) + C", "(1/2)/(x² + 1) + C", "arctan x + C"], correcta: 0,
      pista: "u = x² + 1, du = 2x dx.",
      retro: "u = x² + 1, du = 2x dx → (1/2)∫du/u = (1/2)ln(x² + 1) + C."
    },
    {
      id: "id-27", tipo: "opcion", dificultad: "dificil",
      enunciado: "Calcula la integral:", formula: "∫ x² / (x³ − 5) dx",
      opciones: ["(1/3) ln|x³ − 5| + C", "ln|x³ − 5| + C", "(1/3)/(x³ − 5) + C", "3 ln|x| + C"], correcta: 0,
      retro: "u = x³ − 5, du = 3x² dx → (1/3)∫du/u = (1/3)ln|x³ − 5| + C."
    },
    {
      id: "id-28", tipo: "opcion", dificultad: "dificil",
      enunciado: "Calcula la integral:", formula: "∫ sen x / cos x dx",
      opciones: ["−ln|cos x| + C", "ln|cos x| + C", "ln|sen x| + C", "−ln|sen x| + C"], correcta: 0,
      pista: "u = cos x, du = −sen x dx.",
      retro: "u = cos x, du = −sen x dx → −∫du/u = −ln|cos x| + C. (equivale a ln|sec x| + C)"
    },
    {
      id: "id-29", tipo: "opcion", dificultad: "dificil",
      enunciado: "Calcula la integral:", formula: "∫ x √(x² + 1) dx",
      opciones: ["(1/3)(x² + 1)^(3/2) + C", "(x² + 1)^(3/2) + C", "(1/2)(x² + 1)^(1/2) + C", "x(x² + 1)^(1/2) + C"], correcta: 0,
      pista: "u = x² + 1, du = 2x dx. √u = u^(1/2).",
      retro: "u = x² + 1, du = 2x dx → (1/2)∫u^(1/2)du = (1/2)·(2/3)u^(3/2) = (1/3)(x² + 1)^(3/2) + C."
    },
    {
      id: "id-30", tipo: "opcion", dificultad: "dificil",
      enunciado: "Calcula la integral:", formula: "∫ x / √(x² + 4) dx",
      opciones: ["√(x² + 4) + C", "(1/2)√(x² + 4) + C", "2√(x² + 4) + C", "(x² + 4)^(1/2)/x + C"], correcta: 0,
      pista: "u = x² + 4, du = 2x dx. √u = u^(1/2).",
      retro: "(1/2)∫u^(−1/2)du = (1/2)·2u^(1/2) = u^(1/2) = √(x² + 4) + C."
    },
    {
      id: "id-31", tipo: "opcion", dificultad: "facil",
      enunciado: "¿Por qué se llama 'sustitución'?",
      opciones: ["Porque se sustituye una expresión compleja por una variable simple u", "Porque se sustituye la integral por una suma", "Porque sustituye a la derivada", "Porque sustituye el resultado por 0"], correcta: 0,
      retro: "Se reemplaza (sustituye) el argumento complicado por u para obtener una integral más sencilla."
    },
    {
      id: "id-32", tipo: "opcion", dificultad: "facil",
      enunciado: "En ∫ f(g(x))·g'(x) dx, ¿qué debe tomarse como u?",
      opciones: ["u = g(x)", "u = f(x)", "u = f(g(x))", "u = g'(x)"], correcta: 0,
      retro: "Se elige u = g(x) para que du = g'(x)dx, cancelando la derivada exterior."
    },
    {
      id: "id-33", tipo: "vf", dificultad: "media",
      enunciado: "¿Verdadero o falso? En la sustitución, si u = x³ entonces du = 3x² dx.",
      correcta: true,
      retro: "Verdadero. La derivada de u = x³ es du/dx = 3x², por tanto du = 3x² dx."
    },
    {
      id: "id-34", tipo: "opcion", dificultad: "media",
      enunciado: "Calcula la integral:", formula: "∫ 6x² (x³ + 4)³ dx",
      opciones: ["(x³ + 4)⁴/2 + C", "(x³ + 4)⁴ + C", "2(x³ + 4)⁴ + C", "(x³ + 4)³/3 + C"], correcta: 0,
      pista: "u = x³ + 4, du = 3x² dx → 6x² dx = 2 du.",
      retro: "6x² dx = 2 du → 2∫u³ du = 2u⁴/4 = u⁴/2 = (x³ + 4)⁴/2 + C."
    },
    {
      id: "id-35", tipo: "opcion", dificultad: "media",
      enunciado: "Calcula la integral:", formula: "∫ cos x · e^(sen x) dx",
      opciones: ["e^(sen x) + C", "cos x · e^(sen x) + C", "e^(sen x)/cos x + C", "sen x · e^(cos x) + C"], correcta: 0,
      pista: "u = sen x, du = cos x dx.",
      retro: "u = sen x, du = cos x dx → ∫eᵘ du = eᵘ = e^(sen x) + C."
    },
    {
      id: "id-36", tipo: "vf", dificultad: "media",
      enunciado: "¿Verdadero o falso? ∫ sen(x) / cos²(x) dx = (1/cos x) + C = sec x + C.",
      correcta: true,
      retro: "Verdadero. u = cos x, du = −sen x dx → −∫u⁻² du = u⁻¹ = 1/cos x = sec x + C."
    },
    {
      id: "id-37", tipo: "opcion", dificultad: "dificil",
      enunciado: "Calcula la integral:", formula: "∫ x² e^(x³) dx",
      opciones: ["(1/3) e^(x³) + C", "e^(x³) + C", "3x² e^(x³) + C", "(1/3) x³ e^(x³) + C"], correcta: 0,
      pista: "u = x³, du = 3x² dx.",
      retro: "u = x³, du = 3x² dx → (1/3)∫eᵘ du = (1/3)e^(x³) + C."
    },
    {
      id: "id-38", tipo: "opcion", dificultad: "media",
      enunciado: "Calcula la integral:", formula: "∫ (2x + 1)⁴ dx",
      opciones: ["(2x + 1)⁵/10 + C", "(2x + 1)⁵/5 + C", "2(2x + 1)⁵ + C", "(2x + 1)⁵ + C"], correcta: 0,
      pista: "u = 2x + 1, du = 2 dx → dx = du/2.",
      retro: "(1/2)∫u⁴ du = (1/2)·u⁵/5 = (2x + 1)⁵/10 + C."
    },
    {
      id: "id-39", tipo: "opcion", dificultad: "media",
      enunciado: "En ∫ sen(3x) dx, ¿cuánto vale el factor que aparece al sustituir?",
      opciones: ["1/3", "3", "−3", "−1/3"], correcta: 0,
      retro: "u = 3x, du = 3 dx → dx = du/3. Aparece el factor 1/3 delante de la integral."
    },
    {
      id: "id-40", tipo: "vf", dificultad: "facil",
      enunciado: "¿Verdadero o falso? ∫ 2x(x² + 1)³ dx se puede resolver con u = x² + 1 porque du = 2x dx está presente en el integrando.",
      correcta: true,
      retro: "Verdadero. El factor 2x dx coincide exactamente con du, haciendo posible la sustitución."
    },
    {
      id: "id-41", tipo: "opcion", dificultad: "dificil",
      enunciado: "Calcula la integral:", formula: "∫ ln x / x dx",
      opciones: ["(ln x)²/2 + C", "ln(ln x) + C", "(ln x)² + C", "1/(2x²) + C"], correcta: 0,
      pista: "u = ln x, du = (1/x) dx.",
      retro: "u = ln x, du = dx/x → ∫u du = u²/2 = (ln x)²/2 + C."
    },
    {
      id: "id-42", tipo: "opcion", dificultad: "dificil",
      enunciado: "Calcula la integral:", formula: "∫ x / (x² − 3)² dx",
      opciones: ["−1/(2(x² − 3)) + C", "1/(x² − 3) + C", "ln|x² − 3| + C", "−2/(x² − 3)² + C"], correcta: 0,
      pista: "u = x² − 3, du = 2x dx.",
      retro: "u = x² − 3 → (1/2)∫u⁻² du = (1/2)·(−u⁻¹) = −1/(2(x² − 3)) + C."
    },
    {
      id: "id-43", tipo: "opcion", dificultad: "facil",
      enunciado: "¿Cuál es la sustitución más apropiada para ∫ e^(x²) · 2x dx?",
      opciones: ["u = x²", "u = e^(x²)", "u = 2x", "u = x² + 2x"], correcta: 0,
      retro: "u = x², du = 2x dx, lo que coincide con el factor 2x presente en el integrando."
    },
    {
      id: "id-44", tipo: "opcion", dificultad: "media",
      enunciado: "Calcula la integral:", formula: "∫ cos x / (1 + sen x) dx",
      opciones: ["ln|1 + sen x| + C", "sen x/(1 + sen x) + C", "−ln|1 + sen x| + C", "cos x · ln x + C"], correcta: 0,
      pista: "u = 1 + sen x, du = cos x dx.",
      retro: "u = 1 + sen x, du = cos x dx → ∫du/u = ln|u| = ln|1 + sen x| + C."
    },
    {
      id: "id-45", tipo: "opcion", dificultad: "dificil",
      enunciado: "Calcula la integral:", formula: "∫ x³ (x⁴ + 5)⁶ dx",
      opciones: ["(x⁴ + 5)⁷/28 + C", "(x⁴ + 5)⁷/7 + C", "4x³(x⁴ + 5)⁶ + C", "(x⁴ + 5)⁷/4 + C"], correcta: 0,
      pista: "u = x⁴ + 5, du = 4x³ dx.",
      retro: "u = x⁴ + 5, du = 4x³ dx → (1/4)∫u⁶ du = (1/4)·u⁷/7 = (x⁴ + 5)⁷/28 + C."
    },
    {
      id: "id-46", tipo: "vf", dificultad: "dificil",
      enunciado: "¿Verdadero o falso? ∫ x (x² + 1)³ dx = (x² + 1)⁴/8 + C.",
      correcta: true,
      retro: "Verdadero. u = x² + 1, du = 2x dx → (1/2)∫u³ du = u⁴/8 = (x² + 1)⁴/8 + C."
    },
    {
      id: "id-47", tipo: "opcion", dificultad: "media",
      enunciado: "Calcula la integral:", formula: "∫ e^(−3x) dx",
      opciones: ["−(1/3) e^(−3x) + C", "(1/3) e^(−3x) + C", "3 e^(−3x) + C", "−e^(−3x) + C"], correcta: 0,
      retro: "u = −3x, du = −3 dx → −(1/3)∫eᵘ du = −(1/3)e^(−3x) + C."
    },
    {
      id: "id-48", tipo: "opcion", dificultad: "facil",
      enunciado: "¿Cuál de las siguientes NO se puede resolver directamente con u-sustitución simple?",
      opciones: ["∫ x eˣ dx", "∫ 2x e^(x²) dx", "∫ cos(5x) dx", "∫ e^(−x) dx"], correcta: 0,
      retro: "∫ x eˣ dx no tiene la forma f(g(x))·g'(x) con una sola u: requiere integración por partes."
    },
    {
      id: "id-49", tipo: "abierta", dificultad: "media",
      enunciado: "Para ∫ 3x² (x³ + 7)⁴ dx con u = x³ + 7, ¿cuánto vale du? (escribe la expresión)",
      respuestas: ["3x² dx", "3x²dx"],
      retro: "La derivada de u = x³ + 7 es du = 3x² dx, que coincide exactamente con el factor del integrando."
    },
    {
      id: "id-50", tipo: "opcion", dificultad: "dificil",
      enunciado: "Calcula la integral:", formula: "∫ sen³ x cos x dx",
      opciones: ["sen⁴ x / 4 + C", "cos⁴ x / 4 + C", "sen² x / 2 + C", "−cos⁴ x / 4 + C"], correcta: 0,
      pista: "u = sen x, du = cos x dx.",
      retro: "u = sen x, du = cos x dx → ∫u³ du = u⁴/4 = sen⁴ x/4 + C."
    }
  ]
};
