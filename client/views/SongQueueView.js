// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('add remove', this.render, this);
  },

  render: function() {
    new SongQueueEntryView();
    return this.$el;
  }

});
