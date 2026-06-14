/* ===================================================================
   BANCO DE PREGUNTAS · Productos notables I
   (Binomio al cuadrado y binomios conjugados)
   =================================================================== */
window.BANCO = window.BANCO || {};
window.BANCO["productos-notables-1"] = {
  config: { numPreguntas: 7, tiempoMin: 10 },
  preguntas: [
    {
      id: "id-01", tipo: "opcion", dificultad: "facil",
      enunciado: "Desarrolla:", formula: "(x + 3)²",
      opciones: ["x² + 6x + 9", "x² + 9", "x² + 3x + 9", "x² + 6x + 6"], correcta: 0,
      pista: "(a + b)² = a² + 2ab + b².",
      retro: "x² + 2(x)(3) + 3² = x² + 6x + 9."
    },
    {
      id: "id-02", tipo: "opcion", dificultad: "media",
      enunciado: "Desarrolla:", formula: "(x − 5)²",
      opciones: ["x² − 10x + 25", "x² + 25", "x² − 25", "x² − 10x − 25"], correcta: 0,
      retro: "(a − b)² = a² − 2ab + b² → x² − 10x + 25."
    },
    {
      id: "id-03", tipo: "opcion", dificultad: "facil",
      enunciado: "Desarrolla:", formula: "(x + 2)(x − 2)",
      opciones: ["x² − 4", "x² + 4", "x² − 4x", "x² − 2"], correcta: 0,
      pista: "Binomios conjugados: (a + b)(a − b) = a² − b².",
      retro: "x² − 2² = x² − 4."
    },
    {
      id: "id-04", tipo: "opcion", dificultad: "facil",
      enunciado: "Desarrolla:", formula: "(x + 1)²",
      opciones: ["x² + 2x + 1", "x² + 1", "x² + 2x", "2x + 1"], correcta: 0,
      retro: "x² + 2(x)(1) + 1 = x² + 2x + 1."
    },
    {
      id: "id-05", tipo: "opcion", dificultad: "dificil",
      enunciado: "Desarrolla:", formula: "(2x + 3)²",
      opciones: ["4x² + 12x + 9", "4x² + 9", "2x² + 12x + 9", "4x² + 6x + 9"], correcta: 0,
      retro: "(2x)² + 2(2x)(3) + 3² = 4x² + 12x + 9."
    },
    {
      id: "id-06", tipo: "opcion", dificultad: "media",
      enunciado: "¿Cuál es el desarrollo de (a − b)²?",
      opciones: ["a² − 2ab + b²", "a² − b²", "a² + 2ab + b²", "a² − ab + b²"], correcta: 0,
      retro: "(a − b)² = a² − 2ab + b²."
    },
    {
      id: "id-07", tipo: "vf", dificultad: "media",
      enunciado: "¿Verdadero o falso? (x + y)² = x² + y².",
      correcta: false,
      retro: "Falso. Falta el doble producto: (x + y)² = x² + 2xy + y²."
    },
    {
      id: "id-08", tipo: "opcion", dificultad: "media",
      enunciado: "Desarrolla:", formula: "(x + 4)²",
      opciones: ["x² + 8x + 16", "x² + 16", "x² + 8x + 8", "x² + 4x + 16"], correcta: 0,
      retro: "x² + 2(4)x + 16 = x² + 8x + 16."
    },
    {
      id: "id-09", tipo: "opcion", dificultad: "media",
      enunciado: "Desarrolla:", formula: "(x − 3)²",
      opciones: ["x² − 6x + 9", "x² + 9", "x² − 9", "x² − 6x − 9"], correcta: 0,
      retro: "x² − 2(3)x + 9 = x² − 6x + 9."
    },
    {
      id: "id-10", tipo: "opcion", dificultad: "facil",
      enunciado: "Desarrolla:", formula: "(x + 6)(x − 6)",
      opciones: ["x² − 36", "x² + 36", "x² − 12x − 36", "x² − 6"], correcta: 0,
      retro: "Binomios conjugados: x² − 36."
    },
    {
      id: "id-11", tipo: "opcion", dificultad: "dificil",
      enunciado: "Desarrolla:", formula: "(3x − 2)²",
      opciones: ["9x² − 12x + 4", "9x² + 4", "9x² − 12x − 4", "3x² − 12x + 4"], correcta: 0,
      retro: "(3x)² − 2(3x)(2) + 2² = 9x² − 12x + 4."
    }
  ]
};
