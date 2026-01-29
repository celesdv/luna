# 🎉 Invitación de Cumpleaños de 15 Años

Una página web moderna, elegante y completamente personalizable para invitaciones de cumpleaños de 15 años. Construida con React 19 y Vite, lista para personalizar y desplegar.

> **✨ Proyecto completo y funcional** - Solo necesitas editar los datos en `App.jsx` y estará listo para usar.

## 🚀 Características

- ✨ Diseño moderno y elegante con animaciones suaves
- 📱 Completamente responsive (se adapta a móviles, tablets y desktop)
- 🎨 Colores personalizables (cambia toda la paleta de colores fácilmente)
- 🖼️ Imagen de fondo personalizable en la sección Hero
- ⏰ Contador regresivo en tiempo real hasta la fecha del evento
- 📅 Sección de información del evento (fecha, hora, lugar)
- 📝 Formulario de confirmación de asistencia (RSVP)
- 🎵 Integración con Spotify para playlist colaborativa
- 💝 Sección de regalos con datos bancarios
- 📸 Galería de fotos con carrusel automático
- 🔗 Enlace para que los invitados suban fotos del evento

## 🛠️ Tecnologías

- **React 19** - Biblioteca de UI con Hooks modernos
- **Vite** - Build tool ultrarrápido y dev server
- **CSS3** - Estilos modernos con animaciones y variables CSS
- **CSS Variables** - Sistema de temas dinámico y personalizable

## 📦 Instalación

1. Instala las dependencias:
```bash
npm install
```

2. Inicia el servidor de desarrollo:
```bash
npm run dev
```

3. Abre tu navegador en `http://localhost:5173`

## 🎨 Personalización

Puedes personalizar la invitación editando los datos en `src/App.jsx`:

```jsx
const eventData = {
  // Información básica
  name: "Luna",                              // Nombre de la cumpleañera
  eventDate: "2026-03-27T21:00:00",         // Fecha y hora del evento (formato ISO para el contador)
  date: "Viernes, 27 de Marzo",             // Fecha del evento (texto visible)
  time: "21:00 hs",                         // Hora del evento
  
  // Ubicación
  location: "Salón de Eventos",             // Nombre del lugar
  address: "Calle Principal 123, Barriales", // Dirección completa
  googleMapsUrl: null,                      // URL de Google Maps (opcional, se genera automáticamente si no se proporciona)
  
  // Dress Code
  dressCode: "Elegante casual",             // Código de vestimenta
  dressCodeDescription: "Vestite cómodo pero elegante, para que te sientas cómodo y puedas bailar.",
  
  // Playlist de Spotify
  spotifyPlaylistUrl: "https://open.spotify.com/playlist/...", // URL de la playlist colaborativa
  
  // Datos bancarios para regalos
  bankName: "Banco Nación",                 // Nombre del banco
  accountHolder: "Romina Campana",          // Titular de la cuenta
  cbu: "0000000000000000000000",           // CBU de la cuenta
  alias: "LUNA.XV.2026",                   // Alias de la cuenta
  
  // Contacto
  contactPhone: "+54 9 263 475 0617",       // Teléfono de contacto (para WhatsApp)
  
  // Imágenes
  backgroundImage: null,                    // Imagen de fondo del Hero (local o URL)
  galleryImages: [],                        // Array de imágenes para el carrusel
  
  // Frase especial
  quote: null,                              // Frase o mensaje especial
  quoteAuthor: null,                        // Autor de la frase
  
  // Google Drive para fotos
  uploadPhotosUrl: "https://drive.google.com/drive/folders/...", // URL del Drive para que suban fotos
  
  // Tema de colores (opcional)
  theme: {
    primary: "#252850",                     // Color principal
    secondary: "#37a9b7",                   // Color secundario
    accent: "#5ba3ff",                      // Color de acento
    textPrimary: "#1a1f36",                 // Color del texto principal
    textSecondary: "#4a5568",               // Color del texto secundario
    textLight: "#8b92a8",                   // Color del texto claro
    background: "#ffffff",                  // Color de fondo
    backgroundAlt: "#f7f9fc"               // Color de fondo alternativo
  }
};
```

### 📸 Agregar Imagen de Fondo

1. **Coloca la foto** en la carpeta `public/images/`
   - Ejemplo: `public/images/luna-foto.jpg`

2. **Actualiza** `backgroundImage` en `src/App.jsx`:
   ```jsx
   backgroundImage: "/images/luna-foto.jpg"
   ```

