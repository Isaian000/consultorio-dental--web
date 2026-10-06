# Consultorio dental — Dr. Juan José Vega

Sitio de un consultorio dental en Zapopan, Jalisco. Es un proyecto de portafolio: el doctor, los testimonios, los precios y los datos de contacto son ficticios.

Publicado en https://smile-studio-gamma.vercel.app/

## Páginas

- `index.html`: inicio, con el doctor, su trayectoria, los tratamientos principales, reseñas, proceso y contacto.
- `tratamientos.html`: el visitante elige lo que le pasa y ve la ficha del tratamiento que lo resuelve, con citas, duración y precio orientativo.
- `aviso-de-privacidad.html`: aviso de privacidad de muestra.

Todos los botones de cita abren un chat de WhatsApp con el mensaje ya escrito.

## Cómo está hecho

HTML, CSS y JavaScript sin framework ni paso de build.

- `styles.css`: estilos de las tres páginas.
- `script.js`: menú móvil, selector de tratamientos, botón flotante de WhatsApp e índice del aviso.
- `img/`: fotos del sitio (las de tratamientos están generadas con IA).
- `fonts/`: Red Hat Display y Red Hat Text, servidas desde el propio sitio.

El header y el footer están copiados en las tres páginas: un cambio en uno hay que repetirlo en las otras dos.

## Verlo en local

Abre `index.html` con Live Server (VS Code) o levanta un servidor estático en la carpeta:

```
python3 -m http.server 5501
```

`PRODUCT.md` describe el propósito del sitio, su voz y qué contenido es de muestra.
