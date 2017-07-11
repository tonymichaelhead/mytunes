// Put your parse application keys here!
$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('X-Parse-Application-Id', 'APP_ID');
  jqXHR.setRequestHeader('X-Parse-REST-API-Key', 'REST_API_KEY');
});
