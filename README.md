# Invitación de Cumpleaños de 15 Años

Una página web moderna y elegante para invitaciones de cumpleaños de 15 años, construida con React y Vite.

## 🚀 Características

- ✨ Diseño moderno y elegante con animaciones suaves
- 📱 Completamente responsive (se adapta a móviles, tablets y desktop)
- 🖼️ Imagen de fondo personalizable en la sección Hero
- ⏰ Contador regresivo en tiempo real hasta la fecha del evento
- 📅 Sección de información del evento (fecha, hora, lugar)
- 📝 Formulario de confirmación de asistencia (RSVP)
- 🎨 Gradientes y efectos visuales atractivos

## 🛠️ Tecnologías

- **React 19** - Biblioteca de UI
- **Vite** - Build tool y dev server
- **CSS3** - Estilos modernos con animaciones

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
  name: "Luna",                    // Nombre de la cumpleañera
  eventDate: "2025-12-15T19:00:00", // Fecha y hora del evento (para el contador)
  date: "Sábado, 15 de Diciembre", // Fecha del evento (texto)
  time: "19:00 hs",                // Hora del evento
  location: "Salón de Eventos",    // Nombre del lugar
  address: "Calle Principal 123, Ciudad", // Dirección
  contactEmail: "contacto@ejemplo.com",    // Email de contacto
  contactPhone: "+54 9 11 1234-5678",       // Teléfono de contacto
  backgroundImage: "/images/luna-foto.jpg" // Ruta a la imagen de fondo
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

### 🖼️ Agregar Fotos al Carrusel

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

### 💬 Agregar Frase Especial

Cuando tengas la frase, actualiza en `src/App.jsx`:
```jsx
quote: "Como no recordar que hace 15 años nació la flor más hermosa de este hogar, por eso te queremos invitar a su celebración, con mucha alegría y dando gracias a Dios por regalarme tan hermosa bendición",
quoteAuthor: "Papá de Luna"
```

Si aún no tienes la frase, déjala como `null` y no se mostrará.

### ⏰ Formato de Fecha para el Contador

El contador regresivo necesita la fecha en formato ISO:
- `"2025-12-15T19:00:00"` - Fecha y hora completa
- `"2025-12-15"` - Solo fecha (usará medianoche)

**Importante:** La fecha debe ser futura para que el contador funcione correctamente.

## 📝 Formulario RSVP

El formulario de confirmación actualmente solo muestra los datos en la consola. Para implementar el envío real, puedes:

### Opción 1: Formspree (Más simple)
1. Crea una cuenta en [Formspree](https://formspree.io/)
2. Obtén tu endpoint
3. Actualiza `src/components/RSVP.jsx` para enviar a Formspree

### Opción 2: Firebase (Recomendado para más control)
1. Crea un proyecto en Firebase
2. Configura Firestore
3. Agrega la lógica de guardado en `src/components/RSVP.jsx`

### Opción 3: Backend simple con Node.js/Express
Si prefieres un backend propio, puedes crear un endpoint simple que reciba los datos del formulario.

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
│   ├── Hero.jsx          # Sección principal con imagen, nombre y contador
│   ├── Countdown.jsx     # Componente del contador regresivo
│   ├── Gallery.jsx       # Carrusel de fotos con frase
│   ├── EventInfo.jsx     # Información del evento
│   ├── RSVP.jsx          # Formulario de confirmación
│   └── Footer.jsx        # Pie de página con contacto
├── App.jsx               # Componente principal
└── main.jsx              # Punto de entrada
public/
└── images/               # Carpeta para imágenes (foto de fondo y galería)
```

## 🎯 Próximas Mejoras (Opcionales)

- [x] Contador regresivo hasta el evento ✅
- [x] Imagen de fondo personalizable ✅
- [x] Galería de fotos con carrusel ✅
- [ ] Música de fondo
- [ ] Mapa integrado con la ubicación
- [ ] Temas de colores personalizables
- [ ] Integración con WhatsApp para confirmaciones

## 📄 Licencia

Este proyecto es de uso libre para invitaciones personales.

---

¡Disfruta creando una invitación especial! 🎉
