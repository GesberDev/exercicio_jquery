$(document).ready(function(){
    $("form").on('submit', function(e){
        e.preventDefault();
        const nomeNovaTarefa = $("#nome-nova-tarefa").val();
        const novaTarefa = $(`<li style="display:none">${nomeNovaTarefa}</li>`);

        $(novaTarefa).appendTo('ol');
        $(novaTarefa).fadeIn(500);
        $('#nome-nova-tarefa').val('');
    });

    $('ol').on('click', 'li', function(){
        $(this).addClass('concluido');
    });
});