3. **O usa una URL externa**:
   ```jsx
   backgroundImage: "https://ejemplo.com/foto.jpg"
   ```

4. **Si no tienes foto aún**, el componente usará un placeholder automáticamente.

### 🖼️ Agregar Fotos a la Galería

1. **Coloca las fotos** en la carpeta `public/images/`
   - Ejemplo: `luna1.jpg`, `luna2.jpg`, `luna3.jpg`, etc.

2. **Actualiza** `galleryImages` en `src/App.jsx`:
   ```jsx
   galleryImages: [
     "/images/luna1.jpg",
     "/images/luna2.jpg",
     "/images/luna3.jpg",
     "/images/luna4.jpg",
     "/images/luna5.jpg",
     "/images/luna6.jpg"
   ]
   ```

3. **O usa URLs externas**:
   ```jsx
   galleryImages: [
     "https://ejemplo.com/foto1.jpg",
     "https://ejemplo.com/foto2.jpg"
   ]
   ```

4. **Si no tienes fotos aún**, el carrusel mostrará placeholders automáticamente.

**Características de la galería:**
- Carrusel automático que cambia cada 5 segundos
- Navegación con flechas y puntos indicadores
- **Lightbox**: Clic en cualquier foto para verla en pantalla completa
  - Navegación entre fotos con flechas o teclado
  - Tecla ESC para cerrar
  - Contador de fotos
  - Fondo oscuro con efecto blur
- Diseño responsive y adaptable

### 💬 Agregar Frase Especial

Puedes agregar una frase o mensaje especial que se mostrará en la galería. Actualiza en `src/App.jsx`:

```jsx
quote: "Como no recordar que hace 15 años nació la flor más hermosa de este hogar, por eso te queremos invitar a su celebración, con mucha alegría y dando gracias a Dios por regalarme tan hermosa bendición",
quoteAuthor: "Papá de Luna"
```

Si aún no tienes la frase, déjala como `null` y no se mostrará.

### 📸 Configurar Enlace para Subir Fotos

Permite que tus invitados suban fotos del evento a través de Google Drive:

1. **Crea una carpeta en Google Drive**
2. **Haz clic derecho** → "Compartir"
3. **Cambia los permisos** a "Cualquier persona con el enlace puede editar"
4. **Copia el enlace** y actualiza en `src/App.jsx`:
   ```jsx
   uploadPhotosUrl: "https://drive.google.com/drive/folders/TU_ID_DE_CARPETA"
   ```

El botón aparecerá en la sección de galería invitando a los asistentes a compartir sus fotos.

### 🎵 Configurar Playlist de Spotify

Crea una playlist colaborativa para que tus invitados sugieran canciones:

1. **Abre Spotify** y crea una nueva playlist
2. **Haz la playlist colaborativa** (clic derecho → "Hacer colaborativa")
3. **Haz clic en los tres puntos** → "Compartir" → "Copiar enlace a playlist"
4. **Actualiza** `spotifyPlaylistUrl` en `src/App.jsx`:
   ```jsx
   spotifyPlaylistUrl: "https://open.spotify.com/playlist/TU_ID_DE_PLAYLIST"
   ```

### 💝 Configurar Datos Bancarios

Agrega tus datos bancarios para que los invitados puedan hacer regalos:

```jsx
bankName: "Banco Nación",              // Nombre del banco
accountHolder: "Romina Campana",        // Titular de la cuenta
cbu: "0000000000000000000000",         // CBU (22 dígitos)
alias: "LUNA.XV.2026"                  // Alias de la cuenta
```

Los datos se mostrarán en una tarjeta elegante con la opción de copiar al hacer clic.

### 👗 Configurar Dress Code

Especifica el código de vestimenta para el evento:

```jsx
dressCode: "Elegante casual",
dressCodeDescription: "Vestite cómodo pero elegante, para que te sientas cómodo y puedas bailar."
```

### 🎨 Personalizar Colores del Tema

Puedes personalizar completamente la paleta de colores de la invitación editando el objeto `theme` en `src/App.jsx`. Todos los componentes se actualizarán automáticamente:

```jsx
theme: {
  primary: "#252850",      // Color principal (botones, títulos, acentos principales)
  secondary: "#37a9b7",    // Color secundario (gradientes, detalles)
  accent: "#5ba3ff",       // Color de acento (detalles especiales, highlights)
  textPrimary: "#1a1f36",  // Color del texto principal
  textSecondary: "#4a5568",// Color del texto secundario
  textLight: "#8b92a8",    // Color del texto claro (placeholders, textos sutiles)
  background: "#ffffff",   // Color de fondo principal
  backgroundAlt: "#f7f9fc" // Color de fondo alternativo (secciones, cards)
}
```

