(function() {
    'use strict';
            window.addEventListener('load', function() {
            var forms = document.getElementsByClassName('needs-validation');
                var validation = Array.prototype.filter.call(forms, function(form) {
                    form.addEventListener('submit', function(event) {
                        if (form.checkValidity() === false) {
                            event.preventDefault();
                            event.stopPropagation();
                    }
                    form.classList.add('was-validated');
                }, false);
            });
        }, false);
    })();

    (function() {
        'use strict';
                window.addEventListener('load', function() {
                var forms = document.getElementsByClassName('validarCerca');
                    var validation = Array.prototype.filter.call(forms, function(form) {
                        form.addEventListener('submit', function(event) {
                            if (form.checkValidity() === false) {
                                event.preventDefault();
                                event.stopPropagation();
                        }
                        form.classList.add('was-validated');
                    }, false);
                });
            }, false);
        })();

/*var botoCerca = document.getElementById("botoCerca");

function validarCerca(){
    var textCerca = document.getElementById("tbCerca").value;
    if(textCerca.length < 3){
    }
    console.log(tbCerca);
}

botoCerca.onclick = validarCerca;*/