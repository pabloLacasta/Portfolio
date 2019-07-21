document.querySelector('.dropdown').addEventListener('click', event => {
    event.target.style.visibility= 'hidden';
    document.querySelector('.dropdownMenu').style.visibility= 'visible';
    })
    document.querySelector('.dropdownMenu').addEventListener('click', event =>{
        document.querySelector('.dropdownMenu').style.visibility = 'hidden';
        document.querySelector('.dropdown').style.visibility ="visible";

    })
    
    document.querySelector('.enlaceContainer').addEventListener('click', event => {
        event.target.getElementById('.enlace').click();
    })

    $(window).scroll(function(){
        var bar = $("div.bar");
        
        var fixed_position = $("div.bar").offset().top;
        var fixed_height = $("div.bar").height();
        
        var checkpos = function(id){
          var toCross_position = $("#" + id + ".dropdownBlack").offset().top;
          var toCross_height = $("#" + id + ".dropdownBlack").height();
          
          var fixedtgt = $("div.bar[data-id='"+ id +"']");
          
          if (fixed_position + fixed_height  < toCross_position) {
            fixedtgt.css({'background-color':'#F2F1F0','z-index':'0' });
          } else if (fixed_position > toCross_position + toCross_height) {
            fixedtgt.css({'background-color':'#F2F1F0','z-index':'0' });
          } else {
            fixedtgt.css({'background-color':' #1C1B18','z-index':'1' });
          }
        }
        
        checkpos("divone");
        checkpos("divtwo");
        checkpos("divthree");
      });