// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,
  
  initialize: function() {
    this.on('add', function(e) {
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);
    
    this.on('ended', function(e) {
      console.log('sup dude');
      this.shift();
      if (this.length > 0) {
        this.playFirst();
      }
    }, this);
  },
  
  // add: function(song) {
  //   this.get('queue').push(song);
  // },
  
  playFirst: function() {
    this.models[0].play();
  }

});