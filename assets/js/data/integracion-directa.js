/* ===================================================================
   BANCO DE PREGUNTAS · Integración directa
   Formato explicado en docs/COMO-AGREGAR-PREGUNTAS.md
   =================================================================== */
window.BANCO = window.BANCO || {};
window.BANCO["integracion-directa"] = {
  config: { numPreguntas: 10, tiempoMin: 12 },
  preguntas: [
    {
      id: "id-01", tipo: "opcion", dificultad: "facil",
      enunciado: "Calcula la integral:", formula: "∫ x³ dx",
      opciones: ["x⁴/4 + C", "3x² + C", "x⁴ + C", "4x⁴ + C"], correcta: 0,
      pista: "Regla de la potencia: ∫xⁿ dx = xⁿ⁺¹/(n+1) + C",
      retro: "Sube 1 al exponente (4) y divide entre el nuevo exponente: x⁴/4 + C."
    },
    {
      id: "id-02", tipo: "opcion", dificultad: "facil",
      enunciado: "Calcula la integral:", formula: "∫ 5 dx",
      opciones: ["5x + C", "5 + C", "x⁵ + C", "0 + C"], correcta: 0,
      retro: "La integral de una constante k es k·x + C."
    },
    {
      id: "id-03", tipo: "opcion", dificultad: "facil",
      enunciado: "Calcula la integral:", formula: "∫ 2x dx",
      opciones: ["x² + C", "2x² + C", "2 + C", "x²/2 + C"], correcta: 0,
      retro: "∫2x dx = 2·(x²/2) = x² + C."
    },
    {
      id: "id-04", tipo: "opcion", dificultad: "media",
      enunciado: "Calcula la integral:", formula: "∫ x⁵ dx",
      opciones: ["x⁶/6 + C", "5x⁴ + C", "x⁶ + C", "6x⁶ + C"], correcta: 0,
      retro: "xⁿ⁺¹/(n+1): exponente 6, dividido entre 6."
    },
    {
      id: "id-05", tipo: "opcion", dificultad: "media",
      enunciado: "Calcula la integral:", formula: "∫ 3x² dx",
      opciones: ["x³ + C", "3x³ + C", "6x + C", "x³/3 + C"], correcta: 0,
      retro: "3·(x³/3) = x³ + C."
    },
    {
      id: "id-06", tipo: "opcion", dificultad: "media",
      enunciado: "Calcula la integral:", formula: "∫ (x + 4) dx",
      opciones: ["x²/2 + 4x + C", "x² + 4x + C", "1 + C", "x²/2 + 4 + C"], correcta: 0,
      retro: "Se integra término a término: x²/2 + 4x + C."
    },
    {
      id: "id-07", tipo: "opcion", dificultad: "media",
      enunciado: "Calcula la integral:", formula: "∫ 4x³ dx",
      opciones: ["x⁴ + C", "12x² + C", "4x⁴ + C", "x⁴/4 + C"], correcta: 0,
      retro: "4·(x⁴/4) = x⁴ + C."
    },
    {
      id: "id-08", tipo: "opcion", dificultad: "dificil",
      enunciado: "Calcula la integral:", formula: "∫ (1/x) dx",
      opciones: ["ln|x| + C", "x⁻² + C", "1 + C", "−1/x² + C"], correcta: 0,
      pista: "Es la única excepción de la regla de la potencia (n = −1).",
      retro: "La integral de 1/x es el logaritmo natural: ln|x| + C."
    },
    {
      id: "id-09", tipo: "opcion", dificultad: "media",
      enunciado: "Calcula la integral:", formula: "∫ eˣ dx",
      opciones: ["eˣ + C", "x·eˣ + C", "eˣ/x + C", "ln x + C"], correcta: 0,
      retro: "La función eˣ es su propia integral: eˣ + C."
    },
    {
      id: "id-10", tipo: "opcion", dificultad: "media",
      enunciado: "Calcula la integral:", formula: "∫ cos x dx",
      opciones: ["sen x + C", "−sen x + C", "−cos x + C", "tan x + C"], correcta: 0,
      retro: "∫cos x dx = sen x + C."
    },
    {
      id: "id-11", tipo: "opcion", dificultad: "media",
      enunciado: "Calcula la integral:", formula: "∫ sen x dx",
      opciones: ["−cos x + C", "cos x + C", "sen x + C", "−sen x + C"], correcta: 0,
      retro: "Ojo con el signo: ∫sen x dx = −cos x + C."
    },
    {
      id: "id-12", tipo: "vf", dificultad: "facil",
      enunciado: "¿Verdadero o falso? La integral de una constante k respecto a x es k·x + C.",
      correcta: true,
      retro: "Verdadero. Por ejemplo ∫7 dx = 7x + C."
    },
    {
      id: "id-13", tipo: "vf", dificultad: "media",
      enunciado: "¿Verdadero o falso? ∫ x² dx = 2x + C.",
      correcta: false,
      retro: "Falso. 2x es la DERIVADA de x². La integral de x² es x³/3 + C."
    },
    {
      id: "id-14", tipo: "opcion", dificultad: "facil",
      enunciado: "Calcula la integral:", formula: "∫ x dx",
      opciones: ["x²/2 + C", "x² + C", "1 + C", "2x + C"], correcta: 0,
      retro: "∫x dx = x²/2 + C."
    },
    {
      id: "id-15", tipo: "opcion", dificultad: "facil",
      enunciado: "Calcula la integral:", formula: "∫ 7 dx",
      opciones: ["7x + C", "7 + C", "x⁷ + C", "14x + C"], correcta: 0,
      retro: "∫k dx = k·x + C."
    },
    {
      id: "id-16", tipo: "opcion", dificultad: "media",
      enunciado: "Calcula la integral:", formula: "∫ x⁴ dx",
      opciones: ["x⁵/5 + C", "4x³ + C", "x⁵ + C", "5x⁵ + C"], correcta: 0,
      retro: "Exponente 5, dividido entre 5: x⁵/5 + C."
    },
    {
      id: "id-17", tipo: "opcion", dificultad: "media",
      enunciado: "Calcula la integral:", formula: "∫ 6x² dx",
      opciones: ["2x³ + C", "6x³ + C", "12x + C", "3x³ + C"], correcta: 0,
      retro: "6·(x³/3) = 2x³ + C."
    },
    {
      id: "id-18", tipo: "opcion", dificultad: "media",
      enunciado: "Calcula la integral:", formula: "∫ (3x² + 2x) dx",
      opciones: ["x³ + x² + C", "3x³ + 2x² + C", "6x + 2 + C", "x³ + x²/2 + C"], correcta: 0,
      retro: "Término a término: x³ + x² + C."
    },
    {
      id: "id-19", tipo: "opcion", dificultad: "dificil",
      enunciado: "Calcula la integral:", formula: "∫ 10x⁴ dx",
      opciones: ["2x⁵ + C", "10x⁵ + C", "40x³ + C", "x⁵ + C"], correcta: 0,
      retro: "10·(x⁵/5) = 2x⁵ + C."
    },
    {
      id: "id-20", tipo: "opcion", dificultad: "dificil",
      enunciado: "Calcula la integral:", formula: "∫ (5x⁴ − 3x²) dx",
      opciones: ["x⁵ − x³ + C", "5x⁵ − 3x³ + C", "20x³ − 6x + C", "x⁵ − x³/3 + C"], correcta: 0,
      retro: "5·(x⁵/5) − 3·(x³/3) = x⁵ − x³ + C."
    },
    {
      id: "id-21", tipo: "opcion", dificultad: "dificil",
      enunciado: "Calcula la integral:", formula: "∫ sec²x dx",
      opciones: ["tan x + C", "sec x + C", "cot x + C", "−tan x + C"], correcta: 0,
      retro: "La derivada de tan x es sec²x, así que ∫sec²x dx = tan x + C."
    },
    {
      id: "id-22", tipo: "vf", dificultad: "media",
      enunciado: "¿Verdadero o falso? Una constante que multiplica se puede sacar de la integral: ∫ k·f(x) dx = k·∫ f(x) dx.",
      correcta: true,
      retro: "Verdadero. Por ejemplo ∫3x² dx = 3∫x² dx = x³ + C."
    },
    {
      id: "id-23", tipo: "vf", dificultad: "media",
      enunciado: "¿Verdadero o falso? La integral de una suma es la suma de las integrales.",
      correcta: true,
      retro: "Verdadero: ∫(f + g) dx = ∫f dx + ∫g dx."
    }
  ]
};