**¿Qué elementos cambian con cada color?**
- `primary`: Botones principales, iconos, títulos destacados, líneas decorativas
- `secondary`: Gradientes, efectos hover, detalles secundarios
- `accent`: Acentos especiales, highlights, elementos decorativos
- `textPrimary`: Títulos, textos importantes
- `textSecondary`: Descripciones, textos normales
- `textLight`: Placeholders, textos sutiles, metadatos
- `background`: Fondo principal de secciones
- `backgroundAlt`: Fondos alternos, cards, áreas destacadas

**Ejemplos de otras combinaciones de colores:**

**Tema Rosa/Dorado (Clásico Femenino):**
```jsx
theme: {
  primary: "#ff6b9d",
  secondary: "#c06c84",
  accent: "#ffd700",
  textPrimary: "#2d3436",
  textSecondary: "#636e72",
  textLight: "#b2bec3",
  background: "#ffffff",
  backgroundAlt: "#fff5f7"
}
```

**Tema Morado/Lavanda (Elegante):**
```jsx
theme: {
  primary: "#667eea",
  secondary: "#764ba2",
  accent: "#f093fb",
  textPrimary: "#2c3e50",
  textSecondary: "#5a6c7d",
  textLight: "#95a5a6",
  background: "#ffffff",
  backgroundAlt: "#f8f9fa"
}
```

**Tema Verde Esmeralda (Sofisticado):**
```jsx
theme: {
  primary: "#00b894",
  secondary: "#00cec9",
  accent: "#55efc4",
  textPrimary: "#2d3436",
  textSecondary: "#636e72",
  textLight: "#b2bec3",
  background: "#ffffff",
  backgroundAlt: "#f0fff4"
}
```

Si dejas el objeto `theme` como `null`, se usarán los colores por defecto definidos en `App.css`.

### ⏰ Formato de Fecha para el Contador

El contador regresivo necesita la fecha en formato ISO:
- `"2025-12-15T19:00:00"` - Fecha y hora completa
- `"2025-12-15"` - Solo fecha (usará medianoche)

**Importante:** La fecha debe ser futura para que el contador funcione correctamente.

## 📝 Formulario RSVP

El formulario de confirmación permite a los invitados confirmar su asistencia con los siguientes campos:
- Nombre completo
- Número de acompañantes
- Confirmación (Sí/No asistiré)
- Mensaje opcional

**Estado actual:** Los datos se muestran en la consola del navegador.

**Para implementar el envío real de datos:**

