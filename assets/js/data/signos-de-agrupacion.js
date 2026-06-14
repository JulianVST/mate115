/* ===================================================================
   BANCO DE PREGUNTAS · Signos de agrupación
   =================================================================== */
window.BANCO = window.BANCO || {};
window.BANCO["signos-de-agrupacion"] = {
  config: { numPreguntas: 7, tiempoMin: 10 },
  preguntas: [
    {
      id: "id-01", tipo: "opcion", dificultad: "media",
      enunciado: "Quita el paréntesis:", formula: "−(x − 3)",
      opciones: ["−x + 3", "−x − 3", "x − 3", "x + 3"], correcta: 0,
      pista: "Un signo − antes del paréntesis cambia TODOS los signos de adentro.",
      retro: "−(x − 3) = −x + 3."
    },
    {
      id: "id-02", tipo: "opcion", dificultad: "facil",
      enunciado: "Resuelve:", formula: "2 + (3 − 1)",
      opciones: ["4", "6", "0", "2"], correcta: 0,
      retro: "2 + (2) = 4."
    },
    {
      id: "id-03", tipo: "opcion", dificultad: "facil",
      enunciado: "Resuelve:", formula: "5 − (2 + 1)",
      opciones: ["2", "4", "8", "3"], correcta: 0,
      retro: "5 − 3 = 2."
    },
    {
      id: "id-04", tipo: "opcion", dificultad: "dificil",
      enunciado: "Quita los paréntesis:", formula: "a − (b − c)",
      opciones: ["a − b + c", "a − b − c", "a + b − c", "a + b + c"], correcta: 0,
      retro: "El − cambia los signos: a − b + c."
    },
    {
      id: "id-05", tipo: "abierta", dificultad: "facil",
      enunciado: "Resuelve (escribe el número):", formula: "10 − (4 + 3)",
      respuestas: ["3"],
      retro: "10 − 7 = 3."
    },
    {
      id: "id-06", tipo: "opcion", dificultad: "media",
      enunciado: "Simplifica:", formula: "−(−x)",
      opciones: ["x", "−x", "0", "−2x"], correcta: 0,
      retro: "Dos signos negativos se vuelven positivo: −(−x) = x."
    },
    {
      id: "id-07", tipo: "vf", dificultad: "media",
      enunciado: "¿Verdadero o falso? Al quitar un paréntesis precedido por signo +, los signos de adentro NO cambian.",
      correcta: true,
      retro: "Verdadero. Por ejemplo +(x − 2) = x − 2."
    },
    {
      id: "id-08", tipo: "opcion", dificultad: "media",
      enunciado: "Quita los signos de agrupación:", formula: "x + (y − z)",
      opciones: ["x + y − z", "x − y + z", "x + y + z", "x − y − z"], correcta: 0,
      retro: "Con + adelante, los signos no cambian: x + y − z."
    },
    {
      id: "id-09", tipo: "abierta", dificultad: "facil",
      enunciado: "Resuelve (escribe el número):", formula: "8 + (2 − 5)",
      respuestas: ["5"],
      retro: "8 + (−3) = 5."
    },
    {
      id: "id-10", tipo: "opcion", dificultad: "dificil",
      enunciado: "Simplifica:", formula: "2x − [3 − (x − 1)]",
      opciones: ["3x − 4", "x − 4", "3x − 2", "x + 4"], correcta: 0,
      retro: "Dentro: 3 − (x − 1) = 3 − x + 1 = 4 − x. Luego 2x − (4 − x) = 3x − 4."
    },
    {
      id: "id-11", tipo: "abierta", dificultad: "facil",
      enunciado: "Resuelve:", formula: "(6 − 2) − (1 + 1)",
      respuestas: ["2"],
      retro: "4 − 2 = 2."
    }
  ]
};
