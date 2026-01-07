

El proceso de pago sigue estos pasos:

## 1. El usuario completa el formulario.
El usuario interactúa con:

**Campos HTML normales:**

- Nombre

- Email

- Teléfono

- Campos seguros del SDK:

- Número de tarjeta

- Fecha de expiración

- CVV

```
<input id="fullName" />
<input id="email" />
<input id="phone" />

<div id="card-number"></div>
<div id="expiration"></div>
<div id="cvv"></div>

```

## 2. El comercio arma un objeto con:
   - Datos del cliente
   - Monto y concepto
   - Referencia de tarjeta (si aplica)
   - Indicador de guardado de tarjeta
```
const payload = {
  name: fullName.value,
  email: email.value,
  phone: phone.value,
  amount: amount.value,
  concept: concept.value,
  saveCard: saveCard.checked,
  cardReference: selectedCardReference // o null
};

```

3. Se envía la información al SDK para validación.
**Del lado del front se llama:**
```
const result = await cmpSDKInstance.generatePayment(payload);

```
En este punto:

- El SDK lee internamente los iframes de tarjeta

- Asocia esos datos con el payload

- Ejecuta validaciones:

  - Luhn

  - Fecha válida

  - CVV

  - Reglas antifraude básicas



4. El SDK valida la tarjeta y devuelve un resultado.
**Respuesta**
```
{
  description: "Validación compeltada",
  header: {
    authorization: "Bearer eyJhbGci..."
  },
  body: {
    tokenCard: "tok_xxxxx",
    brand: "VISA",
    last4: "4242"
  }
}
```
En este paso ocurre lo más importante:
- Tarjeta validada
- Se tokeniza

5. Si la validación es exitosa:
   - El front envía información ya validada.
   ```
   await createPayment(result.body, result.header);

   ```
   - El backend procesa el pago.
   ```
   const paymentResponse = await pagosService.createPayment(body);

   ```
   Que hace el back aqui ?
    - Usa las llaves privadas.
    - Ejecuta el cobro real.
    - Interpreta la respuesta y decide mensaje final
      ```
      result === "R" → Rechazado
      code === "14" → Tarjeta inválida
      code === "51" → Fondos insuficientes

      ```


6. Se muestra el resultado final al usuario.
  - Del lado del front cabe recalcar que solo comunica el resultado
  ```
  if (!response.ok) {
  showAlert({ message: response.message, type: "error" });
  } else {
  showAlert({ message: "Pago procesado correctamente", type: "success" });
  }

  ```


---

## Flujo visual de pago
Usuario ->
Frontend (formulario)->
SDK (validación + tokenización)->
Frontend (token)->
Backend (cobro)->
CM Pagos->
Resultado


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
  
  ![Pago exitoso](/img/image_1.png)

  
- **Pago rechazado o fallido**  
  Se muestra un mensaje de error o advertencia.
  ![Pago fallido](/img/image_2.png)


