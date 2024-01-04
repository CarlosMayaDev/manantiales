import React, { useEffect } from "react";

const InstagramFeed = () => {
  useEffect(() => {
    // Código que se ejecutará después de que el componente se haya montado
    const container = document.createElement('div');
    container.style.width = '100%';
    container.style.overflow = 'hidden';

    const script = document.createElement('script');
    script.src = 'https://cdn.lightwidget.com/widgets/lightwidget.js';
    script.async = true;

    const iframe = document.createElement('iframe');
    iframe.src = '//lightwidget.com/widgets/b81597e4c43f59508378d922fcc1015e.html';  // Nueva URL del widget
    iframe.scrolling = 'no';
    iframe.allowTransparency = true;
    iframe.className = 'lightwidget-widget';
    iframe.style.width = '100%';
    iframe.style.border = '0';
    iframe.style.overflow = 'hidden';  // Agregado para evitar que el contenido sobresalga del iframe

    // Agrega el iframe al contenedor
    container.appendChild(iframe);

    // Agrega el script al final del cuerpo del documento
    document.body.appendChild(script);

    // Agrega el contenedor al lugar donde deseas mostrar el feed
    const feedContainer = document.getElementById('feed-container'); // Reemplaza 'feed-container' con el ID de tu contenedor deseado
    if (feedContainer) {
      feedContainer.appendChild(container);
    }

    return () => {
      // Código que se ejecutará al desmontar el componente
      document.body.removeChild(script);
      if (feedContainer) {
        feedContainer.removeChild(container);
      }
    };
  }, []);

  return (
    <div id="feed-container">
      {/* Contenedor para el feed de Instagram */}
    </div>
  );
};

export default InstagramFeed;

