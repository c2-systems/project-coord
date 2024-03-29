(function($){
  
  $(function(){

	hideLoader();
	$('select').formSelect();
	
	$(".dropdown-trigger").dropdown();
	
	$('.select-item').click((event)=>{
		$('.selected-item').removeClass('selected-item');
		$(event.target).addClass('selected-item');
		console.log(event);
	});
	

  }); // end of document ready
  
})(jQuery);

let progressState;

  function toggleLoader() {
	  if(progressState) {
		  hideLoader();
	  } else {
		  showLoader();
	  }
  }

  function showLoader() {
	progressState = true;
	$('.progress').show();  
	$('.progress-spacer').hide();  
	
  }
  
  function hideLoader() {
	progressState = false;
	$('.progress').hide();  
	$('.progress-spacer').show();  
  }
