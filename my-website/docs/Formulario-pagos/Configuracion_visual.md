## Configuración visual

El checkout permite personalizar la apariencia del SDK, incluyendo:

- Logo del loader
- Colores principales
- Spinner de carga
- Tipografía y estilos base de los campos
- Estados de foco y error

Esto asegura que el SDK se adapte visualmente al diseño del comercio.

```
const desingCM = {
  loader: {
    logo: "https://img.freepik.com/psd-gratis/logotipo-abstracto-gradiente_23-2150689648.jpg",
    primaryColor: "#0A2540",
    spinnerColor: "#00d4ff",
    showTimer: true
  },
  fields: {
    base: {
      fontFamily: 'Arial, sans-serif',
      fontSize: '16px',
      color: '#333'
    },
    focus: { borderColor: '#0A2540' },
    error: { borderColor: 'red' }
  }
};

```
---
