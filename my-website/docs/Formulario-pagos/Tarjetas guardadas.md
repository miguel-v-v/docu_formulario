## Tarjetas guardadas

Cuando el SDK devuelve tarjetas previamente almacenadas:

- Se muestran en un listado con:
  - Tipo de tarjeta
  - Número enmascarado
- El usuario puede:
  - Seleccionar una tarjeta guardada
  - Elegir usar una **nueva tarjeta**


  **Contenedor de tarjetas**
  ```
  <div class="mb-4 d-none" id="saved-cards-container">
  <h6>Tarjetas guardadas</h6>
  <div class="list-group" id="saved-cards-list"></div>
  </div>

  ```

### Comportamiento

- Al seleccionar una tarjeta guardada:
  - Los campos de tarjeta nueva se deshabilitan
- Al seleccionar “Usar nueva tarjeta”:
  - Los campos vuelven a habilitarse

**Comportamiento de selección de tarjeta**
  ```
  document.addEventListener("change", (e) => {
  if (e.target.name === "cardOption") {
    selectedCardReference = e.target.value === "new" ? null : e.target.value;
    handleCardSelection(e.target.value);
  }
  });

  ```
**Bloqueo y desbloqueo de campos**
  ```
  function lockSavedCard(cardNumber, expiration) {
  cardNumber.style.pointerEvents = "none";
  expiration.style.pointerEvents = "none";
}

function unlockNewCard(cardNumber, expiration) {
  cardNumber.style.pointerEvents = "auto";
  expiration.style.pointerEvents = "auto";
}

  ```

---
