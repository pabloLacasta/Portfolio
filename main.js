document.querySelector('.dropdown').addEventListener('click', event => {
    event.target.style.visibility= 'hidden';
    document.querySelector('.dropdownMenu').style.visibility= 'visible';
    })
    document.querySelector('.dropdownMenu').addEventListener('click', event =>{
        document.querySelector('.dropdownMenu').style.visibility = 'hidden';
        document.querySelector('.dropdown').style.visibility ="visible";

    })
    
   

    $(window).scroll(function(){
      var bar = $("div.bar");
      
      var fixed_position = $("div.bar").offset().top;
      var fixed_height = $("div.bar").height();
    
      var toCross_position = $(".dropdownBlack").offset().top;
      var toCross_height = $(".dropdownBlack").height();
    
      if (fixed_position + fixed_height  < toCross_position) {
        bar.removeClass('black');
      } else if (fixed_position > toCross_position + toCross_height) {
        bar.removeClass('black');
      } else {
        bar.addClass('black');
      }
    
    });