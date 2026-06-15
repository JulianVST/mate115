/* ===================================================================
   BANCO DE PREGUNTAS · Área bajo la curva
   =================================================================== */
window.BANCO = window.BANCO || {};
window.BANCO["area-bajo-la-curva"] = {
  config: { numPreguntas: 8, tiempoMin: 0 },
  preguntas: [
    {
      id: "id-01", tipo: "abierta", dificultad: "facil",
      enunciado: "Área bajo la recta y = 2x entre x = 0 y x = 4 (escribe el número):",
      respuestas: ["16"],
      pista: "Calcula ∫₀⁴ 2x dx, o piensa en el triángulo de base 4 y altura 8.",
      retro: "∫₀⁴ 2x dx = [x²]₀⁴ = 16. (Triángulo: base 4 × altura 8 ÷ 2 = 16.)"
    },
    {
      id: "id-02", tipo: "abierta", dificultad: "media",
      enunciado: "Área bajo y = x² entre x = 0 y x = 3:",
      respuestas: ["9"],
      retro: "∫₀³ x² dx = [x³/3]₀³ = 27/3 = 9."
    },
    {
      id: "id-03", tipo: "abierta", dificultad: "facil",
      enunciado: "Área bajo y = 3 (recta horizontal) entre x = 0 y x = 5:",
      respuestas: ["15"],
      retro: "Es un rectángulo: base 5 × altura 3 = 15. También ∫₀⁵ 3 dx = 15."
    },
    {
      id: "id-04", tipo: "abierta", dificultad: "facil",
      enunciado: "Área bajo y = x entre x = 0 y x = 6:",
      respuestas: ["18"],
      retro: "∫₀⁶ x dx = [x²/2]₀⁶ = 36/2 = 18 (triángulo base 6, altura 6)."
    },
    {
      id: "id-05", tipo: "abierta", dificultad: "media",
      enunciado: "Área bajo y = 4x entre x = 0 y x = 2:",
      respuestas: ["8"],
      retro: "∫₀² 4x dx = [2x²]₀² = 8."
    },
    {
      id: "id-06", tipo: "opcion", dificultad: "facil",
      enunciado: "¿Qué herramienta se usa para hallar el área exacta bajo una curva entre a y b?",
      opciones: ["La integral definida ∫ₐᵇ f(x) dx", "La derivada f'(x)", "La pendiente de la recta", "El promedio de los valores"], correcta: 0,
      retro: "El área bajo la curva se calcula con la integral definida."
    },
    {
      id: "id-07", tipo: "opcion", dificultad: "media",
      enunciado: "Área bajo y = x² entre x = 0 y x = 2:",
      opciones: ["8/3", "4", "8", "2"], correcta: 0,
      retro: "∫₀² x² dx = [x³/3]₀² = 8/3 ≈ 2.67."
    },
    {
      id: "id-08", tipo: "vf", dificultad: "media",
      enunciado: "¿Verdadero o falso? El área bajo la curva puede pensarse como la suma de infinitos rectángulos muy delgados.",
      correcta: true,
      retro: "Verdadero. Esa es la idea de las sumas de Riemann que da origen a la integral."
    },
    {
      id: "id-09", tipo: "abierta", dificultad: "facil",
      enunciado: "Área bajo y = 5 entre x = 0 y x = 4:",
      respuestas: ["20"],
      retro: "Rectángulo: 5 × 4 = 20."
    },
    {
      id: "id-10", tipo: "abierta", dificultad: "media",
      enunciado: "Área bajo y = 6x entre x = 0 y x = 3:",
      respuestas: ["27"],
      retro: "∫₀³ 6x dx = [3x²]₀³ = 27."
    },
    {
      id: "id-11", tipo: "abierta", dificultad: "dificil",
      enunciado: "Área bajo y = x² entre x = 0 y x = 4:",
      respuestas: ["64/3", "21.33", "21.3"],
      retro: "[x³/3]₀⁴ = 64/3 ≈ 21.33."
    },
    {
      id: "id-12", tipo: "abierta", dificultad: "facil",
      enunciado: "Área bajo y = 2x entre x = 0 y x = 5:",
      respuestas: ["25"],
      retro: "[x²]₀⁵ = 25 (triángulo base 5, altura 10)."
    },
    {
      id: "id-13", tipo: "opcion", dificultad: "media",
      enunciado: "Si una parte de la curva queda POR DEBAJO del eje X, su integral sale:",
      opciones: ["Negativa", "Positiva", "Siempre cero", "Infinita"], correcta: 0,
      retro: "El área bajo el eje X aporta valor negativo a la integral."
    },
    {
      id: "id-14", tipo: "abierta", dificultad: "media",
      enunciado: "Área bajo y = 3x² entre x = 0 y x = 2:",
      respuestas: ["8"],
      retro: "∫₀² 3x² dx = [x³]₀² = 8."
    },
    {
      id: "id-15", tipo: "opcion", dificultad: "media",
      enunciado: "Para hallar el área ENTRE DOS CURVAS f(x) ≥ g(x) en [a,b], se usa:",
      opciones: ["∫ₐᵇ [f(x) − g(x)] dx", "∫ₐᵇ f(x) · g(x) dx", "∫ₐᵇ f(x) dx · ∫ₐᵇ g(x) dx", "∫ₐᵇ [f(x) + g(x)] dx"], correcta: 0,
      retro: "El área entre dos curvas se calcula como la integral de la diferencia: curva superior menos curva inferior."
    },
    {
      id: "id-16", tipo: "abierta", dificultad: "media",
      enunciado: "Área entre y = x y y = x² en [0,1] (curva superior es y = x):",
      respuestas: ["1/6", "0.17", "0.1667"],
      pista: "∫₀¹ (x − x²) dx.",
      retro: "∫₀¹ (x − x²) dx = [x²/2 − x³/3]₀¹ = 1/2 − 1/3 = 3/6 − 2/6 = 1/6."
    },
    {
      id: "id-17", tipo: "opcion", dificultad: "facil",
      enunciado: "¿Cuánto es el área del rectángulo bajo y = 7 entre x = 1 y x = 4?",
      opciones: ["21", "28", "7", "12"], correcta: 0,
      retro: "Base = 4 − 1 = 3; altura = 7. Área = 3 × 7 = 21. También ∫₁⁴ 7 dx = 21."
    },
    {
      id: "id-18", tipo: "abierta", dificultad: "dificil",
      enunciado: "Área entre y = x² y y = 2x en [0,2] (y = 2x está arriba):",
      respuestas: ["4/3", "1.33", "1.3"],
      pista: "∫₀² (2x − x²) dx.",
      retro: "∫₀² (2x − x²) dx = [x² − x³/3]₀² = 4 − 8/3 = 12/3 − 8/3 = 4/3 ≈ 1.33."
    },
    {
      id: "id-19", tipo: "vf", dificultad: "media",
      enunciado: "¿Verdadero o falso? Para hallar el área entre dos curvas, hay que identificar cuál está arriba y cuál está abajo en el intervalo.",
      correcta: true,
      retro: "Verdadero. Se resta la curva inferior a la superior para obtener un integrando no negativo."
    },
    {
      id: "id-20", tipo: "opcion", dificultad: "media",
      enunciado: "Las curvas y = x² y y = x se intersectan en:",
      opciones: ["x = 0 y x = 1", "x = 0 y x = 2", "x = 1 y x = −1", "Solo en x = 0"], correcta: 0,
      pista: "Iguala x² = x y resuelve.",
      retro: "x² = x → x² − x = 0 → x(x−1) = 0 → x = 0 o x = 1."
    },
    {
      id: "id-21", tipo: "abierta", dificultad: "facil",
      enunciado: "Área bajo y = x³ entre x = 0 y x = 2:",
      respuestas: ["4"],
      pista: "F(x) = x⁴/4.",
      retro: "∫₀² x³ dx = [x⁴/4]₀² = 16/4 = 4."
    },
    {
      id: "id-22", tipo: "opcion", dificultad: "dificil",
      enunciado: "Área entre y = 4 − x² y y = 0 (eje x) para la región donde y ≥ 0:",
      opciones: ["32/3", "8", "16", "4"], correcta: 0,
      pista: "4 − x² ≥ 0 cuando −2 ≤ x ≤ 2.",
      retro: "∫₋₂² (4 − x²) dx = [4x − x³/3]₋₂² = (8 − 8/3) − (−8 + 8/3) = 32/3 − (−32/3) ... Calculando: [4(2) − 8/3] − [4(−2) − (−8)/3] = (8 − 8/3) − (−8 + 8/3) = 8 − 8/3 + 8 − 8/3 = 16 − 16/3 = 32/3."
    },
    {
      id: "id-23", tipo: "vf", dificultad: "facil",
      enunciado: "¿Verdadero o falso? El área bajo y = x entre x = 0 y x = 4 es igual a la mitad del área del cuadrado de lado 4.",
      correcta: true,
      retro: "Verdadero. El triángulo de base 4 y altura 4 tiene área = (1/2)(4)(4) = 8. Y ∫₀⁴ x dx = 8."
    },
    {
      id: "id-24", tipo: "abierta", dificultad: "dificil",
      enunciado: "Área entre y = x y y = x³ en [0,1] (y = x está arriba):",
      respuestas: ["1/4", "0.25"],
      pista: "∫₀¹ (x − x³) dx.",
      retro: "∫₀¹ (x − x³) dx = [x²/2 − x⁴/4]₀¹ = 1/2 − 1/4 = 1/4."
    },
    {
      id: "id-25", tipo: "opcion", dificultad: "media",
      enunciado: "Si una función es POSITIVA en [a,b], el valor de ∫ₐᵇ f(x) dx es:",
      opciones: ["Mayor que cero", "Siempre negativo", "Siempre cero", "No se puede determinar"], correcta: 0,
      retro: "Una función positiva produce una integral positiva, pues el área encerrada está sobre el eje x."
    },
    {
      id: "id-26", tipo: "abierta", dificultad: "media",
      enunciado: "Área entre y = 3 y y = x en [0,3] (y = 3 está arriba en [0,3]):",
      respuestas: ["9/2", "4.5"],
      pista: "∫₀³ (3 − x) dx.",
      retro: "∫₀³ (3 − x) dx = [3x − x²/2]₀³ = 9 − 9/2 = 18/2 − 9/2 = 9/2 = 4.5."
    },
    {
      id: "id-27", tipo: "vf", dificultad: "media",
      enunciado: "¿Verdadero o falso? El área entre dos curvas que se intersectan puede calcularse en varios subintervalos sumando las áreas de cada parte.",
      correcta: true,
      retro: "Verdadero. Si las curvas se intercambian (cuál está arriba), se divide el intervalo en partes y se suman las áreas absolutas."
    },
    {
      id: "id-28", tipo: "opcion", dificultad: "facil",
      enunciado: "La parábola y = x² corta al eje x en:",
      opciones: ["x = 0 (solo un punto)", "x = −1 y x = 1", "x = 0 y x = 1", "x = −2 y x = 2"], correcta: 0,
      retro: "y = x² = 0 cuando x = 0. Es el único punto donde toca el eje x."
    },
    {
      id: "id-29", tipo: "abierta", dificultad: "facil",
      enunciado: "Área bajo y = 8 entre x = 0 y x = 3:",
      respuestas: ["24"],
      retro: "Rectángulo: 8 × 3 = 24. También ∫₀³ 8 dx = 24."
    },
    {
      id: "id-30", tipo: "opcion", dificultad: "dificil",
      enunciado: "Las curvas y = x² y y = 4 se intersectan en:",
      opciones: ["x = −2 y x = 2", "x = 0 y x = 4", "x = 2 y x = 4", "x = 0 y x = 2"], correcta: 0,
      pista: "Iguala x² = 4.",
      retro: "x² = 4 → x = ±2."
    },
    {
      id: "id-31", tipo: "abierta", dificultad: "dificil",
      enunciado: "Área entre y = 4 y y = x² (la parábola está abajo) entre x = −2 y x = 2:",
      respuestas: ["32/3", "10.67", "10.6"],
      pista: "∫₋₂² (4 − x²) dx.",
      retro: "∫₋₂² (4 − x²) dx = [4x − x³/3]₋₂² = (8 − 8/3) − (−8 + 8/3) = 16 − 16/3 = 48/3 − 16/3 = 32/3 ≈ 10.67."
    },
    {
      id: "id-32", tipo: "vf", dificultad: "dificil",
      enunciado: "¿Verdadero o falso? ∫₋₁¹ x dx = 0 porque las áreas positiva y negativa se cancelan.",
      correcta: true,
      retro: "Verdadero. [x²/2]₋₁¹ = 1/2 − 1/2 = 0. La integral es cero, aunque el área geométrica total sería 1."
    },
    {
      id: "id-33", tipo: "opcion", dificultad: "media",
      enunciado: "Para calcular el ÁREA GEOMÉTRICA real (siempre positiva) cuando f puede ser negativa, se usa:",
      opciones: ["∫ₐᵇ |f(x)| dx", "∫ₐᵇ f(x) dx", "[f(b) − f(a)]²", "La derivada de f"], correcta: 0,
      retro: "Para obtener el área real hay que integrar el valor absoluto de f(x)."
    },
    {
      id: "id-34", tipo: "abierta", dificultad: "media",
      enunciado: "Área bajo y = 2x + 1 entre x = 0 y x = 3:",
      respuestas: ["12"],
      pista: "F(x) = x² + x.",
      retro: "∫₀³ (2x + 1) dx = [x² + x]₀³ = 9 + 3 = 12."
    },
    {
      id: "id-35", tipo: "opcion", dificultad: "facil",
      enunciado: "El área del trapecio bajo y = x + 1 entre x = 0 y x = 3 vale:",
      opciones: ["15/2", "4", "9", "6"], correcta: 0,
      pista: "∫₀³ (x+1) dx = [x²/2 + x]₀³.",
      retro: "∫₀³ (x+1) dx = [x²/2 + x]₀³ = 9/2 + 3 = 15/2 = 7.5."
    },
    {
      id: "id-36", tipo: "abierta", dificultad: "dificil",
      enunciado: "Área entre y = x² − 1 y y = 0, solo donde y ≤ 0 (parte bajo el eje), en [−1,1]:",
      respuestas: ["4/3", "1.33", "1.3"],
      pista: "x² − 1 ≤ 0 en [−1,1]. Área = ∫₋₁¹ (1 − x²) dx.",
      retro: "∫₋₁¹ (1 − x²) dx = [x − x³/3]₋₁¹ = (1 − 1/3) − (−1 + 1/3) = 2/3 + 2/3 = 4/3."
    },
    {
      id: "id-37", tipo: "vf", dificultad: "facil",
      enunciado: "¿Verdadero o falso? El área de un rectángulo de base b y altura h se puede calcular como ∫₀ᵇ h dx.",
      correcta: true,
      retro: "Verdadero. ∫₀ᵇ h dx = h·b, que es la fórmula clásica del rectángulo."
    },
    {
      id: "id-38", tipo: "opcion", dificultad: "media",
      enunciado: "Las curvas y = x y y = x² en [0,1]: ¿cuál está arriba?",
      opciones: ["y = x", "y = x²", "Depende del punto", "Son iguales"], correcta: 0,
      pista: "Compara valores en x = 0.5: x = 0.5 y x² = 0.25.",
      retro: "Para 0 < x < 1, x > x². Por ejemplo, en x = 1/2: 1/2 > 1/4. Así y = x está arriba."
    },
    {
      id: "id-39", tipo: "abierta", dificultad: "media",
      enunciado: "Área bajo y = 4 − x entre x = 0 y x = 4:",
      respuestas: ["8"],
      pista: "F(x) = 4x − x²/2.",
      retro: "∫₀⁴ (4 − x) dx = [4x − x²/2]₀⁴ = 16 − 8 = 8."
    },
    {
      id: "id-40", tipo: "opcion", dificultad: "dificil",
      enunciado: "Área entre y = x² y y = x + 2 en su región acotada (y = x + 2 está arriba):",
      opciones: ["9/2", "4", "2", "8/3"], correcta: 0,
      pista: "Intersecciones: x² = x + 2 → x = −1 y x = 2. Luego ∫₋₁² (x + 2 − x²) dx.",
      retro: "∫₋₁² (x + 2 − x²) dx = [x²/2 + 2x − x³/3]₋₁² = (2 + 4 − 8/3) − (1/2 − 2 + 1/3) = (6 − 8/3) − (−3/2 + 1/3). Calculando con denominador 6: 10/3 + 7/6 = 20/6 + 7/6 = 27/6 = 9/2."
    },
    {
      id: "id-41", tipo: "vf", dificultad: "media",
      enunciado: "¿Verdadero o falso? Para encontrar los límites del área entre dos curvas, se deben hallar sus puntos de intersección.",
      correcta: true,
      retro: "Verdadero. Los puntos donde f(x) = g(x) son los límites naturales de la región acotada."
    },
    {
      id: "id-42", tipo: "abierta", dificultad: "facil",
      enunciado: "Área bajo y = x + 2 entre x = 0 y x = 2:",
      respuestas: ["6"],
      pista: "F(x) = x²/2 + 2x.",
      retro: "∫₀² (x + 2) dx = [x²/2 + 2x]₀² = 2 + 4 = 6."
    },
    {
      id: "id-43", tipo: "opcion", dificultad: "facil",
      enunciado: "Si f(x) = 0 en todo [a,b], el área bajo la curva entre a y b es:",
      opciones: ["0", "b − a", "a + b", "Infinita"], correcta: 0,
      retro: "∫ₐᵇ 0 dx = 0. Una función idénticamente nula no encierra área."
    },
    {
      id: "id-44", tipo: "abierta", dificultad: "dificil",
      enunciado: "Área entre y = sen x y y = 0 en [0,π]:",
      respuestas: ["2"],
      pista: "∫₀^π sen x dx.",
      retro: "∫₀^π sen x dx = [−cos x]₀^π = −cos(π) + cos(0) = 1 + 1 = 2."
    },
    {
      id: "id-45", tipo: "opcion", dificultad: "media",
      enunciado: "Si ∫₀³ f(x) dx = 10 y ∫₀³ g(x) dx = 4, el área entre f y g en [0,3] (f arriba) es:",
      opciones: ["6", "14", "40", "Depende de la forma de las curvas"], correcta: 0,
      retro: "∫₀³ [f(x) − g(x)] dx = 10 − 4 = 6 (por linealidad de la integral)."
    },
    {
      id: "id-46", tipo: "vf", dificultad: "facil",
      enunciado: "¿Verdadero o falso? El área bajo y = 1 entre x = 0 y x = 5 es igual a 5.",
      correcta: true,
      retro: "Verdadero. Rectángulo de base 5 y altura 1: área = 5. También ∫₀⁵ 1 dx = 5."
    },
    {
      id: "id-47", tipo: "abierta", dificultad: "media",
      enunciado: "Área bajo y = x² + x entre x = 0 y x = 2:",
      respuestas: ["14/3", "4.67", "4.6"],
      pista: "F(x) = x³/3 + x²/2.",
      retro: "∫₀² (x² + x) dx = [x³/3 + x²/2]₀² = 8/3 + 2 = 8/3 + 6/3 = 14/3 ≈ 4.67."
    },
    {
      id: "id-48", tipo: "opcion", dificultad: "dificil",
      enunciado: "Área geométrica real entre y = x² − 4 y el eje x en [−2,2] (la función es negativa ahí):",
      opciones: ["32/3", "0", "8", "16/3"], correcta: 0,
      pista: "En [−2,2], x²−4 ≤ 0. Área = ∫₋₂² (4 − x²) dx.",
      retro: "∫₋₂² (4 − x²) dx = [4x − x³/3]₋₂² = (8 − 8/3) − (−8 + 8/3) = 16 − 16/3 = 32/3 ≈ 10.67."
    },
    {
      id: "id-49", tipo: "vf", dificultad: "dificil",
      enunciado: "¿Verdadero o falso? El área entre la parábola y = x² y la recta y = 2x es la misma que la del triángulo que forman en [0,2].",
      correcta: false,
      retro: "Falso. El área entre las curvas es ∫₀² (2x − x²) dx = 4/3, no un triángulo. El triángulo tendría área 2, que es diferente."
    },
    {
      id: "id-50", tipo: "opcion", dificultad: "media",
      enunciado: "Para encontrar el área entre y = x + 3 y y = x², el primer paso es:",
      opciones: ["Encontrar los puntos de intersección resolviendo x + 3 = x²", "Derivar ambas funciones", "Integrar x + 3 desde 0 hasta 3", "Calcular el discriminante de x²"], correcta: 0,
      retro: "Siempre se comienza igualando las funciones para encontrar los límites de integración: x + 3 = x² → x² − x − 3 = 0."
    }
  ]
};
