# 👩‍🏫 Guía para la maestra

Bienvenida. Esta página sirve para que sus alumnos **practiquen y se evalúen** en
los temas de matemáticas, y para que usted reciba sus resultados de forma simple
y **difícil de falsificar**.

> ✅ **USTED NO NECESITA ENTRAR A LA PÁGINA.**
> El alumno hace el quiz, toma una **captura de pantalla** y además **descarga una
> imagen** con su puntaje, sus errores y la retroalimentación. Usted solo recibe
> esa imagen (por WhatsApp, Classroom o correo) y la revisa. Eso es todo.
>
> Todo lo demás de esta guía (verificar códigos, accesos directos) es **opcional**
> y por si algún día lo quiere usar.

---

## 1. ¿Cómo lo usan los alumnos?

1. Entran a la página y eligen un **tema**.
2. Escriben su **nombre completo y grupo**.
3. Les salen preguntas **al azar**. Resuelven en su **libreta** y escriben el
   resultado en la página.
4. Al terminar ven su **calificación**, en qué se equivocaron y una pequeña
   **retroalimentación**.
5. Pulsan **"Descargar imagen de resultados"** y le **envían esa imagen** a usted
   (por WhatsApp, Classroom, correo, etc.).

---

## 2. ¿Cómo evito que copien o hagan trampa?

La página tiene varias defensas:

- 🎲 **Preguntas al azar:** a cada alumno le tocan preguntas distintas.
- 🔀 **Opciones revueltas:** las respuestas cambian de lugar en cada intento.
- ⏱️ **Tiempo límite:** configurable por tema.
- 🚫 **Detección de salidas:** si el alumno cambia de pestaña o sale de la página
  (por ejemplo para buscar la respuesta), se **cuenta** y aparece en su imagen.
- 🔒 **Bloqueo de inspección:** se bloquea el clic derecho y las teclas para abrir
  el "inspector" (F12, Ctrl+U, etc.). Si aun así alguien lo abre, la página lo
  **detecta**, lo cubre con un aviso y lo **registra en la imagen**.
- 🔐 **Código de verificación:** cada imagen lleva un código único calculado a
  partir del nombre, el tema, el puntaje y la fecha. Si el alumno **edita** la
  imagen (por ejemplo, cambia su calificación con un editor), el código **ya no
  coincide**.

> 🟡 **Con honestidad:** ninguna página web puede impedir la trampa al 100 % (todo
> lo que carga el navegador se puede ver con suficiente conocimiento). Estas
> barreras **detienen a la gran mayoría** de los alumnos. La defensa más fuerte
> sigue siendo el banco grande de preguntas al azar + el trabajo en la libreta.

---

## 3. ¿Cómo verifico una imagen?

1. Abra la página y entre a **"Para la maestra"**.
2. En **"Verificar una imagen de resultados"**, copie del IMAGEN del alumno:
   - Nombre (igualito, con mayúsculas y acentos)
   - Tema
   - Aciertos y total
   - Fecha y hora (ej. `14/06/2026 10:21`)
   - El código de verificación
3. Pulse **"Verificar código"**:
   - ✅ **VÁLIDO** → la imagen es auténtica.
   - ❌ **NO COINCIDE** → revise que copió todo idéntico; si está bien y aun así
     no coincide, la imagen **fue modificada**.

> 💡 El dato que más se equivoca al copiar es la **hora** (los minutos) y el
> **nombre**. Deben ir exactamente como en la imagen.

---

## 4. Accesos directos

En el panel hay una **tabla de temas** con botones para abrir cada **Quiz** y
cada **Guía** directamente. Puede copiar esos enlaces y compartirlos.

---

## 5. Publicar la página para los alumnos

Si quiere que los alumnos entren por un **link** (sin pasarles archivos), suba la
carpeta a un servicio gratuito:

- **Netlify Drop** (`app.netlify.com/drop`): arrastre la carpeta y le dan un link.
  Es lo más fácil.
- **GitHub Pages**: si usa GitHub, active Pages en el repositorio.

Mientras tanto, la página también funciona **abriendo `index.html`** directamente
en cualquier computadora, sin internet.

---

## 6. Personalizar

- **Agregar preguntas, cambiar el tiempo o el número de preguntas:** ver
  [`COMO-AGREGAR-PREGUNTAS.md`](COMO-AGREGAR-PREGUNTAS.md).
- **Poner videos en las guías:** misma guía, sección 5.
- **Cambiar el porcentaje para aprobar:** en `assets/js/core/quiz-engine.js`,
  variable `aprobado` (por defecto 60).

Cualquier duda, su alumno que armó la página puede ayudarle con estos cambios 🙂.
