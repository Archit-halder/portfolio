  $(document).ready(function(){

  $(".scroll").click(function(event){		
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000, 'easeOutBounce');
	});

  var animated_text = ['hello' , 'hi', 'how are you'];
$('.test').text(animated_text[0]);
var i=1;
var timeInterval = 1000;
setInterval(function() {
   $('.test').text(animated_text[i]);
	i = i+1;
if(i>animated_text.length){i=0;}
}, timeInterval);


 });