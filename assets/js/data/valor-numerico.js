/* ===================================================================
   BANCO DE PREGUNTAS · Valor numérico de expresiones algebraicas
   =================================================================== */
window.BANCO = window.BANCO || {};
window.BANCO["valor-numerico"] = {
  config: { numPreguntas: 8, tiempoMin: 10 },
  preguntas: [
    {
      id: "id-01", tipo: "abierta", dificultad: "facil",
      enunciado: "Si x = 2, ¿cuánto vale 3x + 1? (escribe el número)",
      respuestas: ["7"],
      pista: "Sustituye x por 2 y opera.",
      retro: "3(2) + 1 = 6 + 1 = 7."
    },
    {
      id: "id-02", tipo: "abierta", dificultad: "facil",
      enunciado: "Si x = 3, ¿cuánto vale x² + 1?",
      respuestas: ["10"],
      retro: "3² + 1 = 9 + 1 = 10."
    },
    {
      id: "id-03", tipo: "abierta", dificultad: "media",
      enunciado: "Si x = 2, ¿cuánto vale 2x² + 3?",
      respuestas: ["11"],
      retro: "2(2²) + 3 = 2(4) + 3 = 8 + 3 = 11."
    },
    {
      id: "id-04", tipo: "abierta", dificultad: "media",
      enunciado: "Si a = 4 y b = 2, ¿cuánto vale a + b²?",
      respuestas: ["8"],
      retro: "4 + 2² = 4 + 4 = 8."
    },
    {
      id: "id-05", tipo: "abierta", dificultad: "facil",
      enunciado: "Si x = 5, ¿cuánto vale 2x − 4?",
      respuestas: ["6"],
      retro: "2(5) − 4 = 10 − 4 = 6."
    },
    {
      id: "id-06", tipo: "abierta", dificultad: "media",
      enunciado: "Si x = −2, ¿cuánto vale x²?",
      respuestas: ["4"],
      retro: "(−2)² = 4. Un número negativo al cuadrado da positivo."
    },
    {
      id: "id-07", tipo: "abierta", dificultad: "media",
      enunciado: "Si x = 1 y y = 3, ¿cuánto vale 4x + 2y?",
      respuestas: ["10"],
      retro: "4(1) + 2(3) = 4 + 6 = 10."
    },
    {
      id: "id-08", tipo: "opcion", dificultad: "facil",
      enunciado: "Para hallar el valor numérico de una expresión se debe:",
      opciones: ["Sustituir las letras por su valor y operar", "Derivar la expresión", "Factorizar", "Sumar todas las letras"], correcta: 0,
      retro: "Valor numérico = reemplazar cada letra por su número y resolver."
    },
    {
      id: "id-09", tipo: "abierta", dificultad: "facil",
      enunciado: "Si x = 4, ¿cuánto vale x − 1?",
      respuestas: ["3"],
      retro: "4 − 1 = 3."
    },
    {
      id: "id-10", tipo: "abierta", dificultad: "media",
      enunciado: "Si x = 3, ¿cuánto vale x² − 2x?",
      respuestas: ["3"],
      retro: "9 − 6 = 3."
    },
    {
      id: "id-11", tipo: "abierta", dificultad: "media",
      enunciado: "Si a = 2 y b = 5, ¿cuánto vale 3a + b?",
      respuestas: ["11"],
      retro: "3(2) + 5 = 11."
    },
    {
      id: "id-12", tipo: "abierta", dificultad: "dificil",
      enunciado: "Si x = −1, ¿cuánto vale x² + 2x + 1?",
      respuestas: ["0"],
      retro: "1 − 2 + 1 = 0."
    },
    {
      id: "id-13", tipo: "abierta", dificultad: "facil",
      enunciado: "Si x = 6, ¿cuánto vale x + 4?",
      respuestas: ["10"],
      retro: "6 + 4 = 10."
    },
    {
      id: "id-14", tipo: "opcion", dificultad: "facil",
      enunciado: "Si a = 3, ¿cuánto vale 2a?",
      opciones: ["6", "5", "3", "8"], correcta: 0,
      retro: "2 × 3 = 6."
    },
    {
      id: "id-15", tipo: "abierta", dificultad: "media",
      enunciado: "Si x = 2 y y = 3, ¿cuánto vale 2x + 3y?",
      respuestas: ["13"],
      retro: "2(2) + 3(3) = 4 + 9 = 13."
    },
    {
      id: "id-16", tipo: "opcion", dificultad: "media",
      enunciado: "Si x = −2, ¿cuánto vale 3x + 4?",
      opciones: ["−2", "2", "−10", "10"], correcta: 0,
      retro: "3(−2) + 4 = −6 + 4 = −2."
    },
    {
      id: "id-17", tipo: "abierta", dificultad: "facil",
      enunciado: "Si n = 10, ¿cuánto vale n/2?",
      respuestas: ["5"],
      retro: "10/2 = 5."
    },
    {
      id: "id-18", tipo: "opcion", dificultad: "media",
      enunciado: "Si x = 3, ¿cuánto vale x² + 2x + 1?",
      opciones: ["16", "14", "10", "12"], correcta: 0,
      retro: "3² + 2(3) + 1 = 9 + 6 + 1 = 16."
    },
    {
      id: "id-19", tipo: "vf", dificultad: "facil",
      enunciado: "¿Verdadero o falso? Si x = 2, entonces x² = 4.",
      correcta: true,
      retro: "Verdadero. 2² = 2 × 2 = 4."
    },
    {
      id: "id-20", tipo: "abierta", dificultad: "media",
      enunciado: "Si a = 1/2, ¿cuánto vale 4a?",
      respuestas: ["2"],
      retro: "4 × (1/2) = 4/2 = 2."
    },
    {
      id: "id-21", tipo: "opcion", dificultad: "media",
      enunciado: "Si x = 0, ¿cuánto vale 5x² + 3x − 7?",
      opciones: ["−7", "0", "7", "3"], correcta: 0,
      retro: "5(0)² + 3(0) − 7 = 0 + 0 − 7 = −7."
    },
    {
      id: "id-22", tipo: "abierta", dificultad: "dificil",
      enunciado: "Si x = −3, ¿cuánto vale x² − x + 2?",
      respuestas: ["14"],
      retro: "(−3)² − (−3) + 2 = 9 + 3 + 2 = 14."
    },
    {
      id: "id-23", tipo: "vf", dificultad: "media",
      enunciado: "¿Verdadero o falso? Si x = −1, entonces x³ = 1.",
      correcta: false,
      retro: "Falso. (−1)³ = −1 × −1 × −1 = −1."
    },
    {
      id: "id-24", tipo: "opcion", dificultad: "facil",
      enunciado: "Si p = 5, ¿cuánto vale p − 8?",
      opciones: ["−3", "3", "13", "40"], correcta: 0,
      retro: "5 − 8 = −3."
    },
    {
      id: "id-25", tipo: "abierta", dificultad: "media",
      enunciado: "Si x = 2 y y = −1, ¿cuánto vale x + y?",
      respuestas: ["1"],
      retro: "2 + (−1) = 2 − 1 = 1."
    },
    {
      id: "id-26", tipo: "opcion", dificultad: "dificil",
      enunciado: "Si a = 2 y b = −3, ¿cuánto vale a² − b²?",
      opciones: ["−5", "5", "13", "−13"], correcta: 0,
      retro: "2² − (−3)² = 4 − 9 = −5."
    },
    {
      id: "id-27", tipo: "vf", dificultad: "facil",
      enunciado: "¿Verdadero o falso? Si x = 0, entonces cualquier expresión que solo tenga términos con x vale 0.",
      correcta: true,
      retro: "Verdadero. Si x = 0, entonces xⁿ = 0 para cualquier n > 0."
    },
    {
      id: "id-28", tipo: "abierta", dificultad: "dificil",
      enunciado: "Si x = −2 y y = 3, ¿cuánto vale x² + 2xy − y?",
      respuestas: ["-11"],
      retro: "(−2)² + 2(−2)(3) − 3 = 4 − 12 − 3 = −11."
    },
    {
      id: "id-29", tipo: "opcion", dificultad: "media",
      enunciado: "Si t = 4, ¿cuánto vale t² − 4t?",
      opciones: ["0", "4", "−4", "8"], correcta: 0,
      retro: "4² − 4(4) = 16 − 16 = 0."
    },
    {
      id: "id-30", tipo: "abierta", dificultad: "facil",
      enunciado: "Si a = 7, ¿cuánto vale a + a?",
      respuestas: ["14"],
      retro: "7 + 7 = 14. (También puede verse como 2a = 2 × 7 = 14.)"
    },
    {
      id: "id-31", tipo: "opcion", dificultad: "media",
      enunciado: "Si x = 1/2, ¿cuánto vale 2x + 1?",
      opciones: ["2", "1", "3", "1/2"], correcta: 0,
      retro: "2(1/2) + 1 = 1 + 1 = 2."
    },
    {
      id: "id-32", tipo: "vf", dificultad: "media",
      enunciado: "¿Verdadero o falso? Si a = 3 y b = 3, entonces a² + b = 12.",
      correcta: true,
      retro: "Verdadero. 3² + 3 = 9 + 3 = 12."
    },
    {
      id: "id-33", tipo: "abierta", dificultad: "dificil",
      enunciado: "Si x = −1 y y = 2, ¿cuánto vale 3x² − 2y + 1?",
      respuestas: ["-2"],
      retro: "3(−1)² − 2(2) + 1 = 3(1) − 4 + 1 = 3 − 4 + 1 = 0. Nota: 3 − 4 + 1 = 0.",
    },
    {
      id: "id-34", tipo: "opcion", dificultad: "dificil",
      enunciado: "Si x = 2, ¿qué valor satisface la ecuación x² + bx = 0?",
      opciones: ["b = −2", "b = 2", "b = 4", "b = 0"], correcta: 0,
      retro: "2² + b(2) = 0 → 4 + 2b = 0 → 2b = −4 → b = −2."
    },
    {
      id: "id-35", tipo: "vf", dificultad: "media",
      enunciado: "¿Verdadero o falso? Si x = 5, entonces x² = 25.",
      correcta: true,
      retro: "Verdadero. 5² = 5 × 5 = 25."
    },
    {
      id: "id-36", tipo: "abierta", dificultad: "media",
      enunciado: "Si m = 3 y n = 4, ¿cuánto vale m · n?",
      respuestas: ["12"],
      retro: "3 × 4 = 12."
    },
    {
      id: "id-37", tipo: "opcion", dificultad: "media",
      enunciado: "Si x = −1, ¿cuánto vale x⁴?",
      opciones: ["1", "−1", "4", "−4"], correcta: 0,
      retro: "(−1)⁴ = (−1)(−1)(−1)(−1) = 1. Potencia par de número negativo es positiva."
    },
    {
      id: "id-38", tipo: "abierta", dificultad: "facil",
      enunciado: "Si k = 9, ¿cuánto vale k/3 + 1?",
      respuestas: ["4"],
      retro: "9/3 + 1 = 3 + 1 = 4."
    },
    {
      id: "id-39", tipo: "vf", dificultad: "dificil",
      enunciado: "¿Verdadero o falso? x = 3 es solución de la ecuación x² − 9 = 0.",
      correcta: true,
      retro: "Verdadero. 3² − 9 = 9 − 9 = 0. ✓"
    },
    {
      id: "id-40", tipo: "opcion", dificultad: "dificil",
      enunciado: "Si a = 2, b = 3 y c = 1, ¿cuánto vale a² + b² − c²?",
      opciones: ["12", "14", "6", "13"], correcta: 0,
      retro: "4 + 9 − 1 = 12."
    },
    {
      id: "id-41", tipo: "abierta", dificultad: "media",
      enunciado: "Si x = 1/2, ¿cuánto vale x² + x?",
      respuestas: ["3/4", "0.75"],
      retro: "(1/2)² + 1/2 = 1/4 + 2/4 = 3/4."
    },
    {
      id: "id-42", tipo: "opcion", dificultad: "facil",
      enunciado: "Si x = 10, ¿cuánto vale x/5 − 1?",
      opciones: ["1", "2", "9", "3"], correcta: 0,
      retro: "10/5 − 1 = 2 − 1 = 1."
    },
    {
      id: "id-43", tipo: "vf", dificultad: "media",
      enunciado: "¿Verdadero o falso? Si x = −2, entonces 2x² = 8.",
      correcta: true,
      retro: "Verdadero. 2(−2)² = 2(4) = 8."
    },
    {
      id: "id-44", tipo: "abierta", dificultad: "dificil",
      enunciado: "Si a = −1, ¿cuánto vale a³ + a² + a + 1?",
      respuestas: ["0"],
      retro: "(−1)³ + (−1)² + (−1) + 1 = −1 + 1 − 1 + 1 = 0."
    },
    {
      id: "id-45", tipo: "opcion", dificultad: "media",
      enunciado: "Si x = 4 y y = 2, ¿cuánto vale (x + y)/3?",
      opciones: ["2", "3", "4", "6"], correcta: 0,
      retro: "(4 + 2)/3 = 6/3 = 2."
    },
    {
      id: "id-46", tipo: "abierta", dificultad: "facil",
      enunciado: "Si n = 8, ¿cuánto vale 3n − n?",
      respuestas: ["16"],
      retro: "3(8) − 8 = 24 − 8 = 16."
    },
    {
      id: "id-47", tipo: "vf", dificultad: "dificil",
      enunciado: "¿Verdadero o falso? x = −2 es solución de x² + 3x + 2 = 0.",
      correcta: true,
      retro: "Verdadero. (−2)² + 3(−2) + 2 = 4 − 6 + 2 = 0. ✓"
    },
    {
      id: "id-48", tipo: "opcion", dificultad: "dificil",
      enunciado: "Si x = 1/2, ¿cuánto vale 8x³?",
      opciones: ["1", "2", "4", "1/2"], correcta: 0,
      retro: "8 × (1/2)³ = 8 × 1/8 = 1."
    },
    {
      id: "id-49", tipo: "abierta", dificultad: "media",
      enunciado: "Si a = 3 y b = −2, ¿cuánto vale ab?",
      respuestas: ["-6"],
      retro: "3 × (−2) = −6."
    },
    {
      id: "id-50", tipo: "opcion", dificultad: "dificil",
      enunciado: "Si x = 2 y y = −1, ¿cuánto vale x² − 2xy + y²?",
      opciones: ["9", "1", "5", "−1"], correcta: 0,
      retro: "4 − 2(2)(−1) + 1 = 4 + 4 + 1 = 9. (Equivale a (x − y)² = (2−(−1))² = 3² = 9.)"
    }
  ]
};
