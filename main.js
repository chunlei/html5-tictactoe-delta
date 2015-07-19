/**
 * SETUP
 **/
  var app = app || {};

/**
 * MODELS
 **/


/**
 * VIEWS
 **/
  app.MessageView = Backbone.View.extend({
  	el: '#main',
    events: {
    	'click .col': 'click' 
    },
    player: 0,
  	board: [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    click: function(e) {
    	var t = this.$el.find(e.target);

    	if (this.player === 0) {
    		t.html('<h2>O</h2>');
    	} else {	
    		t.html('<h2>X</h2>');
    	}

    	this.next(e);
    },
    next: function (e) {
    	var t = this.$el.find(e.target);
    	var no = t.data('grid-no');

    	if (this.player === 0) {
    		this.board[no] = 0;
    	} else if (this.player === 1) {
    		this.board[no] = 1;
    	}

    	this.player = (this.player + 1) % 2;

    	console.log(this.board);
    },
  });

/**
 * BOOTUP
 **/
  $(document).ready(function() {
    app.messageView = new app.MessageView();
  });