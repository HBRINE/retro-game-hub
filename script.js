function showFacts() {
  const facts = [
    "Coolmath Games once had a non-educational section called 'Coolified Games' that featured more traditional arcade-style titles before being retired.",
    "Minecraft Pocket Edition Lite was released for iOS as a demo version, allowing players to try the game with limited features before purchasing the full edition.",
    "The iconic 'Oof!' death sound in Roblox originated from the 2000 PC game Messiah, developed by Shiny Entertainment, and was later adopted into Roblox.",
    "Terraria’s developers collaborated with modder Blushiemagic to support tModLoader, making it an official modding platform integrated into the game on Steam.",
    "DOOM (1993) soundtrack was inspired by heavy metal bands like Metallica and Slayer, and the game was added to the Library of Congress National Recording Registry in 2026."
  ];

  const factList = document.getElementById("factList");
  factList.innerHTML = "";
  facts.forEach(fact => {
    const li = document.createElement("li");
    li.textContent = fact;
    factList.appendChild(li);
  });

  document.getElementById("facts").style.display = "block";
  document.getElementById("factButton").style.display = "none";
}

function createStarRating(score) {
  const fullStars = Math.floor(score);
  const halfStar = score % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  let starsHTML = "";

  for (let i = 0; i < fullStars; i++) {
    starsHTML += `<svg class="star full" viewBox="0 0 24 24">
      <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9"/>
    </svg>`;
  }

  if (halfStar) {
    starsHTML += `<svg class="star half" viewBox="0 0 24 24">
      <defs>
        <linearGradient id="halfGrad">
          <stop offset="50%" stop-color="gold"/>
          <stop offset="50%" stop-color="#444"/>
        </linearGradient>
      </defs>
      <polygon fill="url(#halfGrad)" points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9"/>
    </svg>`;
  }

  for (let i = 0; i < emptyStars; i++) {
    starsHTML += `<svg class="star empty" viewBox="0 0 24 24">
      <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9"/>
    </svg>`;
  }

  const div = document.createElement("div");
  div.className = "star-rating";
  div.innerHTML = starsHTML;
  return div;
}

function showRatings() {
  const ratingsData = {
    "Duck Life 2": [
      { text: "Coolmath Games 4.8/5", score: 4.8 },
      { text: "Kongregate Archive 4.2/5", score: 4.2 }
    ],
    "Run 3": [
      { text: "Coolmath Games 4.7/5", score: 4.7 },
      { text: "Kongregate Archive 4.5/5", score: 4.5 }
    ],
    "Minecraft PE Lite/Demo": [
      { text: "iOS Metacritic 53/100", score: 2.6 },
      { text: "Google Play Demo 4.24/5", score: 4.2 }
    ],
    "Roblox": [
      { text: "Common Sense Media 4/5", score: 4.0 },
      { text: "Google Play 4.4/5", score: 4.4 },
      { text: "Apple App Store 4.6/5", score: 4.6 }
    ],
    "Terraria & tModLoader": [
      { text: "Terraria PC Metacritic 83/100", score: 4.1 },
      { text: "Terraria Xbox 360 81/100", score: 4.0 },
      { text: "Terraria PS3 80/100", score: 4.0 },
      { text: "Terraria Switch 81/100", score: 4.0 },
      { text: "tModLoader Steam Reviews 'Very Positive' ~4.8/5", score: 4.8 }
    ],
    "DOOM (1993)": [
      { text: "Metacritic 83/100", score: 4.1 },
      { text: "IGN 9/10", score: 4.5 }
    ]
  };

  const ratingsList = document.getElementById("ratingsList");
  ratingsList.innerHTML = "";

  Object.keys(ratingsData).forEach(game => {
    const block = document.createElement("div");
    block.className = "game-block";

    const nameDiv = document.createElement("div");
    nameDiv.className = "game-name";
    nameDiv.textContent = game + ":";

    const ratingsDiv = document.createElement("ul");
    ratingsDiv.className = "game-ratings";

    ratingsData[game].forEach(rating => {
      const li = document.createElement("li");
      const textSpan = document.createElement("span");
      textSpan.textContent = rating.text;
      li.appendChild(textSpan);
      li.appendChild(createStarRating(rating.score));
      ratingsDiv.appendChild(li);
    });

    block.appendChild(nameDiv);
    block.appendChild(ratingsDiv);
    ratingsList.appendChild(block);
  });

  document.getElementById("ratings").style.display = "block";
  document.getElementById("ratingsButton").style.display = "none";
}
