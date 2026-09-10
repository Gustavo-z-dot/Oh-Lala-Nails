# 📸 Guía: Conectar Instagram Feed a Oh Lalá! Nails

> **Propósito:** Reemplazar la galería estática por fotos en vivo desde Instagram.
> Las últimas **12 fotos** de tu perfil se mostrarán automáticamente y se actualizarán
> cada vez que hagas deploy (git push).

---

## 🧱 Requisito previo

Tené a mano:
- **Usuario y contraseña de Facebook** (para crear la app)
- **Usuario y contraseña de Instagram** (para autorizar la app)

---

## 👣 Paso a paso

### 1. Crear la app en Meta Developers

1. Andá a 👉 [developers.facebook.com/apps](https://developers.facebook.com/apps)
2. Iniciá sesión con tu cuenta de Facebook
3. Click en **"Crear app"** (arriba a la derecha)
4. Elegí la opción **"Autenticación"** (o "Authentication")
5. Completá:
   - **Nombre:** `OhLalaNails`
   - **Correo de contacto:** `ohlala_nails0@outlook.com`
6. Click en **"Crear app"**
7. Resolvé cualquier verificación si aparece

### 2. Agregar Instagram Basic Display

1. Una vez creada la app, buscá en la barra lateral izquierda
2. Click en **"Agregar producto"** (o "Add product")
3. Buscá **"Instagram Basic Display"**
4. Click en **"Configurar"**
5. En la página que aparece vas a ver:

   **"Redireccionamiento de OAuth"** (OAuth Redirect URIs)
   - Click en **"Agregar"**
   - Poné: `https://www.ohlalanails.com`
   - Click en **"Guardar"**

6. Ahora buscá en la misma página:
   - **ID de cliente** (Client ID) → Copialo
   - **Secreto de cliente** (Client Secret) → Copialo

### 3. Generar el código de autorización

1. Abrí esta URL en tu navegador:

   ```
   https://api.instagram.com/oauth/authorize?client_id=CLIENT_ID&redirect_uri=https://www.ohlalanails.com&scope=user_profile,user_media&response_type=code
   ```

   🔴 Reemplazá `CLIENT_ID` con el ID que copiaste en el paso anterior

2. Te va a pedir:
   - **Iniciar sesión en Instagram** (tu usuario: `ohlala_nails0`)
   - **Autorizar la app** → Click en "Autorizar"

3. Te va a redirigir a:
   ```
   https://www.ohlalanails.com?code=AQD4f8...
   ```

4. **Copiá todo el código** que aparece después de `?code=` (es largo, tipo `AQD4f8...`)

### 4. Intercambiar el código por un token

1. Abrí esta URL en tu navegador:

   ```
   https://api.instagram.com/oauth/access_token?client_id=CLIENT_ID&client_secret=CLIENT_SECRET&grant_type=authorization_code&redirect_uri=https://www.ohlalanails.com&code=CODIGO
   ```

   🔴 Reemplazá:
   - `CLIENT_ID` con tu ID de cliente
   - `CLIENT_SECRET` con tu secreto de cliente
   - `CODIGO` con el código que copiaste en el paso 3

2. Te va a devolver un JSON como este:
   ```json
   {
     "access_token": "IGQV...",
     "user_id": 123456789,
     "token_type": "Bearer",
     "expires_in": 5184000
   }
   ```

3. **Copiá el `access_token`** (empieza con "IGQV...")

> ⚠️ El token dura **60 días**. Si caduca, repetí los pasos 3 y 4.

### 5. Pasarle el token al código

1. Andá al dashboard de Vercel:
   👉 [vercel.com/gustavo-z-dot/oh-lala-nails/settings/environment-variables](https://vercel.com/gustavo-z-dot/oh-lala-nails/settings/environment-variables)

2. Agregá una **variable de entorno**:
   - **Key:** `INSTAGRAM_ACCESS_TOKEN`
   - **Value:** (el token que copiaste, tipo `IGQV...`)
   - **Environment:** Production
   - Click en **"Save"**

3. En Vercel, andá a la pestaña **"Deployments"** y hacé clic en **"Redeploy"** (último deploy exitoso)

### 6. ¡Listo!

Después del redeploy:
- La galería va a mostrar las últimas **12 fotos** de Instagram
- Al clickear una foto → abre Instagram
- Se actualiza automáticamente cada vez que hacés **git push**

---

## 🔄 Para renovar el token (cada 60 días)

1. Repetí los pasos **3** y **4** de esta guía
2. Copiá el nuevo token
3. Andá a Vercel → Settings → Environment Variables
4. Actualizá `INSTAGRAM_ACCESS_TOKEN` con el nuevo token
5. Hacé **Redeploy** del último deploy

---

## 🛠️ Archivos involucrados (solo como referencia)

Si en el futuro querés modificar algo:

| Archivo | Qué hace |
|---|---|
| `lib/instagram.ts` | Función que llama a la API de Instagram |
| `app/api/instagram/route.ts` | Endpoint que sirve las fotos |
| `app/components/InstagramFeed.tsx` | Componente que muestra las fotos en la galería |
| `app/components/Gallery.tsx` | Contenedor de la galería |
| `next.config.ts` | Tiene los dominios de Instagram configurados |

---

_Guía generada el 09/09/2026_
