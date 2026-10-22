---
name: "Cheese Muelo"
description: "Una cocina nocturna, artesanal y directa donde el calor del horno ordena cada decisión visual."
colors:
  night: "#101112"
  steel: "#191b1c"
  steel-raised: "#242627"
  paper: "#f3ead9"
  cream: "#fffaf0"
  ink: "#1c1712"
  amber: "#ffae21"
  amber-deep: "#d86609"
  green: "#32d15d"
  green-dark: "#073b18"
  muted-dark: "#cbbca9"
  muted-light: "#6b5c4d"
  line-dark: "rgba(255, 250, 240, .16)"
  line-light: "rgba(28, 23, 18, .18)"
typography:
  display:
    fontFamily: "Epilogue, sans-serif"
    fontSize: "clamp(3.4rem, 7vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Epilogue, sans-serif"
    fontSize: "clamp(2.65rem, 5vw, 5rem)"
    fontWeight: 900
    lineHeight: 0.94
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Epilogue, sans-serif"
    fontSize: "clamp(1.45rem, 2.1vw, 2rem)"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.03em"
  body:
    fontFamily: "'Plus Jakarta Sans', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "'Space Grotesk', sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "normal"
rounded:
  focus: "0.5rem"
  toggle: "0.6rem"
  control: "0.75rem"
  image: "0.875rem"
  panel: "1rem"
  pill: "999px"
spacing:
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  shell-gutter: "1.5rem"
  section-y: "clamp(5rem, 9vw, 9rem)"
components:
  button-primary:
    backgroundColor: "{colors.amber}"
    textColor: "#342000"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0.8rem 1.15rem"
    height: "3rem"
  button-primary-hover:
    backgroundColor: "#ffc04d"
    textColor: "#342000"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0.8rem 1.15rem"
    height: "3rem"
  button-whatsapp:
    backgroundColor: "{colors.green}"
    textColor: "{colors.green-dark}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0.8rem 1.15rem"
    height: "3rem"
  button-dark:
    backgroundColor: "{colors.night}"
    textColor: "{colors.cream}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0.8rem 1.15rem"
    height: "3rem"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.cream}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0.8rem 1.15rem"
    height: "3rem"
  service-chip:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.55rem 0.75rem"
  featured-menu-card:
    backgroundColor: "{colors.steel}"
    textColor: "{colors.cream}"
    rounded: "{rounded.panel}"
    padding: "clamp(2rem, 4vw, 3.5rem)"
  navigation:
    backgroundColor: "{colors.night}"
    textColor: "{colors.muted-dark}"
    typography: "{typography.label}"
    height: "6rem"
---

# Design System: Cheese Muelo

## Overview

**Creative North Star: "La mesa de pase junto al horno"**

El sistema debe sentirse como una cocina viva vista desde la mesa donde salen los platos: oscuro, cálido, directo y organizado por señales que permiten decidir rápido. El carbón y el acero ennegrecido forman el fondo; el papel de comanda abre pausas luminosas; el ámbar lleva el calor del horno a titulares y acciones; el verde aparece como una señal funcional inequívoca.

La personalidad es abundante y juguetona, pero no caótica. Los titulares pesados hacen de rotulación de cocina, las etiquetas compactas ordenan precios y datos, y la fotografía se trata como producto recién puesto en el pase. La interfaz evita tanto el lujo gastronómico distante como la plantilla genérica de comida rápida: debe conservar oficio, cercanía de barrio y velocidad operativa.

**Key Characteristics:**

- Contraste de cocina nocturna con pausas de papel cálido.
- Titulares cortos, pesados y apretados; lectura corriente limpia y tranquila.
- Ámbar para apetito y jerarquía; verde reservado a pedido y foco.
- Franjas, divisores y módulos que recuerdan comandas sin imitarlas literalmente.
- Fotografía cercana, generosa y recortada con intención.

## Colors

La paleta mezcla superficies ahumadas con papel cálido y dos acentos de función estricta.

### Primary

- **Cheddar de horno** (`amber`): marca apetito, precios destacados, subrayados y llamadas principales.
- **Corteza tostada** (`amber-deep`): reserva cromática para variaciones más densas del acento, sin competir con el ámbar principal.

### Secondary

