/* ===================================================================
   BANCO DE PREGUNTAS · Historia del cálculo integral
   =================================================================== */
window.BANCO = window.BANCO || {};
window.BANCO["historia-calculo-integral"] = {
  config: { numPreguntas: 7, tiempoMin: 8 },
  preguntas: [
    {
      id: "id-01", tipo: "opcion", dificultad: "facil",
      enunciado: "¿Quiénes desarrollaron el cálculo de forma independiente en el siglo XVII?",
      opciones: ["Newton y Leibniz", "Euclides y Pitágoras", "Einstein y Newton", "Gauss y Euler"], correcta: 0,
      retro: "Isaac Newton y Gottfried Leibniz desarrollaron el cálculo casi al mismo tiempo."
    },
    {
      id: "id-02", tipo: "opcion", dificultad: "facil",
      enunciado: "El símbolo de integral ∫ fue introducido por:",
      opciones: ["Leibniz", "Newton", "Arquímedes", "Descartes"], correcta: 0,
      retro: "Leibniz creó el símbolo ∫, una 's' alargada que significa 'suma'."
    },
    {
      id: "id-03", tipo: "opcion", dificultad: "media",
      enunciado: "¿Qué matemático de la antigua Grecia usó el 'método de exhausción' para calcular áreas?",
      opciones: ["Arquímedes", "Platón", "Tales de Mileto", "Ptolomeo"], correcta: 0,
      retro: "Arquímedes se adelantó a la idea de la integral con el método de exhausción."
    },
    {
      id: "id-04", tipo: "opcion", dificultad: "media",
      enunciado: "Newton llamó a su versión del cálculo:",
      opciones: ["Método de las fluxiones", "Método de exhausción", "Geometría analítica", "Teoría de conjuntos"], correcta: 0,
      retro: "Newton lo llamó 'método de las fluxiones'."
    },
    {
      id: "id-05", tipo: "opcion", dificultad: "facil",
      enunciado: "El símbolo ∫ representa una:",
      opciones: ["Suma de infinitas partes muy pequeñas", "Resta", "División", "Raíz cuadrada"], correcta: 0,
      retro: "La integral es, en esencia, una suma infinita de partes infinitamente pequeñas."
    },
    {
      id: "id-06", tipo: "vf", dificultad: "facil",
      enunciado: "¿Verdadero o falso? El cálculo integral surgió, entre otras razones, para resolver el problema del área bajo una curva.",
      correcta: true,
      retro: "Verdadero. Calcular áreas de figuras curvas fue uno de sus orígenes."
    },
    {
      id: "id-07", tipo: "vf", dificultad: "media",
      enunciado: "¿Verdadero o falso? Newton y Leibniz tuvieron una famosa disputa sobre quién inventó primero el cálculo.",
      correcta: true,
      retro: "Verdadero. Fue una de las polémicas más conocidas de la historia de las matemáticas."
    },
    {
      id: "id-08", tipo: "opcion", dificultad: "media",
      enunciado: "El cálculo se desarrolló principalmente en el siglo:",
      opciones: ["XVII", "XX", "XV", "X"], correcta: 0,
      retro: "Newton y Leibniz trabajaron en el siglo XVII."
    },
    {
      id: "id-09", tipo: "opcion", dificultad: "media",
      enunciado: "La palabra 'integral' se asocia a la idea de:",
      opciones: ["Sumar / acumular partes", "Restar", "Dividir en mitades", "Medir ángulos"], correcta: 0,
      retro: "Integrar es acumular (sumar) cantidades infinitamente pequeñas."
    },
    {
      id: "id-10", tipo: "vf", dificultad: "facil",
      enunciado: "¿Verdadero o falso? El cálculo diferencial y el integral son ramas opuestas pero conectadas.",
      correcta: true,
      retro: "Verdadero: el Teorema Fundamental del Cálculo las conecta."
    },
    {
      id: "id-11", tipo: "opcion", dificultad: "media",
      enunciado: "Además de matemático, Isaac Newton es famoso por sus aportes a la:",
      opciones: ["Física (ley de gravitación)", "Química orgánica", "Biología celular", "Gramática"], correcta: 0,
      retro: "Newton formuló las leyes del movimiento y la gravitación universal."
    },
    {
      id: "id-12", tipo: "opcion", dificultad: "dificil",
      enunciado: "La notación dy/dx para la derivada también proviene de:",
      opciones: ["Leibniz", "Arquímedes", "Newton", "Fermat"], correcta: 0,
      retro: "Leibniz creó gran parte de la notación que usamos hoy."
    }
  ]
};
