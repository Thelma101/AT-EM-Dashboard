document.querySelector('.dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
  });
  
  const darkModeStyles = `
    .dark-mode {
      background-color: #333;
      color: #fff;
    }
  
    .dark-mode .sidebar {
      background-color: #444;
    }
  
    .dark-mode .card {
      background-color: #555;
    }
  
    .dark-mode .status.completed {
      background-color: #218838;
    }
  
    .dark-mode .status.in-progress {
      background-color: #e0a800;
    }
  `;
  
  const styleSheet = document.createElement('style');
  styleSheet.type = 'text/css';
  styleSheet.innerText = darkModeStyles;
  document.head.appendChild(styleSheet);
  