### Opción 1: Formspree (Más simple, sin código)
1. Crea una cuenta gratuita en [Formspree](https://formspree.io/)
2. Obtén tu endpoint de formulario
3. Actualiza `src/components/RSVP.jsx` con tu endpoint de Formspree
4. Los datos llegarán automáticamente a tu email

### Opción 2: Firebase (Recomendado, base de datos en tiempo real)
1. Crea un proyecto en [Firebase](https://firebase.google.com/)
2. Configura Firestore Database
3. Agrega las credenciales de Firebase
4. Implementa la lógica de guardado en `src/components/RSVP.jsx`
5. Podrás ver todas las confirmaciones en la consola de Firebase

### Opción 3: Google Sheets (Alternativa simple)
1. Usa un servicio como [SheetDB](https://sheetdb.io/) o [Google Apps Script](https://developers.google.com/apps-script)
2. Conecta el formulario a una hoja de cálculo de Google
3. Todas las respuestas se guardarán automáticamente

### Opción 4: Backend propio (Más control)
Crea un endpoint con Node.js/Express o cualquier tecnología backend que prefieras.

## 🚢 Despliegue

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Sube la carpeta dist/ a Netlify
```

### GitHub Pages
1. Instala `gh-pages`: `npm install --save-dev gh-pages`
2. Agrega al `package.json`:
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```
3. Ejecuta: `npm run deploy`

## 📱 Estructura del Proyecto

```
src/
├── components/
│   ├── Hero.jsx          # Sección principal con imagen de fondo, nombre y contador regresivo
│   ├── Countdown.jsx     # Componente del contador regresivo (días, horas, minutos, segundos)
│   ├── Gallery.jsx       # Galería con carrusel de fotos, frase especial y botón para subir fotos
│   ├── EventInfo.jsx     # Información del evento (fecha, hora, lugar, dress code)
│   ├── RSVP.jsx          # Formulario de confirmación de asistencia
│   ├── Playlist.jsx      # Sección de playlist colaborativa de Spotify
│   ├── Gifts.jsx         # Sección de regalos con datos bancarios
│   ├── Footer.jsx        # Pie de página con contacto y botón de WhatsApp
│   └── *.css             # Archivos de estilos para cada componente
├── App.jsx               # Componente principal con configuración de datos
├── App.css               # Estilos globales y variables CSS del tema
└── main.jsx              # Punto de entrada de la aplicación
public/
└── images/               # Carpeta para imágenes (foto de fondo y galería)
```

### Componentes Principales

**Hero**: Sección de portada con imagen de fondo (o gradiente), nombre de la cumpleañera y contador regresivo animado.

**Gallery**: Carrusel de fotos con navegación automática y manual, incluye frase especial y botón para que los invitados suban sus propias fotos.

**EventInfo**: Muestra fecha, hora, ubicación con enlace a Google Maps, y código de vestimenta del evento.

**RSVP**: Formulario interactivo para confirmar asistencia con validación de campos.

**Playlist**: Integración con Spotify para que los invitados agreguen canciones a la playlist del evento.

**Gifts**: Muestra datos bancarios (banco, titular, CBU, alias) con función de copiar al hacer clic.

**Footer**: Información de contacto con botón directo a WhatsApp.

## 🎯 Características Implementadas

- [x] ✅ Contador regresivo en tiempo real hasta el evento
- [x] ✅ Imagen de fondo personalizable con overlay
- [x] ✅ Galería de fotos con carrusel automático y manual
- [x] ✅ Temas de colores completamente personalizables
- [x] ✅ Formulario RSVP con validación
- [x] ✅ Integración con Spotify para playlist colaborativa
- [x] ✅ Sección de regalos con datos bancarios
- [x] ✅ Enlace para que invitados suban fotos (Google Drive)
- [x] ✅ Botón de WhatsApp para contacto directo
- [x] ✅ Google Maps integrado para ubicación
- [x] ✅ Sección de dress code
- [x] ✅ Diseño completamente responsive
- [x] ✅ Animaciones suaves y transiciones elegantes
- [x] ✅ Lightbox para ver fotos en tamaño completo con navegación
- [x] ✅ Animaciones de entrada al hacer scroll (Intersection Observer)

## 🎯 Mejoras Futuras Posibles

- [ ] Música de fondo con control de reproducción
- [ ] Modo oscuro / claro
- [ ] Integración directa con backend para RSVP
- [ ] QR code para compartir la invitación
- [ ] Múltiples idiomas

## 💡 Tips y Consejos

### Optimización de Imágenes
- Usa imágenes optimizadas para web (formato WebP o JPG)
- Tamaño recomendado para imagen de fondo: 1920x1080px
- Tamaño recomendado para galería: 800x600px
- Comprime las imágenes antes de subirlas para carga más rápida

### Pruebas
- Prueba la invitación en diferentes dispositivos (móvil, tablet, desktop)
- Verifica que todos los enlaces funcionen correctamente
- Revisa el contador regresivo con la fecha correcta
- Prueba el formulario RSVP antes del envío final

### Personalización Avanzada
- Todos los estilos están en archivos CSS separados por componente
- Las variables CSS facilitan el cambio de colores global
- Sistema de animaciones modular en `src/animations.css`:
  - `fade-up`, `fade-down`, `fade-left`, `fade-right` - Apariciones desde diferentes direcciones
  - `zoom-in`, `zoom-out` - Efectos de escala
  - `flip-up` - Efecto de volteo 3D
  - `slide-up` - Deslizamiento dramático
  - `blur-fade` - Aparición con desenfoque
  - `stagger-children` - Animación secuencial de elementos hijos
  - Delays personalizables (`.delay-100` a `.delay-500`)
- Hook personalizado `useScrollAnimation` para detectar elementos en viewport
- Respeta las preferencias de accesibilidad (`prefers-reduced-motion`)
- Puedes modificar las animaciones en los archivos CSS individuales
- El diseño es completamente responsive y usa media queries

## 🤝 Contribuciones

Si encontrás algún bug o tenés sugerencias de mejora, sentite libre de crear un issue o pull request.

## 📄 Licencia

Este proyecto es de uso libre para invitaciones personales y eventos.

---

**Hecho con ❤️ para crear invitaciones especiales e inolvidables**

¡Disfruta creando tu invitación! 🎉✨
