// Array of offers: image URL and tracking link
const offers = [
    { img: "https://assets.efusercontent.com/2059/offers/81/c/2353/1200x300.png", link: "https://www.buffgames.net/cmp/2GJ51J1/21MJCN/" },
    { img: "https://example.com/offer2.jpg", link: "https://trackinglink2.com" },
    { img: "https://example.com/offer3.jpg", link: "https://trackinglink3.com" }
    // Add more offers here
];

const adContainer = document.getElementById("header-ads");
let currentOfferIndex = 0;

// Function to display the current offer
function displayAd(offer) {
    adContainer.innerHTML = `
        <div class="ad-container">
            <a href="${offer.link}" target="_blank">
                <img src="${offer.img}" />
            </a>
            <span class="ad-label">Ads</span>
        </div>
    `;
}

// Function to switch to the next ad
function switchAd() {
    currentOfferIndex = (currentOfferIndex + 1) % offers.length; // Move to the next offer
    displayAd(offers[currentOfferIndex]);
}

// Initialize the first ad
displayAd(offers[currentOfferIndex]);

// Set up interval to change ads every 10 seconds
setInterval(switchAd, 10000)
