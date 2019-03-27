var btnModal;
var btnCerrar;
var modal;

window.addEventListener('load',()=>
{
    btnModal = document.getElementById('btnModal');
    btnCerrar = document.getElementById('btnCerrar');
    modal = document.getElementById('modal');

    btnModal.addEventListener('click', () => {
        var modal = document.getElementById('modal');
    
        modal.setAttribute('open', true);
    
    });
    
    btnCerrar.addEventListener('click', () => {
        modal.removeAttribute('open');
    });
});

