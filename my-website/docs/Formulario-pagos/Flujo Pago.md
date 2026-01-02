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

- Errores de validación del SDK.
- Errores en el procesamiento del pago.
- Excepciones inesperadas.

Todos los errores se muestran al usuario mediante alertas claras y controladas.

---

```
try {
  // Flujo principal
} catch (err) {
  showAlert({
    message: err,
    type: 'warning'
  });
}

```

## Resultado final

- **Pago exitoso**  
  Se notifica al usuario con un mensaje de éxito.
- **Pago rechazado o fallido**  
  Se muestra un mensaje de error o advertencia.
