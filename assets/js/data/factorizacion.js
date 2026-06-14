/* ===================================================================
   BANCO DE PREGUNTAS · Factorización
   =================================================================== */
window.BANCO = window.BANCO || {};
window.BANCO["factorizacion"] = {
  config: { numPreguntas: 8, tiempoMin: 12 },
  preguntas: [
    {
      id: "id-01", tipo: "opcion", dificultad: "media",
      enunciado: "Factoriza:", formula: "x² − 9",
      opciones: ["(x + 3)(x − 3)", "(x − 3)²", "(x + 3)²", "(x − 9)(x + 1)"], correcta: 0,
      pista: "Diferencia de cuadrados: a² − b² = (a + b)(a − b).",
      retro: "x² − 9 = (x + 3)(x − 3)."
    },
    {
      id: "id-02", tipo: "opcion", dificultad: "media",
      enunciado: "Factoriza:", formula: "x² + 5x + 6",
      opciones: ["(x + 2)(x + 3)", "(x + 1)(x + 6)", "(x + 2)(x + 4)", "(x − 2)(x − 3)"], correcta: 0,
      pista: "Busca dos números que multiplicados den 6 y sumados den 5.",
      retro: "2 y 3: (x + 2)(x + 3)."
    },
    {
      id: "id-03", tipo: "opcion", dificultad: "facil",
      enunciado: "Saca el factor común:", formula: "4x + 8",
      opciones: ["4(x + 2)", "4x(2)", "2(2x + 8)", "4(x + 8)"], correcta: 0,
      retro: "El factor común es 4: 4(x + 2)."
    },
    {
      id: "id-04", tipo: "opcion", dificultad: "media",
      enunciado: "Factoriza:", formula: "x² − 16",
      opciones: ["(x + 4)(x − 4)", "(x − 4)²", "(x + 4)²", "(x − 16)(x + 1)"], correcta: 0,
      retro: "Diferencia de cuadrados: (x + 4)(x − 4)."
    },
    {
      id: "id-05", tipo: "opcion", dificultad: "media",
      enunciado: "Factoriza:", formula: "x² + 7x + 12",
      opciones: ["(x + 3)(x + 4)", "(x + 2)(x + 6)", "(x + 1)(x + 12)", "(x + 5)(x + 2)"], correcta: 0,
      retro: "3 y 4 multiplican 12 y suman 7: (x + 3)(x + 4)."
    },
    {
      id: "id-06", tipo: "opcion", dificultad: "media",
      enunciado: "Saca el factor común:", formula: "6x² + 9x",
      opciones: ["3x(2x + 3)", "3(2x² + 3x)", "x(6x + 9)", "3x(2x + 9)"], correcta: 0,
      retro: "El factor común es 3x: 3x(2x + 3)."
    },
    {
      id: "id-07", tipo: "opcion", dificultad: "dificil",
      enunciado: "Factoriza:", formula: "x² − 2x − 8",
      opciones: ["(x − 4)(x + 2)", "(x + 4)(x − 2)", "(x − 4)(x − 2)", "(x + 8)(x − 1)"], correcta: 0,
      pista: "Dos números que multipliquen −8 y sumen −2.",
      retro: "−4 y +2: (x − 4)(x + 2)."
    },
    {
      id: "id-08", tipo: "vf", dificultad: "facil",
      enunciado: "¿Verdadero o falso? x² − 25 = (x − 5)(x + 5).",
      correcta: true,
      retro: "Verdadero. Es una diferencia de cuadrados."
    },
    {
      id: "id-09", tipo: "opcion", dificultad: "media",
      enunciado: "Factoriza:", formula: "x² − 1",
      opciones: ["(x + 1)(x − 1)", "(x − 1)²", "(x + 1)²", "x(x − 1)"], correcta: 0,
      retro: "Diferencia de cuadrados: (x + 1)(x − 1)."
    },
    {
      id: "id-10", tipo: "opcion", dificultad: "media",
      enunciado: "Factoriza:", formula: "x² + 8x + 15",
      opciones: ["(x + 3)(x + 5)", "(x + 1)(x + 15)", "(x + 4)(x + 4)", "(x + 2)(x + 6)"], correcta: 0,
      retro: "3 y 5 multiplican 15 y suman 8."
    },
    {
      id: "id-11", tipo: "opcion", dificultad: "facil",
      enunciado: "Saca el factor común:", formula: "9x − 12",
      opciones: ["3(3x − 4)", "9(x − 12)", "3(3x − 12)", "x(9 − 12)"], correcta: 0,
      retro: "El factor común es 3: 3(3x − 4)."
    },
    {
      id: "id-12", tipo: "opcion", dificultad: "dificil",
      enunciado: "Factoriza:", formula: "x² − x − 6",
      opciones: ["(x − 3)(x + 2)", "(x + 3)(x − 2)", "(x − 3)(x − 2)", "(x − 6)(x + 1)"], correcta: 0,
      retro: "−3 y +2 multiplican −6 y suman −1."
    },
    {
      id: "id-13", tipo: "vf", dificultad: "media",
      enunciado: "¿Verdadero o falso? x² + 6x + 9 = (x + 3)².",
      correcta: true,
      retro: "Verdadero, es un trinomio cuadrado perfecto."
    }
  ]
};
