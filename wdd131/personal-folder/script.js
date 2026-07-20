// The universal shark database
const sharkDatabase = [
// Apex Predators
  { name: "Bull Shark", type: "Apex Predator", fact: "They can thrive in both saltwater and freshwater, and have been spotted thousands of miles up the Mississippi River!" },
  { name: "Tiger Shark", type: "Apex Predator", fact: "Known as the 'garbage cans of the sea' because they will swallow almost anything, including license plates and old tires." },
  { name: "Great White Shark", type: "Apex Predator", fact: "They possess an incredible sense of smell and can detect a single drop of blood in 25 gallons of water." },
  { name: "Mako Shark", type: "Apex Predator", fact: "The fastest sharks in the ocean, capable of reaching burst swimming speeds of up to 46 MPH." },
  { name: "Hammerhead Shark", type: "Apex Predator", fact: "Their wide, T-shaped heads give them 360-degree vision and an enhanced electrical sensing radar." },
  { name: "Blue Shark", type: "Apex Predator", fact: "Famous for their sleek bodies and gorgeous indigo color, they are among the most heavily trabeled migratory sharks." },
  { name: "Oceanic Whitetip Shark", type: "Apex Predator", fact: "A bold open-ocean survivor known for slowly trailing ships and tracking prey across vast oceans." },
  { name: "Thresher Shark", type: "Apex Predator", fact: "They use their extraordinarily long, whip-like tails to slap and stun schools of fish before eating them." },

  // Gentle Giants
  { name: "Basking Shark", type: "Gentle Giant", fact: "The second-largest fish in the sea; they feed passively by swimming with their massive mouths wide open." },
  { name: "Whale Shark", type: "Gentle Giant", fact: "The largest fish on the planet, growing up to 40 feet long, with a pattern of spots as unique as a human fingerprint." },
  { name: "Megamouth Shark", type: "Gentle Giant", fact: "An extremely rare species with a glowing, bioluminescent mouth used to lure tiny plankton in the dark." },
  { name: "Manta Ray (Shark Cousin)", type: "Gentle Giant", fact: "Though not technically a shark, they share a cartilage skeleton and possess the largest brain-to-body ratio of any fish." },
  { name: "Nurse Shark", type: "Gentle Giant", fact: "Stationary bottom-dwellers that use powerful suction to vacuum up crabs and lobsters from the seafloor." },
  { name: "Leopard Shark", type: "Gentle Giant", fact: "Strikingly beautiful and harmless to humans, they prefer shallow mudflats and are heavily protected in marine sanctuaries." },
  { name: "Zebra Shark", type: "Gentle Giant", fact: "Born with dark stripes that fade into spots as adults, they can rest motionless on the sand by pumping water over their gills." },

  // Deep Sea
  { name: "Greenland Shark", type: "Deep Sea", fact: "The longest-living vertebrate on Earth, capable of reaching ages between 250 to over 400 years old." },
  { name: "Dwarf Lanternshark", type: "Deep Sea", fact: "The smallest shark in the world, growing no longer than 8 inches. It can fit neatly inside your hand." },
  { name: "Goblin Shark", type: "Deep Sea", fact: "Features a terrifying, slingshot-like jaw that completely shoots out of its face to catch passing prey." },
  { name: "Frilled Shark", type: "Deep Sea", fact: "Often called a 'living fossil' due to its primitive, eel-like body and rows of 300 needle-sharp, trident-shaped teeth." },
  { name: "Cookiecutter Shark", type: "Deep Sea", fact: "Glows bright green in the dark and uses suction jaws to scoop cookie-shaped plugs out of much larger animals." },
  { name: "Bluntnose Sixgill Shark", type: "Deep Sea", fact: "A heavy-bodied relic of the past that prefers intense depths up to 8,000 feet and keeps ancient gill counts." },
  { name: "Pocket Shark", type: "Deep Sea", fact: "A tiny 5-inch marvel that secretes a glowing, luminescent cloud from small pockets near its fins to blind predators." },
  { name: "Ghost Shark", type: "Deep Sea", fact: "An eerie, pale cousin of modern sharks that navigates the pitch-black abyss using electrical receptors on its snout." },

  // Prehistoric
  { name: "Megalodon", type: "Prehistoric", fact: "The absolute titan of prehistoric seas, growing over 50 feet long with teeth the size of a human hand." },
  { name: "Helicoprion", type: "Prehistoric", fact: "Possessed a highly unusual 'tooth-whorl' jaw that operated like a circular buzzsaw to slice up prey." },
  { name: "Stethacanthus", type: "Prehistoric", fact: "Nicknamed the 'anvil shark' because the males grew a flat, brush-like fin on their backs resembling an iron anvil." },
  { name: "Hybodus", type: "Prehistoric", fact: "A highly adaptable opportunist from the dinosaur era that wielded defensive spikes on the front of its dorsal fins." },
  { name: "Cretoxyrhina (Ginsu Shark)", type: "Prehistoric", fact: "An ancient powerhouse with razor-sharp teeth capable of hunting giant pregistoric sea turtles and mosasaurs." },
  { name: "Scapanorhynchus", type: "Prehistoric", fact: "An ancient relative of the goblin shark boasting a long flat snout and dagger-like hunting teeth." },
  { name: "Cladoselache", type: "Prehistoric", fact: "One of the earliest true sharks, it lacked scales, had no claspers, and swam the seas over 380 million years ago." }
];

