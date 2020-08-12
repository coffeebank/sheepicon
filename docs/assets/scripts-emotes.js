new ClipboardJS('.clipjs');

var clipboard = new ClipboardJS('.clipjs');
clipboard.on('success', function(e) {
  console.info('Action:', e.action);
  console.info('Text:', e.text);
  console.info('Trigger:', e.trigger);
  document.getElementById("clipjscontent").innerHTML = e.trigger.id;
  $( "div.clipjsalert" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
});

clipboard.on('error', function(e) {
  console.error('Action:', e.action);
  console.error('Trigger:', e.trigger);
});
