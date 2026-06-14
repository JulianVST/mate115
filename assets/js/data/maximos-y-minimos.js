/* ===================================================================
   BANCO DE PREGUNTAS · Máximos y mínimos
   =================================================================== */
window.BANCO = window.BANCO || {};
window.BANCO["maximos-y-minimos"] = {
  config: { numPreguntas: 8, tiempoMin: 12 },
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
    }
  ]
};
