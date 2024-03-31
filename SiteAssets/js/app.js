let currentPath;
let progressState;

let paths = new Map();

let documents = {layout:[{class: 'main-col', w: 12}]};
paths.set('documents', documents);

let topics = {layout:[{class: 'left-col', w: 4}, {class: 'right-col', w: 8}], data: [addSelectItems, addTopic, addMessages]};
paths.set('topics', topics);

function route(pathName) {
	currentPath = paths.get(pathName);
	setLayout(currentPath.layout);
	dataLoad(currentPath.data);
}

function setLayout(layout) {
	$('div.main').html('');

	for(let i=0; i<layout.length; i++) {
		let div = objDiv = $('<div></div>');
		div.addClass(layout[i]['class']);
		div.addClass('col');
		div.addClass('s' + layout[i]['w']);
		$('div.main').append(div);
	}
}

function dataLoad(data) {
	for(let i=0; i<data.length; i++) {
		data[i]();
	}
}

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
