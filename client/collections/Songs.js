// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,
  
  initialize: function() {
    this.fetch();
  },
  
  fetch: function() {
    var addStuff = this;
    
    $.ajax({
    
      url: 'http://parse.la.hackreactor.com/mytunes/classes/songs',
      type: 'GET',
      success: function (data) {
        for (var i = 0; i < data.results.length; i++) {
          addStuff.add(data.results[i]);
        }
        
      },
      error: function (data) {
        console.log('shit son you bad');
      }
    });
    
  }
  
  

});
