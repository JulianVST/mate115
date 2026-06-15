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
    },
    {
      id: "id-14", tipo: "opcion", dificultad: "facil",
      enunciado: "Saca el factor común:", formula: "10x³ + 15x²",
      opciones: ["5x²(2x + 3)", "5x(2x² + 3x)", "10x²(x + 1)", "5x²(2x + 15)"], correcta: 0,
      retro: "El MCD de 10x³ y 15x² es 5x²: 5x²(2x + 3)."
    },
    {
      id: "id-15", tipo: "opcion", dificultad: "facil",
      enunciado: "Saca el factor común:", formula: "12x² − 8x",
      opciones: ["4x(3x − 2)", "4(3x² − 2x)", "8x(x − 1)", "4x(3x − 8)"], correcta: 0,
      retro: "El MCD es 4x: 4x(3x − 2)."
    },
    {
      id: "id-16", tipo: "opcion", dificultad: "media",
      enunciado: "Factoriza:", formula: "x² − 4",
      opciones: ["(x + 2)(x − 2)", "(x − 2)²", "(x + 2)²", "(x − 4)(x + 1)"], correcta: 0,
      retro: "Diferencia de cuadrados: x² − 4 = (x + 2)(x − 2)."
    },
    {
      id: "id-17", tipo: "opcion", dificultad: "media",
      enunciado: "Factoriza:", formula: "x² − 36",
      opciones: ["(x + 6)(x − 6)", "(x − 6)²", "(x + 6)²", "(x − 36)(x + 1)"], correcta: 0,
      retro: "Diferencia de cuadrados: x² − 36 = (x + 6)(x − 6)."
    },
    {
      id: "id-18", tipo: "opcion", dificultad: "media",
      enunciado: "Factoriza:", formula: "x² + 9x + 14",
      opciones: ["(x + 2)(x + 7)", "(x + 1)(x + 14)", "(x + 3)(x + 6)", "(x + 4)(x + 5)"], correcta: 0,
      retro: "2 y 7 multiplican 14 y suman 9: (x + 2)(x + 7)."
    },
    {
      id: "id-19", tipo: "opcion", dificultad: "dificil",
      enunciado: "Factoriza:", formula: "x² − 5x + 6",
      opciones: ["(x − 2)(x − 3)", "(x + 2)(x + 3)", "(x − 6)(x + 1)", "(x − 1)(x − 6)"], correcta: 0,
      pista: "Busca dos números negativos que multipliquen 6 y sumen −5.",
      retro: "−2 y −3 multiplican 6 y suman −5: (x − 2)(x − 3)."
    },
    {
      id: "id-20", tipo: "opcion", dificultad: "dificil",
      enunciado: "Factoriza:", formula: "x² + 2x − 15",
      opciones: ["(x + 5)(x − 3)", "(x − 5)(x + 3)", "(x + 5)(x + 3)", "(x − 5)(x − 3)"], correcta: 0,
      pista: "Busca dos números que multipliquen −15 y sumen +2.",
      retro: "+5 y −3 multiplican −15 y suman +2: (x + 5)(x − 3)."
    },
    {
      id: "id-21", tipo: "vf", dificultad: "facil",
      enunciado: "¿Verdadero o falso? x² + 4x + 4 = (x + 2)².",
      correcta: true,
      retro: "Verdadero. Es un trinomio cuadrado perfecto: (x + 2)² = x² + 4x + 4."
    },
    {
      id: "id-22", tipo: "opcion", dificultad: "media",
      enunciado: "¿Cuál de las siguientes expresiones es un trinomio cuadrado perfecto?",
      opciones: ["x² − 10x + 25", "x² − 25", "x² + 5x + 25", "x² − 5x − 25"], correcta: 0,
      retro: "x² − 10x + 25 = (x − 5)². Los otros no cumplen la forma a² ± 2ab + b²."
    },
    {
      id: "id-23", tipo: "opcion", dificultad: "facil",
      enunciado: "¿Qué método se usa para factorizar x² − 49?",
      opciones: ["Diferencia de cuadrados", "Factor común", "Trinomio cuadrado perfecto", "Agrupación"], correcta: 0,
      retro: "x² − 49 = (x + 7)(x − 7) es una diferencia de cuadrados."
    },
    {
      id: "id-24", tipo: "opcion", dificultad: "dificil",
      enunciado: "Factoriza:", formula: "2x² + 7x + 3",
      opciones: ["(2x + 1)(x + 3)", "(2x + 3)(x + 1)", "(x + 7)(2x − 3)", "(2x − 1)(x + 3)"], correcta: 0,
      pista: "Con a = 2: busca dos números que multipliquen 2·3 = 6 y sumen 7.",
      retro: "1 y 6 multiplican 6 y suman 7: 2x² + x + 6x + 3 = x(2x + 1) + 3(2x + 1) = (2x + 1)(x + 3)."
    },
    {
      id: "id-25", tipo: "opcion", dificultad: "dificil",
      enunciado: "Factoriza:", formula: "3x² + 5x + 2",
      opciones: ["(3x + 2)(x + 1)", "(3x + 1)(x + 2)", "(x + 2)(3x − 1)", "(3x − 2)(x + 1)"], correcta: 0,
      retro: "3·2 = 6; buscamos 2 y 3 que sumen 5: 3x² + 2x + 3x + 2 = x(3x + 2) + 1(3x + 2) = (3x + 2)(x + 1)."
    },
    {
      id: "id-26", tipo: "opcion", dificultad: "dificil",
      enunciado: "Factoriza por agrupación:", formula: "x³ + x² + 2x + 2",
      opciones: ["(x² + 2)(x + 1)", "(x + 2)(x² + 1)", "(x² + 1)(x + 2)", "(x + 1)(x² − 2)"], correcta: 0,
      retro: "Agrupa: x²(x + 1) + 2(x + 1) = (x² + 2)(x + 1)."
    },
    {
      id: "id-27", tipo: "opcion", dificultad: "dificil",
      enunciado: "Factoriza por agrupación:", formula: "ax + ay + bx + by",
      opciones: ["(a + b)(x + y)", "(a + x)(b + y)", "(a − b)(x + y)", "(a + b)(x − y)"], correcta: 0,
      retro: "Agrupa: a(x + y) + b(x + y) = (a + b)(x + y)."
    },
    {
      id: "id-28", tipo: "opcion", dificultad: "dificil",
      enunciado: "Factoriza:", formula: "x³ − 8",
      opciones: ["(x − 2)(x² + 2x + 4)", "(x + 2)(x² − 2x + 4)", "(x − 2)³", "(x − 2)(x² − 4)"], correcta: 0,
      pista: "Diferencia de cubos: a³ − b³ = (a − b)(a² + ab + b²).",
      retro: "a = x, b = 2: (x − 2)(x² + 2x + 4)."
    },
    {
      id: "id-29", tipo: "opcion", dificultad: "dificil",
      enunciado: "Factoriza:", formula: "x³ + 27",
      opciones: ["(x + 3)(x² − 3x + 9)", "(x − 3)(x² + 3x + 9)", "(x + 3)³", "(x + 3)(x² + 9)"], correcta: 0,
      pista: "Suma de cubos: a³ + b³ = (a + b)(a² − ab + b²).",
      retro: "a = x, b = 3: (x + 3)(x² − 3x + 9)."
    },
    {
      id: "id-30", tipo: "vf", dificultad: "media",
      enunciado: "¿Verdadero o falso? La expresión x² + 9 se puede factorizar como (x + 3)(x − 3).",
      correcta: false,
      retro: "Falso. x² + 9 es una suma de cuadrados, que NO factoriza sobre los reales. Solo factoriza la diferencia de cuadrados."
    },
    {
      id: "id-31", tipo: "opcion", dificultad: "media",
      enunciado: "¿Cuál de las siguientes expresiones NO se puede factorizar como diferencia de cuadrados?",
      opciones: ["x² + 16", "x² − 16", "4x² − 9", "25x² − 1"], correcta: 0,
      retro: "x² + 16 es suma de cuadrados; sobre los reales no factoriza. Los demás sí son diferencias de cuadrados."
    },
    {
      id: "id-32", tipo: "opcion", dificultad: "media",
      enunciado: "Factoriza:", formula: "4x² − 25",
      opciones: ["(2x + 5)(2x − 5)", "(4x + 5)(x − 5)", "(2x + 5)²", "(2x − 5)²"], correcta: 0,
      retro: "4x² − 25 = (2x)² − 5² = (2x + 5)(2x − 5)."
    },
    {
      id: "id-33", tipo: "opcion", dificultad: "media",
      enunciado: "Factoriza:", formula: "9x² − 4",
      opciones: ["(3x + 2)(3x − 2)", "(9x + 2)(x − 2)", "(3x + 4)(3x − 1)", "(3x − 2)²"], correcta: 0,
      retro: "(3x)² − 2² = (3x + 2)(3x − 2)."
    },
    {
      id: "id-34", tipo: "abierta", dificultad: "facil",
      enunciado: "Factoriza x² − 64. Escribe el factor con el signo positivo, en la forma (x + a). ¿Cuánto vale a?",
      respuestas: ["8"],
      retro: "x² − 64 = (x + 8)(x − 8). El factor positivo es (x + 8), así que a = 8."
    },
    {
      id: "id-35", tipo: "abierta", dificultad: "media",
      enunciado: "Factoriza x² + 10x + 25. La factorización es (x + a)². ¿Cuánto vale a?",
      respuestas: ["5"],
      retro: "x² + 10x + 25 = (x + 5)². Es un trinomio cuadrado perfecto con a = 5."
    },
    {
      id: "id-36", tipo: "vf", dificultad: "media",
      enunciado: "¿Verdadero o falso? Para verificar una factorización, basta con expandir el resultado y comprobar que coincide con la expresión original.",
      correcta: true,
      retro: "Verdadero. Si (x + 3)(x − 3) = x² − 9, entonces la factorización es correcta."
    },
    {
      id: "id-37", tipo: "opcion", dificultad: "facil",
      enunciado: "Verifica expandiendo: ¿cuál es el resultado de (x + 4)(x − 4)?",
      opciones: ["x² − 16", "x² + 16", "x² − 8x − 16", "x² + 8x + 16"], correcta: 0,
      retro: "Binomios conjugados: (x + 4)(x − 4) = x² − 16."
    },
    {
      id: "id-38", tipo: "opcion", dificultad: "media",
      enunciado: "¿Qué método conviene usar para factorizar x² − 5x − 14?",
      opciones: ["Trinomio ax² + bx + c con a = 1 (buscar p y q)", "Diferencia de cuadrados", "Factor común", "Diferencia de cubos"], correcta: 0,
      retro: "Es un trinomio con a = 1; buscamos p y q tales que p·q = −14 y p + q = −5: p = −7, q = 2 → (x − 7)(x + 2)."
    },
    {
      id: "id-39", tipo: "opcion", dificultad: "dificil",
      enunciado: "Factoriza:", formula: "x² − 5x − 14",
      opciones: ["(x − 7)(x + 2)", "(x + 7)(x − 2)", "(x − 7)(x − 2)", "(x + 14)(x − 1)"], correcta: 0,
      retro: "−7 y +2: −7·2 = −14 y −7 + 2 = −5."
    },
    {
      id: "id-40", tipo: "opcion", dificultad: "facil",
      enunciado: "Saca el factor común de:", formula: "15x⁴ − 10x³ + 5x²",
      opciones: ["5x²(3x² − 2x + 1)", "5x(3x³ − 2x² + x)", "5x²(3x² − 2x − 1)", "x²(15x² − 10x + 5)"], correcta: 0,
      retro: "El MCD es 5x²: 5x²(3x² − 2x + 1)."
    },
    {
      id: "id-41", tipo: "vf", dificultad: "dificil",
      enunciado: "¿Verdadero o falso? x³ − 64 = (x − 4)(x² + 4x + 16).",
      correcta: true,
      retro: "Verdadero. Diferencia de cubos: a = x, b = 4 → (x − 4)(x² + 4x + 16)."
    },
    {
      id: "id-42", tipo: "opcion", dificultad: "dificil",
      enunciado: "Factoriza:", formula: "8x³ + 1",
      opciones: ["(2x + 1)(4x² − 2x + 1)", "(2x − 1)(4x² + 2x + 1)", "(8x + 1)(x² − x + 1)", "(2x + 1)³"], correcta: 0,
      pista: "Suma de cubos: a = 2x, b = 1.",
      retro: "(2x)³ + 1³ = (2x + 1)((2x)² − (2x)(1) + 1²) = (2x + 1)(4x² − 2x + 1)."
    },
    {
      id: "id-43", tipo: "opcion", dificultad: "dificil",
      enunciado: "Factoriza:", formula: "27x³ − 1",
      opciones: ["(3x − 1)(9x² + 3x + 1)", "(3x + 1)(9x² − 3x + 1)", "(3x − 1)³", "(3x − 1)(9x² − 1)"], correcta: 0,
      retro: "Diferencia de cubos: a = 3x, b = 1 → (3x − 1)(9x² + 3x + 1)."
    },
    {
      id: "id-44", tipo: "opcion", dificultad: "dificil",
      enunciado: "Factoriza:", formula: "2x² − 5x − 3",
      opciones: ["(2x + 1)(x − 3)", "(2x − 1)(x + 3)", "(2x − 3)(x + 1)", "(x − 3)(2x − 1)"], correcta: 0,
      retro: "2·(−3) = −6; buscamos 1 y −6 que sumen −5: 2x² + x − 6x − 3 = x(2x + 1) − 3(2x + 1) = (2x + 1)(x − 3)."
    },
    {
      id: "id-45", tipo: "opcion", dificultad: "media",
      enunciado: "Factoriza:", formula: "x² − 81",
      opciones: ["(x + 9)(x − 9)", "(x − 9)²", "(x + 9)²", "(x − 81)(x + 1)"], correcta: 0,
      retro: "Diferencia de cuadrados: x² − 81 = (x + 9)(x − 9)."
    },
    {
      id: "id-46", tipo: "abierta", dificultad: "dificil",
      enunciado: "Factoriza x³ + 125 usando la fórmula de suma de cubos a³ + b³ = (a + b)(a² − ab + b²). ¿Cuánto vale b?",
      respuestas: ["5"],
      retro: "125 = 5³, así que b = 5. La factorización es (x + 5)(x² − 5x + 25)."
    },
    {
      id: "id-47", tipo: "vf", dificultad: "media",
      enunciado: "¿Verdadero o falso? x² − 12x + 36 = (x − 6)².",
      correcta: true,
      retro: "Verdadero. (x − 6)² = x² − 12x + 36. Es un trinomio cuadrado perfecto."
    },
    {
      id: "id-48", tipo: "opcion", dificultad: "dificil",
      enunciado: "Factoriza por agrupación:", formula: "x³ − 2x² + 3x − 6",
      opciones: ["(x² + 3)(x − 2)", "(x + 2)(x² − 3)", "(x² − 3)(x + 2)", "(x − 3)(x² + 2)"], correcta: 0,
      retro: "x²(x − 2) + 3(x − 2) = (x² + 3)(x − 2)."
    },
    {
      id: "id-49", tipo: "opcion", dificultad: "facil",
      enunciado: "Saca el factor común de:", formula: "7x² + 7",
      opciones: ["7(x² + 1)", "7x(x + 1)", "7x²(1 + 1/x²)", "x(7x + 7)"], correcta: 0,
      retro: "El factor común es 7: 7(x² + 1). Nota: x² + 1 no factoriza más sobre los reales."
    },
    {
      id: "id-50", tipo: "opcion", dificultad: "media",
      enunciado: "Factoriza:", formula: "x² − 3x − 10",
      opciones: ["(x − 5)(x + 2)", "(x + 5)(x − 2)", "(x − 5)(x − 2)", "(x + 10)(x − 1)"], correcta: 0,
      retro: "−5 y +2: (−5)·2 = −10 y −5 + 2 = −3 → (x − 5)(x + 2)."
    }
  ]
};
