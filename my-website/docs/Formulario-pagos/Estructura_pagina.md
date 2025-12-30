## Estructura de la página

La página está compuesta por un formulario de pago centralizado, con estilos basados en **Bootstrap**, y un contenedor dinámico para mostrar alertas y tarjetas guardadas.

### Componentes principales

- **Contenedor de alertas**
  - Muestra mensajes de éxito, error o advertencia al usuario.
- **Formulario de pago**
  - Captura los datos del cliente y el pago.
- **Listado de tarjetas guardadas**
  - Se muestra únicamente si el SDK retorna tarjetas asociadas al usuario.

---

## Campos del formulario

El formulario contiene los siguientes campos:

- **Número de tarjeta**  
  Campo controlado completamente por el SDK.
- **Nombre completo**  
  Nombre del titular de la tarjeta.
- **Correo electrónico**  
  Usado para identificación y notificaciones.
- **Teléfono**  
  Número de contacto del cliente.
- **Fecha de expiración**  
  Campo seguro gestionado por el SDK.
- **CVV**  
  Campo sensible gestionado por el SDK.
- **Concepto**  
  Descripción del pago (solo lectura).
- **Monto**  
  Importe del pago (solo lectura).
- **Guardar tarjeta**  
  Permite almacenar la tarjeta para futuros pagos.

---

