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
	
	addSelectItems();
	addTopic();
	addMessages();

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
  
	function getSelectItemHTML() {

		let text = '$Allan';
		objDiv = $('<div></div>', {'class': 'select-item'});
		objDiv.attr('id', 'xyz_123');
		objSpan = $('<span></span>');
		objSpan.text(text);
		objBadge = $('<span>4 asd</span>');
		objBadge.addClass('new');
		objBadge.addClass('badge');
		
		objDiv.append(objSpan);
		objDiv.append(objBadge);

		objDiv.click((event)=>{
			$('.selected-item').removeClass('selected-item');
			$(event.target).addClass('selected-item');
			M.toast({html: 'Toast: ' + event.target.id, classes: 'toast'});
		});

		return objDiv;
	}  

	function getSnippetHTML() {

		let msg = '$Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
		objDiv = $('<div></div>', {'class': 'document-snippet'});
		objSpanText = $('<span></span>');
		objPara = $('<p></p>');
		objPara.text(msg);
		objBadge = $('<span>erwtertertertert sdf</span>');
		objBadge.addClass('badge');
		objBadge.addClass('black-text');
		
		objSpanText.append(objPara);
		objDiv.append(objSpanText);
		objDiv.append(objBadge);

		return objDiv;
	}
	
	function getTopicHTML() {

		let msg = 'Topic Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
		let objDiv = $('<div></div>', {'class': 'topic-item'});
		
		let objSpanText = $('<span></span>');
		let objPara = $('<p></p>');
		objPara.text(msg);
		let objBadge = $('<span>erwtertertertert sdf</span>');
		objBadge.addClass('badge');
		objBadge.addClass('grey-text');
		
		let snippet = getSnippetHTML();
		objDiv.append(snippet);
		
		objSpanText.append(objPara);
		objDiv.append(objSpanText);
		objDiv.append(objBadge);

		return objDiv;
	}
	
	function getMessageHTML(message) {

		objDiv = $('<div></div>', {'class': 'message-item'});
		objSpanText = $('<span></span>');
		objPara = $('<p></p>');
		objPara.text(message);
		
		objBadge1 = $('<span>23</span>');
		objBadge1.addClass('new');
		objBadge1.addClass('badge');
		objBadge1.addClass('deep-orange');
		objBadge1.addClass('lighten-1');
		
		objBadge2 = $('<span>67</span>');
		objBadge2.addClass('new');
		objBadge2.addClass('badge');
		
		objSpanText.append(objPara);
		objDiv.append(objSpanText);
		objDiv.append(objBadge1);
		objDiv.append(objBadge2);

		return objDiv;
	}	

function addSelectItems() {

	for(let i=0; i<6; i++) {
		let selectHtml = getSelectItemHTML();
		$('.left-col').append(selectHtml);
	}
}

function addTopic() {
	
	let msgHtml = getTopicHTML();
	$('.right-col').append(msgHtml);
}

function addMessages() {
	
	let msg = '$Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

	for(let i=0; i<6; i++) {
		let msgHtml = getMessageHTML(msg);
		$('.right-col').append(msgHtml);
	}
}