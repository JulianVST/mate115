/* ===================================================================
   BANCO DE PREGUNTAS · Integración por sustitución (cambio de variable)
   =================================================================== */
window.BANCO = window.BANCO || {};
window.BANCO["integracion-por-sustitucion"] = {
  config: { numPreguntas: 8, tiempoMin: 12 },
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
    }
  ]
};
