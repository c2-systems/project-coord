let progressState;

function toggleLoader() {
	
	if (progressState) {
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




function addSelectItems() {

	for (let i = 0; i < 6; i++) {
		let selectHtml = getSelectItemHTML(i);
		$('.left-col').append(selectHtml);
	}
}

function addTopic() {

	let msgHtml = getTopicHTML();
	$('.right-col').append(msgHtml);
}

function addMessages() {

	let msg = '$Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

	for (let i = 0; i < 6; i++) {
		let msgHtml = getMessageHTML(msg);
		$('.right-col').append(msgHtml);
	}
}
