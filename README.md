# 🌟Volanti Web App🌟

## ✨ Descripción

Esta sencilla pero poderosa herramienta permite a los usuarios **subir archivos CSV** y enviarlos a un backend utilizando la **Volanti API Rest**. Con un diseño limpio y moderno, la aplicación cuenta con un botón elegante para seleccionar y cargar tu archivo. 

Una vez que el archivo es procesado, recibirás un mensaje claro y colorido: 
- Si hay errores, se mostrará un mensaje en **rojo**.
- Si la carga es exitosa, verás un mensaje en **verde** que te indicará cuántas entradas fueron analizadas correctamente y cuántas tuvieron errores.

## 📦 Requisitos

Antes de comenzar, asegúrate de tener instalado **Node.js** y **npm** en tu máquina. Puedes verificar su instalación ejecutando los siguientes comandos en tu terminal:

```bash
node -v
npm -v
```

## 🚀 Instalación

1. Clona el repositorio en tu máquina local:

   ```bash
   git clone https://github.com/nestordqa/volanti-webapp.git
   cd volanti-webapp
   ```

2. Instala las dependencias necesarias:

   ```bash
   npm install
   ```

## 🎉 Ejecución

Para iniciar la aplicación, simplemente ejecuta el siguiente comando en la terminal:

```bash
npm run start
```

Esto levantará un servidor local y abrirá la aplicación en tu navegador en `http://localhost:3000`.

## 🛠️ Tecnologías Utilizadas

- **React**: Una biblioteca de JavaScript para construir interfaces de usuario interactivas.
- **Tailwind CSS**: Un framework CSS que permite un diseño rápido y responsivo. Para más información, consulta la [documentación de Tailwind CSS](https://tailwindcss.com/docs/installation).
- **Material UI**: Una biblioteca de componentes de React que implementa el diseño de Material Design. Encuentra más detalles en la [documentación de Material UI](https://mui.com/getting-started/installation/).
- **Axios**: Un cliente HTTP basado en promesas que facilita la realización de solicitudes HTTP. Aprende a usar Axios con React en la [guía de Axios](https://axios-http.com/docs/intro).

## 📊 Mensajes de Estado

- **Errores**: Si la petición falla, se mostrará un mensaje en **rojo** indicando el error.
- **Éxito**: Si la carga es exitosa, se mostrará un mensaje en **verde** con el número de entradas analizadas correctamente y el número de entradas con errores.

---

¡Gracias por la oportunidad!