(function($) {

	$(function() {

		hideLoader();
		$('select').formSelect();

		$(".dropdown-trigger").dropdown();

		addSelectItems();
		addTopic();
		addMessages();

	}); // end of document ready

})(jQuery);
