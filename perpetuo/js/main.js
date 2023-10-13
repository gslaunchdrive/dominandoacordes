$(document).ready(function () {


    $('#videoVendas').click(function() {
        $('#loadingOverlay').css('display', 'flex');
    
        $(this).replaceWith('<iframe width="560" height="600" src="https://www.youtube.com/embed/jfKfPfyJRdk" \
             title="Mestres da Harmonia" frameborder="0" \
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" \
             allowfullscreen></iframe>');
    
        $('iframe').on('load', function() {
          $('#loadingOverlay').hide();
        });
      });

      $('#videoReharmonizacao').click(function() {
        $('#loadingOverlay1').css('display', 'flex');
    
        $(this).replaceWith('<iframe width="450" height="300" src="https://www.youtube.com/embed/jfKfPfyJRdk" \
             title="Mestres da Harmonia" frameborder="0" \
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" \
             allowfullscreen></iframe>');
    
        $('iframe').on('load', function() {
          $('#loadingOverlay1').hide();
        });
      });

      $('#videoDepoimentoPedro').click(function() {
        $('#loadingOverlay2').css('display', 'flex');
    
        $(this).replaceWith('<iframe width="100%" height="350" src="https://www.youtube.com/embed/jfKfPfyJRdk" \
             title="Mestres da Harmonia" frameborder="0" \
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" \
             allowfullscreen></iframe>');
    
        $('iframe').on('load', function() {
          $('#loadingOverlay2').hide();
        });
      });

      $('#videoDepoimentoPaulo').click(function() {
        $('#loadingOverlay3').css('display', 'flex');
    
        $(this).replaceWith('<iframe width="100%" height="350" src="https://www.youtube.com/embed/jfKfPfyJRdk" \
             title="Mestres da Harmonia" frameborder="0" \
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" \
             allowfullscreen></iframe>');
    
        $('iframe').on('load', function() {
          $('#loadingOverlay3').hide();
        });
      });

      $('#videoDepoimentoJoao').click(function() {
        $('#loadingOverlay4').css('display', 'flex');
    
        $(this).replaceWith('<iframe width="100%" height="350" src="https://www.youtube.com/embed/jfKfPfyJRdk" \
             title="Mestres da Harmonia" frameborder="0" \
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" \
             allowfullscreen></iframe>');
    
        $('iframe').on('load', function() {
          $('#loadingOverlay4').hide();
        });
      });

      $('#videoDepoimentoLuan').click(function() {
        $('#loadingOverlay5').css('display', 'flex');
    
        $(this).replaceWith('<iframe width="100%" height="350" src="https://www.youtube.com/embed/jfKfPfyJRdk" \
             title="Mestres da Harmonia" frameborder="0" \
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" \
             allowfullscreen></iframe>');
    
        $('iframe').on('load', function() {
          $('#loadingOverlay5').hide();
        });
      });




        // $(window).on('scroll', function() {
        //   $('.lazy-section').each(function() {
        //     if (isElementInViewport(this)) {
        //       $(this).css('background-color', 'lightgray !important'); // Exemplo: muda a cor de fundo
        //       console.log(this);
        //     }
        //   });
        // });
      
        // function isElementInViewport(el) {
        //   var rect = el.getBoundingClientRect();
        //   return (
        //     rect.top >= 0 &&
        //     rect.left >= 0 &&
        //     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        //     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        //   );
        // }




    //   $('#depoimento1').click(function() {
    //     $('#loadingOverlay').css('display', 'flex');
    
    //     $(this).replaceWith('<iframe width="560" height="600" src="https://www.youtube.com/embed/jfKfPfyJRdk" \
    //          title="Mestres da Harmonia" frameborder="0" \
    //          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" \
    //          allowfullscreen></iframe>');
    
    //     $('iframe').on('load', function() {
    //       $('#loadingOverlay').hide();
    //     });
    //   });
});