/* ===================================================================
   REGISTRO DE TEMAS
   Los iconos ya no son emojis: se asignan desde ICONOS.temas (icons.js).
   =================================================================== */

window.TEMAS = [

  /* ===================== UNIDAD: CÁLCULO INTEGRAL ===================== */
  {
    slug: "integral-por-partes",
    titulo: "Integral por partes",
    unidad: "Cálculo integral",
    descripcion: "Fórmula ∫ u dv = uv − ∫ v du para productos de funciones.",
    videoBusqueda: "integración por partes ejercicios resueltos",
    videoCanales: [
      { nombre: "JulioProfe", url: "https://www.youtube.com/results?search_query=integracion+por+partes+julioprofe" },
      { nombre: "Unicoos",    url: "https://www.youtube.com/results?search_query=integracion+por+partes+unicoos" }
    ],
    videos: []
  },
  {
    slug: "integracion-por-sustitucion",
    titulo: "Integración por sustitución",
    unidad: "Cálculo integral",
    descripcion: "Método de cambio de variable (u) para integrar funciones compuestas.",
    videoBusqueda: "integración por sustitución cambio de variable ejercicios",
    videoCanales: [
      { nombre: "JulioProfe", url: "https://www.youtube.com/results?search_query=integracion+por+sustitucion+julioprofe" },
      { nombre: "Math2me",    url: "https://www.youtube.com/results?search_query=integracion+por+sustitucion+math2me" }
    ],
    videos: []
  },
  {
    slug: "integracion-directa",
    titulo: "Integración directa",
    unidad: "Cálculo integral",
    descripcion: "Integrales inmediatas con la regla de la potencia y básicas.",
    videoBusqueda: "integración directa integrales inmediatas ejercicios",
    videoCanales: [
      { nombre: "JulioProfe",    url: "https://www.youtube.com/results?search_query=integrales+basicas+julioprofe" },
      { nombre: "Profesor Alex", url: "https://www.youtube.com/results?search_query=integracion+directa+profesor+alex" }
    ],
    videos: []
  },
  {
    slug: "constante-de-integracion",
    titulo: "Constante de integración",
    unidad: "Cálculo integral",
    descripcion: "Por qué aparece + C y cómo calcular su valor con un punto.",
    videoBusqueda: "constante de integración cómo calcular C",
    videoCanales: [
      { nombre: "JulioProfe", url: "https://www.youtube.com/results?search_query=constante+de+integracion+julioprofe" },
      { nombre: "Math2me",    url: "https://www.youtube.com/results?search_query=constante+de+integracion+math2me" }
    ],
    videos: []
  },
  {
    slug: "teorema-fundamental-calculo",
    titulo: "Teorema fundamental del cálculo",
    unidad: "Cálculo integral",
    descripcion: "La regla que conecta derivadas e integrales: ∫ₐᵇ f = F(b) − F(a).",
    videoBusqueda: "teorema fundamental del cálculo explicación ejemplos",
    videos: []
  },
  {
    slug: "area-bajo-la-curva",
    titulo: "Área bajo la curva",
    unidad: "Cálculo integral",
    descripcion: "Calcular el área entre una función y el eje X usando integrales.",
    videoBusqueda: "área bajo la curva integral definida explicación",
    videos: []
  },
  {
    slug: "maximos-y-minimos",
    titulo: "Máximos y mínimos",
    unidad: "Cálculo integral",
    descripcion: "Encontrar puntos máximos y mínimos con la derivada.",
    videoBusqueda: "máximos y mínimos de una función derivada",
    videos: []
  },
  {
    slug: "aplicacion-calculo-integral-tfc",
    titulo: "Aplicación del cálculo integral",
    unidad: "Cálculo integral",
    descripcion: "Problemas reales: distancia, velocidad y acumulación.",
    videoBusqueda: "aplicaciones del cálculo integral problemas",
    videos: []
  },
  {
    slug: "historia-calculo-integral",
    titulo: "Historia del cálculo integral",
    unidad: "Cálculo integral",
    descripcion: "Origen del cálculo: Newton, Leibniz y el problema del área.",
    videoBusqueda: "historia del cálculo integral Newton Leibniz",
    videos: []
  },

  /* ===================== UNIDAD: ÁLGEBRA (REPASO) ===================== */
  {
    slug: "factorizacion",
    titulo: "Factorización",
    unidad: "Álgebra (repaso)",
    descripcion: "Factor común, diferencia de cuadrados y trinomios.",
    videoBusqueda: "factorización casos ejercicios resueltos",
    videos: []
  },
  {
    slug: "productos-notables-2",
    titulo: "Productos notables II",
    unidad: "Álgebra (repaso)",
    descripcion: "Binomio al cubo y binomios con término común.",
    videoBusqueda: "productos notables binomio al cubo ejercicios",
    videos: []
  },
  {
    slug: "productos-notables-1",
    titulo: "Productos notables I",
    unidad: "Álgebra (repaso)",
    descripcion: "Binomio al cuadrado y producto de binomios conjugados.",
    videoBusqueda: "productos notables binomio al cuadrado ejemplos",
    videos: []
  },
  {
    slug: "reduccion-terminos-semejantes",
    titulo: "Reducción de términos semejantes",
    unidad: "Álgebra (repaso)",
    descripcion: "Sumar y restar términos con la misma parte literal.",
    videoBusqueda: "reducción de términos semejantes ejercicios",
    videos: []
  },
  {
    slug: "valor-numerico",
    titulo: "Valor numérico",
    unidad: "Álgebra (repaso)",
    descripcion: "Sustituir valores en una expresión y obtener el resultado.",
    videoBusqueda: "valor numérico de expresiones algebraicas ejemplos",
    videos: []
  },
  {
    slug: "signos-de-agrupacion",
    titulo: "Signos de agrupación",
    unidad: "Álgebra (repaso)",
    descripcion: "Quitar paréntesis, corchetes y llaves correctamente.",
    videoBusqueda: "signos de agrupación álgebra suprimir paréntesis",
    videos: []
  },
  {
    slug: "simplificacion-expresiones-algebraicas",
    titulo: "Simplificación de expresiones",
    unidad: "Álgebra (repaso)",
    descripcion: "Reducir expresiones algebraicas a su forma más simple.",
    videoBusqueda: "simplificación de expresiones algebraicas ejercicios",
    videos: []
  }
];

/* --- Funciones de ayuda --- */
window.Temas = {
  obtener: function (slug) {
    return window.TEMAS.find(function (t) { return t.slug === slug; });
  },
  unidades: function () {
    var vistas = [];
    window.TEMAS.forEach(function (t) { if (vistas.indexOf(t.unidad) === -1) vistas.push(t.unidad); });
    return vistas;
  },
  porUnidad: function (unidad) {
    return window.TEMAS.filter(function (t) { return t.unidad === unidad; });
  },
  icono: function (slug) {
    if (window.ICONOS && window.ICONOS.temas) return window.ICONOS.temas[slug] || "";
    return "";
  }
};
