document.addEventListener('DOMContentLoaded', function() {
    // Mostrar nombres de archivos seleccionados
    const fileInput = document.getElementById('photos');
    const fileNames = document.getElementById('fileNames');
    
    fileInput.addEventListener('change', function() {
        if (this.files.length > 0) {
            let names = [];
            for (let i = 0; i < this.files.length; i++) {
                names.push(this.files[i].name);
            }
            fileNames.textContent = names.join(', ');
        } else {
            fileNames.textContent = 'No se han seleccionado archivos';
        }
    });

    // Manejar FAQ acordeón
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Cerrar otros items abiertos
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Alternar el item actual
            item.classList.toggle('active');
        });
    });

    // Manejar envío del formulario
    const claimForm = document.getElementById('claimForm');
    const modal = document.getElementById('successModal');
    const claimNumberSpan = document.getElementById('claimNumber');
    const closeModal = document.querySelector('.close-modal');
    const modalButton = document.querySelector('.modal-button');
    
    claimForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validar archivos (opcional)
        const files = fileInput.files;
        if (files.length > 5) {
            alert('Por favor selecciona un máximo de 5 archivos.');
            return;
        }
        
        for (let i = 0; i < files.length; i++) {
            if (files[i].size > 2 * 1024 * 1024) { // 2MB
                alert(`El archivo "${files[i].name}" excede el tamaño máximo de 2MB.`);
                return;
            }
        }
        
        // Generar número de reclamo aleatorio (simulación)
        const claimNumber = 'REC-' + Math.floor(100000 + Math.random() * 900000);
        claimNumberSpan.textContent = claimNumber;
        
        // Mostrar modal
        modal.style.display = 'block';
        
        // Aquí normalmente enviarías los datos al servidor
        // const formData = new FormData(claimForm);
        // fetch('/api/claims', { method: 'POST', body: formData })
        //     .then(response => response.json())
        //     .then(data => {
        //         claimNumberSpan.textContent = data.claimNumber;
        //         modal.style.display = 'block';
        //     })
        //     .catch(error => console.error('Error:', error));
    });

    // Cerrar modal
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    modalButton.addEventListener('click', () => {
        modal.style.display = 'none';
        // Opcional: resetear el formulario
        claimForm.reset();
        fileNames.textContent = 'No se han seleccionado archivos';
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Validación en tiempo real del teléfono
    const phoneInput = document.getElementById('contactPhone');
    
    phoneInput.addEventListener('input', function() {
        this.value = this.value.replace(/[^0-9+]/g, '');
    });
});