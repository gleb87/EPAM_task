function ModalWindow (options) {
	var self = this;

	var template = _.template(options.template);
	var elem;

	self.getElement = function() {
		if (!elem) render("");

		return elem;
	}

	function render() {
		elem = $(template());
	}
}