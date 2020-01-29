$(document).ready(function(){

    var btnSubmit = $('#btnSubmit');

    btnSubmit.click(function(){
        var pass = document.getElementById("pass");
        var passR = document.getElementById("passR");
        if( pass.value != passR.value){
            passR.value = "";
            pass.value = "";
        }
    });
});



(function() {
    'use strict';
            window.addEventListener('load', function() {
            var forms = document.getElementsByClassName('formRegistre');
                var validation = Array.prototype.filter.call(forms, function(form) {
                    form.addEventListener('submit', function(event) {
                        if (form.checkValidity() === false) {
                            event.preventDefault();
                            event.stopPropagation();
                        }else{
                            $('#collapseOK').collapse();
                        }
                        form.classList.add('was-validated');
                    }, false);
                });
            }, false);
        })();
