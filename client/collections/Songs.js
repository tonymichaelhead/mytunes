// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,
  
  initialize: function() {
    //this.fetch();
  },
  
  // fetch: function() {
  //   $.ajax({
    
  //     url: 'http://parse.la.hackreactor.com/mytunes/classes/songs',
  //     type: 'GET',
  //     //data: { order: '-createdAt' },
  //     success: function (data) {
  //       console.log(JSON.stringify(data.results));
  //       for (var i = 0; i < data.results.length; i++) {
  //         this.add(data.results[i]);
  //       }
  //     },
  //     error: function (data) {
  //       console.log('shit son you bad');
  //     }
  //   });
  // }
  
  

});
