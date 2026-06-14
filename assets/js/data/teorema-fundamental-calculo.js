/* ===================================================================
   BANCO DE PREGUNTAS · Teorema fundamental del cálculo
   ∫ₐᵇ f(x) dx = F(b) − F(a)
   =================================================================== */
window.BANCO = window.BANCO || {};
window.BANCO["teorema-fundamental-calculo"] = {
  config: { numPreguntas: 8, tiempoMin: 14 },
  preguntas: [
    {
      id: "id-01", tipo: "abierta", dificultad: "facil",
      enunciado: "Calcula la integral definida (escribe solo el número):", formula: "∫₀² 2x dx",
      respuestas: ["4"],
      pista: "F(x) = x². Evalúa F(2) − F(0).",
      retro: "F(x) = x². F(2) − F(0) = 4 − 0 = 4."
    },
    {
      id: "id-02", tipo: "abierta", dificultad: "media",
      enunciado: "Calcula:", formula: "∫₀³ x² dx",
      respuestas: ["9"],
      retro: "F(x) = x³/3. F(3) − F(0) = 27/3 − 0 = 9."
    },
    {
      id: "id-03", tipo: "abierta", dificultad: "media",
      enunciado: "Calcula:", formula: "∫₀^π sen x dx",
      respuestas: ["2"],
      pista: "F(x) = −cos x. Recuerda cos(π) = −1 y cos(0) = 1.",
      retro: "−cos(π) − (−cos 0) = 1 + 1 = 2."
    },
    {
      id: "id-04", tipo: "abierta", dificultad: "facil",
      enunciado: "Calcula:", formula: "∫₁⁴ 2 dx",
      respuestas: ["6"],
      retro: "F(x) = 2x. F(4) − F(1) = 8 − 2 = 6."
    },
    {
      id: "id-05", tipo: "abierta", dificultad: "media",
      enunciado: "Calcula:", formula: "∫₀² 3x² dx",
      respuestas: ["8"],
      retro: "F(x) = x³. F(2) − F(0) = 8 − 0 = 8."
    },
    {
      id: "id-06", tipo: "abierta", dificultad: "media",
      enunciado: "Calcula:", formula: "∫₂³ 2x dx",
      respuestas: ["5"],
      retro: "F(x) = x². F(3) − F(2) = 9 − 4 = 5."
    },
    {
      id: "id-07", tipo: "opcion", dificultad: "facil",
      enunciado: "El teorema fundamental del cálculo dice que ∫ₐᵇ f(x) dx es igual a:",
      opciones: ["F(b) − F(a)", "F(a) − F(b)", "f(b) − f(a)", "F(b) + F(a)"], correcta: 0,
      retro: "Se evalúa la antiderivada en el límite superior menos el inferior: F(b) − F(a)."
    },
    {
      id: "id-08", tipo: "vf", dificultad: "facil",
      enunciado: "¿Verdadero o falso? En una integral DEFINIDA ya no se escribe + C.",
      correcta: true,
      retro: "Verdadero. La constante se cancela al restar F(b) − F(a)."
    },
    {
      id: "id-09", tipo: "abierta", dificultad: "facil",
      enunciado: "Calcula:", formula: "∫₀¹ 4x dx",
      respuestas: ["2"],
      retro: "F(x) = 2x². F(1) − F(0) = 2 − 0 = 2."
    },
    {
      id: "id-10", tipo: "abierta", dificultad: "dificil",
      enunciado: "Calcula:", formula: "∫₁² x³ dx",
      respuestas: ["15/4", "3.75"],
      retro: "F(x) = x⁴/4. F(2) − F(1) = 16/4 − 1/4 = 15/4 = 3.75."
    },
    {
      id: "id-11", tipo: "abierta", dificultad: "facil",
      enunciado: "Calcula:", formula: "∫₀⁵ 3 dx",
      respuestas: ["15"],
      retro: "F(x) = 3x. F(5) − F(0) = 15."
    },
    {
      id: "id-12", tipo: "abierta", dificultad: "media",
      enunciado: "Calcula:", formula: "∫₀³ x dx",
      respuestas: ["9/2", "4.5"],
      retro: "F(x) = x²/2. F(3) − F(0) = 9/2 = 4.5."
    },
    {
      id: "id-13", tipo: "abierta", dificultad: "media",
      enunciado: "Calcula:", formula: "∫₁² 6x² dx",
      respuestas: ["14"],
      retro: "F(x) = 2x³. F(2) − F(1) = 16 − 2 = 14."
    },
    {
      id: "id-14", tipo: "abierta", dificultad: "dificil",
      enunciado: "Calcula:", formula: "∫₀^(π/2) cos x dx",
      respuestas: ["1"],
      retro: "F(x) = sen x. sen(π/2) − sen(0) = 1 − 0 = 1."
    },
    {
      id: "id-15", tipo: "opcion", dificultad: "facil",
      enunciado: "Para evaluar una integral definida, primero se necesita:",
      opciones: ["La antiderivada F(x)", "La derivada f'(x)", "La pendiente", "El límite lateral"], correcta: 0,
      retro: "Se halla F(x) y luego se evalúa F(b) − F(a)."
    }
  ]
};
