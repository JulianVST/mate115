# ✏️ Cómo agregar o cambiar preguntas

Esta es la guía **más importante** para mantener la página. No necesitas saber
programar: solo copiar, pegar y cambiar texto.

---

## 1. ¿Dónde están las preguntas?

En la carpeta:

```
assets/js/data/
```

Hay **un archivo por tema**. Por ejemplo:
- `integral-por-partes.js`
- `factorizacion.js`
- `valor-numerico.js`

Abre el archivo del tema que quieras con el **Bloc de notas** o, mejor, con
**Visual Studio Code** (gratis).

---

## 2. ¿Cómo se ve una pregunta?

Cada pregunta es un bloque entre llaves `{ ... }`. Hay **3 tipos**.

### a) Opción múltiple (`tipo: "opcion"`)
El alumno elige una respuesta. Ideal para resultados con letras (x² + C, etc.).

```js
{
  id: "id-01", tipo: "opcion", dificultad: "facil",
  enunciado: "Calcula la integral:", formula: "∫ x³ dx",
  opciones: ["x⁴/4 + C", "3x² + C", "x⁴ + C", "4x⁴ + C"],
  correcta: 0,                       // ⬅ la PRIMERA opción es la correcta (se cuenta desde 0)
  pista: "Regla de la potencia.",    // opcional
  retro: "Sube 1 al exponente y divide entre el nuevo exponente."  // se muestra si falla
}
```

> 🔴 **IMPORTANTE:** `correcta` es la **posición** de la respuesta correcta.
> La primera opción es `0`, la segunda `1`, la tercera `2`, la cuarta `3`.
> (En la página las opciones se revuelven solas, así que no importa el orden.)

### b) Escribir el resultado (`tipo: "abierta"`)
El alumno escribe la respuesta. Ideal para **números**.

```js
{
  id: "id-02", tipo: "abierta", dificultad: "media",
  enunciado: "Si x = 2, ¿cuánto vale 3x + 1?",
  respuestas: ["7"],                 // ⬅ respuestas aceptadas (puedes poner varias)
  retro: "3(2) + 1 = 7."
}
```

Puedes aceptar **varias formas** de la misma respuesta:

```js
respuestas: ["1/2", "0.5", "0,5"]
```

> La página ignora mayúsculas, espacios y acentos. "X^2 + C", "x^2+c" y "x²+c"
> cuentan como iguales. Para potencias usa el símbolo `^` (ej. `x^2`).

### c) Verdadero o falso (`tipo: "vf"`)

```js
{
  id: "id-03", tipo: "vf", dificultad: "facil",
  enunciado: "¿Verdadero o falso? La integral de una constante k es k·x + C.",
  correcta: true,                    // ⬅ true = verdadero, false = falso
  retro: "Verdadero. Por ejemplo ∫7 dx = 7x + C."
}
```

---

## 3. Agregar una pregunta nueva (lo más común)

1. Abre el archivo del tema en `assets/js/data/`.
2. Copia una pregunta completa (desde `{` hasta `}`).
3. Pégala dentro de la lista `preguntas: [ ... ]`.
4. **Separa cada pregunta con una coma `,`** (todas menos la última).
5. Cambia el texto, las opciones y la respuesta correcta.
6. Cambia el `id` por uno distinto (ej. `"id-14"`). El id solo debe ser único
   dentro del archivo.
7. Guarda el archivo. Recarga la página. ¡Listo!

> 💡 Mientras MÁS preguntas tenga el banco, más difícil es copiar entre alumnos,
> porque a cada quien le tocan distintas. ¡Llénalo de preguntas!

---

## 4. Cambiar cuántas preguntas salen o el tiempo

Arriba de cada archivo está la **configuración** del tema:

```js
config: { numPreguntas: 10, tiempoMin: 12 },
```

- `numPreguntas`: cuántas preguntas salen al azar (de todas las del banco).
- `tiempoMin`: minutos de tiempo límite. Pon `0` para **sin tiempo**.

---

## 5. Poner un video dentro de la guía

Los videos se configuran en `assets/js/core/topics.js`. Busca el tema y su lista
`videos`. Pega el **ID** del video de YouTube:

```js
videos: [ { titulo: "Integración por partes - Ejemplos", id: "AQUI_EL_ID" } ]
```

> El ID es lo que va después de `watch?v=` en el link de YouTube.
> Ejemplo: en `youtube.com/watch?v=abc123XYZ` el ID es `abc123XYZ`.

Si dejas `videos: []` vacío, en la guía aparece un botón para **buscar** videos
del tema (siempre funciona).

---

## 6. Agregar un TEMA completamente nuevo

1. Crea un archivo nuevo en `assets/js/data/`, por ejemplo `mi-tema.js`.
   Copia el contenido de otro archivo y cambia el nombre del tema:
   ```js
   window.BANCO = window.BANCO || {};
   window.BANCO["mi-tema"] = { config: {...}, preguntas: [ ... ] };
   ```
   (El texto entre comillas `"mi-tema"` es el **slug**: solo minúsculas y guiones.)

2. Regístralo en `assets/js/core/topics.js` agregando un bloque a la lista:
   ```js
   { slug: "mi-tema", titulo: "Mi tema", unidad: "Cálculo integral",
     icono: "📘", descripcion: "...", videoBusqueda: "...", videos: [] }
   ```
   El `slug` debe ser **idéntico** al del paso 1.

3. Agrega la línea del script en `pages/quiz.html` (junto a los demás bancos):
   ```html
   <script src="../assets/js/data/mi-tema.js"></script>
   ```

¡Y listo! El tema aparece solo en inicio, en guías y en el panel de la maestra.

---

## ⚠️ Errores comunes

- **Falta una coma** entre preguntas → la página se queda en blanco.
- **Comillas mal cerradas** → revisa que cada `"` tenga su pareja.
- Si algo deja de funcionar, abre la consola del navegador (tecla **F12**) y
  mira el mensaje de error: te dice la línea del problema.
