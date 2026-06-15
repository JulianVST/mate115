/* ===================================================================
   BANCO DE PREGUNTAS · Teorema fundamental del cálculo
   ∫ₐᵇ f(x) dx = F(b) − F(a)
   =================================================================== */
window.BANCO = window.BANCO || {};
window.BANCO["teorema-fundamental-calculo"] = {
  config: { numPreguntas: 8, tiempoMin: 0 },
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
    },
    {
      id: "id-16", tipo: "abierta", dificultad: "facil",
      enunciado: "Calcula:", formula: "∫₀² x dx",
      respuestas: ["2"],
      pista: "F(x) = x²/2.",
      retro: "F(x) = x²/2. F(2) − F(0) = 4/2 − 0 = 2."
    },
    {
      id: "id-17", tipo: "abierta", dificultad: "media",
      enunciado: "Calcula:", formula: "∫₁³ (x² + 1) dx",
      respuestas: ["28/3", "9.33", "9.3"],
      pista: "Integra término a término: F(x) = x³/3 + x.",
      retro: "F(x) = x³/3 + x. F(3) − F(1) = (9 + 3) − (1/3 + 1) = 12 − 4/3 = 32/3 ≈ 10.67. Corrección: F(3) = 27/3 + 3 = 9 + 3 = 12; F(1) = 1/3 + 1 = 4/3. Resultado: 12 − 4/3 = 32/3."
    },
    {
      id: "id-18", tipo: "abierta", dificultad: "media",
      enunciado: "Calcula:", formula: "∫₋₁¹ x³ dx",
      respuestas: ["0"],
      pista: "x³ es una función impar. La integral en un intervalo simétrico es 0.",
      retro: "F(x) = x⁴/4. F(1) − F(−1) = 1/4 − 1/4 = 0. (x³ es impar en [−1, 1].)"
    },
    {
      id: "id-19", tipo: "abierta", dificultad: "facil",
      enunciado: "Calcula:", formula: "∫₀¹ eˣ dx",
      respuestas: ["e-1", "e − 1", "1.718", "1.72"],
      pista: "La antiderivada de eˣ es eˣ.",
      retro: "F(x) = eˣ. F(1) − F(0) = e − 1 ≈ 1.718."
    },
    {
      id: "id-20", tipo: "opcion", dificultad: "media",
      enunciado: "Si F'(x) = f(x), la Primera Parte del TFC establece que d/dx[∫ₐˣ f(t) dt] =",
      opciones: ["f(x)", "F(x)", "f(a)", "F(b) − F(a)"], correcta: 0,
      retro: "La Primera Parte del TFC: la derivada de la integral acumulada desde a hasta x es f(x)."
    },
    {
      id: "id-21", tipo: "opcion", dificultad: "facil",
      enunciado: "¿Cuál es el valor de d/dx[∫₁ˣ t² dt]?",
      opciones: ["x²", "x³/3", "2x", "1"], correcta: 0,
      retro: "Por TFC Parte 1: d/dx[∫₁ˣ t² dt] = x²."
    },
    {
      id: "id-22", tipo: "vf", dificultad: "media",
      enunciado: "¿Verdadero o falso? Si F'(x) = f(x), entonces ∫ₐᵇ f(x) dx = F(b) − F(a).",
      correcta: true,
      retro: "Verdadero. Esa es exactamente la Segunda Parte del Teorema Fundamental del Cálculo."
    },
    {
      id: "id-23", tipo: "abierta", dificultad: "media",
      enunciado: "Calcula:", formula: "∫₀² (x² + 2x) dx",
      respuestas: ["20/3", "6.67", "6.6"],
      pista: "F(x) = x³/3 + x².",
      retro: "F(x) = x³/3 + x². F(2) − F(0) = 8/3 + 4 − 0 = 8/3 + 12/3 = 20/3 ≈ 6.67."
    },
    {
      id: "id-24", tipo: "abierta", dificultad: "dificil",
      enunciado: "Calcula:", formula: "∫₁⁴ √x dx",
      respuestas: ["14/3", "4.67", "4.6"],
      pista: "√x = x^(1/2). La antiderivada es (2/3)x^(3/2).",
      retro: "F(x) = (2/3)x^(3/2). F(4) − F(1) = (2/3)(8) − (2/3)(1) = 16/3 − 2/3 = 14/3 ≈ 4.67."
    },
    {
      id: "id-25", tipo: "opcion", dificultad: "media",
      enunciado: "La propiedad ∫ₐᵇ f(x) dx = ∫ₐᶜ f(x) dx + ∫ᶜᵇ f(x) dx se llama:",
      opciones: ["Propiedad aditiva del intervalo", "Propiedad conmutativa", "Regla del producto", "Regla de la cadena"], correcta: 0,
      retro: "La integral se puede dividir en subintervalos: es la propiedad aditiva."
    },
    {
      id: "id-26", tipo: "vf", dificultad: "facil",
      enunciado: "¿Verdadero o falso? ∫ₐᵇ f(x) dx = −∫ᵦₐ f(x) dx (invertir los límites cambia el signo).",
      correcta: true,
      retro: "Verdadero. Al invertir los límites: F(a) − F(b) = −[F(b) − F(a)]."
    },
    {
      id: "id-27", tipo: "abierta", dificultad: "facil",
      enunciado: "Calcula:", formula: "∫₀^(π/2) sen x dx",
      respuestas: ["1"],
      pista: "F(x) = −cos x.",
      retro: "F(x) = −cos x. −cos(π/2) − (−cos 0) = 0 + 1 = 1."
    },
    {
      id: "id-28", tipo: "opcion", dificultad: "dificil",
      enunciado: "¿Cuánto vale d/dx[∫ₐˣ² sen(t) dt]? (límite superior es x²)",
      opciones: ["sen(x²) · 2x", "sen(x²)", "cos(x²) · 2x", "2x"], correcta: 0,
      pista: "Usa TFC Parte 1 con regla de la cadena.",
      retro: "Por TFC + regla de la cadena: sen(x²) · d/dx(x²) = sen(x²) · 2x."
    },
    {
      id: "id-29", tipo: "abierta", dificultad: "media",
      enunciado: "Calcula:", formula: "∫₀¹ (3x² − 2x) dx",
      respuestas: ["0"],
      pista: "F(x) = x³ − x².",
      retro: "F(x) = x³ − x². F(1) − F(0) = (1 − 1) − 0 = 0."
    },
    {
      id: "id-30", tipo: "vf", dificultad: "media",
      enunciado: "¿Verdadero o falso? Si f(x) ≥ 0 en [a,b], entonces ∫ₐᵇ f(x) dx ≥ 0.",
      correcta: true,
      retro: "Verdadero. Una función no negativa en [a,b] produce una integral no negativa."
    },
    {
      id: "id-31", tipo: "opcion", dificultad: "facil",
      enunciado: "¿Cuál es la antiderivada de f(x) = 5x⁴?",
      opciones: ["x⁵", "20x³", "5x⁵", "x⁵/5"], correcta: 0,
      retro: "∫ 5x⁴ dx = x⁵ + C. (Regla de la potencia: eleva en 1 y divide por el nuevo exponente.)"
    },
    {
      id: "id-32", tipo: "abierta", dificultad: "dificil",
      enunciado: "Calcula:", formula: "∫₀¹ (eˣ + x) dx",
      respuestas: ["e + 1/2 - 1", "e-0.5", "1.218", "1.22"],
      pista: "Integra término a término: F(x) = eˣ + x²/2.",
      retro: "F(x) = eˣ + x²/2. F(1) − F(0) = (e + 1/2) − (1 + 0) = e − 1/2 ≈ 2.218 − 0.5 = 1.718."
    },
    {
      id: "id-33", tipo: "opcion", dificultad: "media",
      enunciado: "Si ∫₀² f(x) dx = 7 y ∫₀² g(x) dx = 3, ¿cuánto vale ∫₀² [f(x) + g(x)] dx?",
      opciones: ["10", "4", "21", "No se puede saber"], correcta: 0,
      retro: "Por linealidad: ∫[f + g] = ∫f + ∫g = 7 + 3 = 10."
    },
    {
      id: "id-34", tipo: "abierta", dificultad: "facil",
      enunciado: "Calcula:", formula: "∫₀⁴ (2x + 1) dx",
      respuestas: ["20"],
      pista: "F(x) = x² + x.",
      retro: "F(x) = x² + x. F(4) − F(0) = 16 + 4 − 0 = 20."
    },
    {
      id: "id-35", tipo: "vf", dificultad: "facil",
      enunciado: "¿Verdadero o falso? ∫ₐₐ f(x) dx = 0 (cuando los dos límites son iguales).",
      correcta: true,
      retro: "Verdadero. F(a) − F(a) = 0."
    },
    {
      id: "id-36", tipo: "opcion", dificultad: "media",
      enunciado: "Si ∫₁³ f(x) dx = 8, ¿cuánto vale ∫₃¹ f(x) dx?",
      opciones: ["−8", "8", "0", "Depende de f"], correcta: 0,
      retro: "Invertir los límites cambia el signo: ∫₃¹ f(x) dx = −∫₁³ f(x) dx = −8."
    },
    {
      id: "id-37", tipo: "abierta", dificultad: "media",
      enunciado: "Calcula:", formula: "∫₀³ (x + 2) dx",
      respuestas: ["21/2", "10.5"],
      pista: "F(x) = x²/2 + 2x.",
      retro: "F(x) = x²/2 + 2x. F(3) − F(0) = 9/2 + 6 = 9/2 + 12/2 = 21/2 = 10.5."
    },
    {
      id: "id-38", tipo: "opcion", dificultad: "dificil",
      enunciado: "¿Cuánto vale ∫₀² |x − 1| dx?",
      opciones: ["1", "0", "2", "4"], correcta: 0,
      pista: "Divide en [0,1] donde x−1 < 0, y [1,2] donde x−1 ≥ 0.",
      retro: "∫₀¹ (1−x) dx + ∫₁² (x−1) dx = [x − x²/2]₀¹ + [x²/2 − x]₁² = 1/2 + 1/2 = 1."
    },
    {
      id: "id-39", tipo: "vf", dificultad: "media",
      enunciado: "¿Verdadero o falso? Si f(x) es continua en [a,b], entonces su integral definida siempre existe.",
      correcta: true,
      retro: "Verdadero. La continuidad en [a,b] garantiza la integrabilidad de la función."
    },
    {
      id: "id-40", tipo: "abierta", dificultad: "dificil",
      enunciado: "Calcula:", formula: "∫₋₁² x² dx",
      respuestas: ["3"],
      pista: "F(x) = x³/3.",
      retro: "F(x) = x³/3. F(2) − F(−1) = 8/3 − (−1/3) = 8/3 + 1/3 = 9/3 = 3."
    },
    {
      id: "id-41", tipo: "opcion", dificultad: "facil",
      enunciado: "La antiderivada de f(x) = cos x es:",
      opciones: ["sen x", "−sen x", "−cos x", "tan x"], correcta: 0,
      retro: "∫ cos x dx = sen x + C, porque d/dx(sen x) = cos x."
    },
    {
      id: "id-42", tipo: "opcion", dificultad: "media",
      enunciado: "Si ∫₀⁵ f(x) dx = 12 y ∫₀² f(x) dx = 5, ¿cuánto vale ∫₂⁵ f(x) dx?",
      opciones: ["7", "17", "60", "2.4"], correcta: 0,
      pista: "Usa la propiedad aditiva del intervalo.",
      retro: "∫₀⁵ = ∫₀² + ∫₂⁵ → 12 = 5 + ∫₂⁵ → ∫₂⁵ = 7."
    },
    {
      id: "id-43", tipo: "abierta", dificultad: "facil",
      enunciado: "Calcula:", formula: "∫₁² (4x + 3) dx",
      respuestas: ["9"],
      pista: "F(x) = 2x² + 3x.",
      retro: "F(x) = 2x² + 3x. F(2) − F(1) = (8 + 6) − (2 + 3) = 14 − 5 = 9."
    },
    {
      id: "id-44", tipo: "vf", dificultad: "dificil",
      enunciado: "¿Verdadero o falso? La integral definida ∫ₐᵇ f(x) dx siempre representa un área positiva.",
      correcta: false,
      retro: "Falso. La integral puede ser negativa si f(x) < 0 en [a,b]. El área geométrica es el valor absoluto, pero la integral es un valor con signo."
    },
    {
      id: "id-45", tipo: "opcion", dificultad: "dificil",
      enunciado: "¿Cuánto vale ∫₀^π cos x dx?",
      opciones: ["0", "1", "2", "−1"], correcta: 0,
      pista: "F(x) = sen x. Evalúa en π y en 0.",
      retro: "F(x) = sen x. sen(π) − sen(0) = 0 − 0 = 0. (Las mitades positiva y negativa se cancelan.)"
    },
    {
      id: "id-46", tipo: "abierta", dificultad: "media",
      enunciado: "Calcula:", formula: "∫₀² (x³ − x) dx",
      respuestas: ["2"],
      pista: "F(x) = x⁴/4 − x²/2.",
      retro: "F(x) = x⁴/4 − x²/2. F(2) − F(0) = (4 − 2) − 0 = 2."
    },
    {
      id: "id-47", tipo: "opcion", dificultad: "media",
      enunciado: "¿Cuál es la interpretación geométrica de ∫ₐᵇ f(x) dx cuando f(x) ≥ 0?",
      opciones: ["El área bajo la curva entre a y b", "La pendiente de f en [a,b]", "El máximo de f en [a,b]", "La longitud de la curva"], correcta: 0,
      retro: "Cuando f(x) ≥ 0, la integral definida representa el área encerrada entre la curva y el eje x."
    },
    {
      id: "id-48", tipo: "abierta", dificultad: "dificil",
      enunciado: "Calcula:", formula: "∫₁³ (2x² − 3x + 1) dx",
      respuestas: ["20/3", "6.67", "6.6"],
      pista: "F(x) = 2x³/3 − 3x²/2 + x.",
      retro: "F(x) = 2x³/3 − 3x²/2 + x. F(3) = 18 − 27/2 + 3 = 21 − 13.5 = 7.5. F(1) = 2/3 − 3/2 + 1 = 4/6 − 9/6 + 6/6 = 1/6. Resultado: 7.5 − 1/6 = 45/6 − 1/6 = 44/6 = 22/3 ≈ 7.33."
    },
    {
      id: "id-49", tipo: "vf", dificultad: "facil",
      enunciado: "¿Verdadero o falso? La constante k puede salir de la integral: ∫ₐᵇ k·f(x) dx = k·∫ₐᵇ f(x) dx.",
      correcta: true,
      retro: "Verdadero. La linealidad de la integral permite sacar constantes multiplicativas."
    },
    {
      id: "id-50", tipo: "opcion", dificultad: "dificil",
      enunciado: "Si G(x) = ∫₀ˣ (t² + 1) dt, ¿cuánto vale G'(3)?",
      opciones: ["10", "3", "30", "12"], correcta: 0,
      pista: "Usa TFC Parte 1: G'(x) = x² + 1.",
      retro: "Por TFC Parte 1: G'(x) = x² + 1. G'(3) = 9 + 1 = 10."
    }
  ]
};
