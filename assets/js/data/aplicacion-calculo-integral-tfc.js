/* ===================================================================
   BANCO DE PREGUNTAS · Aplicación del cálculo integral (TFC)
   =================================================================== */
window.BANCO = window.BANCO || {};
window.BANCO["aplicacion-calculo-integral-tfc"] = {
  config: { numPreguntas: 6, tiempoMin: 12 },
  preguntas: [
    {
      id: "id-01", tipo: "abierta", dificultad: "media",
      enunciado: "Un objeto se mueve con velocidad v(t) = 2t (m/s). ¿Qué distancia recorre entre t = 0 y t = 3 s? (escribe el número en metros)",
      respuestas: ["9"],
      pista: "La distancia es la integral de la velocidad: ∫₀³ 2t dt.",
      retro: "Distancia = ∫₀³ 2t dt = [t²]₀³ = 9 metros."
    },
    {
      id: "id-02", tipo: "abierta", dificultad: "facil",
      enunciado: "Si la velocidad es constante v = 4 m/s, ¿qué distancia se recorre entre t = 0 y t = 5 s?",
      respuestas: ["20"],
      retro: "∫₀⁵ 4 dt = 20 m. (También distancia = velocidad × tiempo = 4 × 5.)"
    },
    {
      id: "id-03", tipo: "abierta", dificultad: "media",
      enunciado: "Con velocidad v(t) = 3t² (m/s), ¿qué distancia se recorre de t = 0 a t = 2 s?",
      respuestas: ["8"],
      retro: "∫₀² 3t² dt = [t³]₀² = 8 metros."
    },
    {
      id: "id-04", tipo: "opcion", dificultad: "facil",
      enunciado: "Integrar la velocidad respecto al tiempo nos da:",
      opciones: ["La distancia (posición)", "La aceleración", "La masa", "La temperatura"], correcta: 0,
      retro: "∫ v dt = posición/distancia recorrida."
    },
    {
      id: "id-05", tipo: "vf", dificultad: "media",
      enunciado: "¿Verdadero o falso? Integrar la aceleración respecto al tiempo da la velocidad.",
      correcta: true,
      retro: "Verdadero: ∫ a dt = v. (Derivar es lo inverso: v' = a.)"
    },
    {
      id: "id-06", tipo: "opcion", dificultad: "media",
      enunciado: "Para acumular una cantidad que cambia (como el agua que entra a un tanque con cierto flujo), se usa:",
      opciones: ["La integral", "La derivada", "Una resta simple", "El promedio"], correcta: 0,
      retro: "La integral acumula (suma) cantidades que varían con el tiempo."
    },
    {
      id: "id-07", tipo: "abierta", dificultad: "media",
      enunciado: "Con velocidad v(t) = 6t (m/s), ¿qué distancia se recorre de t = 0 a t = 2 s?",
      respuestas: ["12"],
      retro: "∫₀² 6t dt = [3t²]₀² = 12 m."
    },
    {
      id: "id-08", tipo: "abierta", dificultad: "facil",
      enunciado: "Velocidad constante v = 10 m/s, de t = 0 a t = 4 s. ¿Distancia?",
      respuestas: ["40"],
      retro: "10 × 4 = 40 m."
    },
    {
      id: "id-09", tipo: "opcion", dificultad: "media",
      enunciado: "Si conocemos el flujo de agua (litros/min) que entra a un tanque, para el total acumulado usamos:",
      opciones: ["La integral del flujo en el tiempo", "La derivada del flujo", "El flujo máximo", "El promedio simple"], correcta: 0,
      retro: "Integrar el flujo da el volumen total acumulado."
    },
    {
      id: "id-10", tipo: "abierta", dificultad: "media",
      enunciado: "Con v(t) = 2t + 1 (m/s), distancia de t = 0 a t = 3 s:",
      respuestas: ["12"],
      retro: "∫₀³ (2t + 1) dt = [t² + t]₀³ = 9 + 3 = 12 m."
    },
    {
      id: "id-11", tipo: "vf", dificultad: "facil",
      enunciado: "¿Verdadero o falso? El área bajo la gráfica de velocidad-tiempo representa la distancia recorrida.",
      correcta: true,
      retro: "Verdadero. Por eso se calcula con una integral."
    },
    {
      id: "id-12", tipo: "opcion", dificultad: "media",
      enunciado: "La integral sirve para calcular, entre otras cosas:",
      opciones: ["Áreas, volúmenes y cantidades acumuladas", "Solo ángulos", "Solo números primos", "Solo porcentajes"], correcta: 0,
      retro: "La integral acumula: áreas, volúmenes, distancia, trabajo, etc."
    }
  ]
};
