// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,
  url: 'http://parse.la.hackreactor.com/mytunes/classes/songs',
  
  initialize: function() {
    this.fetch();
    
    this.on('sync', function(e) {
      console.log('yo brah');
    });
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
        addStuff.trigger('sync');
        
      },
      error: function (data) {
        console.log('shit son you bad');
      }
    });
    
  }
  
  

});
