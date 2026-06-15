/* ===================================================================
   BANCO DE PREGUNTAS · Máximos y mínimos
   =================================================================== */
window.BANCO = window.BANCO || {};
window.BANCO["maximos-y-minimos"] = {
  config: { numPreguntas: 8, tiempoMin: 0 },
  preguntas: [
    {
      id: "id-01", tipo: "abierta", dificultad: "media",
      enunciado: "La función f(x) = x² − 4x + 3 tiene su mínimo en x = ? (escribe el número)",
      respuestas: ["2"],
      pista: "Deriva e iguala a cero: f'(x) = 2x − 4 = 0.",
      retro: "f'(x) = 2x − 4 = 0 → x = 2."
    },
    {
      id: "id-02", tipo: "abierta", dificultad: "media",
      enunciado: "Punto crítico de f(x) = x² − 6x + 1: x = ?",
      respuestas: ["3"],
      retro: "f'(x) = 2x − 6 = 0 → x = 3."
    },
    {
      id: "id-03", tipo: "abierta", dificultad: "media",
      enunciado: "La función f(x) = −x² + 8x tiene su máximo en x = ?",
      respuestas: ["4"],
      retro: "f'(x) = −2x + 8 = 0 → x = 4."
    },
    {
      id: "id-04", tipo: "abierta", dificultad: "facil",
      enunciado: "Valor de x donde f(x) = x² − 10x tiene su mínimo:",
      respuestas: ["5"],
      retro: "f'(x) = 2x − 10 = 0 → x = 5."
    },
    {
      id: "id-05", tipo: "opcion", dificultad: "facil",
      enunciado: "En un máximo o un mínimo, la primera derivada f'(x) vale:",
      opciones: ["0", "1", "infinito", "siempre negativa"], correcta: 0,
      retro: "En los puntos máximos y mínimos la recta tangente es horizontal: f'(x) = 0."
    },
    {
      id: "id-06", tipo: "opcion", dificultad: "media",
      enunciado: "Si en un punto crítico f''(x) > 0, ese punto es un:",
      opciones: ["Mínimo", "Máximo", "Punto de inflexión", "No se puede saber"], correcta: 0,
      retro: "Criterio de la segunda derivada: f'' > 0 (cóncava hacia arriba) → mínimo."
    },
    {
      id: "id-07", tipo: "opcion", dificultad: "dificil",
      enunciado: "Los puntos críticos de f(x) = x³ − 3x están en:",
      opciones: ["x = 1 y x = −1", "x = 0", "x = 3", "x = −3 y x = 3"], correcta: 0,
      retro: "f'(x) = 3x² − 3 = 0 → x² = 1 → x = ±1."
    },
    {
      id: "id-08", tipo: "vf", dificultad: "facil",
      enunciado: "¿Verdadero o falso? Para encontrar máximos y mínimos se iguala la primera derivada a cero.",
      correcta: true,
      retro: "Verdadero, y luego se clasifican con la segunda derivada."
    },
    {
      id: "id-09", tipo: "abierta", dificultad: "media",
      enunciado: "La función f(x) = x² − 8x + 1 tiene su mínimo en x = ?",
      respuestas: ["4"],
      retro: "f'(x) = 2x − 8 = 0 → x = 4."
    },
    {
      id: "id-10", tipo: "abierta", dificultad: "media",
      enunciado: "La función f(x) = −x² + 6x tiene su máximo en x = ?",
      respuestas: ["3"],
      retro: "f'(x) = −2x + 6 = 0 → x = 3."
    },
    {
      id: "id-11", tipo: "opcion", dificultad: "media",
      enunciado: "Si en un punto crítico f''(x) < 0, ese punto es un:",
      opciones: ["Máximo", "Mínimo", "Punto de inflexión", "No se puede saber"], correcta: 0,
      retro: "f'' < 0 (cóncava hacia abajo) → máximo."
    },
    {
      id: "id-12", tipo: "abierta", dificultad: "dificil",
      enunciado: "f(x) = x² − 12x + 5. ¿En qué x está el mínimo?",
      respuestas: ["6"],
      retro: "f'(x) = 2x − 12 = 0 → x = 6."
    },
    {
      id: "id-13", tipo: "opcion", dificultad: "facil",
      enunciado: "Los puntos donde f'(x) = 0 se llaman:",
      opciones: ["Puntos críticos", "Asíntotas", "Raíces dobles", "Límites"], correcta: 0,
      retro: "Son los puntos críticos: candidatos a máximo o mínimo."
    },
    {
      id: "id-14", tipo: "vf", dificultad: "media",
      enunciado: "¿Verdadero o falso? En un máximo, la función deja de subir y empieza a bajar.",
      correcta: true,
      retro: "Verdadero, por eso la pendiente (derivada) vale 0 en ese punto."
    },
    {
      id: "id-15", tipo: "opcion", dificultad: "facil",
      enunciado: "Para clasificar un punto crítico con la SEGUNDA derivada, si f''(x) = 0 se concluye:",
      opciones: ["El criterio no es concluyente; se necesita otro método", "Es un máximo", "Es un mínimo", "Es un punto de inflexión siempre"], correcta: 0,
      retro: "Cuando f''(x) = 0 en el punto crítico, el criterio de la segunda derivada no es concluyente."
    },
    {
      id: "id-16", tipo: "abierta", dificultad: "facil",
      enunciado: "¿En qué x tiene su mínimo f(x) = x² + 4x + 4?",
      respuestas: ["-2", "−2"],
      pista: "f'(x) = 2x + 4 = 0.",
      retro: "f'(x) = 2x + 4 = 0 → x = −2. Como f'' = 2 > 0, es mínimo."
    },
    {
      id: "id-17", tipo: "abierta", dificultad: "media",
      enunciado: "f(x) = x³ − 3x. ¿Cuál es el valor MÁXIMO LOCAL de f?",
      respuestas: ["2"],
      pista: "Los puntos críticos son x = ±1. Evalúa f(−1).",
      retro: "f'(x) = 3x² − 3 = 0 → x = ±1. f(−1) = −1 + 3 = 2 (máximo local); f(1) = 1 − 3 = −2 (mínimo local)."
    },
    {
      id: "id-18", tipo: "opcion", dificultad: "media",
      enunciado: "Para hallar el extremo ABSOLUTO de f en [a,b], se evalúa f en:",
      opciones: ["Los puntos críticos y los extremos del intervalo", "Solo los puntos críticos", "Solo los extremos a y b", "Los puntos donde f'' = 0"], correcta: 0,
      retro: "El valor máximo o mínimo absoluto en [a,b] está entre los puntos críticos internos y los extremos a y b."
    },
    {
      id: "id-19", tipo: "abierta", dificultad: "dificil",
      enunciado: "f(x) = x³ − 6x² + 9x en [0,4]. ¿Cuál es el máximo ABSOLUTO? (escribe el valor de f)",
      respuestas: ["4"],
      pista: "Halla puntos críticos, evalúa también en x = 0 y x = 4.",
      retro: "f'(x) = 3x² − 12x + 9 = 0 → x = 1 y x = 3. f(0) = 0, f(1) = 4, f(3) = 0, f(4) = 4. Máximo absoluto = 4."
    },
    {
      id: "id-20", tipo: "vf", dificultad: "media",
      enunciado: "¿Verdadero o falso? Todo máximo local de una función diferenciable en el interior de su dominio tiene f'(x) = 0.",
      correcta: true,
      retro: "Verdadero. En cualquier extremo local interior de una función diferenciable, la derivada debe ser cero."
    },
    {
      id: "id-21", tipo: "opcion", dificultad: "media",
      enunciado: "Un PUNTO DE INFLEXIÓN es un punto donde:",
      opciones: ["La concavidad cambia de signo", "f'(x) = 0", "f(x) = 0", "La función no es diferenciable"], correcta: 0,
      retro: "En un punto de inflexión, f'' cambia de signo: la curva pasa de cóncava arriba a cóncava abajo o viceversa."
    },
    {
      id: "id-22", tipo: "abierta", dificultad: "media",
      enunciado: "¿En qué x tiene un punto de inflexión f(x) = x³?",
      respuestas: ["0"],
      pista: "f''(x) = 6x = 0.",
      retro: "f''(x) = 6x = 0 → x = 0. Como f'' cambia de signo en x = 0, es punto de inflexión."
    },
    {
      id: "id-23", tipo: "opcion", dificultad: "facil",
      enunciado: "Una función es CÓNCAVA HACIA ARRIBA (tazón ∪) cuando:",
      opciones: ["f''(x) > 0", "f''(x) < 0", "f'(x) > 0", "f'(x) < 0"], correcta: 0,
      retro: "f'' > 0 indica que la pendiente crece: la curva es cóncava hacia arriba."
    },
    {
      id: "id-24", tipo: "opcion", dificultad: "facil",
      enunciado: "Una función es CÓNCAVA HACIA ABAJO (campana ∩) cuando:",
      opciones: ["f''(x) < 0", "f''(x) > 0", "f'(x) < 0", "f'(x) = 0"], correcta: 0,
      retro: "f'' < 0 indica que la pendiente decrece: la curva es cóncava hacia abajo."
    },
    {
      id: "id-25", tipo: "abierta", dificultad: "media",
      enunciado: "f(x) = 2x³ − 3x². ¿En qué x tiene su punto de inflexión?",
      respuestas: ["1/2", "0.5"],
      pista: "f''(x) = 12x − 6 = 0.",
      retro: "f'(x) = 6x² − 6x, f''(x) = 12x − 6 = 0 → x = 1/2."
    },
    {
      id: "id-26", tipo: "vf", dificultad: "media",
      enunciado: "¿Verdadero o falso? f''(x) = 0 en un punto garantiza que ese punto ES un punto de inflexión.",
      correcta: false,
      retro: "Falso. f''(x) = 0 es condición necesaria pero no suficiente. Además debe cambiar el signo de f'' en ese punto."
    },
    {
      id: "id-27", tipo: "opcion", dificultad: "dificil",
      enunciado: "Para f(x) = x⁴ − 8x² + 3, los puntos críticos son:",
      opciones: ["x = 0, x = 2 y x = −2", "x = 0 y x = 4", "x = 2 y x = −2", "x = ±√8"], correcta: 0,
      pista: "f'(x) = 4x³ − 16x = 4x(x² − 4).",
      retro: "f'(x) = 4x³ − 16x = 4x(x−2)(x+2) = 0 → x = 0, x = 2, x = −2."
    },
    {
      id: "id-28", tipo: "abierta", dificultad: "dificil",
      enunciado: "f(x) = x⁴ − 8x² + 3. ¿Cuál es el valor del mínimo local en x = 2?",
      respuestas: ["-13"],
      pista: "Evalúa f(2).",
      retro: "f(2) = 16 − 32 + 3 = −13. (Usando la segunda derivada: f''(2) = 12(4) − 16 = 32 > 0, confirma mínimo.)"
    },
    {
      id: "id-29", tipo: "vf", dificultad: "facil",
      enunciado: "¿Verdadero o falso? Una función cuadrática ax² + bx + c con a > 0 siempre tiene un mínimo global.",
      correcta: true,
      retro: "Verdadero. Si a > 0 la parábola abre hacia arriba y tiene un único mínimo en x = −b/(2a)."
    },
    {
      id: "id-30", tipo: "opcion", dificultad: "media",
      enunciado: "Si f'(x) cambia de POSITIVO a NEGATIVO al pasar por x = c, entonces en x = c hay un:",
      opciones: ["Máximo local", "Mínimo local", "Punto de inflexión", "Discontinuidad"], correcta: 0,
      retro: "Si f' va de + a −, la función sube y luego baja: es un máximo local (Prueba de la primera derivada)."
    },
    {
      id: "id-31", tipo: "opcion", dificultad: "media",
      enunciado: "Si f'(x) cambia de NEGATIVO a POSITIVO al pasar por x = c, entonces en x = c hay un:",
      opciones: ["Mínimo local", "Máximo local", "Punto de inflexión", "Discontinuidad"], correcta: 0,
      retro: "Si f' va de − a +, la función baja y luego sube: es un mínimo local (Prueba de la primera derivada)."
    },
    {
      id: "id-32", tipo: "abierta", dificultad: "media",
      enunciado: "Un rectángulo tiene perímetro 20 cm. Si su ancho es x, ¿en qué valor de x se maximiza el área?",
      respuestas: ["5"],
      pista: "Largo = 10 − x. Área A(x) = x(10 − x). Deriva e iguala a cero.",
      retro: "A(x) = x(10 − x) = 10x − x². A'(x) = 10 − 2x = 0 → x = 5. El rectángulo óptimo es un cuadrado de 5 × 5."
    },
    {
      id: "id-33", tipo: "opcion", dificultad: "dificil",
      enunciado: "Se quiere construir una caja sin tapa con una base cuadrada de lado x y volumen fijo. Al minimizar el costo de material, la condición proviene de:",
      opciones: ["Derivar la función de costo e igualar a cero", "Derivar el volumen e igualar a cero", "Igualar la base con la altura", "Usar solo la fórmula del volumen"], correcta: 0,
      retro: "En optimización con restricción, se expresa el costo en función de una sola variable y se deriva para encontrar el mínimo."
    },
    {
      id: "id-34", tipo: "abierta", dificultad: "dificil",
      enunciado: "El producto de dos números positivos es 16. ¿Cuál es el mínimo valor de su suma?",
      respuestas: ["8"],
      pista: "Si xy = 16 entonces y = 16/x. Minimiza S(x) = x + 16/x.",
      retro: "S(x) = x + 16/x. S'(x) = 1 − 16/x² = 0 → x² = 16 → x = 4. Luego y = 4 y S = 4 + 4 = 8."
    },
    {
      id: "id-35", tipo: "vf", dificultad: "media",
      enunciado: "¿Verdadero o falso? Un extremo absoluto en [a,b] siempre ocurre en un punto crítico interior o en los extremos a o b.",
      correcta: true,
      retro: "Verdadero. Ese es el Teorema del Valor Extremo para funciones continuas en intervalos cerrados."
    },
    {
      id: "id-36", tipo: "abierta", dificultad: "media",
      enunciado: "f(x) = x³ − 3x² en [0,3]. ¿Cuál es el mínimo ABSOLUTO de f en ese intervalo?",
      respuestas: ["-4"],
      pista: "Evalúa en los puntos críticos y en los extremos del intervalo.",
      retro: "f'(x) = 3x² − 6x = 3x(x−2) = 0 → x = 0 o x = 2. f(0) = 0, f(2) = 8 − 12 = −4, f(3) = 27 − 27 = 0. Mínimo absoluto = −4."
    },
    {
      id: "id-37", tipo: "opcion", dificultad: "facil",
      enunciado: "La segunda derivada f''(x) mide:",
      opciones: ["La tasa de cambio de la pendiente (concavidad)", "El valor de f en un punto", "La velocidad de f", "El área bajo la curva de f"], correcta: 0,
      retro: "f''(x) indica cómo cambia la pendiente: si aumenta (f'' > 0) la curva es cóncava arriba, si disminuye (f'' < 0) es cóncava abajo."
    },
    {
      id: "id-38", tipo: "abierta", dificultad: "dificil",
      enunciado: "f(x) = x⁴ − 4x³. ¿Cuáles son los puntos críticos? (escribe los valores separados por coma, de menor a mayor)",
      respuestas: ["0, 3", "0,3"],
      pista: "f'(x) = 4x³ − 12x² = 4x²(x − 3).",
      retro: "f'(x) = 4x³ − 12x² = 4x²(x − 3) = 0 → x = 0 o x = 3."
    },
    {
      id: "id-39", tipo: "vf", dificultad: "dificil",
      enunciado: "¿Verdadero o falso? Si f'(c) = 0 y f''(c) = 0, entonces c no puede ser ni máximo ni mínimo.",
      correcta: false,
      retro: "Falso. Si f'' = 0 el criterio no concluye, pero c podría ser un extremo. Por ejemplo, f(x) = x⁴ tiene f'(0) = 0 y f''(0) = 0, pero x = 0 sí es un mínimo."
    },
    {
      id: "id-40", tipo: "opcion", dificultad: "media",
      enunciado: "¿Cuál es el máximo valor de f(x) = −x² + 4x − 1?",
      opciones: ["3", "4", "−1", "2"], correcta: 0,
      pista: "Punto crítico en x = 2. Evalúa f(2).",
      retro: "f'(x) = −2x + 4 = 0 → x = 2. f(2) = −4 + 8 − 1 = 3."
    },
    {
      id: "id-41", tipo: "abierta", dificultad: "facil",
      enunciado: "¿En qué x tiene su mínimo la función f(x) = (x − 3)²?",
      respuestas: ["3"],
      pista: "Es una parábola centrada en x = 3.",
      retro: "f'(x) = 2(x − 3) = 0 → x = 3. Mínimo en x = 3, f(3) = 0."
    },
    {
      id: "id-42", tipo: "opcion", dificultad: "dificil",
      enunciado: "Los intervalos donde f(x) = x³ − 6x² + 9x es CRECIENTE son:",
      opciones: ["(−∞,1) y (3,+∞)", "(1,3)", "(0,∞)", "(−∞,0)"], correcta: 0,
      pista: "f'(x) = 3x² − 12x + 9 = 3(x−1)(x−3). Analiza el signo.",
      retro: "f'(x) = 3(x−1)(x−3) > 0 cuando x < 1 o x > 3. La función crece en (−∞,1) y (3,+∞) y decrece en (1,3)."
    },
    {
      id: "id-43", tipo: "vf", dificultad: "media",
      enunciado: "¿Verdadero o falso? Una función puede tener más de un mínimo local.",
      correcta: true,
      retro: "Verdadero. Por ejemplo f(x) = x⁴ − 8x² tiene dos mínimos locales en x = ±2."
    },
    {
      id: "id-44", tipo: "abierta", dificultad: "media",
      enunciado: "f(x) = x² − 4x + 7. ¿Cuál es el valor mínimo de f?",
      respuestas: ["3"],
      pista: "Halla el punto crítico y evalúa f.",
      retro: "f'(x) = 2x − 4 = 0 → x = 2. f(2) = 4 − 8 + 7 = 3."
    },
    {
      id: "id-45", tipo: "opcion", dificultad: "media",
      enunciado: "Una empresa tiene costo C(x) = x² − 10x + 30. ¿Cuántas unidades x minimizan el costo?",
      opciones: ["5", "10", "3", "30"], correcta: 0,
      pista: "C'(x) = 2x − 10 = 0.",
      retro: "C'(x) = 2x − 10 = 0 → x = 5. C''(x) = 2 > 0 confirma que es un mínimo."
    },
    {
      id: "id-46", tipo: "vf", dificultad: "facil",
      enunciado: "¿Verdadero o falso? El máximo global de una función en [a,b] nunca puede ocurrir en un extremo del intervalo.",
      correcta: false,
      retro: "Falso. El máximo global en [a,b] puede estar perfectamente en x = a o x = b."
    },
    {
      id: "id-47", tipo: "abierta", dificultad: "dificil",
      enunciado: "f(x) = x³ + 3x² − 9x + 1. ¿En qué x tiene su máximo local?",
      respuestas: ["-3", "−3"],
      pista: "f'(x) = 3x² + 6x − 9 = 3(x+3)(x−1). Usa el criterio de primera o segunda derivada.",
      retro: "f'(x) = 3x² + 6x − 9 = 3(x+3)(x−1) = 0 → x = −3 o x = 1. f''(x) = 6x + 6. f''(−3) = −12 < 0: máximo local en x = −3."
    },
    {
      id: "id-48", tipo: "opcion", dificultad: "dificil",
      enunciado: "f(x) = x³ + 3x² − 9x + 1. ¿Cuál es el valor del mínimo local?",
      opciones: ["−4", "28", "1", "−9"], correcta: 0,
      pista: "El mínimo local está en x = 1. Evalúa f(1).",
      retro: "f(1) = 1 + 3 − 9 + 1 = −4. f''(1) = 12 > 0 confirma que es mínimo local."
    },
    {
      id: "id-49", tipo: "vf", dificultad: "media",
      enunciado: "¿Verdadero o falso? En un punto de inflexión, la función puede estar creciendo o decreciendo.",
      correcta: true,
      retro: "Verdadero. El punto de inflexión solo requiere que cambie la concavidad; la función puede ir en cualquier dirección."
    },
    {
      id: "id-50", tipo: "opcion", dificultad: "facil",
      enunciado: "La recta tangente a una función en un punto MÁXIMO o MÍNIMO es:",
      opciones: ["Horizontal (pendiente cero)", "Vertical", "Con pendiente positiva", "Con pendiente negativa"], correcta: 0,
      retro: "En un extremo local la derivada es cero, lo que significa que la recta tangente es horizontal."
    }
  ]
};
