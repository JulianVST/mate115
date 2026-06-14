/* ===================================================================
   BANCO DE PREGUNTAS · Simplificación de expresiones algebraicas
   =================================================================== */
window.BANCO = window.BANCO || {};
window.BANCO["simplificacion-expresiones-algebraicas"] = {
  config: { numPreguntas: 7, tiempoMin: 10 },
  preguntas: [
    {
      id: "id-01", tipo: "opcion", dificultad: "facil",
      enunciado: "Simplifica:", formula: "3x + 2x − x",
      opciones: ["4x", "5x", "6x", "4x²"], correcta: 0,
      retro: "Se suman y restan los coeficientes: 3 + 2 − 1 = 4 → 4x."
    },
    {
      id: "id-02", tipo: "abierta", dificultad: "facil",
      enunciado: "Simplifica (escribe el resultado, ej. 8a):", formula: "5a + 3a",
      respuestas: ["8a"],
      retro: "5a + 3a = 8a."
    },
    {
      id: "id-03", tipo: "opcion", dificultad: "facil",
      enunciado: "Desarrolla:", formula: "2(x + 3)",
      opciones: ["2x + 6", "2x + 3", "x + 6", "2x + 5"], correcta: 0,
      retro: "Propiedad distributiva: 2·x + 2·3 = 2x + 6."
    },
    {
      id: "id-04", tipo: "opcion", dificultad: "media",
      enunciado: "Simplifica:", formula: "4x + 2y − x + 3y",
      opciones: ["3x + 5y", "5x + 5y", "3x + 6y", "6xy"], correcta: 0,
      retro: "Agrupa semejantes: (4x − x) + (2y + 3y) = 3x + 5y."
    },
    {
      id: "id-05", tipo: "abierta", dificultad: "facil",
      enunciado: "Simplifica:", formula: "7m − 2m",
      respuestas: ["5m"],
      retro: "7m − 2m = 5m."
    },
    {
      id: "id-06", tipo: "opcion", dificultad: "media",
      enunciado: "Desarrolla:", formula: "3(2x − 1)",
      opciones: ["6x − 3", "6x − 1", "5x − 3", "6x + 3"], correcta: 0,
      retro: "3·2x − 3·1 = 6x − 3."
    },
    {
      id: "id-07", tipo: "vf", dificultad: "media",
      enunciado: "¿Verdadero o falso? La expresión 3x + 2y se puede simplificar a 5xy.",
      correcta: false,
      retro: "Falso. 3x y 2y NO son términos semejantes, no se pueden sumar."
    },
    {
      id: "id-08", tipo: "opcion", dificultad: "media",
      enunciado: "Simplifica:", formula: "2(x + 1) + 3x",
      opciones: ["5x + 2", "5x + 1", "6x + 2", "2x + 5"], correcta: 0,
      retro: "2x + 2 + 3x = 5x + 2."
    },
    {
      id: "id-09", tipo: "abierta", dificultad: "facil",
      enunciado: "Simplifica:", formula: "6y − y",
      respuestas: ["5y"],
      retro: "6y − y = 5y."
    },
    {
      id: "id-10", tipo: "opcion", dificultad: "media",
      enunciado: "Simplifica:", formula: "4(x − 2) − 2x",
      opciones: ["2x − 8", "6x − 8", "2x − 2", "2x + 8"], correcta: 0,
      retro: "4x − 8 − 2x = 2x − 8."
    },
    {
      id: "id-11", tipo: "vf", dificultad: "media",
      enunciado: "¿Verdadero o falso? 5x − 5x = 0.",
      correcta: true,
      retro: "Verdadero, términos iguales que se cancelan."
    }
  ]
};
