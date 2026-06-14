/* ===================================================================
   BANCO DE PREGUNTAS · Reducción de términos semejantes
   =================================================================== */
window.BANCO = window.BANCO || {};
window.BANCO["reduccion-terminos-semejantes"] = {
  config: { numPreguntas: 7, tiempoMin: 10 },
  preguntas: [
    {
      id: "id-01", tipo: "abierta", dificultad: "facil",
      enunciado: "Reduce (escribe el resultado, ej. 6x):", formula: "3x + 5x − 2x",
      respuestas: ["6x"],
      retro: "3 + 5 − 2 = 6 → 6x."
    },
    {
      id: "id-02", tipo: "opcion", dificultad: "facil",
      enunciado: "Reduce:", formula: "7a − 3a",
      opciones: ["4a", "10a", "4", "21a"], correcta: 0,
      retro: "7a − 3a = 4a."
    },
    {
      id: "id-03", tipo: "opcion", dificultad: "media",
      enunciado: "Reduce:", formula: "2x + 3y + 4x",
      opciones: ["6x + 3y", "9xy", "5x + 4y", "6x + 3"], correcta: 0,
      retro: "Suma solo los semejantes: (2x + 4x) + 3y = 6x + 3y."
    },
    {
      id: "id-04", tipo: "abierta", dificultad: "facil",
      enunciado: "Reduce:", formula: "8m + 2m",
      respuestas: ["10m"],
      retro: "8m + 2m = 10m."
    },
    {
      id: "id-05", tipo: "opcion", dificultad: "media",
      enunciado: "Reduce:", formula: "5x² + 2x²",
      opciones: ["7x²", "7x⁴", "10x²", "7x"], correcta: 0,
      retro: "Se suman los coeficientes y se conserva la parte literal: 7x²."
    },
    {
      id: "id-06", tipo: "opcion", dificultad: "media",
      enunciado: "¿Cuáles SÍ son términos semejantes?",
      opciones: ["3x y 5x", "3x y 5y", "3x y 3x²", "3 y 3x"], correcta: 0,
      retro: "Son semejantes si tienen la misma letra con el mismo exponente: 3x y 5x."
    },
    {
      id: "id-07", tipo: "vf", dificultad: "media",
      enunciado: "¿Verdadero o falso? 4x y 4x² son términos semejantes.",
      correcta: false,
      retro: "Falso. Tienen distinto exponente (x y x²), no son semejantes."
    },
    {
      id: "id-08", tipo: "abierta", dificultad: "facil",
      enunciado: "Reduce (escribe el resultado, ej. 6x):", formula: "10x − 4x",
      respuestas: ["6x"],
      retro: "10x − 4x = 6x."
    },
    {
      id: "id-09", tipo: "opcion", dificultad: "media",
      enunciado: "Reduce:", formula: "5a + 3b − 2a + b",
      opciones: ["3a + 4b", "6a + 4b", "3a + 3b", "8ab"], correcta: 0,
      retro: "(5a − 2a) + (3b + b) = 3a + 4b."
    },
    {
      id: "id-10", tipo: "abierta", dificultad: "media",
      enunciado: "Reduce:", formula: "7x² − 3x² + x²",
      respuestas: ["5x^2", "5x²"],
      retro: "7 − 3 + 1 = 5 → 5x²."
    },
    {
      id: "id-11", tipo: "opcion", dificultad: "facil",
      enunciado: "Reduce:", formula: "4m + 6m − 3m",
      opciones: ["7m", "13m", "1m", "7m²"], correcta: 0,
      retro: "4 + 6 − 3 = 7 → 7m."
    }
  ]
};
