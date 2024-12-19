function placeAds() {
  var wordCount = document.getElementById('post-body').innerText.split(' ').length;

  if (wordCount >= 140 && wordCount <= 160) {
    document.getElementById('ad-1').innerHTML = '<p><script async="async" data-cfasync="false" src="//housecarefullyidiotic.com/90716a1bf53153829430440a519b0c90/invoke.js"></script>
<div id="container-90716a1bf53153829430440a519b0c90"></div></p>';
  }
  if (wordCount >= 300 && wordCount <= 350) {
    document.getElementById('ad-2').innerHTML = '<p>Ad 2 Placeholder</p>';
  }
  if (wordCount >= 500 && wordCount <= 600) {
    document.getElementById('ad-3').innerHTML = '<p>Ad 3 Placeholder</p>';
  }
  if (wordCount >= 700 && wordCount <= 900) {
    document.getElementById('ad-4').innerHTML = '<p>Ad 4 Placeholder</p>';
  }
}

window.onload = function() {
  placeAds();
}
