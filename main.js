$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    });

    $('#botao-finalizar').click(function() {
        $('form').slideUp();
    });

    $('form').on('submit', function(e) {
        e.preventDefault();
        const tarefa = $('#tarefa').val();
        /*console.log(tarefa);*/

        
        const novaTarefa = $(`<li class="ticar">${tarefa}</li>`);
        $(`${tarefa}`).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ul');
        $('#tarefa').val('');

        $('ul').on('click','li',function(){
            /*alert($(this).text());*/
            //$(this).css('text-decoration', 'line-through');

            if ($(this).css('text-decoration-line') == "none")
                $(this).css('text-decoration-line', 'line-through');
            else
                $(this).css('text-decoration-line', 'none');
        });
    });

    
});
