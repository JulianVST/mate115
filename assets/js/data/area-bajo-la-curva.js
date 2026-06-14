/* ===================================================================
   BANCO DE PREGUNTAS · Área bajo la curva
   =================================================================== */
window.BANCO = window.BANCO || {};
window.BANCO["area-bajo-la-curva"] = {
  config: { numPreguntas: 8, tiempoMin: 12 },
  preguntas: [
    {
      id: "id-01", tipo: "abierta", dificultad: "facil",
      enunciado: "Área bajo la recta y = 2x entre x = 0 y x = 4 (escribe el número):",
      respuestas: ["16"],
      pista: "Calcula ∫₀⁴ 2x dx, o piensa en el triángulo de base 4 y altura 8.",
      retro: "∫₀⁴ 2x dx = [x²]₀⁴ = 16. (Triángulo: base 4 × altura 8 ÷ 2 = 16.)"
    },
    {
      id: "id-02", tipo: "abierta", dificultad: "media",
      enunciado: "Área bajo y = x² entre x = 0 y x = 3:",
      respuestas: ["9"],
      retro: "∫₀³ x² dx = [x³/3]₀³ = 27/3 = 9."
    },
    {
      id: "id-03", tipo: "abierta", dificultad: "facil",
      enunciado: "Área bajo y = 3 (recta horizontal) entre x = 0 y x = 5:",
      respuestas: ["15"],
      retro: "Es un rectángulo: base 5 × altura 3 = 15. También ∫₀⁵ 3 dx = 15."
    },
    {
      id: "id-04", tipo: "abierta", dificultad: "facil",
      enunciado: "Área bajo y = x entre x = 0 y x = 6:",
      respuestas: ["18"],
      retro: "∫₀⁶ x dx = [x²/2]₀⁶ = 36/2 = 18 (triángulo base 6, altura 6)."
    },
    {
      id: "id-05", tipo: "abierta", dificultad: "media",
      enunciado: "Área bajo y = 4x entre x = 0 y x = 2:",
      respuestas: ["8"],
      retro: "∫₀² 4x dx = [2x²]₀² = 8."
    },
    {
      id: "id-06", tipo: "opcion", dificultad: "facil",
      enunciado: "¿Qué herramienta se usa para hallar el área exacta bajo una curva entre a y b?",
      opciones: ["La integral definida ∫ₐᵇ f(x) dx", "La derivada f'(x)", "La pendiente de la recta", "El promedio de los valores"], correcta: 0,
      retro: "El área bajo la curva se calcula con la integral definida."
    },
    {
      id: "id-07", tipo: "opcion", dificultad: "media",
      enunciado: "Área bajo y = x² entre x = 0 y x = 2:",
      opciones: ["8/3", "4", "8", "2"], correcta: 0,
      retro: "∫₀² x² dx = [x³/3]₀² = 8/3 ≈ 2.67."
    },
    {
      id: "id-08", tipo: "vf", dificultad: "media",
      enunciado: "¿Verdadero o falso? El área bajo la curva puede pensarse como la suma de infinitos rectángulos muy delgados.",
      correcta: true,
      retro: "Verdadero. Esa es la idea de las sumas de Riemann que da origen a la integral."
    },
    {
      id: "id-09", tipo: "abierta", dificultad: "facil",
      enunciado: "Área bajo y = 5 entre x = 0 y x = 4:",
      respuestas: ["20"],
      retro: "Rectángulo: 5 × 4 = 20."
    },
    {
      id: "id-10", tipo: "abierta", dificultad: "media",
      enunciado: "Área bajo y = 6x entre x = 0 y x = 3:",
      respuestas: ["27"],
      retro: "∫₀³ 6x dx = [3x²]₀³ = 27."
    },
    {
      id: "id-11", tipo: "abierta", dificultad: "dificil",
      enunciado: "Área bajo y = x² entre x = 0 y x = 4:",
      respuestas: ["64/3", "21.33", "21.3"],
      retro: "[x³/3]₀⁴ = 64/3 ≈ 21.33."
    },
    {
      id: "id-12", tipo: "abierta", dificultad: "facil",
      enunciado: "Área bajo y = 2x entre x = 0 y x = 5:",
      respuestas: ["25"],
      retro: "[x²]₀⁵ = 25 (triángulo base 5, altura 10)."
    },
    {
      id: "id-13", tipo: "opcion", dificultad: "media",
      enunciado: "Si una parte de la curva queda POR DEBAJO del eje X, su integral sale:",
      opciones: ["Negativa", "Positiva", "Siempre cero", "Infinita"], correcta: 0,
      retro: "El área bajo el eje X aporta valor negativo a la integral."
    },
    {
      id: "id-14", tipo: "abierta", dificultad: "media",
      enunciado: "Área bajo y = 3x² entre x = 0 y x = 2:",
      respuestas: ["8"],
      retro: "∫₀² 3x² dx = [x³]₀² = 8."
    }
  ]
};
