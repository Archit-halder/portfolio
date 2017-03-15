  $(document).ready(function(){

  $(".scroll").click(function(event){		
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000, 'easeOutBounce');
	});

  var animated_text = ["<h1>I am a Front End Developer</h1>" , "console.log('I am a Front End Developer')", "ReactDOM.render(<h1>I am a Front End Developer</h1>, document.getElementById('about-me'))","alert('I am a Front End Developer')", "printf('I am a Front End Developer')", ".about-me{content: 'I am a Front End Developer'}", "document.write('I am a Front End Developer')", "print('I am a Front End Developer')"];
$('.test').text(animated_text[0]);
var i=1;
var timeInterval = 1000;
setInterval(function() {
   $('.test').text(animated_text[i]);
	i = i+1;
if(i>=animated_text.length){i=0;}
}, timeInterval);


 });