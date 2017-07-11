// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('add remove dequeue', this.render, this);
  },

  render: function() {
    this.$el.children().detach();

    this.$el.html('<th>Song Queue</th>').append(this.collection.map(function(song) {
      return new SongQueueEntryView({model: song}).render();
    }));
  }

});
