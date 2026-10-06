# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Pacientes potenciales de la zona de Zapopan, Jalisco, que buscan un dentista de confianza para atención general: personas y familias que necesitan desde una limpieza hasta un tratamiento mayor. Llegan al sitio para decidir si este consultorio les da confianza y, si es así, pedir una cita.

## Product Purpose

Landing page de un consultorio dental (Dr. Juan José Vega Elizondo, Cirujano Dentista). Es un proyecto de práctica y portafolio: el doctor y sus datos son ficticios, pero el sitio se diseña como si fuera a publicarse para un consultorio real.

El éxito del sitio es que el visitante escriba por WhatsApp para agendar su cita. Esa es la acción principal de toda la página.

## Positioning

Según el texto actual del sitio: atención completamente personalizada, diagnóstico preciso con tecnología moderna, comunicación clara en cada etapa y acompañamiento antes, durante y después del tratamiento. Al ser un proyecto ficticio, no hay un diferenciador real que respaldar con evidencia.

## Operating Context

- Inicio (`index.html`) con anclas: Sobre el doctor, Trayectoria, Tratamientos, Reseñas, Proceso y Contacto (footer).
- Página de tratamientos (`tratamientos.html`): el visitante elige lo que le pasa y ve la ficha del tratamiento que lo resuelve. Cada ficha tiene su ancla (`#implantes`, `#carillas`, etc.), a la que enlazan el mega menú y las tarjetas del inicio.
- La cita se pide por WhatsApp. Los botones "Agenda una cita" abren un chat con el 33 1846 0759 (`https://wa.me/523318460759`). En cada ficha el mensaje ya menciona el tratamiento. En móvil hay un botón flotante que aparece cuando no hay otro botón de cita a la vista.
- El proceso que el sitio describe al paciente tiene cuatro pasos: Diagnóstico, Estudios, Tratamiento y Seguimiento.

## Capabilities and Constraints

- Sitio estático: `index.html`, `tratamientos.html`, `aviso-de-privacidad.html`, `styles.css` y `script.js`, sin framework ni paso de build. El header y el footer están duplicados en las tres páginas: un cambio en uno hay que repetirlo en las demás.
- Diez tratamientos en tres grupos (Estética dental, Salud dental, Cirugía e implantes). En el inicio se muestran cuatro en tarjetas: implantes, carillas, ortodoncia y endodoncia. Los diez tienen foto en su ficha.
- Decidido: una sola página de tratamientos con anclas en lugar de una página por tratamiento, y la trayectoria como sección del inicio en lugar de página propia.

## Brand Commitments

- Nombre: Dr. Juan José Vega Elizondo, Cirujano Dentista, Zapopan, Jalisco.
- Frases del sitio: "Tu salud dental empieza aquí" y "Tu sonrisa es primero".
- Voz: en español, cercana y de tú, profesional sin tecnicismos.

## Evidence on Hand

Todo el contenido es de muestra y no debe presentarse como real fuera del portafolio:

- Testimonios (María G., Carlos R., Ana P.) y sus fotos: ficticios.
- "10+ años de experiencia": dato de muestra.
- Dirección (Av. Naciones Unidas, Zapopan, Jal, 445567) y horarios: de muestra; el código postal no es válido.
- Fotos del doctor: imagen de stock. Fotos de tratamientos (las diez de `img/`, en `.webp` o `.avif`): generadas con IA.
- Fichas de tratamientos: descripciones, número de citas, duración y precios "desde" son de muestra. Un consultorio real debe confirmar cada dato antes de publicarlo.
- Trayectoria (título en la Universidad de Guadalajara en 2009, diplomados de 2012 y 2019, consultorio desde 2014): de muestra.
- Aviso de privacidad (`aviso-de-privacidad.html`): texto de muestra; un consultorio real debe revisarlo con un asesor legal.
- Sitio publicado en https://smile-studio-gamma.vercel.app/ (Vercel). Las etiquetas Open Graph, las URL canónicas y el JSON-LD apuntan a ese dominio; `img/og-image.jpg` es la imagen para compartir.
- No hay logo, número de teléfono, cédula profesional ni redes sociales reales. Los íconos de Facebook e Instagram apuntan a la portada de cada red.

## Product Principles

1. Todo lleva a la cita: cada sección debe acercar al visitante a escribir por WhatsApp.
2. Confianza antes que venta: el paciente elige a quien le explica con claridad y lo acompaña.
3. Hablar como paciente, no como dentista: nombrar los tratamientos por lo que resuelven.
4. Aunque sea un proyecto ficticio, debe verse y funcionar como un sitio publicable.
