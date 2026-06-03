# Guía de estudio para examen IFCD0110

Este examen cubre HTML y CSS. Aquí tienes los temas más importantes y los ejercicios que te ayudarán a practicarlos.

## 1. Estructura HTML básica

- Elementos principales: `<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`.
- Etiquetas de texto: `<h1>` a `<h6>`, `<p>`, `<span>`, `<div>`, `<strong>`, `<em>`.
- Enlaces e imágenes: `<a href="...">`, `<img src="..." alt="...">`.
- Tablas y listas: `<table>`, `<tr>`, `<th>`, `<td>`, `<ul>`, `<ol>`, `<li>`.
- Formularios básicos: aunque no hay muchos ejemplos de formularios aquí, recuerda cómo funcionan `name`, `action` y `method`.

Ejercicios recomendados:

- `html/selectorcss.html`
- `html/pruebaenlaces.html`
- `html/imagenes.html`
- `html/tablerodeajedrez.html`

## 2. Selectores CSS y estilos básicos

- Selectores simples: etiqueta (`p`), clase (`.mi-clase`), id (`#mi-id`).
- Selectores combinados: descendiente (`div p`), hijo directo (`div > p`), adyacente (`h1 + p`).
- Selectores de atributo y pseudo-clases: `:hover`, `:active`, `:focus`, `:first-child`.
- Propiedades comunes: `color`, `background`, `font-size`, `margin`, `padding`, `border`, `width`, `height`.
- Especificidad y orden de los estilos.

Ejercicios recomendados:

- `html/selectorcss.html` con `css/selectorcss.css`
- `html/pseudoclases35.html` con `css/pseudoclases35.css`
- `html/pruebaenlaces.html` con `css/estilos.css`

## 3. Modelo de caja y posicionamiento

- Box model: `content`, `padding`, `border`, `margin`.
- `display`: `block`, `inline`, `inline-block`, `none`.
- Posicionamiento: `static`, `relative`, `absolute`, `fixed`, `sticky`.
- `z-index` y cómo los elementos se apilan.
- `overflow`: `visible`, `hidden`, `scroll`, `auto`.

Ejercicios recomendados:

- `html/positionfixedrelativeabsolutestatic.html`
- `html/overflow.html` con `css/overflow.css`
- `html/ejerciciocursor.html` con `css/ejercisiocursor.css`

## 4. Diseño con Flexbox y Grid

- Flexbox: `display: flex`, `flex-direction`, `justify-content`, `align-items`, `flex-wrap`.
- Grid: `display: grid`, `grid-template-columns`, `grid-template-rows`, `gap`, `grid-area`.
- Cuándo usar Flexbox (alineación en una dirección) y cuándo usar Grid (layout bidimensional).

Ejercicios recomendados:

- `html/flex-direction.html`
- `html/grid.html`

## 5. Animaciones y transiciones

- Transiciones: `transition`, `transition-property`, `transition-duration`, `transition-timing-function`.
- Transformaciones: `transform: translate()`, `rotate()`, `scale()`, `skew()`, `matrix()`.
- Animaciones: `@keyframes`, `animation-name`, `animation-duration`, `animation-iteration-count`.

Ejercicios recomendados:

- `html/animaciones.html` con `css/animaciones.css`
- `html/animacionscara.html` con `css/animacionscara.css`
- `html/transicions.html` con `css/transicions.css`
- `html/translate.html` con `css/translate.css`

## 6. Menús y elementos interactivos

- Menús desplegables: `ul`, `li`, `display`, `position`, `hover`.
- Uso de iconos e imágenes dentro de enlaces.

Ejercicios recomendados:

- `html/menus2.html` con `css/menus2.css`
- `html/menusisubmenus.html` con `css/menusisubmenus.css`

## 7. Imágenes y multimedia

- Etiquetas de imagen y atributos: `src`, `alt`, `width`, `height`.
- Inserción de vídeo y audio aunque no haya un ejercicio directo, recuerda el uso de `<video>` y `<audio>`.
- `background-image` y `background-size`.

Ejercicios recomendados:

- `html/practicaimg.html`
- `html/practica2.html` con `css/imagenes.css`
- `html/curriculo.html` con `css/curriculo.css`

## 8. Buenas prácticas para el examen

- Abre cada archivo con `Live Server` para ver los cambios en tiempo real.
- Lee el HTML primero y luego el CSS: así entiendes qué estilo aplica a cada etiqueta.
- Aprende a escribir rutas relativas: en este proyecto, los HTML están en `html/`, los CSS en `css/` y las imágenes en `images/`.
- Usa comentarios en el código si practicas: `<!-- comentario -->` en HTML y `/* comentario */` en CSS.
- Si te preguntan teoría, explica en tus palabras qué hace cada propiedad.

## 9. Lista rápida de repaso

- `html/selectorcss.html`
- `html/pseudoclases35.html`
- `html/positionfixedrelativeabsolutestatic.html`
- `html/overflow.html`
- `html/flex-direction.html`
- `html/grid.html`
- `html/animaciones.html`
- `html/transicions.html`
- `html/translate.html`
- `html/menus2.html`
- `html/menusisubmenus.html`
- `html/practicaimg.html`
- `html/curriculo.html`

## 10. Cómo practicar antes del miércoles

1. Elige 2 archivos HTML por día.
2. Lee el código, haz un cambio simple y recarga.
3. Anota qué propiedades CSS no entiendes y pregúntame.
4. Repite los ejercicios de posicionamiento, Flexbox/Grid y animaciones.
5. Pide ejemplos concretos: yo te puedo ayudar a repasar cada propiedad o a crear mini-ejercicios.

---
 
Si quieres, te preparo también un `index.html` de repaso para abrir los ejercicios desde una sola página.