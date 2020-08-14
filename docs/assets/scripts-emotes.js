window.onload = function() {
  Gifffer();
}

new ClipboardJS('.clipjs');

var clipboard = new ClipboardJS('.clipjs');
clipboard.on('success', function(e) {
  console.info('Action:', e.action);
  console.info('Text:', e.text);
  console.info('Trigger:', e.trigger);
  document.getElementById("clipjscontent").innerHTML = e.trigger.id;
  var clipjsalert = document.querySelector("div.clipjsalert");
  clipjsalert.classList.add("clipjsalertshow");
  setTimeout(function() {
    clipjsalert.classList.remove("clipjsalertshow");
  }, 1500);
});

clipboard.on('error', function(e) {
  console.error('Action:', e.action);
  console.error('Trigger:', e.trigger);
});
