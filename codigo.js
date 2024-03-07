let parrafo =$('#miParrafo');
parrafo.css('font-size', '60px');

parrafo.click(function() {
    $(this).slideUp('slow').slideDown('slow');
})

let titulo =$('.titulo');

titulo.click(function() {
    $(this).fadeOut('slow'); //efecto desvanecido
}
)

titulo.css("color","red");

let contenido =$('.caja');
contenido.css(
    {
        'background-color':'yellow',
        'padding':'2rem',
        'text-transform':'uppercase'
    }
)
contenido.dblclick(function (){
    $(this).css('background-color','green')
    $(this).slideUp('slow').slideDown('slow');
}
    )
    contenido.click(function() {
        $(this).css('backgroud-color','green')
       $(this).animate({deg:360},{
            duration:3000,
            step:function(now){
                $(this).css({
                    transform: 'rotate(' +now +'deg)'
                })
            }

        })
        
    })

    