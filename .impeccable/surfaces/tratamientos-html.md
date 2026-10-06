---
version: 1
slug: "tratamientos-html"
primary_target: "tratamientos.html"
related_targets: []
---

# tratamientos.html

Scope: página de tratamientos del consultorio. Modo: Persuade.

Audiencia y tarea: paciente potencial de Zapopan que llega con un problema ("me falta un diente") y no con el nombre del tratamiento. Debe entender qué lo resuelve, cuántas citas lleva y cuánto cuesta, y escribir por WhatsApp. Contenido de muestra: 10 tratamientos en tres grupos, con qué resuelve, para quién, proceso y precio orientativo.

Restricciones: sitio estático sin build; hereda el mundo visual de index.html (verde #12766E, dorado, Arial, pastillas, radios de 26px). Cada tratamiento conserva su ancla para el mega menú y las tarjetas del inicio. Sin JS se leen las 10 fichas apiladas.

## Direction contract

THESIS: La página se entra por el problema, no por el catálogo. Rechaza la rejilla de tarjetas iguales por tratamiento.

OWN-WORLD: El del inicio sin cambios: blanco, verde #12766E como tinta de acción, dorado en rótulos de grupo y en el subrayado de enlaces de texto (como el enlace "Cómo llegar" del footer), sombras suaves verdosas, botones pastilla.

STORY: El visitante reconoce su caso en una frase, ve al lado la ficha con citas, duración y precio, y pide cita con un mensaje ya escrito sobre ese tratamiento.

FIRST VIEWPORT: Titular "¿Qué te gustaría resolver?" a la izquierda; debajo, columna izquierda (5/12) con las 10 necesidades en tres grupos y columna derecha (7/12) con la ficha del tratamiento activo y su botón de WhatsApp visible.

FORM: Maestro-detalle guiado por necesidad; candidato 6 de 7 de la lista propia; seed 530026db. Interacción firma: elegir una necesidad cambia la ficha en el sitio, sin salto de página.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

Sin resolver: precios y datos clínicos son de muestra; fotos solo para 4 de 10 tratamientos.