- **Verde de pedido** (`green`): identifica WhatsApp, foco visible y estados de acción inmediata.
- **Hoja nocturna** (`green-dark`): asegura texto legible sobre el verde de pedido.

### Neutral

- **Carbón de horno** (`night`): fondo dominante y base de navegación.
- **Acero ennegrecido** (`steel`): superficie oscura secundaria para paneles y bloques.
- **Acero levantado** (`steel-raised`): neutral oscuro disponible para estados elevados o activos.
- **Papel de comanda** (`paper`): superficie clara de descanso y lectura.
- **Crema de masa** (`cream`): texto principal sobre fondos oscuros.
- **Tinta tostada** (`ink`): texto principal sobre fondos claros o ámbar.
- **Harina apagada** (`muted-dark`): texto secundario sobre carbón y acero.
- **Café de lápiz** (`muted-light`): texto secundario sobre papel.
- **Trazo sobre carbón** (`line-dark`): divisores discretos en superficies oscuras.
- **Trazo sobre papel** (`line-light`): divisores discretos en superficies claras.

### Named Rules

**The Two Fires Rule.** El ámbar abre el apetito y establece jerarquía; el verde comunica pedido o foco. No intercambiar sus funciones ni usarlos como decoración simultánea.

## Typography

**Display Font:** Epilogue (con respaldo sans-serif)  
**Body Font:** Plus Jakarta Sans (con respaldo sans-serif)  
**Label/Mono Font:** Space Grotesk (con respaldo sans-serif)

**Character:** Epilogue aporta el impacto compacto de la rotulación pintada; Plus Jakarta Sans mantiene la lectura hospitalaria y Space Grotesk da a precios, horarios y acciones la precisión de una comanda.

### Hierarchy

- **Display** (900, `clamp(3.4rem, 7vw, 6rem)`, 0.9): frases de marca muy breves; mantenerlas cerca de diez caracteres por línea cuando el contexto lo permita.
- **Headline** (900, `clamp(2.65rem, 5vw, 5rem)`, 0.94): aperturas de sección y mensajes de conversión.
- **Title** (900, `clamp(1.45rem, 2.1vw, 2rem)`, 1): nombres de productos, pasos y módulos compactos.
- **Body** (400, `1rem`, 1.6): explicación continua; limitar normalmente la línea a 34–48 caracteres para sostener ritmo y lectura.
- **Label** (700, `0.8125rem`, 1.1): navegación, precios, acciones y datos operativos; puede usar mayúsculas cuando funciona como rótulo.

### Named Rules

**The Shout and Ticket Rule.** Epilogue habla en frases cortas; Space Grotesk organiza hechos y acciones. Los párrafos largos pertenecen siempre a Plus Jakarta Sans.

## Layout

El sistema usa un contenedor fluido con máximo de 1240px y canal lateral de 1.5rem, reducido a 1rem desde 800px. Las secciones respiran con un intervalo vertical fluido (`clamp(5rem, 9vw, 9rem)`) y alternan bandas oscuras, claras y ámbar para marcar cambios de tarea sin depender de cajas repetidas.

En escritorio, las composiciones favorecen dos columnas asimétricas: producto o mensaje dominante junto a información operativa. Las cuadrículas de tres columnas pasan a dos en 1060px, y el sistema apila contenido, navegación y paneles principales en 800px. Desde 560px, acciones y tarjetas se vuelven de una sola columna y los botones ocupan el ancho disponible. La fotografía mantiene recortes amplios y proporciones estables; el texto nunca se superpone sin una capa de contraste explícita.

## Elevation & Depth

La profundidad es híbrida y contenida. Las bandas de sección permanecen planas; los paneles fotográficos, mapas y llamadas de acción reciben sombras comprimidas de baja altura para separarse de superficies cálidas, mientras gradientes oscuros protegen el texto colocado sobre imágenes.

### Shadow Vocabulary

- **Acción ámbar** (`0 14px 28px -18px rgba(255, 174, 33, .9)`): apoyo cálido para el botón principal; aumenta solo en hover.
- **Acción verde** (`0 16px 30px -20px rgba(50, 209, 93, .92)`): apoyo funcional de las acciones de WhatsApp.
- **Panel de menú** (`0 26px 60px -36px rgba(28, 23, 18, .8)`): separación amplia y silenciosa sobre papel.
- **Imagen de producto** (`0 20px 38px -30px rgba(28, 23, 18, .95)`): borde de profundidad mínimo para recortes individuales.
- **Panel de mapa** (`0 28px 54px -34px rgba(28, 23, 18, .75)`): elevación moderada sobre el campo ámbar.

