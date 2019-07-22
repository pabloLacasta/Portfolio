// let showDropMenu = () => {

//   document.querySelector('.dropdown').visibility = 'hidden';
//   let array = document.getElementsByTagName('a');
//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     setTimeout(() => {
//       element.style.visibility = 'visible';
//     }, 50 * i);
//   }
// }

// let hiddeDropMenu = () => {

//   document.querySelector('.dropdown').visibility = 'hidden';
//   console.log('ei');
//   let array = document.querySelectorAll('.dropdownMenu a');
//   console.log(array)
//   for (let i = array.length - 1; i >= 0; i--) {
//     const element = array[i];
//     setTimeout(() => {
//       element.style.visibility = 'hidden';
//     }, 50 * (array.length - i - 1));
//   }
// }

// document.querySelector('.dropdown').addEventListener('click', event =>{
//   document.querySelector('.dropdown').style.
// });
// document.querySelector('#dropMenuComponentClose').addEventListener('click', hiddeDropMenu);
// document.querySelector('.dropdown').addEventListener('click', event => {
  //   if (document.querySelector('#dropMenuComponent').style.visibility === 'visible') {
    //     console.log('ei')
    //     hiddeDropMenu();
    //   }
    // });
    
    
  // document.querySelector('#dropMenuComponent').addEventListener('click', event =>{
  //   document.querySelector('.').
  // });

$(".dropdown").click(function(){
  $(".dropdown").fadeOut();
  $(".dropMenuComponent1").fadeIn(100);
  $(".dropMenuComponent2").fadeIn(200);
  $(".dropMenuComponent3").fadeIn(300);
  $(".dropMenuComponent4").fadeIn(400);
  $(".dropMenuComponent5").fadeIn(500);
  $(".dropMenuComponent6").fadeIn(600);
  $(".dropMenuComponent7").fadeIn(700);
});

$("a").click(function(){
  $(".dropMenuComponent7").fadeOut(100);
  $(".dropMenuComponent6").fadeOut(200);
  $(".dropMenuComponent5").fadeOut(300);
  $(".dropMenuComponent4").fadeOut(400);
  $(".dropMenuComponent3").fadeOut(500);
  $(".dropMenuComponent2").fadeOut(600);
  $(".dropMenuComponent1").fadeOut(700);
  $(".dropdown").fadeIn(800);
});



$(window).scroll(function () {
  var bar = $("div.bar");

  var fixed_position = $("div.bar").offset().top;
  var fixed_height = $("div.bar").height();

  var toCross_position = $(".dropdownBlack").offset().top;
  var toCross_height = $(".dropdownBlack").height();

  if (fixed_position + fixed_height < toCross_position) {
    bar.removeClass('black');
  } else if (fixed_position > toCross_position + toCross_height) {
    bar.removeClass('black');
  } else {
    bar.addClass('black');
  }

});