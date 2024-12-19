document.addEventListener("DOMContentLoaded", function () {
    // Function to insert ads dynamically
    function placeAds() {
      const postBody = document.getElementById("post-body");

      if (!postBody) {
        console.error("Post body not found.");
        return;
      }

      const words = postBody.innerHTML.split(" ");
      const adSpots = [
        { id: "ad-1", position: 140, adCode: "<p>Ad 1 Code</p>" },
        { id: "ad-2", position: 300, adCode: "<p>Ad 2 Code</p>" },
        { id: "ad-3", position: 500, adCode: "<p>Ad 3 Code</p>" },
        { id: "ad-4", position: 700, adCode: "<p>Ad 4 Code</p>" },
      ];

      adSpots.forEach((spot) => {
        if (words.length > spot.position) {
          const adDiv = document.createElement("div");
          adDiv.id = spot.id;
          adDiv.innerHTML = spot.adCode;

          const wordIndex = spot.position;
          const splitContent = [
            words.slice(0, wordIndex).join(" "),
            words.slice(wordIndex).join(" "),
          ];
          postBody.innerHTML = splitContent[0] + adDiv.outerHTML + splitContent[1];
        }
      });
    }

    placeAds();
  });
