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
    
        $(this).replaceWith('<iframe width="450" height="300" src="https://www.youtube.com/embed/BTbwJqTBSeA" \
             title="Rearmonizacao - Gilvanio" frameborder="0" \
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" \
             allowfullscreen></iframe>');
    
        $('iframe').on('load', function() {
          $('#loadingOverlay1').hide();
        });
      });

      $('#videoDepoimentoPedro').click(function() {
        $('#loadingOverlay2').css('display', 'flex');
    
        $(this).replaceWith('<iframe width="100%" height="350" src="https://www.youtube.com/embed/7KEU8kJpsao" \
             title="Depoimento - Pedro" frameborder="0" \
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" \
             allowfullscreen></iframe>');
    
        $('iframe').on('load', function() {
          $('#loadingOverlay2').hide();
        });
      });

      $('#videoDepoimentoPaulo').click(function() {
        $('#loadingOverlay3').css('display', 'flex');
    
        $(this).replaceWith('<iframe width="100%" height="350" src="https://www.youtube.com/embed/pqc-BX2wl4M" \
             title="Depoimento - Paulo" frameborder="0" \
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" \
             allowfullscreen></iframe>');
    
        $('iframe').on('load', function() {
          $('#loadingOverlay3').hide();
        });
      });

      $('#videoDepoimentoJoao').click(function() {
        $('#loadingOverlay4').css('display', 'flex');
    
        $(this).replaceWith('<iframe width="100%" height="350" src="https://www.youtube.com/embed/Ych8kIbCuaE" \
             title="Mestres da Harmonia" frameborder="0" \
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" \
             allowfullscreen></iframe>');
    
        $('iframe').on('load', function() {
          $('#loadingOverlay4').hide();
        });
      });

      $('#videoDepoimentoLuan').click(function() {
        $('#loadingOverlay5').css('display', 'flex');
    
        $(this).replaceWith('<iframe width="100%" height="350" src="https://www.youtube.com/embed/LIoN2WLpl7Q" \
             title="Mestres da Harmonia" frameborder="0" \
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" \
             allowfullscreen></iframe>');
    
        $('iframe').on('load', function() {
          $('#loadingOverlay5').hide();
        });
      });
});