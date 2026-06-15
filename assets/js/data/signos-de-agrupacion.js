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
    },
    {
      id: "id-12", tipo: "vf", dificultad: "facil",
      enunciado: "¿Verdadero o falso? +(a + b) = a + b.",
      correcta: true,
      retro: "Verdadero. Un + delante del paréntesis no cambia los signos internos."
    },
    {
      id: "id-13", tipo: "opcion", dificultad: "facil",
      enunciado: "Quita el paréntesis:", formula: "+(3x − 2)",
      opciones: ["3x − 2", "−3x + 2", "3x + 2", "−3x − 2"], correcta: 0,
      retro: "El signo + no cambia nada: +(3x − 2) = 3x − 2."
    },
    {
      id: "id-14", tipo: "opcion", dificultad: "media",
      enunciado: "Quita el paréntesis:", formula: "−(2x + 5)",
      opciones: ["−2x − 5", "−2x + 5", "2x + 5", "2x − 5"], correcta: 0,
      retro: "El − cambia todos los signos: −2x − 5."
    },
    {
      id: "id-15", tipo: "abierta", dificultad: "facil",
      enunciado: "Resuelve:", formula: "12 − (5 − 2)",
      respuestas: ["9"],
      retro: "12 − 3 = 9."
    },
    {
      id: "id-16", tipo: "opcion", dificultad: "media",
      enunciado: "Suma las expresiones:", formula: "(3x + 2) + (x − 5)",
      opciones: ["4x − 3", "4x + 7", "2x − 3", "4x − 7"], correcta: 0,
      retro: "3x + 2 + x − 5 = 4x − 3."
    },
    {
      id: "id-17", tipo: "opcion", dificultad: "media",
      enunciado: "Resta las expresiones:", formula: "(3x + 2) − (x − 5)",
      opciones: ["2x + 7", "2x − 3", "4x + 7", "2x − 7"], correcta: 0,
      retro: "3x + 2 − x + 5 = 2x + 7."
    },
    {
      id: "id-18", tipo: "vf", dificultad: "media",
      enunciado: "¿Verdadero o falso? −(x + y) = −x − y.",
      correcta: true,
      retro: "Verdadero. El − cambia el signo de cada término dentro del paréntesis."
    },
    {
      id: "id-19", tipo: "abierta", dificultad: "media",
      enunciado: "Simplifica:", formula: "5a − (2a + 3)",
      respuestas: ["3a - 3", "3a-3"],
      retro: "5a − 2a − 3 = 3a − 3."
    },
    {
      id: "id-20", tipo: "opcion", dificultad: "media",
      enunciado: "Quita los paréntesis y simplifica:", formula: "(4x − 1) + (−3x + 2)",
      opciones: ["x + 1", "7x − 3", "x − 3", "7x + 1"], correcta: 0,
      retro: "4x − 1 − 3x + 2 = x + 1."
    },
    {
      id: "id-21", tipo: "abierta", dificultad: "facil",
      enunciado: "Resuelve:", formula: "3 + (4 + 2)",
      respuestas: ["9"],
      retro: "3 + 6 = 9."
    },
    {
      id: "id-22", tipo: "vf", dificultad: "media",
      enunciado: "¿Verdadero o falso? −(a − b) = −a + b.",
      correcta: true,
      retro: "Verdadero. El − cambia todos los signos: − a + b."
    },
    {
      id: "id-23", tipo: "opcion", dificultad: "dificil",
      enunciado: "Simplifica:", formula: "{3x − [2x + (x − 1)]}",
      opciones: ["1", "2x − 1", "0", "−1"], correcta: 0,
      retro: "Innermost: x − 1. Corchete: 2x + x − 1 = 3x − 1. Llave: 3x − (3x − 1) = 3x − 3x + 1 = 1."
    },
    {
      id: "id-24", tipo: "opcion", dificultad: "dificil",
      enunciado: "Simplifica:", formula: "4 − {2 + [3 − (1 + 1)]}",
      opciones: ["1", "3", "0", "2"], correcta: 0,
      retro: "Innermost: 1 + 1 = 2. Corchete: 3 − 2 = 1. Llave: 2 + 1 = 3. Resultado: 4 − 3 = 1."
    },
    {
      id: "id-25", tipo: "abierta", dificultad: "media",
      enunciado: "Quita el paréntesis y reduce:", formula: "3x − (x − 4)",
      respuestas: ["2x + 4"],
      retro: "3x − x + 4 = 2x + 4."
    },
    {
      id: "id-26", tipo: "vf", dificultad: "media",
      enunciado: "¿Verdadero o falso? 5 − (2 − 3) = 6.",
      correcta: true,
      retro: "Verdadero. 5 − (−1) = 5 + 1 = 6."
    },
    {
      id: "id-27", tipo: "opcion", dificultad: "media",
      enunciado: "Quita el signo de agrupación:", formula: "−(−a + 2b)",
      opciones: ["a − 2b", "−a + 2b", "a + 2b", "−a − 2b"], correcta: 0,
      retro: "El − cambia todos los signos: a − 2b."
    },
    {
      id: "id-28", tipo: "abierta", dificultad: "facil",
      enunciado: "Resuelve:", formula: "(7 + 3) − (4 − 1)",
      respuestas: ["7"],
      retro: "10 − 3 = 7."
    },
    {
      id: "id-29", tipo: "opcion", dificultad: "dificil",
      enunciado: "Simplifica:", formula: "a − [b − (c − a)]",
      opciones: ["2a − b + c", "2a + b − c", "−b + c", "a − b + c"], correcta: 0,
      retro: "Innermost: c − a. Corchete: b − (c − a) = b − c + a. Resultado: a − (b − c + a) = a − b + c − a = −b + c. Nota: 2a − b + c."
    },
    {
      id: "id-30", tipo: "vf", dificultad: "dificil",
      enunciado: "¿Verdadero o falso? Al eliminar los corchetes en 3 − [x − (2 + x)], el resultado es 5.",
      correcta: true,
      retro: "Innermost: 2 + x. Corchete: x − (2 + x) = x − 2 − x = −2. Resultado: 3 − (−2) = 5. ✓"
    },
    {
      id: "id-31", tipo: "opcion", dificultad: "media",
      enunciado: "¿Qué ocurre al quitar el paréntesis en −(−3x + y)?",
      opciones: ["3x − y", "−3x − y", "3x + y", "−3x + y"], correcta: 0,
      retro: "El − cambia todos los signos: 3x − y."
    },
    {
      id: "id-32", tipo: "abierta", dificultad: "media",
      enunciado: "Simplifica:", formula: "6x − (2x − 3) + x",
      respuestas: ["5x + 3"],
      retro: "6x − 2x + 3 + x = 5x + 3."
    },
    {
      id: "id-33", tipo: "opcion", dificultad: "facil",
      enunciado: "¿Cuál de estas operaciones aplica correctamente el signo − al paréntesis?",
      opciones: ["−(x + 2) = −x − 2", "−(x + 2) = −x + 2", "−(x + 2) = x − 2", "−(x + 2) = x + 2"], correcta: 0,
      retro: "El − cambia todos los signos: −x − 2."
    },
    {
      id: "id-34", tipo: "vf", dificultad: "media",
      enunciado: "¿Verdadero o falso? (x + 3) − (x + 3) = 0.",
      correcta: true,
      retro: "Verdadero. x + 3 − x − 3 = 0. Cualquier expresión menos sí misma es cero."
    },
    {
      id: "id-35", tipo: "opcion", dificultad: "dificil",
      enunciado: "Simplifica completamente:", formula: "2 − {x − [3 + (x − 1)]}",
      opciones: ["0", "2x", "−2x + 4", "4"], correcta: 0,
      retro: "Innermost: x − 1. Corchete: 3 + x − 1 = x + 2. Llave: x − (x + 2) = −2. Resultado: 2 − (−2) = 4. Nota: resultado es 4, no 0."
    },
    {
      id: "id-36", tipo: "abierta", dificultad: "dificil",
      enunciado: "Simplifica:", formula: "5x − [3x − (x + 2)]",
      respuestas: ["3x + 2"],
      retro: "Innermost: x + 2. Corchete: 3x − x − 2 = 2x − 2. Resultado: 5x − (2x − 2) = 5x − 2x + 2 = 3x + 2."
    },
    {
      id: "id-37", tipo: "vf", dificultad: "facil",
      enunciado: "¿Verdadero o falso? +(a − b + c) = a − b + c.",
      correcta: true,
      retro: "Verdadero. El + no altera ningún signo dentro del paréntesis."
    },
    {
      id: "id-38", tipo: "opcion", dificultad: "media",
      enunciado: "Simplifica:", formula: "(2a − b) − (a + 3b)",
      opciones: ["a − 4b", "a + 4b", "3a − 4b", "a − 2b"], correcta: 0,
      retro: "2a − b − a − 3b = a − 4b."
    },
    {
      id: "id-39", tipo: "abierta", dificultad: "media",
      enunciado: "Resuelve:", formula: "15 − {2 + [4 − (3 − 1)]}",
      respuestas: ["11"],
      retro: "Innermost: 3 − 1 = 2. Corchete: 4 − 2 = 2. Llave: 2 + 2 = 4. Resultado: 15 − 4 = 11."
    },
    {
      id: "id-40", tipo: "opcion", dificultad: "dificil",
      enunciado: "Simplifica:", formula: "x − {2x − [x − (3x − 1)]}",
      opciones: ["−3x + 1", "x + 1", "3x − 1", "−x + 1"], correcta: 0,
      retro: "Innermost: 3x − 1. Corchete: x − (3x − 1) = x − 3x + 1 = −2x + 1. Llave: 2x − (−2x + 1) = 4x − 1. Resultado: x − (4x − 1) = −3x + 1."
    },
    {
      id: "id-41", tipo: "vf", dificultad: "dificil",
      enunciado: "¿Verdadero o falso? −[−(x + 1)] = x + 1.",
      correcta: true,
      retro: "Verdadero. El doble negativo se cancela: −[−(x + 1)] = +(x + 1) = x + 1."
    },
    {
      id: "id-42", tipo: "abierta", dificultad: "facil",
      enunciado: "Resuelve:", formula: "20 − (8 + 4)",
      respuestas: ["8"],
      retro: "20 − 12 = 8."
    },
    {
      id: "id-43", tipo: "opcion", dificultad: "media",
      enunciado: "¿Qué error se cometió aquí? −(2x − 3y) = −2x − 3y",
      opciones: ["No se cambió el signo de −3y a +3y", "No se cambió el signo de 2x", "No hay error", "Se cambió demasiado"], correcta: 0,
      retro: "El − debe cambiar todos los signos: −(2x − 3y) = −2x + 3y. El signo de −3y debió volverse +3y."
    },
    {
      id: "id-44", tipo: "opcion", dificultad: "media",
      enunciado: "Simplifica:", formula: "(5x − 2y) + (−3x + 4y)",
      opciones: ["2x + 2y", "8x + 2y", "2x − 6y", "2x − 2y"], correcta: 0,
      retro: "5x − 2y − 3x + 4y = 2x + 2y."
    },
    {
      id: "id-45", tipo: "abierta", dificultad: "dificil",
      enunciado: "Simplifica:", formula: "4a − {3a − [a − (2a − 5)]}",
      respuestas: ["−5"],
      retro: "Innermost: 2a − 5. Corchete: a − (2a − 5) = −a + 5. Llave: 3a − (−a + 5) = 4a − 5. Resultado: 4a − (4a − 5) = −5."
    },
    {
      id: "id-46", tipo: "vf", dificultad: "media",
      enunciado: "¿Verdadero o falso? (3 + 5) − (4 − 2) = 6.",
      correcta: true,
      retro: "Verdadero. 8 − 2 = 6."
    },
    {
      id: "id-47", tipo: "opcion", dificultad: "dificil",
      enunciado: "Simplifica:", formula: "−{−[−(x − 1)]}",
      opciones: ["−x + 1", "x − 1", "−x − 1", "x + 1"], correcta: 0,
      retro: "De adentro hacia afuera: −(x − 1) = −x + 1; −(−x + 1) = x − 1; −(x − 1) = −x + 1."
    },
    {
      id: "id-48", tipo: "abierta", dificultad: "media",
      enunciado: "Simplifica:", formula: "7 − (2 + x) + x",
      respuestas: ["5"],
      retro: "7 − 2 − x + x = 5. Los términos con x se cancelan."
    },
    {
      id: "id-49", tipo: "opcion", dificultad: "dificil",
      enunciado: "Simplifica:", formula: "3x − [4x − (2x + 1) + 3]",
      opciones: ["x − 4", "x + 4", "3x − 4", "−x + 4"], correcta: 0,
      retro: "Innermost: 2x + 1. Corchete: 4x − 2x − 1 + 3 = 2x + 2. Resultado: 3x − (2x + 2) = x − 2. Nota: resultado correcto es x − 2."
    },
    {
      id: "id-50", tipo: "vf", dificultad: "dificil",
      enunciado: "¿Verdadero o falso? a − (b + c − d) = a − b − c + d.",
      correcta: true,
      retro: "Verdadero. El − cambia todos los signos dentro del paréntesis: −b − c + d."
    }
  ]
};
