## Inicialización del SDK

Al cargar la página:

1. Obtener las llaves del comercio al backend.
```
const keysMerchan = await getKeys();

```
**Adjunto funcion requerida**
```
async function getKeys() {
  const res = await fetch("http://localhost:8081/api/keys", {
    method: "GET",
    headers: {
          'Content-Type': 'application/json'
      },
  });

  return res.json();
}
```

2. Se genera un token de sesión para el SDK (el cual se genera desde backend).
```
const resToken = await createToken(keysMerchan);

```
**Adjunto funcion requerida**
```
async function createToken(setHeaders) {
  try {
    console.log(setHeaders)
    const res = await fetch("http://localhost:8081/api/token", {
      method: "POST",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(setHeaders)
    });
    return res.json();
  } catch (error) {
    throw new Error("Error inesperado al validar.");
  }


}
```
3. Se carga dinámicamente el SDK de CM Pagos.
```
await loadSdk(resToken.sdkData.url);

```
**Adjunto funcion requerida**
```
function loadSdk(src) {
  return new Promise((resolve, reject) => {
    if (window.CMPSDK) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("No se pudo cargar el SDK"));
    document.head.appendChild(script);
  });
}
```
4. Se crea una instancia del SDK con:
   - Llaves del comercio
   - Token
   - Configuración visual personalizada
```
await window.cmpSDKInstance.init();

```
5. Se inicializa el SDK.
6. Se solicita el listado de tarjetas guardadas.

```
renderSavedCards(listCardRes.response);
- Se muestra tarjeta tokenizadas
- Se usa cardReference
- No se exponen números reales
```

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

## Requerimiento de onboarding

Al invocar getKeys() este regresa llaves publicas , las cuales son:
- clientId
- clientSecret
- merchanId
- applicationId
- nonce
- clientReference

A continuación un json con un ejemplo:

```

{
  clientId: 'sk_test_72476F713258474B786857417677317034455A57794F7633573275424D5339486C7366543263676F4A31574A384841784D46475135374D425545747532463536_33373238303332373433',
  clientSecret: 'QvePHhyj1Rur4QrdFpI0MeCchpJ8 bTVGZzvMBpVeUaBlJ749quAeESELmKJE6x7',
  merchantId: 'd34e938c-569b-4af0-9927-c322733052aa',
  applicationId: 'app_test_68767569766678377A4C626A45514F336258',
  nonce: '123456789',
  clientReference: 'ba7512dd-9ad9-4b44-ac07-7e9e7da5f943'
};
```




---
