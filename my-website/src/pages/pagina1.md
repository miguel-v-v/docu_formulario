# Checkout – CM Pagos

## Descripción general

Este checkout permite realizar pagos con tarjeta utilizando el **SDK de CM Pagos**.  
Soporta el uso de **tarjetas guardadas**, el registro de **nuevas tarjetas** y la opción de **guardar tarjetas para pagos futuros**.

El flujo está diseñado para que el comercio:
- Inicialice el SDK de CM Pagos
- Valide la información de la tarjeta
- Procese el pago desde su backend
- Muestre el resultado al usuario final

---

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

## Tarjetas guardadas

Cuando el SDK devuelve tarjetas previamente almacenadas:

- Se muestran en un listado con:
  - Tipo de tarjeta
  - Número enmascarado
- El usuario puede:
  - Seleccionar una tarjeta guardada
  - Elegir usar una **nueva tarjeta**

### Comportamiento

- Al seleccionar una tarjeta guardada:
  - Los campos de tarjeta nueva se deshabilitan
- Al seleccionar “Usar nueva tarjeta”:
  - Los campos vuelven a habilitarse

---

## Inicialización del SDK

Al cargar la página:

1. Se solicitan las llaves del comercio al backend.
2. Se genera un token de sesión para el SDK.
3. Se carga dinámicamente el SDK de CM Pagos.
4. Se crea una instancia del SDK con:
   - Llaves del comercio
   - Token
   - Configuración visual personalizada
5. Se inicializa el SDK.
6. Se solicita el listado de tarjetas guardadas.

---

## Configuración visual

El checkout permite personalizar la apariencia del SDK, incluyendo:

- Logo del loader
- Colores principales
- Spinner de carga
- Tipografía y estilos base de los campos
- Estados de foco y error

Esto asegura que el SDK se adapte visualmente al diseño del comercio.

---

## Flujo de pago

El proceso de pago sigue estos pasos:

1. El usuario completa el formulario.
2. El comercio arma un objeto con:
   - Datos del cliente
   - Monto y concepto
   - Referencia de tarjeta (si aplica)
   - Indicador de guardado de tarjeta
3. Se envía la información al SDK para validación.
4. El SDK valida la tarjeta y devuelve un resultado.
5. Si la validación es exitosa:
   - El comercio envía la información validada a su backend.
   - El backend procesa el pago.
6. Se muestra el resultado final al usuario.

---

## Manejo de errores

El sistema contempla:

- Errores de validación del SDK
- Errores en el procesamiento del pago
- Excepciones inesperadas

Todos los errores se muestran al usuario mediante alertas claras y controladas.

---

## Resultado final

- **Pago exitoso**  
  Se notifica al usuario con un mensaje de éxito.
- **Pago rechazado o fallido**  
  Se muestra un mensaje de error o advertencia.
