// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.render();
    this.collection.on('add remove', this.render, this);
  },

  render: function() {
    this.$el.children().detach();

    this.$el.html('<div><div>Artist</div><div>Title</div></div>').append(this.collection.map(function(song) {
      return new SongQueueEntryView({model: song}).render();
    }));
  }

});
