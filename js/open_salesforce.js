$(document).on('DOMNodeInserted', '.chat_panel', function(e) {
  var element = e.currentTarget
  var $chatPanel = $(e.currentTarget);
  if ($chatPanel.find('.salesforce-link').length > 0) {
    return;
  }

  var email = $chatPanel.find('.visitor_email').val()
  if (email == null || email.length == 0) {
    return;
  }

  var $salesforceLink = $('<a>')
  $salesforceLink.addClass('salesforce-link')

  var $visitorName = $chatPanel.find('.title_bar .visitor_name')
  $salesforceLink.text($visitorName.text())
  $salesforceLink.click(function(){
    window.open('https://ap.salesforce.com/_ui/search/ui/UnifiedSearchResults?str=' + encodeURI(email))
  })
  $visitorName.html($salesforceLink)
});
