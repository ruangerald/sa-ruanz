        // Selecionar elementos
        const expandBtn = document.getElementById("expandBtn");
        const closeBtn = document.getElementById("closeBtn");
        const sidebar = document.getElementById("sidebar");
        
        // Verificar se estamos em uma tela menor que 1037px
        const isSmallScreen = () => window.innerWidth <= 1036;
        
        // Alternar estado da sidebar
        const toggleSidebar = () => {
          if (isSmallScreen()) {
            sidebar.classList.toggle("active");
          }
        };
        
        // Botão hamburguer abre/fecha a sidebar
        expandBtn.addEventListener("click", toggleSidebar);
        
        // Botão de fechar fecha a sidebar
        closeBtn.addEventListener("click", toggleSidebar);
        
        // Garantir que a sidebar esteja sempre fechada ao redimensionar para telas grandes
        window.addEventListener("resize", () => {
          if (!isSmallScreen()) {
            sidebar.classList.remove("active");
          }
        });