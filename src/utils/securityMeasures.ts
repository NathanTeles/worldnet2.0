
// Medidas de segurança para impedir cópia de conteúdo

export const initSecurityMeasures = () => {
  // Desativar clique direito
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    return false;
  });

  // Desativar seleção de texto
  document.addEventListener('selectstart', (e) => {
    e.preventDefault();
    return false;
  });

  // Desativar atalhos como Ctrl+C, Ctrl+V, Ctrl+U, Ctrl+S, F12
  document.addEventListener('keydown', (e) => {
    // Teclas de atalho para impedir
    const blockedKeys = [
      'c', 'v', 'u', 's', 'j', 'p', // Ctrl+C, Ctrl+V, Ctrl+U, Ctrl+S, Ctrl+J, Ctrl+P
      'F12', 'PrintScreen'
    ];
    
    if ((e.ctrlKey || e.metaKey) && blockedKeys.includes(e.key.toLowerCase())) {
      e.preventDefault();
      return false;
    }

    // Bloquear F12
    if (e.key === 'F12') {
      e.preventDefault();
      return false;
    }
    
    // Bloquear Print Screen
    if (e.key === 'PrintScreen') {
      e.preventDefault();
      return false;
    }
  });

  // Desativar arrastar elementos
  document.addEventListener('dragstart', (e) => {
    e.preventDefault();
    return false;
  });
  document.addEventListener('drop', (e) => {
    e.preventDefault();
    return false;
  });

  // Desativar zoom com Ctrl + Scroll
  document.addEventListener('wheel', (e) => {
    if (e.ctrlKey) {
      e.preventDefault();
      return false;
    }
  }, { passive: false });
  
  // Criar elemento de estilo para CSS adicional
  const style = document.createElement('style');
  style.innerHTML = `
    * {
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
    
    img, video, svg {
      pointer-events: none;
      -webkit-user-drag: none;
      -moz-user-drag: none;
      -ms-user-drag: none;
      user-drag: none;
    }
  `;
  document.head.appendChild(style);

  // Desativar inspetor de elementos avançado
  setInterval(() => {
    // Técnica complementar para dificultar o uso do console do navegador
    if (window.outerHeight - window.innerHeight > 200 || window.outerWidth - window.innerWidth > 200) {
      document.body.innerHTML = "Inspetor de elementos detectado!";
    }
  }, 1000);
};
