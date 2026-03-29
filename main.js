document.addEventListener('DOMContentLoaded', function() {
            const loader = document.getElementById('loader');
            
            window.addEventListener('load', function() {
                setTimeout(function() {
                    loader.classList.add('hidden');
                }, 2000);
            });
        }); 
