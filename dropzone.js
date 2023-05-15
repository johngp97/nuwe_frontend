var p = document.getElementById("nombre");
var username=localStorage.getItem("username");
p.innerHTML = "Welcome "+username;


    const form = document.getElementById('uploadForm');
    const fileInput = document.getElementById('fileInput');
    const dropZone = document.getElementById('dropZone');
    const fileNameElement = document.getElementById('fileName');

    // Agrega el evento 'drop' al cuadro rojo
    dropZone.addEventListener('drop', (event) => {
      event.preventDefault();
      const file = event.dataTransfer.files[0];
      handleFile(file);
    });

    // Agrega el evento 'dragover' al cuadro rojo
    dropZone.addEventListener('dragover', (event) => {
      event.preventDefault();
    });

    // Agrega el evento 'change' al input de archivo
    fileInput.addEventListener('change', (event) => {
      const file = event.target.files[0];
      handleFile(file);
    });

    function handleFile(file) {
      if (file) {
        const formData = new FormData();
        formData.append('archivo', file);

        fetch('/subir-archivo', {
          method: 'POST',
          body: formData
        })
        .then(response => {
          if (response.ok) {
            console.log('Archivo subido con éxito');
            fileNameElement.textContent = `Nombre del archivo: ${file.name}`;
          } else {
            console.error('Error al subir el archivo');
          }
        })
        .catch(error => {
          console.error('Error al subir el archivo:', error);
        });

        fileNameElement.textContent = `Nombre del archivo: ${file.name}`;
      }
    }