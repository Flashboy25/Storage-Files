window.onload = function () {
  var postContent = document.querySelector('.post-body'); // Selector for post content
  var postText = postContent.innerText || postContent.textContent;
  
  // Split the post text into words
  var words = postText.split(/\s+/);
  var totalWords = words.length;

  // Function to insert an ad after a certain number of words
  function insertAd(adId, position) {
    var adContainer = document.getElementById(adId);
    var newAd = document.createElement('div');
    newAd.innerHTML = '<!-- Insert your ad code here -->';
    adContainer.appendChild(newAd);

    // Insert the ad into the post body after the position
    var paragraphs = postContent.getElementsByTagName('p');
    var wordCount = 0;
    
    // Loop through paragraphs and place ads based on the word count
    for (var i = 0; i < paragraphs.length; i++) {
      var paraText = paragraphs[i].innerText || paragraphs[i].textContent;
      var paraWords = paraText.split(/\s+/);
      wordCount += paraWords.length;
      
      if (wordCount >= position) {
        paragraphs[i].parentNode.insertBefore(adContainer, paragraphs[i].nextSibling);
        break;
      }
    }
  }

  // Conditions for inserting ads
  if (totalWords > 200 && totalWords < 300) {
    insertAd('ad1', 150); // One ad at 150 words
  } else if (totalWords > 400 && totalWords < 600) {
    insertAd('ad1', 150); // First ad at 150 words
    insertAd('ad2', 350); // Second ad at 350 words
  } else if (totalWords > 600 && totalWords < 1000) {
    insertAd('ad1', 150); // First ad at 150 words
    insertAd('ad2', 350); // Second ad at 350 words
    insertAd('ad3', 700); // Third ad at 700 words
  } else if (totalWords > 1000 && totalWords < 1300) {
    insertAd('ad1', 150); // First ad at 150 words
    insertAd('ad2', 350); // Second ad at 350 words
    insertAd('ad3', 700); // Third ad at 700 words
    insertAd('ad4', 1000); // Fourth ad at 1000 words
  }
};