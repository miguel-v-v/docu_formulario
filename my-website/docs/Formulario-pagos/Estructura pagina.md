## Estructura de la página

La página está compuesta por un formulario de pago centralizado, con estilos basados en **Bootstrap**, y un contenedor dinámico para mostrar alertas y tarjetas guardadas.

**Estructura base HTML**

```
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Checkout - CM Pagos</title>

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"/>
  <link rel="stylesheet" href="src/styles.css">

  <script src="src/index.js"></script>
</head>
<body class="bg-light">
  <div id="alert-commerce-container"></div>
</body>
</html>
```


### Componentes principales

- **Contenedor de alertas**
  - Muestra mensajes de éxito, error o advertencia al usuario.
  ```
  <div id="alert-commerce-container"></div>

  ```
- **Formulario de pago**
  - Captura los datos del cliente y el pago.
  ```
  <div class="card shadow-lg">
  <div class="card-body">
    <h4 class="card-title text-center mb-4">Pago con Tarjeta</h4>

  ```

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

