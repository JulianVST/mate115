/* ===================================================================
   BANCO DE PREGUNTAS · Productos notables I
   (Binomio al cuadrado y binomios conjugados)
   =================================================================== */
window.BANCO = window.BANCO || {};
window.BANCO["productos-notables-1"] = {
  config: { numPreguntas: 7, tiempoMin: 0 },
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
    },
    {
      id: "id-12", tipo: "opcion", dificultad: "facil",
      enunciado: "Desarrolla:", formula: "(x + 5)²",
      opciones: ["x² + 10x + 25", "x² + 25", "x² + 5x + 25", "x² + 10x + 5"], correcta: 0,
      retro: "x² + 2(5)x + 25 = x² + 10x + 25."
    },
    {
      id: "id-13", tipo: "opcion", dificultad: "facil",
      enunciado: "Desarrolla:", formula: "(x − 1)²",
      opciones: ["x² − 2x + 1", "x² + 1", "x² − 1", "x² − 2x − 1"], correcta: 0,
      retro: "x² − 2(x)(1) + 1 = x² − 2x + 1."
    },
    {
      id: "id-14", tipo: "opcion", dificultad: "media",
      enunciado: "Desarrolla:", formula: "(x + 7)(x − 7)",
      opciones: ["x² − 49", "x² + 49", "x² − 14x − 49", "x² − 7x"], correcta: 0,
      retro: "(a + b)(a − b) = a² − b²: x² − 49."
    },
    {
      id: "id-15", tipo: "opcion", dificultad: "media",
      enunciado: "Desarrolla:", formula: "(2x − 5)²",
      opciones: ["4x² − 20x + 25", "4x² + 25", "4x² − 10x + 25", "4x² − 20x − 25"], correcta: 0,
      retro: "(2x)² − 2(2x)(5) + 5² = 4x² − 20x + 25."
    },
    {
      id: "id-16", tipo: "vf", dificultad: "facil",
      enunciado: "¿Verdadero o falso? (a + b)(a − b) = a² − b².",
      correcta: true,
      retro: "Verdadero. Es la diferencia de cuadrados: los términos medios se cancelan."
    },
    {
      id: "id-17", tipo: "opcion", dificultad: "dificil",
      enunciado: "Desarrolla:", formula: "(4x + 1)²",
      opciones: ["16x² + 8x + 1", "16x² + 1", "8x² + 8x + 1", "16x² + 4x + 1"], correcta: 0,
      retro: "(4x)² + 2(4x)(1) + 1 = 16x² + 8x + 1."
    },
    {
      id: "id-18", tipo: "opcion", dificultad: "media",
      enunciado: "Desarrolla:", formula: "(3x + 5)(3x − 5)",
      opciones: ["9x² − 25", "9x² + 25", "3x² − 25", "9x² − 30x − 25"], correcta: 0,
      retro: "(3x)² − 5² = 9x² − 25."
    },
    {
      id: "id-19", tipo: "opcion", dificultad: "facil",
      enunciado: "En (a + b)², el término del medio (doble producto) es:",
      opciones: ["2ab", "ab", "a²b", "2a + 2b"], correcta: 0,
      retro: "(a + b)² = a² + 2ab + b². El término central es 2ab."
    },
    {
      id: "id-20", tipo: "opcion", dificultad: "media",
      enunciado: "Desarrolla:", formula: "(x − 4)²",
      opciones: ["x² − 8x + 16", "x² + 16", "x² − 8x − 16", "x² − 4x + 16"], correcta: 0,
      retro: "x² − 2(4)x + 16 = x² − 8x + 16."
    },
    {
      id: "id-21", tipo: "abierta", dificultad: "facil",
      enunciado: "En (x + 3)², ¿cuál es el coeficiente del término en x? (el número que multiplica a x)",
      respuestas: ["6"],
      retro: "(x + 3)² = x² + 6x + 9. El coeficiente de x es 6 (doble producto: 2 × 3)."
    },
    {
      id: "id-22", tipo: "opcion", dificultad: "dificil",
      enunciado: "Desarrolla:", formula: "(5x − 3)²",
      opciones: ["25x² − 30x + 9", "25x² + 9", "25x² − 15x + 9", "5x² − 30x + 9"], correcta: 0,
      retro: "(5x)² − 2(5x)(3) + 3² = 25x² − 30x + 9."
    },
    {
      id: "id-23", tipo: "vf", dificultad: "media",
      enunciado: "¿Verdadero o falso? (x − y)² = x² − y².",
      correcta: false,
      retro: "Falso. (x − y)² = x² − 2xy + y². No confundir con la diferencia de cuadrados (x − y)(x + y)."
    },
    {
      id: "id-24", tipo: "opcion", dificultad: "media",
      enunciado: "Desarrolla:", formula: "(2x + 7)(2x − 7)",
      opciones: ["4x² − 49", "4x² + 49", "2x² − 49", "4x² − 14x − 49"], correcta: 0,
      retro: "(2x)² − 7² = 4x² − 49."
    },
    {
      id: "id-25", tipo: "opcion", dificultad: "facil",
      enunciado: "Desarrolla:", formula: "(x + 8)²",
      opciones: ["x² + 16x + 64", "x² + 64", "x² + 8x + 64", "x² + 16x + 8"], correcta: 0,
      retro: "x² + 2(8)x + 64 = x² + 16x + 64."
    },
    {
      id: "id-26", tipo: "opcion", dificultad: "dificil",
      enunciado: "Desarrolla:", formula: "(3x − 4)²",
      opciones: ["9x² − 24x + 16", "9x² + 16", "9x² − 24x − 16", "6x² − 24x + 16"], correcta: 0,
      retro: "(3x)² − 2(3x)(4) + 4² = 9x² − 24x + 16."
    },
    {
      id: "id-27", tipo: "opcion", dificultad: "media",
      enunciado: "Desarrolla:", formula: "(x − 6)²",
      opciones: ["x² − 12x + 36", "x² + 36", "x² − 6x + 36", "x² − 12x − 36"], correcta: 0,
      retro: "x² − 2(6)x + 36 = x² − 12x + 36."
    },
    {
      id: "id-28", tipo: "opcion", dificultad: "facil",
      enunciado: "¿Qué tipo de producto es (a + b)(a − b)?",
      opciones: ["Diferencia de cuadrados", "Cuadrado de una suma", "Cuadrado de una resta", "Cubo de un binomio"], correcta: 0,
      retro: "(a + b)(a − b) = a² − b²: se llama diferencia de cuadrados."
    },
    {
      id: "id-29", tipo: "opcion", dificultad: "media",
      enunciado: "Desarrolla:", formula: "(x + 10)²",
      opciones: ["x² + 20x + 100", "x² + 100", "x² + 10x + 100", "x² + 20x + 10"], correcta: 0,
      retro: "x² + 2(10)x + 100 = x² + 20x + 100."
    },
    {
      id: "id-30", tipo: "opcion", dificultad: "dificil",
      enunciado: "Desarrolla:", formula: "(2x − 3)²",
      opciones: ["4x² − 12x + 9", "4x² + 9", "4x² − 6x + 9", "4x² − 12x − 9"], correcta: 0,
      retro: "(2x)² − 2(2x)(3) + 3² = 4x² − 12x + 9."
    },
    {
      id: "id-31", tipo: "abierta", dificultad: "media",
      enunciado: "Desarrolla (x + 2)² y evalúa el resultado en x = 3. ¿Cuánto obtienes?",
      respuestas: ["25"],
      pista: "(x + 2)² = x² + 4x + 4. Luego sustituye x = 3.",
      retro: "(x + 2)² = x² + 4x + 4. Para x = 3: 9 + 12 + 4 = 25."
    },
    {
      id: "id-32", tipo: "opcion", dificultad: "media",
      enunciado: "Desarrolla:", formula: "(5x + 2)(5x − 2)",
      opciones: ["25x² − 4", "25x² + 4", "5x² − 4", "25x² − 20x − 4"], correcta: 0,
      retro: "(5x)² − 2² = 25x² − 4."
    },
    {
      id: "id-33", tipo: "vf", dificultad: "facil",
      enunciado: "¿Verdadero o falso? (a + b)² = (b + a)².",
      correcta: true,
      retro: "Verdadero. La suma es conmutativa: a + b = b + a, así sus cuadrados son iguales."
    },
    {
      id: "id-34", tipo: "opcion", dificultad: "facil",
      enunciado: "En el desarrollo de (a − b)², el signo del término central es:",
      opciones: ["Negativo", "Positivo", "No tiene término central", "Depende de a y b"], correcta: 0,
      retro: "(a − b)² = a² − 2ab + b². El término central −2ab es negativo."
    },
    {
      id: "id-35", tipo: "opcion", dificultad: "dificil",
      enunciado: "Desarrolla:", formula: "(x² + 1)²",
      opciones: ["x⁴ + 2x² + 1", "x⁴ + 1", "x⁴ + x² + 1", "2x² + 1"], correcta: 0,
      retro: "(x²)² + 2(x²)(1) + 1² = x⁴ + 2x² + 1."
    },
    {
      id: "id-36", tipo: "opcion", dificultad: "media",
      enunciado: "Desarrolla:", formula: "(x − 7)²",
      opciones: ["x² − 14x + 49", "x² + 49", "x² − 14x − 49", "x² − 7x + 49"], correcta: 0,
      retro: "x² − 2(7)x + 49 = x² − 14x + 49."
    },
    {
      id: "id-37", tipo: "opcion", dificultad: "media",
      enunciado: "Si (a + b)² = a² + 2ab + b², ¿cuál es la fórmula de (a + b)(a − b)?",
      opciones: ["a² − b²", "a² + 2ab − b²", "a² − 2ab + b²", "a² + b²"], correcta: 0,
      retro: "Los binomios conjugados se multiplican dando diferencia de cuadrados: a² − b²."
    },
    {
      id: "id-38", tipo: "abierta", dificultad: "facil",
      enunciado: "Completa: (x + 4)² = x² + __x + 16. ¿Cuánto vale el número en el espacio?",
      respuestas: ["8"],
      retro: "El doble producto es 2 × 4 = 8. Entonces (x + 4)² = x² + 8x + 16."
    },
    {
      id: "id-39", tipo: "opcion", dificultad: "dificil",
      enunciado: "Desarrolla:", formula: "(3x + 1)²",
      opciones: ["9x² + 6x + 1", "9x² + 1", "3x² + 6x + 1", "9x² + 3x + 1"], correcta: 0,
      retro: "(3x)² + 2(3x)(1) + 1 = 9x² + 6x + 1."
    },
    {
      id: "id-40", tipo: "opcion", dificultad: "media",
      enunciado: "Desarrolla:", formula: "(x + 9)(x − 9)",
      opciones: ["x² − 81", "x² + 81", "x² − 18x − 81", "x² + 9x"], correcta: 0,
      retro: "Diferencia de cuadrados: x² − 9² = x² − 81."
    },
    {
      id: "id-41", tipo: "vf", dificultad: "media",
      enunciado: "¿Verdadero o falso? (x + 3)² = x² + 9.",
      correcta: false,
      retro: "Falso. (x + 3)² = x² + 6x + 9. Se omitió el doble producto 6x."
    },
    {
      id: "id-42", tipo: "opcion", dificultad: "facil",
      enunciado: "Desarrolla:", formula: "(x + 2)²",
      opciones: ["x² + 4x + 4", "x² + 4", "x² + 2x + 4", "x² + 4x + 2"], correcta: 0,
      retro: "x² + 2(2)x + 4 = x² + 4x + 4."
    },
    {
      id: "id-43", tipo: "opcion", dificultad: "dificil",
      enunciado: "Desarrolla:", formula: "(2x + 5)²",
      opciones: ["4x² + 20x + 25", "4x² + 25", "4x² + 10x + 25", "2x² + 20x + 25"], correcta: 0,
      retro: "(2x)² + 2(2x)(5) + 25 = 4x² + 20x + 25."
    },
    {
      id: "id-44", tipo: "opcion", dificultad: "media",
      enunciado: "Desarrolla:", formula: "(x − 2)²",
      opciones: ["x² − 4x + 4", "x² + 4", "x² − 4x − 4", "x² − 2x + 4"], correcta: 0,
      retro: "x² − 2(2)x + 4 = x² − 4x + 4."
    },
    {
      id: "id-45", tipo: "abierta", dificultad: "media",
      enunciado: "¿Cuánto vale (5 + 3)² calculado usando la fórmula del cuadrado de la suma?",
      respuestas: ["64"],
      pista: "Primero: a = 5, b = 3. Usa a² + 2ab + b².",
      retro: "5² + 2(5)(3) + 3² = 25 + 30 + 9 = 64. (Verificación: 8² = 64.)"
    },
    {
      id: "id-46", tipo: "opcion", dificultad: "dificil",
      enunciado: "Desarrolla:", formula: "(x² − 3)²",
      opciones: ["x⁴ − 6x² + 9", "x⁴ + 9", "x⁴ − 3x² + 9", "x⁴ − 6x² − 9"], correcta: 0,
      retro: "(x²)² − 2(x²)(3) + 9 = x⁴ − 6x² + 9."
    },
    {
      id: "id-47", tipo: "vf", dificultad: "facil",
      enunciado: "¿Verdadero o falso? (x + 1)(x − 1) = x² − 1.",
      correcta: true,
      retro: "Verdadero. Diferencia de cuadrados: x² − 1² = x² − 1."
    },
    {
      id: "id-48", tipo: "opcion", dificultad: "media",
      enunciado: "Calcula (102)² usando la fórmula (100 + 2)²:",
      opciones: ["10404", "10200", "10002", "10024"], correcta: 0,
      retro: "100² + 2(100)(2) + 2² = 10000 + 400 + 4 = 10404."
    },
    {
      id: "id-49", tipo: "opcion", dificultad: "facil",
      enunciado: "¿Cuántos términos tiene el desarrollo de (a + b)²?",
      opciones: ["3", "2", "4", "1"], correcta: 0,
      retro: "(a + b)² = a² + 2ab + b²: tiene exactamente 3 términos."
    },
    {
      id: "id-50", tipo: "opcion", dificultad: "dificil",
      enunciado: "Desarrolla:", formula: "(4x − 3)²",
      opciones: ["16x² − 24x + 9", "16x² + 9", "16x² − 12x + 9", "4x² − 24x + 9"], correcta: 0,
      retro: "(4x)² − 2(4x)(3) + 3² = 16x² − 24x + 9."
    }
  ]
};
