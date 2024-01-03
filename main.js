$('document').ready(function(){
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    })

    $('.form').on('submit', function(e){
        e.preventDefault();
        let cliente = $('#nome').val();
        let email = $('#email').val();
        let telefone = $('#telefone').val();
        alert(`Cadastro do cliente: ${cliente} - e-mail: ${email} - telefone: ${telefone}, foi realizado com sucesso`);

        $('#nome').val('');
        $('#email').val('');
        $('#telefone').val('');
        $('#check').prop('checked', false);
    });
});