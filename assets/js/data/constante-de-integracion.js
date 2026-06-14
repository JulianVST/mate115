/* ===================================================================
   BANCO DE PREGUNTAS · Constante de integración
   =================================================================== */
window.BANCO = window.BANCO || {};
window.BANCO["constante-de-integracion"] = {
  config: { numPreguntas: 8, tiempoMin: 12 },
  preguntas: [
    {
      id: "id-01", tipo: "abierta", dificultad: "facil",
      enunciado: "Si F'(x) = 2x y F(0) = 3, ¿cuánto vale la constante C? (escribe solo el número)",
      respuestas: ["3"],
      pista: "Integra primero: F(x) = x² + C, luego sustituye el punto.",
      retro: "F(x) = x² + C. Como F(0) = 0 + C = 3, entonces C = 3."
    },
    {
      id: "id-02", tipo: "abierta", dificultad: "media",
      enunciado: "Si f'(x) = 3x² y f(1) = 5, ¿cuánto vale C?",
      respuestas: ["4"],
      retro: "f(x) = x³ + C. f(1) = 1 + C = 5 → C = 4."
    },
    {
      id: "id-03", tipo: "abierta", dificultad: "facil",
      enunciado: "Si F'(x) = 4 y F(2) = 10, ¿cuánto vale C?",
      respuestas: ["2"],
      retro: "F(x) = 4x + C. F(2) = 8 + C = 10 → C = 2."
    },
    {
      id: "id-04", tipo: "abierta", dificultad: "media",
      enunciado: "Si F'(x) = x y F(2) = 10, ¿cuánto vale C?",
      respuestas: ["8"],
      retro: "F(x) = x²/2 + C. F(2) = 2 + C = 10 → C = 8."
    },
    {
      id: "id-05", tipo: "opcion", dificultad: "facil",
      enunciado: "¿Por qué se agrega + C al resolver una integral indefinida?",
      opciones: [
        "Porque muchas funciones tienen la misma derivada y difieren solo en una constante",
        "Porque la integral siempre vale cero",
        "Porque C representa el área",
        "Porque es un error de escritura"
      ], correcta: 0,
      retro: "La derivada de una constante es 0, así que al integrar puede haber cualquier constante: + C."
    },
    {
      id: "id-06", tipo: "opcion", dificultad: "media",
      enunciado: "Si F'(x) = 2x + 1 y F(0) = 4, ¿cuál es F(x)?",
      opciones: ["x² + x + 4", "x² + x", "2x² + x + 4", "x² + 4"], correcta: 0,
      retro: "F(x) = x² + x + C. F(0) = C = 4 → F(x) = x² + x + 4."
    },
    {
      id: "id-07", tipo: "opcion", dificultad: "media",
      enunciado: "Si f'(x) = 6x y f(1) = 10, ¿cuál es f(x)?",
      opciones: ["3x² + 7", "3x² + 10", "6x² + 4", "3x² + 4"], correcta: 0,
      retro: "f(x) = 3x² + C. f(1) = 3 + C = 10 → C = 7 → 3x² + 7."
    },
    {
      id: "id-08", tipo: "vf", dificultad: "facil",
      enunciado: "¿Verdadero o falso? La derivada de cualquier constante es 0, y por eso al integrar aparece + C.",
      correcta: true,
      retro: "Verdadero. Esa es justamente la razón de la constante de integración."
    },
    {
      id: "id-09", tipo: "abierta", dificultad: "media",
      enunciado: "Si f'(x) = 2x + 3 y f(0) = 5, ¿cuánto vale C?",
      respuestas: ["5"],
      retro: "f(x) = x² + 3x + C. f(0) = C = 5."
    },
    {
      id: "id-10", tipo: "abierta", dificultad: "media",
      enunciado: "Si F'(x) = 4x y F(1) = 6, ¿cuánto vale C?",
      respuestas: ["4"],
      retro: "F(x) = 2x² + C. F(1) = 2 + C = 6 → C = 4."
    },
    {
      id: "id-11", tipo: "abierta", dificultad: "dificil",
      enunciado: "Si f'(x) = 3x² − 2 y f(2) = 10, ¿cuánto vale C?",
      respuestas: ["6"],
      retro: "f(x) = x³ − 2x + C. f(2) = 8 − 4 + C = 4 + C = 10 → C = 6."
    },
    {
      id: "id-12", tipo: "opcion", dificultad: "media",
      enunciado: "Si F'(x) = 2 y F(3) = 10, ¿cuál es F(x)?",
      opciones: ["2x + 4", "2x + 10", "2x", "2x + 6"], correcta: 0,
      retro: "F(x) = 2x + C. F(3) = 6 + C = 10 → C = 4 → 2x + 4."
    },
    {
      id: "id-13", tipo: "abierta", dificultad: "facil",
      enunciado: "Si F'(x) = 5 y F(0) = 9, ¿cuánto vale C?",
      respuestas: ["9"],
      retro: "F(x) = 5x + C. F(0) = C = 9."
    }
  ]
};
