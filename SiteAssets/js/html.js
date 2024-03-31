
function getSelectItemHTML(id) {

	let text = '$Allan';
	
	objDiv = $('<div></div>', {
		'class': 'select-item'
	});
	
	objDiv.attr('id', 'xyz_' + id);
	objSpan = $('<span></span>');
	objSpan.text(text);
	objBadge = $('<span>4 asd</span>');
	objBadge.addClass('new');
	objBadge.addClass('badge');

	objDiv.append(objSpan);
	objDiv.append(objBadge);

	objDiv.click((event) => {
		
		$('.selected-item').removeClass('selected-item');
		let hasId = $(event.target).attr('id');
		
		let derivedId;
		
		if(hasId) {
			derivedId = event.target.id;
		} else {
			let parent = $(event.target).parent();
			derivedId = parent.attr('id');
		}
		
		$('#' + derivedId).addClass('selected-item');
		
		M.toast({
			html: 'Toast: ' + derivedId,
			classes: 'toast'
		});
	});

	return objDiv;
}

function getSnippetHTML() {

	let msg = '$Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
	objDiv = $('<div></div>', {
		'class': 'document-snippet'
	});
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
	let objDiv = $('<div></div>', {
		'class': 'topic-item'
	});

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

	objDiv = $('<div></div>', {
		'class': 'message-item'
	});
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
