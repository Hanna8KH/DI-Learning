// const solarSystem = ['sun', 'mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uran', 'neptun']

// const listPlanets = document.querySelector('section.listPlanets')

// for (let planetName of solarSystem) {
// let planet = document.createElement('div');
// planet.classList.add('planet')
// // planet.classList.add(planetName)
// planet.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
// listPlanets.appendChild(planet)
// }

const solarSystem = [
  { name: "mercury", moon: 0 },
  { name: "venus", moon: 0 },
  { name: "earth", moon: 1 },
  { name: "mars", moon: 0 },
  { name: "jupiter", moon: 2 },
  { name: "saturn", moon: 3 },
  { name: "uran", moon: 4 },
  { name: "neptun", moon: 0 },
];

const listPlanets = document.querySelector("section.listPlanets");

for (const planetName of solarSystem) {
  const planet = document.createElement("div");
  planet.classList.add("planet");
  // planet.classList.add(planetName)
  planet.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);

  for (let i = 0; i < planetName.moon; i++) {
    const moon = document.createElement("div");
    moon.style.left = 10*i+'px'
    moon.classList.add("moon");
    planet.appendChild(moon)
  }

  listPlanets.appendChild(planet);
}
