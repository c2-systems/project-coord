(function($){
  
  $(function(){

	//$('.progress').hide(); 
	hideLoader();
	$('select').formSelect();
	

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
