/* ===================================================================
   BANCO DE PREGUNTAS · Productos notables II
   (Binomio al cubo y binomios con término común)
   =================================================================== */
window.BANCO = window.BANCO || {};
window.BANCO["productos-notables-2"] = {
  config: { numPreguntas: 7, tiempoMin: 12 },
  preguntas: [
    {
      id: "id-01", tipo: "opcion", dificultad: "dificil",
      enunciado: "Desarrolla:", formula: "(x + 1)³",
      opciones: ["x³ + 3x² + 3x + 1", "x³ + 1", "x³ + 3x + 1", "x³ + x² + x + 1"], correcta: 0,
      pista: "(a + b)³ = a³ + 3a²b + 3ab² + b³.",
      retro: "x³ + 3x²(1) + 3x(1²) + 1³ = x³ + 3x² + 3x + 1."
    },
    {
      id: "id-02", tipo: "opcion", dificultad: "media",
      enunciado: "Desarrolla:", formula: "(x + 2)(x + 3)",
      opciones: ["x² + 5x + 6", "x² + 6x + 5", "x² + 5x + 5", "x² + 6"], correcta: 0,
      pista: "(x + a)(x + b) = x² + (a + b)x + ab.",
      retro: "x² + (2 + 3)x + (2·3) = x² + 5x + 6."
    },
    {
      id: "id-03", tipo: "opcion", dificultad: "media",
      enunciado: "Desarrolla:", formula: "(x + 4)(x − 2)",
      opciones: ["x² + 2x − 8", "x² − 2x − 8", "x² + 2x + 8", "x² + 6x − 8"], correcta: 0,
      retro: "x² + (4 − 2)x + (4)(−2) = x² + 2x − 8."
    },
    {
      id: "id-04", tipo: "opcion", dificultad: "dificil",
      enunciado: "Desarrolla:", formula: "(a − b)³",
      opciones: ["a³ − 3a²b + 3ab² − b³", "a³ − b³", "a³ + 3a²b + 3ab² + b³", "a³ − 3ab − b³"], correcta: 0,
      retro: "(a − b)³ = a³ − 3a²b + 3ab² − b³ (los signos se alternan)."
    },
    {
      id: "id-05", tipo: "opcion", dificultad: "media",
      enunciado: "Desarrolla:", formula: "(x − 1)(x − 4)",
      opciones: ["x² − 5x + 4", "x² + 5x + 4", "x² − 5x − 4", "x² − 3x + 4"], correcta: 0,
      retro: "x² + (−1 − 4)x + (−1)(−4) = x² − 5x + 4."
    },
    {
      id: "id-06", tipo: "opcion", dificultad: "media",
      enunciado: "Desarrolla:", formula: "(x + 6)(x − 1)",
      opciones: ["x² + 5x − 6", "x² − 5x − 6", "x² + 7x − 6", "x² + 5x + 6"], correcta: 0,
      retro: "x² + (6 − 1)x + (6)(−1) = x² + 5x − 6."
    },
    {
      id: "id-07", tipo: "vf", dificultad: "facil",
      enunciado: "¿Verdadero o falso? (x + 5)(x − 5) = x² − 25.",
      correcta: true,
      retro: "Verdadero. Son binomios conjugados: a² − b² = x² − 25."
    },
    {
      id: "id-08", tipo: "opcion", dificultad: "media",
      enunciado: "Desarrolla:", formula: "(x + 5)(x + 2)",
      opciones: ["x² + 7x + 10", "x² + 10x + 7", "x² + 7x + 7", "x² + 3x + 10"], correcta: 0,
      retro: "x² + (5 + 2)x + 10 = x² + 7x + 10."
    },
    {
      id: "id-09", tipo: "opcion", dificultad: "dificil",
      enunciado: "Desarrolla:", formula: "(x − 2)³",
      opciones: ["x³ − 6x² + 12x − 8", "x³ − 8", "x³ + 6x² + 12x + 8", "x³ − 6x² − 12x − 8"], correcta: 0,
      retro: "(a − b)³ = a³ − 3a²b + 3ab² − b³ con a = x, b = 2."
    },
    {
      id: "id-10", tipo: "opcion", dificultad: "media",
      enunciado: "Desarrolla:", formula: "(x − 3)(x + 5)",
      opciones: ["x² + 2x − 15", "x² − 2x − 15", "x² + 2x + 15", "x² + 8x − 15"], correcta: 0,
      retro: "x² + (−3 + 5)x + (−15) = x² + 2x − 15."
    },
    {
      id: "id-11", tipo: "opcion", dificultad: "facil",
      enunciado: "Desarrolla:", formula: "(x + 7)(x − 7)",
      opciones: ["x² − 49", "x² + 49", "x² − 14x − 49", "x² − 7"], correcta: 0,
      retro: "Binomios conjugados: x² − 49."
    }
  ]
};
