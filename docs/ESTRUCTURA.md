# 📂 Estructura del proyecto

Explicación de para qué sirve cada carpeta y archivo. Está pensada para que sea
**fácil de entender y de mantener**.

```
matematicas/
│
├── index.html                  Página de INICIO. Lista de temas + buscador.
│
├── pages/                      Las demás páginas
│   ├── quiz.html               El QUIZ. Carga el motor y los bancos de preguntas.
│   ├── guias.html              GUÍAS y videos por tema.
│   └── maestra.html            PANEL de la maestra (verificador + accesos).
│
├── assets/                     Todos los recursos (estilos, imágenes, código)
│   │
│   ├── css/                    🎨 ESTILOS (apariencia)
│   │   ├── variables.css       Colores CETIS (rojo/blanco) y medidas. ⬅ cambia el color aquí
│   │   ├── base.css            Reset, encabezado, pie de página.
│   │   ├── components.css      Botones, tarjetas, formularios.
│   │   ├── quiz.css            Estilos del quiz y de resultados.
│   │   └── paginas.css         Estilos de inicio, guías y panel de la maestra.
│   │
│   ├── img/
│   │   └── logo-cetis.svg      Logo (escudo rojo con símbolo de integral).
│   │
│   └── js/                     💻 CÓDIGO
│       │
│       ├── core/               MOTOR (normalmente no se toca)
│       │   ├── utils.js        Funciones base: revolver, normalizar, código anti-trampa.
│       │   ├── topics.js       ⭐ REGISTRO de temas (nombre, unidad, ícono, videos).
│       │   ├── quiz-engine.js  Lógica del quiz: preguntas, puntaje, anti-trampa.
│       │   └── result-image.js Genera la IMAGEN de resultados (boleta PNG).
│       │
│       ├── paginas/            Lógica de cada página
│       │   ├── home.js         Dibuja la cuadrícula de temas en el inicio.
│       │   ├── guias.js        Dibuja las tarjetas de guía con videos.
│       │   └── maestra.js      Verificador de códigos + tabla de temas.
│       │
│       └── data/               ⭐⭐ BANCO DE PREGUNTAS (aquí trabajas casi siempre)
│           ├── integral-por-partes.js
│           ├── integracion-por-sustitucion.js
│           ├── integracion-directa.js
│           ├── constante-de-integracion.js
│           ├── teorema-fundamental-calculo.js
│           ├── area-bajo-la-curva.js
│           ├── maximos-y-minimos.js
│           ├── historia-calculo-integral.js
│           ├── aplicacion-calculo-integral-tfc.js
│           ├── simplificacion-expresiones-algebraicas.js
│           ├── signos-de-agrupacion.js
│           ├── valor-numerico.js
│           ├── reduccion-terminos-semejantes.js
│           ├── productos-notables-1.js
│           ├── productos-notables-2.js
│           └── factorizacion.js
│
├── docs/                       📖 Documentación
│   ├── COMO-AGREGAR-PREGUNTAS.md
│   ├── GUIA-MAESTRA.md
│   └── ESTRUCTURA.md           (este archivo)
│
└── README.md                   Resumen general del proyecto.
```

---

## 🔁 ¿Cómo se conecta todo?

1. **`topics.js`** dice qué temas existen (su nombre, ícono y unidad).
2. Cada archivo de **`data/`** llena el banco de preguntas de su tema.
3. **`index.html`** usa `topics.js` para mostrar las tarjetas de temas.
4. Al hacer clic en un tema, se abre **`quiz.html?tema=slug`**.
5. **`quiz-engine.js`** toma las preguntas de ese tema, las revuelve y arma el juego.
6. Al terminar, **`result-image.js`** dibuja la boleta descargable con su código.
7. **`maestra.html`** usa el mismo cálculo del código para **verificar** las imágenes.

---

## 🧩 Reglas para no romper nada

- El **slug** de un tema (ej. `"integral-por-partes"`) debe ser **idéntico** en:
  el nombre del archivo de `data/`, dentro de ese archivo (`window.BANCO["..."]`)
  y en `topics.js` (`slug: "..."`).
- Si agregas un tema nuevo, recuerda añadir su `<script>` en `pages/quiz.html`.
- Los colores se cambian en un solo lugar: `assets/css/variables.css`.
