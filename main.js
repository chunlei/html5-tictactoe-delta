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
  	m: [-1, -1, -1, -1, -1, -1, -1, -1],
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

    	// any winner ?
		this.m[0] = this.board[0] + this.board[3] + this.board[6];
		this.m[1] = this.board[1] + this.board[4] + this.board[7];
		this.m[2] = this.board[2] + this.board[5] + this.board[8];
		this.m[3] = this.board[4] + this.board[6] + this.board[8];
		this.m[4] = this.board[3] + this.board[4] + this.board[5];
		this.m[5] = this.board[0] + this.board[1] + this.board[2];
		this.m[6] = this.board[0] + this.board[4] + this.board[8];
		this.m[7] = this.board[2] + this.board[4] + this.board[6];
		
		for (var i = 0; i < this.m.length; i++) {
		  if (this.m[i] === 0 || this.m[i] === 3) {
		  	alert('Winner: ' + this.player);
		  }
		}

		// next player
    	this.player = (this.player + 1) % 2;
    },
  });

/**
 * BOOTUP
 **/
  $(document).ready(function() {
    app.messageView = new app.MessageView();
  });