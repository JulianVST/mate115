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
    },
    {
      id: "id-13", tipo: "opcion", dificultad: "facil",
      enunciado: "El matemático griego Eudoxo de Cnido es conocido por haber formalizado el:",
      opciones: ["Método de exhausción", "Cálculo diferencial", "Teorema de Pitágoras", "Método de Newton"], correcta: 0,
      retro: "Eudoxo formalizó el método de exhausción, precursor del concepto de límite e integral."
    },
    {
      id: "id-14", tipo: "opcion", dificultad: "media",
      enunciado: "El método de exhausción consiste en aproximar un área mediante:",
      opciones: ["Polígonos con cada vez más lados inscriptos en la figura", "Una sola resta de áreas", "La fórmula de Leibniz", "El triángulo de Pascal"], correcta: 0,
      retro: "Se inscribían polígonos de cada vez más lados para 'agotar' el área de la figura curva."
    },
    {
      id: "id-15", tipo: "opcion", dificultad: "media",
      enunciado: "Arquímedes usó el método de exhausción para calcular con precisión el área de:",
      opciones: ["Un segmento parabólico", "Un cilindro", "Un triángulo equilátero", "Una elipse perfecta"], correcta: 0,
      retro: "En su obra 'Cuadratura de la parábola', Arquímedes calculó el área bajo una parábola."
    },
    {
      id: "id-16", tipo: "opcion", dificultad: "dificil",
      enunciado: "Arquímedes aproximó el valor de π (pi) usando polígonos inscritos y circunscritos. ¿Entre qué valores situó π?",
      opciones: ["Entre 3 10/71 y 3 1/7", "Entre 3 y 4", "Entre 3,14 y 3,15", "Entre 3,1 y 3,2"], correcta: 0,
      retro: "Arquímedes demostró que 3 10/71 < π < 3 1/7, es decir aproximadamente entre 3,1408 y 3,1429."
    },
    {
      id: "id-17", tipo: "vf", dificultad: "media",
      enunciado: "¿Verdadero o falso? Arquímedes vivió en la antigua Grecia, aproximadamente en el siglo III a.C.",
      correcta: true,
      retro: "Verdadero. Arquímedes (287–212 a.C.) es uno de los más grandes matemáticos de la antigüedad."
    },
    {
      id: "id-18", tipo: "opcion", dificultad: "facil",
      enunciado: "¿En qué libro publicó Newton sus leyes del movimiento y la teoría de la gravitación, aplicando el cálculo?",
      opciones: ["Principia Mathematica", "Discurso del Método", "Elementos", "Aritmética Universal"], correcta: 0,
      retro: "El 'Philosophiæ Naturalis Principia Mathematica' (1687) aplica el cálculo a la física."
    },
    {
      id: "id-19", tipo: "opcion", dificultad: "media",
      enunciado: "En el contexto del método de las fluxiones de Newton, una 'fluxión' representa:",
      opciones: ["La tasa de cambio de una cantidad (lo que hoy llamamos derivada)", "El área bajo una curva", "Un número infinitamente grande", "La suma de una serie"], correcta: 0,
      retro: "Para Newton, las 'fluxiones' eran las tasas de cambio instantáneas, equivalentes a las derivadas."
    },
    {
      id: "id-20", tipo: "opcion", dificultad: "dificil",
      enunciado: "Newton desarrolló su método de las fluxiones aproximadamente en el año:",
      opciones: ["1665–1666", "1684", "1700", "1750"], correcta: 0,
      retro: "Newton elaboró su método alrededor de 1665–1666, durante el cierre de Cambridge por la peste."
    },
    {
      id: "id-21", tipo: "opcion", dificultad: "media",
      enunciado: "Leibniz publicó su primer trabajo sobre el cálculo diferencial en el año:",
      opciones: ["1684", "1666", "1700", "1720"], correcta: 0,
      retro: "Leibniz publicó su trabajo 'Nova Methodus' en 1684, antes que Newton publicara el suyo."
    },
    {
      id: "id-22", tipo: "opcion", dificultad: "facil",
      enunciado: "La notación de Leibniz que usamos hoy para la integral definida incluye los símbolos:",
      opciones: ["∫, dx, límites a y b", "ẋ, ẍ, puntos sobre la variable", "Δx, Δy, flechas", "f', f'', primas"], correcta: 0,
      retro: "Leibniz introdujo ∫ para la suma y dx para el diferencial; esta notación sobrevivió hasta hoy."
    },
    {
      id: "id-23", tipo: "vf", dificultad: "media",
      enunciado: "¿Verdadero o falso? La notación con puntos (ẋ) que usó Newton para las fluxiones es la que se usa universalmente hoy en cálculo.",
      correcta: false,
      retro: "Falso. La notación de Leibniz (dy/dx, ∫) fue adoptada universalmente; la de Newton solo persiste en física para derivadas respecto al tiempo."
    },
    {
      id: "id-24", tipo: "opcion", dificultad: "dificil",
      enunciado: "La disputa de prioridad entre Newton y Leibniz fue especialmente agria porque la Royal Society de Londres emitió un informe en 1713 declarando:",
      opciones: ["Que Newton era el inventor original, acusando a Leibniz de plagio", "Que Leibniz era el inventor original", "Que ambos tenían igual mérito", "Que Arquímedes era el verdadero inventor"], correcta: 0,
      retro: "El informe Commercium Epistolicum (1713) fue redactado en gran parte por el propio Newton y acusó a Leibniz de plagio, lo cual hoy se considera injusto."
    },
    {
      id: "id-25", tipo: "opcion", dificultad: "media",
      enunciado: "El consenso histórico actual sobre Newton y Leibniz es que:",
      opciones: ["Ambos inventaron el cálculo de forma independiente", "Newton lo inventó primero y Leibniz copió", "Leibniz lo inventó primero y Newton copió", "El cálculo fue obra colectiva de la familia Bernoulli"], correcta: 0,
      retro: "Los historiadores coinciden en que ambos lo descubrieron de forma independiente, aunque Newton lo hizo antes en el tiempo."
    },
    {
      id: "id-26", tipo: "opcion", dificultad: "media",
      enunciado: "¿Qué problema físico motivó a Newton para desarrollar el cálculo?",
      opciones: ["Describir el movimiento planetario y la caída de los cuerpos", "Calcular el volumen de barriles de vino", "Medir el arco de una cuerda", "Construir catalejos más precisos"], correcta: 0,
      retro: "Newton necesitaba herramientas matemáticas para describir el movimiento de los planetas y la gravitación."
    },
    {
      id: "id-27", tipo: "opcion", dificultad: "dificil",
      enunciado: "¿Qué problema práctico de la época motivó también los primeros estudios sobre áreas (proto-integrales)?",
      opciones: ["Calcular el volumen de toneles de vino", "Construir pirámides", "Medir la velocidad del sonido", "Diseñar relojes de péndulo"], correcta: 0,
      retro: "Kepler estudió el volumen de toneles de vino, lo que lo llevó a calcular sumas de infinitos discos delgados."
    },
    {
      id: "id-28", tipo: "opcion", dificultad: "media",
      enunciado: "Johann y Jakob Bernoulli fueron matemáticos del siglo XVII-XVIII que contribuyeron a:",
      opciones: ["Difundir y desarrollar el cálculo de Leibniz", "Inventar la geometría euclidiana", "Desarrollar la geometría no euclidiana", "Crear la teoría de conjuntos"], correcta: 0,
      retro: "La familia Bernoulli fue clave en la propagación y desarrollo del cálculo leibniziano en Europa."
    },
    {
      id: "id-29", tipo: "opcion", dificultad: "dificil",
      enunciado: "Leonhard Euler (1707–1783) contribuyó al cálculo, entre otras cosas, al:",
      opciones: ["Introducir la notación f(x) para función y sistematizar el cálculo", "Inventar el símbolo ∫", "Crear el método de exhausción", "Publicar los Principia Mathematica"], correcta: 0,
      retro: "Euler introdujo la notación f(x) y escribió tratados fundamentales que ordenaron y extendieron el cálculo."
    },
    {
      id: "id-30", tipo: "vf", dificultad: "facil",
      enunciado: "¿Verdadero o falso? La letra 'f' minúscula para representar una función fue popularizada por Euler.",
      correcta: true,
      retro: "Verdadero. Euler introdujo la notación f(x) que usamos actualmente para las funciones."
    },
    {
      id: "id-31", tipo: "opcion", dificultad: "media",
      enunciado: "Augustin-Louis Cauchy (siglo XIX) es famoso por haberle dado al cálculo:",
      opciones: ["Rigor formal mediante la definición precisa de límite", "La notación ∫ y dx", "El método de las fluxiones", "La primera demostración del Teorema de Pitágoras"], correcta: 0,
      retro: "Cauchy formalizó el concepto de límite y con él dio rigor a la definición de derivada e integral."
    },
    {
      id: "id-32", tipo: "opcion", dificultad: "dificil",
      enunciado: "Bernhard Riemann (1826–1866) es conocido en el contexto del cálculo integral por:",
      opciones: ["Definir formalmente la integral como límite de sumas rectangulares (sumas de Riemann)", "Inventar el símbolo ∫", "Descubrir el Teorema Fundamental del Cálculo", "Publicar los Principia"], correcta: 0,
      retro: "Riemann definió la integral como el límite de sumas de áreas de rectángulos, formalizando el concepto."
    },
    {
      id: "id-33", tipo: "opcion", dificultad: "media",
      enunciado: "Las 'sumas de Riemann' consisten en:",
      opciones: ["Dividir el intervalo en subintervalos y sumar las áreas de los rectángulos formados", "Sumar los términos de una progresión aritmética", "Calcular la derivada de una función", "Descomponer una función en senos y cosenos"], correcta: 0,
      retro: "Se divide [a, b] en n subintervalos y se suman las áreas de n rectángulos; al hacer n → ∞ se obtiene la integral."
    },
    {
      id: "id-34", tipo: "vf", dificultad: "media",
      enunciado: "¿Verdadero o falso? El Teorema Fundamental del Cálculo establece que la derivada y la integral son operaciones inversas.",
      correcta: true,
      retro: "Verdadero. El Teorema Fundamental conecta diferenciación e integración como procesos inversos."
    },
    {
      id: "id-35", tipo: "opcion", dificultad: "dificil",
      enunciado: "¿Quiénes son generalmente reconocidos como los primeros en enunciar claramente el Teorema Fundamental del Cálculo?",
      opciones: ["Newton y Leibniz", "Cauchy y Riemann", "Arquímedes y Eudoxo", "Euler y Bernoulli"], correcta: 0,
      retro: "Newton y Leibniz, de forma independiente, reconocieron la relación inversa entre derivación e integración."
    },
    {
      id: "id-36", tipo: "opcion", dificultad: "facil",
      enunciado: "Antes de Newton y Leibniz, ¿qué matemático francés ya había estudiado métodos para hallar tangentes y áreas?",
      opciones: ["Pierre de Fermat", "René Descartes", "Blaise Pascal", "François Viète"], correcta: 0,
      retro: "Fermat desarrolló métodos para encontrar máximos, mínimos y tangentes, precursores del cálculo diferencial."
    },
    {
      id: "id-37", tipo: "opcion", dificultad: "media",
      enunciado: "Bonaventura Cavalieri (siglo XVII) introdujo el 'principio de Cavalieri', que se relaciona con el cálculo integral porque:",
      opciones: ["Permitía comparar volúmenes de sólidos sumando secciones transversales", "Definía el límite de una función", "Calculaba derivadas de polinomios", "Establecía la notación de la integral"], correcta: 0,
      retro: "Cavalieri comparaba figuras sumando infinitas 'líneas' o 'planos', precursor directo de la integración."
    },
    {
      id: "id-38", tipo: "opcion", dificultad: "dificil",
      enunciado: "Kepler calculó el área de la elipse y el volumen de sólidos de revolución en el siglo XVII. Esto fue posible usando:",
      opciones: ["Sumas de infinitos elementos infinitamente delgados (proto-integración)", "La fórmula de Leibniz", "El método de las fluxiones de Newton", "La definición de Cauchy"], correcta: 0,
      retro: "Kepler sumó infinitos discos delgados o elementos de área, adelantándose a la integración formal."
    },
    {
      id: "id-39", tipo: "vf", dificultad: "facil",
      enunciado: "¿Verdadero o falso? La letra 'dx' en la integral ∫f(x)dx fue introducida por Leibniz para representar un diferencial infinitamente pequeño.",
      correcta: true,
      retro: "Verdadero. Leibniz creó dx para representar un incremento infinitesimalmente pequeño de x."
    },
    {
      id: "id-40", tipo: "opcion", dificultad: "media",
      enunciado: "En la notación de Leibniz, ∫ₐᵇ f(x) dx representa:",
      opciones: ["La integral definida de f entre a y b", "La derivada de f en el punto a", "La suma de los valores f(a) y f(b)", "El límite de f cuando x tiende a b"], correcta: 0,
      retro: "∫ₐᵇ f(x) dx es la integral definida: el área neta bajo la curva f(x) entre x = a y x = b."
    },
    {
      id: "id-41", tipo: "opcion", dificultad: "dificil",
      enunciado: "¿Cuál de las siguientes obras medievales ayudó a preservar y transmitir las matemáticas griegas al mundo europeo renacentista?",
      opciones: ["Las traducciones árabes de Euclides y Arquímedes", "El Principia Mathematica de Newton", "El Discurso del Método de Descartes", "La Aritmética de Diofanto en latín"], correcta: 0,
      retro: "Los matemáticos árabes tradujeron y comentaron a Euclides y Arquímedes, transmitiendo ese conocimiento a Europa."
    },
    {
      id: "id-42", tipo: "vf", dificultad: "media",
      enunciado: "¿Verdadero o falso? El cálculo integral tiene aplicaciones en física, ingeniería, economía y biología.",
      correcta: true,
      retro: "Verdadero. Calcular áreas, volúmenes, trabajo, acumulación y modelos de crecimiento son solo algunas aplicaciones."
    },
    {
      id: "id-43", tipo: "opcion", dificultad: "facil",
      enunciado: "¿Cuál de las siguientes opciones es una aplicación histórica que impulsó el desarrollo del cálculo?",
      opciones: ["Describir las órbitas elípticas de los planetas", "Construir el álgebra booleana", "Definir los números complejos", "Probar el teorema de Fermat"], correcta: 0,
      retro: "Las leyes de Kepler sobre las órbitas planetarias motivaron a Newton a desarrollar el cálculo."
    },
    {
      id: "id-44", tipo: "opcion", dificultad: "media",
      enunciado: "¿Qué significa que dos matemáticos desarrollen el cálculo 'de forma independiente'?",
      opciones: ["Que cada uno llegó a los mismos resultados sin conocer el trabajo del otro", "Que trabajaron juntos en el mismo proyecto", "Que uno copió al otro sin saberlo", "Que llegaron a resultados distintos"], correcta: 0,
      retro: "Independiente significa sin conocer ni copiar el trabajo del otro, llegando a conclusiones similares por caminos propios."
    },
    {
      id: "id-45", tipo: "opcion", dificultad: "dificil",
      enunciado: "En el siglo XIX, Karl Weierstrass complementó el trabajo de Cauchy para hacer el cálculo más riguroso. Su contribución principal fue:",
      opciones: ["La definición épsilon-delta formal del límite", "La notación de la integral definida", "El método de las fluxiones", "Las sumas de Riemann"], correcta: 0,
      retro: "Weierstrass formalizó el concepto de límite con la definición ε-δ, eliminando las ambigüedades de los infinitesimales."
    },
    {
      id: "id-46", tipo: "vf", dificultad: "dificil",
      enunciado: "¿Verdadero o falso? Arquímedes, en el siglo III a.C., ya tenía un concepto equivalente al de la integral definida moderna.",
      correcta: false,
      retro: "Falso (en sentido estricto). Arquímedes tenía ideas precursoras muy potentes, pero sin el concepto formal de límite que define la integral moderna."
    },
    {
      id: "id-47", tipo: "opcion", dificultad: "media",
      enunciado: "¿Cuál es el nombre de la obra de Arquímedes donde aplica el método de exhausción a la parábola?",
      opciones: ["Cuadratura de la parábola", "Sobre la esfera y el cilindro", "Arenario", "Principia Mathematica"], correcta: 0,
      retro: "En 'Cuadratura de la parábola', Arquímedes demuestra que el área de un segmento parabólico es 4/3 del triángulo inscrito."
    },
    {
      id: "id-48", tipo: "opcion", dificultad: "dificil",
      enunciado: "El matemático Isaac Barrow, maestro de Newton, contribuyó al cálculo al demostrar una versión geométrica de:",
      opciones: ["El Teorema Fundamental del Cálculo", "Las sumas de Riemann", "El principio de Cavalieri", "La definición épsilon-delta"], correcta: 0,
      retro: "Barrow demostró geométricamente la relación inversa entre tangentes y áreas, antecedente directo del Teorema Fundamental."
    },
    {
      id: "id-49", tipo: "opcion", dificultad: "facil",
      enunciado: "El símbolo ∫ que Leibniz eligió para la integral proviene de la inicial de la palabra latina:",
      opciones: ["Summa (suma)", "Sinus (seno)", "Sectio (sección)", "Spatium (espacio)"], correcta: 0,
      retro: "∫ es una 's' alargada que alude a 'summa', porque la integral es una suma de infinitos términos infinitamente pequeños."
    },
    {
      id: "id-50", tipo: "abierta", dificultad: "dificil",
      enunciado: "El Teorema Fundamental del Cálculo tiene dos partes. La segunda parte establece que ∫ₐᵇ f(x) dx = F(b) − F(a), donde F es una ________ de f.",
      respuestas: ["primitiva", "antiderivada", "antiprimitiva"],
      retro: "F es una primitiva (o antiderivada) de f, es decir, F'(x) = f(x). El teorema conecta integración y derivación."
    }
  ]
};
