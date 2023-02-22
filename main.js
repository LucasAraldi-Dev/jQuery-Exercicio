$(function() {
    
    $('#formulario-tarefa').submit(function(e) {
        e.preventDefault()
        let nomeTarefa = $('#nome-tarefa').val()
        let listaTarefa = $('<li>').text(nomeTarefa)
            $('#lista-tarefas').append(listaTarefa)
            $('#nome-tarefa').val('')
    });

    $(document).on('click', '#lista-tarefas li', function() {
        $(this).toggleClass('completed')
    });
});