let currentDepth = 0;
const maxDepth = 400;

// This function starts the moment the user clicks the button
function startInteractiveScan() {
  // Finds out what the user chose in the dropdown menu
  const chosenType = document.getElementById("shark-type-select").value;
  
  // Disables the button temporarily so they can't click it mid-scan
  document.getElementById("scan-btn").disabled = true;
  document.getElementById("scan-btn").innerText = "Scanning...";
  
  // Resets depth and starts the recursive scan, passing their choice along
  currentDepth = 0;
  runSonarScan(chosenType);
}

// Recursion
// Carries the 'chosenType' variable through the loop
function runSonarScan(chosenType) {
  const display = document.getElementById("sonar-display");
  
  if (currentDepth <= maxDepth) {
    // Updates the HTML text on screen to show active scanning
    display.innerHTML = `📡 <strong>SONAR ACTIVE</strong><br>Pinging frequencies for <em>${chosenType}s</em>...<br>Current Depth: <span style="color: var(--nav-hover-link-color); font-weight:bold;">${currentDepth}m</span>`;
    
    currentDepth += 50;
    
    // The function calls itself, remembering what type of shark we are looking for
    setTimeout(() => runSonarScan(chosenType), 350);
  } else {
    // Recursion is completed
    triggerSharkAlert(chosenType);
    resetSonarBox();
  }
}

// Native array ES6 functions & 3rd party library
function triggerSharkAlert(chosenType) {
  // ES6 filter, dynamically looks at the database and pulls only matching sharks
  const matchedSharks = sharkDatabase.filter(shark => shark.type === chosenType);

  // In case no sharks match, to keep the code from breaking
  if (matchedSharks.length === 0) {
    Swal.fire({
      title: 'ERROR',
      text: 'No species detected in this sector.',
      icon: 'error'
    });
    return;
  }

  // This will randomize the chosen shark
  const randomIndex = Math.floor(Math.random() * matchedSharks.length);
  const luckyShark = matchedSharks[randomIndex];

  // 'Swal' is the library popup
  Swal.fire({
    title: 'SONAR DETECTION LOG',
    html: `<p style="font-size: 1.1em;">Our sensors confirmed the following <strong>${chosenType}</strong> species nearby:</p>
           <hr style="background: var(--accent1-color); height: 2px; border: none; margin: 15px 0;">
           <h3 style="color: #fff; background: var(--primary-color); padding: 10px; border-radius: 4px;">
             ${luckyShark.name}
           </h3>
           <p style="font-size: 1.05em; line-height: 1.4; padding: 5px; text-align: background: rgba(0,0,0,0.2); border-left: 4px solid var(--accent1-color);">
             <strong>Sonar Data:</strong> ${luckyShark.fact}
           </p>`,
    icon: 'info',
    background: '#03045E', 
    color: '#00B4D8',      
    confirmButtonColor: '#0077B6', 
    confirmButtonText: 'Return to Surface'
  });
}

// Cleans up the sonar display box back to its original form for the next scan
function resetSonarBox() {
  document.getElementById("sonar-display").innerHTML = `
    <h2 style="color: #fff; margin-top: 0;">🌊 Deep-Sea Sonar Scanner</h2>
    <p style="color: #fff; padding: 5px;">Select a shark type to scan the surrounding waters:</p>
    
    <select id="shark-type-select" style="padding: 8px; font-size: 16px; border-radius: 4px; margin-bottom: 15px; font-family: sans-serif;">
        <option value="Apex Predator">Apex Predators</option>
        <option value="Deep Sea">Deep Sea Sharks</option>
        <option value="Gentle Giant">Gentle Giants</option>
        <option value="Prehistoric">Prehistoric Terrors</option>
    </select>
    <br>
    <button id="scan-btn" onclick="startInteractiveScan()" style="padding: 12px 24px; background-color: var(--nav-hover-link-color); border: none; color: var(--secondary-color); font-weight: bold; font-size: 16px; border-radius: 4px; cursor: pointer;">
        Begin Sonar Scan
    </button>
  `;
}