### Named Rules

**The Support, Not Spectacle Rule.** Las sombras solo sostienen acciones o superficies visuales importantes; nunca sustituyen la jerarquía de color, tipografía o espaciado.

## Shapes

La forma base es robusta y suavemente redondeada. Controles usan esquinas de 0.75rem; recortes de producto, 0.875rem; paneles principales, 1rem. Las píldoras de servicio usan 999px porque funcionan como etiquetas, no como contenedores de contenido. Divisores finos y recortes de imagen mantienen la precisión industrial; no se mezclan radios ornamentales ni siluetas blandas sin función.

## Components

### Buttons

- **Shape:** control compacto y táctil con radio de 0.75rem, altura mínima de 3rem y padding de `0.8rem 1.15rem`.
- **Primary:** ámbar de horno con texto oscuro; usa sombra cálida y se eleva 2px al pasar el puntero.
- **WhatsApp:** verde de pedido con texto hoja nocturna; es la variante para iniciar o continuar una conversación de compra.
- **Dark:** carbón de horno con texto crema; se usa sobre fondos claros o ámbar.
- **Outline:** transparente con borde crema; en hover el borde y el texto cambian a ámbar.
- **Hover / Focus:** el hover levanta el control 2px con transición corta; el foco visible siempre usa un contorno verde de 3px separado 4px.

### Chips

- **Style:** etiquetas transparentes de servicio con borde de tinta translúcida, texto Space Grotesk y radio de píldora.
- **State:** representan modalidades o atributos estáticos; no aparentan selección si no existe interacción.

### Cards / Containers

- **Corner Style:** 0.875rem para recortes individuales y 1rem para paneles principales.
- **Background:** acero ennegrecido sobre papel o carbón; las tarjetas menores pueden prescindir de una caja y dejar que la fotografía y el divisor organicen el contenido.
- **Shadow Strategy:** solo los paneles visuales reciben las sombras descritas en Elevation & Depth.
- **Border:** divisores finos y translúcidos; evitar marcos completos repetidos.
- **Internal Padding:** desde 1.25rem en módulos compactos hasta `clamp(2rem, 4vw, 3.5rem)` en piezas destacadas.

### Navigation

La navegación es una barra de carbón de horno, compacta y fija al borde superior, con marca de alto contraste, enlaces Space Grotesk apagados y acción verde separada. En hover los enlaces pasan a crema. A 800px se convierte en panel de pantalla completa bajo la cabecera; los enlaces usan Epilogue, divisores visibles y un botón de pedido de ancho completo.

### Action Links

Los enlaces secundarios usan Space Grotesk, subrayado ámbar y un chevrón construido con bordes. El chevrón avanza 0.22rem en hover; esta microrespuesta reemplaza adornos adicionales.

### Information Rails

Horarios, ubicación, pasos y datos de servicio se organizan mediante franjas o listas separadas por líneas translúcidas. Los rótulos son pequeños y compactos; el dato principal gana peso y permanece escaneable en móvil.

## Do's and Don'ts

### Do:

- **Do** usar carbón, acero y papel como arquitectura antes de añadir acentos.
- **Do** reservar el ámbar para apetito, precio y jerarquía, y el verde para pedido o foco.
- **Do** combinar una frase corta en Epilogue con información operativa en Space Grotesk.
- **Do** mantener el foco visible de 3px y respetar `prefers-reduced-motion`.
- **Do** dejar que las fotos de producto sean cercanas, abundantes y recortadas con intención.

### Don't:

- **Don't** convertir cada bloque en una tarjeta idéntica; las bandas y divisores son parte esencial del sistema.
- **Don't** usar el verde como decoración ni mezclarlo con el ámbar sin una función clara.
- **Don't** escribir párrafos largos en Epilogue o datos operativos importantes en estilos débiles.
- **Don't** añadir sombras a superficies de base ni brillos que hagan la cocina parecer tecnológica.
- **Don't** introducir radios arbitrarios, degradados coloridos o ornamento gastronómico genérico.
