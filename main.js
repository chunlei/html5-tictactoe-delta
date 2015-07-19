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
    click: function(e) {
    	var t = this.$el.find(e.target);
    	t.html('Yes');
    }
  });

/**
 * BOOTUP
 **/
  $(document).ready(function() {
    app.messageView = new app.MessageView();
  });