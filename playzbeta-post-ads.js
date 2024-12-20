document.addEventListener("DOMContentLoaded", function () {
  function placeAds() {
    const postBody = document.querySelector("#post-body");
    if (!postBody) {
      console.error("Post body not found.");
      return;
    }
    const words = postBody.textContent.split(" ");
    console.log("Word count:", words.length);
    const adSpots = [
      { id: "ad-1", position: 140, adCode: "<script async="async" data-cfasync="false" src="//housecarefullyidiotic.com/90716a1bf53153829430440a519b0c90/invoke.js"></script>
<div id="container-90716a1bf53153829430440a519b0c90"></div>" },
      { id: "ad-2", position: 300, adCode: "<p>Ad 2 Code</p>" },
      { id: "ad-3", position: 500, adCode: "<p>Ad 3 Code</p>" },
      { id: "ad-4", position: 700, adCode: "<p>Ad 4 Code</p>" },
    ];
    adSpots.forEach((spot) => {
      if (words.length > spot.position) {
        const adDiv = document.createElement("div");
        (link unavailable) = (link unavailable);
        adDiv.innerHTML = spot.adCode;
        const wordIndex = spot.position;
        const splitContent = [
          words.slice(0, wordIndex).join(" "),
          words.slice(wordIndex).join(" "),
        ];
        postBody.innerHTML = splitContent[0] + adDiv.outerHTML + splitContent[1];
        console.log("Ad placed:", (link unavailable));
      } else {
        console.log("Ad not placed:", (link unavailable), "Word count too low.");
      }
    });
  }
  placeAds();
});
