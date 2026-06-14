# 📐 Quiz de Matemáticas · CETIS 115

Página web de práctica y evaluación tipo *Educaplay* para la materia
**Temas Selectos de Matemáticas** del CETIS 115.

Los alumnos eligen un tema, resuelven en su libreta, escriben el resultado y al
final obtienen su **puntaje**, **qué se equivocaron**, una **retroalimentación**
y una **imagen descargable** para enviar a la maestra. Incluye medidas
**anti-trampa** y un **panel para la maestra** que verifica esas imágenes.

---

## 🚀 Cómo abrir la página

**Opción A — La más fácil (sin internet):**
1. Abre la carpeta del proyecto.
2. Haz doble clic en **`index.html`**. Se abre en tu navegador. ¡Listo!

**Opción B — Publicarla en internet (para que los alumnos entren por un link):**
- Sube la carpeta a **GitHub Pages**, **Netlify** (arrastrar y soltar) o
  **Vercel**. Son gratis. Ver `docs/GUIA-MAESTRA.md`.

> No necesita instalar nada ni saber programar. Es HTML, CSS y JavaScript puro.

---

## ✨ Qué incluye

| Función | Descripción |
|---|---|
| 🎲 Preguntas al azar | Cada quiz toma preguntas al azar de un banco grande. |
| 🔀 Opciones revueltas | Las respuestas cambian de orden cada intento. |
| ⏱️ Cronómetro | Tiempo límite configurable por tema. |
| ✏️ Escribe el resultado | El alumno opera en su libreta y solo escribe la respuesta. |
| 🏆 Puntaje y repaso | Muestra aciertos, errores y retroalimentación por pregunta. |
| 📷 Imagen descargable | Boleta con puntaje, errores y **código de verificación**. |
| 🛡️ Anti-trampa | Detecta salidas de la página y firma la imagen con un código. |
| 👩‍🏫 Panel de la maestra | Verifica si una imagen fue editada y entra directo a cada quiz. |
| 📚 Guías con videos | Una sección de guía por tema. |

---

## 📂 Estructura de carpetas (resumen)

```
matematicas/
├── index.html              ← Página de inicio (lista de temas)
├── pages/
│   ├── quiz.html           ← El quiz (motor del juego)
│   ├── guias.html          ← Guías y videos por tema
│   └── maestra.html        ← Panel de la maestra (verificador)
├── assets/
│   ├── css/                ← Estilos (colores CETIS rojo/blanco)
│   ├── img/                ← Logo
│   └── js/
│       ├── core/           ← Motor del quiz (no se suele tocar)
│       ├── paginas/        ← Lógica de cada página
│       └── data/           ← ⭐ BANCO DE PREGUNTAS (aquí se agregan)
└── docs/                   ← Documentación
```

Explicación completa en [`docs/ESTRUCTURA.md`](docs/ESTRUCTURA.md).

---

## ✏️ Agregar o cambiar preguntas

Todo está en `assets/js/data/`. Hay **un archivo por tema**.
Guía paso a paso (con ejemplos): [`docs/COMO-AGREGAR-PREGUNTAS.md`](docs/COMO-AGREGAR-PREGUNTAS.md).

---

## 👩‍🏫 Para la maestra

Guía de uso del panel y de la verificación de imágenes:
[`docs/GUIA-MAESTRA.md`](docs/GUIA-MAESTRA.md).

---

Hecho con ❤️ para el CETIS 115.
