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

**Flujo de inicialización**

```
document.addEventListener("DOMContentLoaded", async () => {
  const keysMerchan = await getKeys();
  const resToken = await createToken(keysMerchan);

  await loadSdk(resToken.sdkData.url);

  window.cmpSDKInstance = new CMPSDK(
    keysMerchan,
    resToken,
    desingCM
  );

  await window.cmpSDKInstance.init();

  const listCardRes = await window.cmpSDKInstance.getListCard();
  if (listCardRes.status === "SUCCESS") {
    renderSavedCards(listCardRes.response);
  }
});

```

---
