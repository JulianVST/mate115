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
    },
    {
      id: "id-12", tipo: "vf", dificultad: "facil",
      enunciado: "¿Verdadero o falso? 2xy y 5xy son términos semejantes.",
      correcta: true,
      retro: "Verdadero. Ambos tienen la misma parte literal: xy."
    },
    {
      id: "id-13", tipo: "opcion", dificultad: "facil",
      enunciado: "Reduce:", formula: "9b − 9b",
      opciones: ["0", "1", "18b", "9b²"], correcta: 0,
      retro: "9b − 9b = 0. Los coeficientes iguales con signos opuestos se cancelan."
    },
    {
      id: "id-14", tipo: "abierta", dificultad: "facil",
      enunciado: "Reduce (escribe el resultado):", formula: "6xy + 4xy",
      respuestas: ["10xy"],
      retro: "6xy + 4xy = 10xy."
    },
    {
      id: "id-15", tipo: "opcion", dificultad: "media",
      enunciado: "Reduce:", formula: "3x² + 2x − x² + 5x",
      opciones: ["2x² + 7x", "4x² + 7x", "2x² + 3x", "3x² + 7x"], correcta: 0,
      retro: "(3x² − x²) + (2x + 5x) = 2x² + 7x."
    },
    {
      id: "id-16", tipo: "vf", dificultad: "facil",
      enunciado: "¿Verdadero o falso? 6x y 6 son términos semejantes.",
      correcta: false,
      retro: "Falso. 6x tiene parte literal (x) y 6 es una constante; no son semejantes."
    },
    {
      id: "id-17", tipo: "opcion", dificultad: "media",
      enunciado: "Reduce:", formula: "2xy + 3xy − xy",
      opciones: ["4xy", "5xy", "6xy", "4x²y"], correcta: 0,
      retro: "2 + 3 − 1 = 4 → 4xy."
    },
    {
      id: "id-18", tipo: "abierta", dificultad: "media",
      enunciado: "Reduce:", formula: "4 + 3x + 2 − x",
      respuestas: ["2x + 6", "6 + 2x"],
      retro: "(3x − x) + (4 + 2) = 2x + 6."
    },
    {
      id: "id-19", tipo: "opcion", dificultad: "media",
      enunciado: "Reduce:", formula: "5a² − 2a + 3a² + a",
      opciones: ["8a² − a", "8a² + a", "7a² − a", "8a³"], correcta: 0,
      retro: "(5a² + 3a²) + (−2a + a) = 8a² − a."
    },
    {
      id: "id-20", tipo: "opcion", dificultad: "facil",
      enunciado: "¿Cuáles son términos semejantes?",
      opciones: ["7ab y −3ab", "7a y 3b", "7a² y 3a", "7ab y 3a²b"], correcta: 0,
      retro: "7ab y −3ab tienen la misma parte literal ab, son semejantes."
    },
    {
      id: "id-21", tipo: "abierta", dificultad: "facil",
      enunciado: "Reduce:", formula: "12n − 5n",
      respuestas: ["7n"],
      retro: "12n − 5n = 7n."
    },
    {
      id: "id-22", tipo: "opcion", dificultad: "media",
      enunciado: "Reduce:", formula: "x² + x² + x²",
      opciones: ["3x²", "x⁶", "3x", "x³"], correcta: 0,
      retro: "1 + 1 + 1 = 3, se conserva x²: resultado 3x²."
    },
    {
      id: "id-23", tipo: "vf", dificultad: "media",
      enunciado: "¿Verdadero o falso? 3x³ + 2x³ = 5x⁶.",
      correcta: false,
      retro: "Falso. Al sumar términos semejantes solo se suman los coeficientes: 3x³ + 2x³ = 5x³."
    },
    {
      id: "id-24", tipo: "opcion", dificultad: "dificil",
      enunciado: "Reduce completamente:", formula: "2x² − 3x + 4 − x² + 7x − 9",
      opciones: ["x² + 4x − 5", "x² − 4x − 5", "3x² + 4x − 5", "x² + 4x + 5"], correcta: 0,
      retro: "(2x² − x²) + (−3x + 7x) + (4 − 9) = x² + 4x − 5."
    },
    {
      id: "id-25", tipo: "abierta", dificultad: "facil",
      enunciado: "Reduce:", formula: "3p + 3p + 3p",
      respuestas: ["9p"],
      retro: "3 + 3 + 3 = 9 → 9p."
    },
    {
      id: "id-26", tipo: "opcion", dificultad: "media",
      enunciado: "Reduce:", formula: "6x²y − 2x²y + x²y",
      opciones: ["5x²y", "4x²y", "7x²y", "3x²y"], correcta: 0,
      retro: "6 − 2 + 1 = 5 → 5x²y."
    },
    {
      id: "id-27", tipo: "vf", dificultad: "facil",
      enunciado: "¿Verdadero o falso? Al reducir términos semejantes, el exponente de la variable cambia.",
      correcta: false,
      retro: "Falso. Solo cambia el coeficiente; la parte literal se conserva igual."
    },
    {
      id: "id-28", tipo: "opcion", dificultad: "dificil",
      enunciado: "Reduce:", formula: "4ab + 3a − 2ab − a + 5",
      opciones: ["2ab + 2a + 5", "2ab + 2a − 5", "6ab + 2a + 5", "2ab − 2a + 5"], correcta: 0,
      retro: "(4ab − 2ab) + (3a − a) + 5 = 2ab + 2a + 5."
    },
    {
      id: "id-29", tipo: "abierta", dificultad: "media",
      enunciado: "Reduce:", formula: "8x − 3x + x − 2x",
      respuestas: ["4x"],
      retro: "8 − 3 + 1 − 2 = 4 → 4x."
    },
    {
      id: "id-30", tipo: "opcion", dificultad: "media",
      enunciado: "Reduce:", formula: "(3x² + 2) + (x² − 5)",
      opciones: ["4x² − 3", "4x² + 7", "3x² − 3", "4x² − 7"], correcta: 0,
      retro: "Se eliminan los paréntesis con + y se suman semejantes: (3x² + x²) + (2 − 5) = 4x² − 3."
    },
    {
      id: "id-31", tipo: "vf", dificultad: "media",
      enunciado: "¿Verdadero o falso? 5x²y y 5xy² son términos semejantes.",
      correcta: false,
      retro: "Falso. x²y y xy² tienen partes literales distintas (diferente distribución de exponentes)."
    },
    {
      id: "id-32", tipo: "opcion", dificultad: "facil",
      enunciado: "Reduce:", formula: "2n + 8n",
      opciones: ["10n", "16n", "10n²", "6n"], correcta: 0,
      retro: "2 + 8 = 10 → 10n."
    },
    {
      id: "id-33", tipo: "abierta", dificultad: "media",
      enunciado: "Reduce:", formula: "5xy − 3xy + 2xy",
      respuestas: ["4xy"],
      retro: "5 − 3 + 2 = 4 → 4xy."
    },
    {
      id: "id-34", tipo: "opcion", dificultad: "dificil",
      enunciado: "Reduce completamente:", formula: "3m² + 5mn − 2m² − mn + 4",
      opciones: ["m² + 4mn + 4", "m² + 4mn − 4", "5m² + 4mn + 4", "m² − 4mn + 4"], correcta: 0,
      retro: "(3m² − 2m²) + (5mn − mn) + 4 = m² + 4mn + 4."
    },
    {
      id: "id-35", tipo: "vf", dificultad: "facil",
      enunciado: "¿Verdadero o falso? 9a − 4a = 5a.",
      correcta: true,
      retro: "Verdadero. 9 − 4 = 5, la parte literal a se conserva."
    },
    {
      id: "id-36", tipo: "opcion", dificultad: "media",
      enunciado: "Reduce:", formula: "7k − 2k + k − 3k",
      opciones: ["3k", "4k", "7k", "13k"], correcta: 0,
      retro: "7 − 2 + 1 − 3 = 3 → 3k."
    },
    {
      id: "id-37", tipo: "abierta", dificultad: "dificil",
      enunciado: "Reduce completamente:", formula: "4x² − x + 3 − 4x² + x − 3",
      respuestas: ["0"],
      retro: "(4x² − 4x²) + (−x + x) + (3 − 3) = 0."
    },
    {
      id: "id-38", tipo: "opcion", dificultad: "media",
      enunciado: "Reduce:", formula: "10a − 3b + 2a − b",
      opciones: ["12a − 4b", "8a − 4b", "12a − 2b", "12a + 4b"], correcta: 0,
      retro: "(10a + 2a) + (−3b − b) = 12a − 4b."
    },
    {
      id: "id-39", tipo: "vf", dificultad: "media",
      enunciado: "¿Verdadero o falso? La expresión 3x + 4y − 2x puede reducirse a x + 4y.",
      correcta: true,
      retro: "Verdadero. (3x − 2x) + 4y = x + 4y."
    },
    {
      id: "id-40", tipo: "opcion", dificultad: "dificil",
      enunciado: "Reduce:", formula: "2a³ − 5a + 3a³ + 2a − 1",
      opciones: ["5a³ − 3a − 1", "5a³ + 3a − 1", "5a³ − 3a + 1", "6a³ − 3a − 1"], correcta: 0,
      retro: "(2a³ + 3a³) + (−5a + 2a) − 1 = 5a³ − 3a − 1."
    },
    {
      id: "id-41", tipo: "abierta", dificultad: "facil",
      enunciado: "Reduce:", formula: "x + x + x + x",
      respuestas: ["4x"],
      retro: "x + x + x + x = 4x. Cuatro términos iguales suman 4x."
    },
    {
      id: "id-42", tipo: "opcion", dificultad: "media",
      enunciado: "Reduce:", formula: "6x²y + 3xy² − x²y + 2xy²",
      opciones: ["5x²y + 5xy²", "5x²y + xy²", "6x²y + 5xy²", "5x²y − 5xy²"], correcta: 0,
      retro: "(6x²y − x²y) + (3xy² + 2xy²) = 5x²y + 5xy²."
    },
    {
      id: "id-43", tipo: "vf", dificultad: "dificil",
      enunciado: "¿Verdadero o falso? 2x²y y 2xy² son términos semejantes porque tienen los mismos factores.",
      correcta: false,
      retro: "Falso. La parte literal es distinta: x²y ≠ xy². Los exponentes de cada variable deben coincidir."
    },
    {
      id: "id-44", tipo: "opcion", dificultad: "facil",
      enunciado: "Reduce:", formula: "5z + 0",
      opciones: ["5z", "0", "5", "z"], correcta: 0,
      retro: "Sumar cero no cambia nada: 5z + 0 = 5z."
    },
    {
      id: "id-45", tipo: "abierta", dificultad: "media",
      enunciado: "Reduce:", formula: "3a + 5b − 3a − 5b",
      respuestas: ["0"],
      retro: "(3a − 3a) + (5b − 5b) = 0 + 0 = 0."
    },
    {
      id: "id-46", tipo: "opcion", dificultad: "dificil",
      enunciado: "Reduce:", formula: "x³ + 2x² − 3x + x³ − x² + 5x",
      opciones: ["2x³ + x² + 2x", "2x³ + x² − 2x", "x³ + x² + 2x", "2x³ − x² + 2x"], correcta: 0,
      retro: "(x³ + x³) + (2x² − x²) + (−3x + 5x) = 2x³ + x² + 2x."
    },
    {
      id: "id-47", tipo: "vf", dificultad: "media",
      enunciado: "¿Verdadero o falso? −3xy + 3xy = 0.",
      correcta: true,
      retro: "Verdadero. Un número y su opuesto siempre suman cero."
    },
    {
      id: "id-48", tipo: "opcion", dificultad: "dificil",
      enunciado: "Reduce:", formula: "4(2x − 1) + 3x",
      pista: "Primero aplica la propiedad distributiva.",
      opciones: ["11x − 4", "11x + 4", "8x − 4", "5x − 4"], correcta: 0,
      retro: "4·2x − 4·1 + 3x = 8x − 4 + 3x = 11x − 4."
    },
    {
      id: "id-49", tipo: "abierta", dificultad: "dificil",
      enunciado: "Reduce:", formula: "3(x² + 2x) − 2(x² − x)",
      respuestas: ["x² + 8x", "x^2 + 8x"],
      retro: "3x² + 6x − 2x² + 2x = (3x² − 2x²) + (6x + 2x) = x² + 8x."
    },
    {
      id: "id-50", tipo: "opcion", dificultad: "dificil",
      enunciado: "Reduce completamente:", formula: "5a − 3b + 2c − 2a + b − c",
      opciones: ["3a − 2b + c", "3a + 2b − c", "7a − 2b + c", "3a − 2b − c"], correcta: 0,
      retro: "(5a − 2a) + (−3b + b) + (2c − c) = 3a − 2b + c."
    }
  ]
};
