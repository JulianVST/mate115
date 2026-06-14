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
    }
  ]
};
