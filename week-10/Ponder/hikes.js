const hikes = [
  {
    name: "Bechler Falls",
    imgSrc: "https://i0.wp.com/thebigoutside.com/wp-content/uploads/2020/08/Iris-Falls-on-the-Bechler-River-Yellowstone-National-Park.jpg",
    imgAlt: "Image of Bechler Falls",
    distance: "3 miles",
    tags: ["Caves", "Yellowstone", "Waterfall"],
    difficulty: 1,
    description: "Beautiful short hike in Yellowstone along the Bechler river to Bechler Falls",
  },
  {
    name: "Teton Canyon",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/teton-canyon.jpg",
    imgAlt: "Image of Teton Canyon",
    distance: "3 miles",
    tags: ["Canyon", "Tetons"],
    difficulty: 1,
    description: "Beautiful short (or long) hike through Teton Canyon.",
  },
  {
    name: "Denanda Falls",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/denanda-falls.jpg",
    imgAlt: "Image of Denanda Falls",
    distance: "7 miles",
    tags: ["Caves", "Yellowstone", "Waterfall"],
    difficulty: 3,
    description: "Beautiful hike through Bechler meadows to Denanda Falls",
  },
  {
    name: "Coffee Pot Rapids",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/coffee-pot.jpg",
    imgAlt: "Image of Bechler Falls",
    distance: "2.2 miles",
    tags: ["Rafting"],
    difficulty: 1,
    description: "Beautiful hike along the Henry's Fork of the Snake River to a set of rapids.",
  },
  {
    name: "Menan Butte",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/menan-butte.jpg",
    imgAlt: "Image of Menan Butte",
    distance: "3.4 miles",
    tags: ["Volcanic", "View"],
    difficulty: 2,
    description: "A steep climb to one of the largest volcanic tuff cones in the world.",
  }
];


function hikeTemplate(hike) {
  return `
    <div class="hike-card">
      <div class="hike-content">
        <h2>${hike.name}</h2>
        <div class="hike-tags">
          ${hike.tags.map(tag => `<button>${tag}</button>`).join("")}
        </div>
        <p>${hike.description}</p>
        <p><strong>Distance:</strong> ${hike.distance}</p>
        <p><span class="rating" role="img" aria-label="${hike.difficulty} out of 5">
          ${"🥾".repeat(hike.difficulty)}
        </span></p>
        <img src="${hike.imgSrc}" alt="${hike.imgAlt}" style="max-width:200px;">
      </div>
    </div>`;
}


function renderHikes(hikeList) {
  const container = document.querySelector("#hike-container");
  container.innerHTML = hikeList.map(hikeTemplate).join("");
}

function searchHandler() {
  const query = document.querySelector("#search").value.toLowerCase();

  const filtered = hikes.filter((hike) => {
    return (
      hike.name.toLowerCase().includes(query) ||
      hike.description.toLowerCase().includes(query) ||
      hike.tags.some((tag) => tag.toLowerCase().includes(query))
    );
  });

  renderHikes(filtered);
}

document.querySelector("button").addEventListener("click", searchHandler);


document.querySelector("#search").addEventListener("keypress", (e) => {
  if (e.key === "Enter") searchHandler();
});


renderHikes(hikes);