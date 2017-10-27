$(window).scroll(function() {
   var hT = $('#project_title').offset().top,
       hH = $('#project_title').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
    console.log((hT-wH) , wS);
   if (wS > hH){
   	$('#project_title').addClass('fixed');
   }
   else {
   	$('#project_title').removeClass('fixed');
   }
});