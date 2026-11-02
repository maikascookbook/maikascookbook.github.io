/* Maika's Cookbook: targeted two-recipe update.
   Load after recipes.js and before app.js. */
(() => {
  'use strict';
  const updates = [
  {
    "id": "seed-21",
    "image": "chicken-alfredo.jpg",
"title": "Creamy Garlic Chicken Alfredo",
    "category": "Pasta & Rice",
    "time": "35 min",
    "servings": "4",
    "description": "Golden pan-seared chicken over fettuccine coated in a silky garlic, butter, cream and Parmesan sauce.",
    "ingredients": [
      "450 g fettuccine",
      "2 chicken breasts, sliced horizontally into even cutlets",
      "Salt, freshly ground black pepper and Italian seasoning, to taste",
      "2 tbsp olive oil",
      "4 tbsp (57 g) butter",
      "1–2 garlic cloves, finely minced",
      "1½ cups (355 ml) heavy cream",
      "1 cup (approximately 90–100 g) freshly grated Parmesan",
      "At least ½ cup reserved starchy pasta water, added only as needed",
      "Fresh parsley and extra Parmesan, to garnish"
    ],
    "method": [
      "Prepare before heating the pan: Slice each chicken breast horizontally into cutlets of similar thickness. Pat dry and season both sides with salt, pepper and Italian seasoning. Mince the garlic and finely grate Parmesan from a block. Having everything ready matters because garlic and cream can overcook quickly.",
      "Cook the fettuccine: Bring a large pot of generously salted water to a rolling boil. Add pasta and stir immediately. Cook until just al dente—tender with a little resistance in the center—because it will finish in the sauce. Before draining, reserve at least ½ cup of cloudy, starchy pasta water. Do not rinse the pasta.",
      "Sear the chicken: Heat olive oil in a large skillet over medium-high heat until shimmering. Add cutlets in a single layer; cook in batches if necessary. Leave them undisturbed long enough to develop a golden crust, roughly 4–7 minutes per side depending on thickness. If a piece initially sticks, let the crust develop before trying to lift it. Chicken is safely cooked at 74°C in the thickest part. Transfer to a plate and rest about 5 minutes before slicing; leave the flavorful browned bits in the skillet.",
      "Build the butter and garlic base: Lower the heat to medium-low and let the skillet cool briefly if very hot. Add butter and scrape up the browned chicken bits as it melts. Add minced garlic and stir for about 30 seconds, just until fragrant. The garlic should smell aromatic, not turn dark brown; burnt garlic will make the sauce bitter.",
      "Gently thicken the cream: Pour in the heavy cream and stir to combine with the butter and pan juices. Bring only to a gentle simmer, with small bubbles around the edges rather than a hard boil. Cook about 3–5 minutes, stirring occasionally. The cream should begin to coat the back of a spoon but may still seem slightly loose; Parmesan and pasta will thicken it further.",
      "Add Parmesan without splitting the sauce: Turn off the heat or use the lowest setting. Add finely grated Parmesan in small handfuls, stirring each addition until incorporated. Look for a smooth, glossy sauce. Avoid vigorously boiling the cheese: excess heat can make it clumpy or oily. If the sauce is too thick, stir in reserved pasta water one tablespoon at a time. If it seems thin, wait until the pasta is coated before deciding it needs more reduction.",
      "Finish the pasta: Add drained fettuccine and toss gently for 1–2 minutes until every strand is coated. Lift a few strands with tongs: the sauce should cling in a silky layer, not sit in large watery pools or thick lumps. Add small splashes of pasta water as needed to keep it flowing. Taste before adding more salt, since Parmesan is salty.",
      "Serve immediately: Slice the rested chicken and arrange it over the pasta. Finish with fresh parsley, black pepper and extra Parmesan. Cream sauces tighten as they cool; if reheating leftovers, warm gently with a little water or cream rather than boiling."
    ],
    "notes": "Original July recipe: 450 g fettuccine, 2 chicken breasts, 4 tbsp butter, 1½ cups cream and 1 cup Parmesan. Make the sauce in the chicken skillet to capture the browned bits. Use freshly grated block Parmesan for a smoother sauce. Visual cues and troubleshooting are expanded cooking guidance."
  },
  {
    "id": "seed-22",
    "image": "tomato-shrimp-pasta.jpg",
"title": "Garlic Butter Tomato Shrimp Pasta",
    "category": "Pasta & Rice",
    "time": "35–40 min",
    "servings": "3–4",
    "description": "Tender seared shrimp and pasta in a glossy garlic-butter sauce made from softened, bursting cherry tomatoes.",
    "ingredients": [
      "300 g linguine or spaghetti",
      "350 g raw shrimp, peeled and deveined",
      "4 tbsp (57 g) butter, divided",
      "1 tbsp olive oil",
      "4–5 garlic cloves, finely minced",
      "2 cups cherry tomatoes, halved",
      "Pinch of red pepper flakes (optional)",
      "Fresh basil or parsley, chopped",
      "Salt and freshly ground black pepper, to taste",
      "Up to 1 cup reserved starchy pasta water, added gradually as needed"
    ],
    "method": [
      "Prepare everything first: Peel and devein shrimp if needed; pat very dry with paper towels and season lightly with salt and pepper. Halve the cherry tomatoes, mince the garlic and chop the herbs. Dry shrimp sear rather than steam. Keep them chilled until ready to cook.",
      "Cook the pasta: Bring a large pot of well-salted water to a rolling boil. Cook linguine or spaghetti until just shy of al dente, so it can finish in the sauce without becoming mushy. Before draining, reserve about 1 cup of cloudy pasta water. Do not rinse the pasta.",
      "Sear the shrimp: Heat olive oil with 2 tbsp of the butter in a large skillet over medium-high heat. Once the butter is melted and gently foaming, arrange shrimp in a single layer; work in batches if crowded. Sear roughly 1–2 minutes per side, depending on size, until opaque pink-white and lightly firm. A loose C curl is a useful clue, but check opacity and doneness rather than relying on shape alone; seafood should reach 63°C for food safety. Remove promptly to a plate so it does not become rubbery.",
      "Make the garlic butter: Reduce heat to medium-low and let the skillet cool briefly if it is very hot. Melt the remaining 2 tbsp butter in the same pan. Add minced garlic and optional pepper flakes; stir for 30–60 seconds until fragrant. The garlic should stay pale golden, never dark brown.",
      "Cook the tomatoes: Add halved cherry tomatoes and stir to coat in garlic butter. Cook over medium heat for about 4–5 minutes, stirring occasionally and pressing a few tomatoes with the back of a spoon. The skins should wrinkle, the flesh should soften and red juices should collect in the pan. The mixture may look watery or slightly separated at this stage; that is normal.",
      "Reduce to a glossy sauce: If there is still a lot of thin liquid, simmer gently for another 5–8 minutes, stirring occasionally. The tomato juices should concentrate and mingle with the butter. Drag a spoon across the bottom: a trail that stays visible for roughly 1–2 seconds before flowing back is a helpful guide, not an exact rule. The sauce should lightly coat a spoon, not resemble thick tomato paste. No flour or cornstarch is needed.",
      "Emulsify with pasta: Add drained pasta and start with 2–3 tbsp reserved pasta water. Toss vigorously over low to medium-low heat for about 1–2 minutes. The starch helps the butter and tomato juices become silky and cling to the strands. If too thick or oily, add pasta water one tablespoon at a time and toss; if watery, continue tossing gently for another minute to evaporate excess moisture.",
      "Return the shrimp only at the end: Add the cooked shrimp and any juices from the plate. Toss gently for about 30–60 seconds, just to heat through. They are already cooked; prolonged reheating makes them tough.",
      "Finish and serve: Turn off the heat, add basil or parsley, taste and adjust salt and pepper. Serve immediately while the sauce is glossy and the shrimp remain tender."
    ],
    "notes": "Original July plan used 450 g pasta and 450 g shrimp for 2–3 servings. Adjusted to 300 g pasta and 350 g shrimp for approximately 3–4 moderate servings, keeping the tomato, garlic and butter quantities unchanged for a generous sauce. The original technique removed shrimp after searing; the later sauce-reduction discussion emphasized a glossy sauce, spoon-trail test and no starch thickener. Shrimp quantity was not inherently wrong; the original serving count was especially generous."
  }
];
  updates.find(r => r.id === 'seed-21').image = 'chicken-alfredo.jpg';
  updates.find(r => r.id === 'seed-22').image = 'tomato-shrimp-pasta.jpg';

  // Approved Bolognese + Lasagna batch (both use the same ragù).
  updates.push({
  "id": "seed-14",
  "title": "Lasagna Bolognese with Cheesy Béchamel",
  "category": "Main Courses",
  "time": "40–50 min baking, plus ragù and resting",
  "servings": "8–10 portions",
  "description": "The same slow-simmered Bolognese ragù layered with tender pasta and rich cheddar-Parmesan béchamel, baked golden and rested for clean slices.",
  "ingredients": [
    "BOLOGNESE: One full batch of Slow-Simmered Beef Bolognese (the exact same ragù recipe; see its entry)",
    "1 kg ground beef",
    "1 medium onion, finely diced",
    "2 carrots, finely diced",
    "2 celery stalks, finely diced",
    "3–4 garlic cloves, minced",
    "2 tbsp olive oil",
    "150–170 g tomato paste",
    "700–800 g crushed tomatoes",
    "150 ml dry red wine",
    "300 ml water initially; up to 100 ml more if needed",
    "½ beef stock cube to start (adjust cautiously)",
    "1–2 bay leaves",
    "1 Parmesan rind, optional",
    "100–150 ml whole milk",
    "Salt and black pepper to taste",
    "CHEESY BÉCHAMEL: 80 g butter",
    "80 g plain flour",
    "1 litre whole milk",
    "100–120 g grated sharp cheddar",
    "40–50 g freshly grated Parmesan",
    "Small pinch nutmeg",
    "Black pepper and salt, to taste",
    "ASSEMBLY: Oven-ready lasagna sheets, enough for 3–4 layers",
    "Extra grated cheese for topping, optional"
  ],
  "method": [
    "Make the ragù first: Follow the Slow-Simmered Beef Bolognese recipe exactly, using the ingredients listed above. Simmer for 3–4 hours until rich and spoonable. For lasagna it must be thick enough not to pool in the dish, yet moist enough to help oven-ready sheets cook. If watery, reduce uncovered; if dry, add a little hot water. The ragù can be made a day ahead.",
    "Make a pale roux: Melt 80 g butter in a saucepan over medium-low heat. Whisk in 80 g flour and cook 1–2 minutes. It should look like a smooth, thick, gently bubbling paste, smell slightly nutty and remain pale. If it browns, lower the heat.",
    "Whisk in milk gradually: Add a small splash of the 1 litre milk while whisking vigorously. At first the mixture may tighten into a very thick paste—normal. Add more milk little by little, whisking smooth after each addition. Once fluid and lump-free, add the rest in larger portions. If stubborn lumps remain, whisk thoroughly or briefly blend.",
    "Thicken the béchamel: Cook over medium-low heat, whisking along the bottom and corners, until it gently simmers and coats the back of a spoon. Draw a finger through the coating: a clear line should remain. The sauce must still be pourable and spreadable, not stiff like a thick cheese dip. If too thick, whisk in a splash more milk; if thin, simmer gently a little longer.",
    "Add the cheese gently: Remove from heat or turn to the lowest setting. Stir in 100–120 g cheddar and 40–50 g Parmesan in small handfuls until smooth and glossy. Add a pinch of nutmeg and black pepper; taste before salting. Do not boil vigorously after adding cheese, which can make the sauce grainy or oily.",
    "Prepare to assemble: Preheat oven to 180°C fan. Choose a deep baking dish. Spread a thin layer of ragù across the bottom so the first pasta layer doesn't stick. Have the ragù and béchamel ready before opening the lasagna sheets.",
    "Build even layers: Lay down oven-ready lasagna sheets without excessive overlap. Spread an even layer of ragù, then béchamel. Repeat for roughly 3–4 pasta layers depending on the dish. Carry sauce into the corners and cover all exposed pasta edges so they don't bake hard. Reserve enough béchamel for a generous top layer; add optional grated cheese.",
    "Bake covered: Tent foil over the dish so it doesn't stick to the top. Bake at 180°C fan for about 25–30 minutes. The filling should heat through and begin bubbling; a pale top at this point is normal. Check the sheet package if its required cooking time differs.",
    "Brown uncovered: Remove foil carefully and bake another 15–20 minutes until the surface has golden-brown patches and the edges bubble. If the top browns before pasta is tender, loosely cover again. If cooked but pale, use the grill briefly while watching continuously.",
    "Rest before slicing: Leave the lasagna undisturbed for 25–30 minutes after baking. Straight from the oven, béchamel and ragù are too fluid and the layers slide apart. As it rests, bubbling subsides and the slices hold together. Cut with a sharp knife and lift with a wide spatula."
  ],
  "notes": "Uses the EXACT same ragù as the separate Bolognese recipe—no second meat sauce formula. Original lasagna used a long-simmered ragù, 80 g butter + 80 g flour + 1 litre milk, cheddar and Parmesan. An alternative finish of 60–75 ml evaporated milk in the ragù was discussed. Most important cues: well-reduced ragù, smooth spreadable béchamel, covered then uncovered baking, 25–30 min rest.",
  "image": "lasagna-bolognese.jpg",
  "seed": true
},
{
  "id": "maika-bolognese-2026",
  "title": "Slow-Simmered Beef Bolognese",
  "category": "Pasta & Rice",
  "time": "4–5 hours",
  "servings": "6–8 servings of ragù",
  "description": "A rich, slow-simmered beef ragù with soffritto, tomatoes, wine and a gentle milk finish. The same ragù is used in Maika's lasagna.",
  "ingredients": [
    "1 kg ground beef",
    "1 medium onion, finely diced",
    "2 carrots, finely diced",
    "2 celery stalks, finely diced",
    "3–4 garlic cloves, minced",
    "2 tbsp olive oil",
    "150–170 g tomato paste",
    "700–800 g crushed tomatoes",
    "150 ml dry red wine",
    "300 ml water initially; up to 100 ml more if needed",
    "½ beef stock cube to start (adjust cautiously)",
    "1–2 bay leaves",
    "1 Parmesan rind, optional",
    "100–150 ml whole milk",
    "Salt and black pepper to taste",
    "Pasta and freshly grated Parmesan, to serve (optional)"
  ],
  "method": [
    "Prepare the soffritto: Finely dice onion, carrots and celery to similarly small pieces. Warm olive oil in a heavy pot over medium-low heat. Cook the vegetables 10–15 minutes, stirring, until soft, sweet-smelling and translucent rather than dark or crisp. If they brown too fast, reduce the heat and add a tablespoon of water. Add garlic only for the final 30–60 seconds, until fragrant.",
    "Brown the beef thoroughly: Increase heat to medium-high, add ground beef and break it into small pieces. At first the meat may turn grey and release liquid. Keep cooking until most moisture evaporates and browned spots develop on the meat and bottom of the pot. If the pot is crowded and meat is steaming, brown it in batches. Browning gives the sauce depth; simply turning grey is not enough.",
    "Cook the tomato paste: Stir in 150–170 g tomato paste and cook for 3–5 minutes, stirring frequently. It should change from bright red to a deeper brick-red and smell less sharp. Slight sticking is fine; scorching is not. Reduce heat if necessary.",
    "Deglaze: Pour in 150 ml red wine and scrape the bottom to dissolve the browned bits. Simmer about 3–5 minutes until the strong wine aroma softens and the mixture becomes thicker rather than watery.",
    "Add tomatoes and liquid: Stir in crushed tomatoes, 300 ml water, ½ stock cube, bay leaves and optional Parmesan rind. Bring to a gentle simmer. It will look loose at first; this is expected. Do not add all possible water now—add small splashes later only if needed. The original batch tasted overly stock-forward, so start with less stock and taste near the end.",
    "Simmer low and slow for 3–4 hours: Lower heat until just a few small bubbles break the surface. Keep the lid slightly ajar and stir every 30–40 minutes, scraping the base. Early on, the sauce may look watery and separate. As it cooks, the meat softens, the color deepens and the liquid concentrates. If it starts sticking or looks dry, add a splash of hot water. Avoid a rolling boil, which evaporates liquid too quickly.",
    "Check reduction visually: By the end the ragù should be thick, glossy and spoonable, not soup-like. Drag a wooden spoon along the bottom: the sauce should part briefly, then flow back together. This is a visual guide rather than a stopwatch test. If watery, simmer uncovered another 15–30 minutes; if dry and clumpy, add a little hot water and lower heat. For lasagna, keep it thick enough not to flood the layers.",
    "Finish with milk: During the final 20–30 minutes stir in 100–150 ml whole milk, which rounds out the tomato acidity and mellows the sauce. It should blend in fully rather than remain in white streaks. A smaller amount of evaporated milk (around 60–75 ml) was discussed as a richer alternative for the lasagna batch; use one option, not both.",
    "Taste and serve: Remove bay leaves and Parmesan rind. Taste before salting because stock and Parmesan already add salt. If stock tastes too dominant, do not add more cube. For pasta, toss a portion of ragù with cooked pasta and a splash of pasta water; for lasagna, let the ragù cool slightly before layering."
  ],
  "notes": "This is the SAME ragù used for Lasagna Bolognese with Cheesy Béchamel. Based on Maika's earlier cooking notes: use less water and start with less stock cube to avoid overpowering the beef and tomatoes; simmer 3–4 hours; Parmesan rind optional. Starting with ½ cube is a proposed adjustment, not a previously verified exact quantity.",
  "image": "bolognese.jpg",
  "seed": true
});
  const byId = new Map(updates.map(recipe => [recipe.id, recipe]));
  const apply = (items) => {
    if (!Array.isArray(items)) return items;
    const merged = items.map(recipe => byId.has(recipe.id)
      ? { ...recipe, ...byId.get(recipe.id) }
      : recipe);
    // Add Bolognese only if not already present; preserve all other recipes.
    if (!merged.some(recipe => recipe.id === 'maika-bolognese-2026')) {
      merged.push({ ...byId.get('maika-bolognese-2026') });
    }
    return merged;
  };

  if (Array.isArray(window.SEED_RECIPES)) {
    window.SEED_RECIPES = apply(window.SEED_RECIPES);
  }

  // The app prefers saved recipes over seed recipes. Update only these
  // two existing seed IDs while leaving all other personal entries intact.
  try {
    const raw = localStorage.getItem('maika_recipes');
    if (raw) {
      const saved = JSON.parse(raw);
      if (Array.isArray(saved)) {
        localStorage.setItem('maika_recipes', JSON.stringify(apply(saved)));
      }
    }
  } catch (error) {
    console.warn('Recipe update could not access local storage:', error);
  }
})();
/* Maika's Cookbook — Recipe Batch 3: Hachis Parmentier + Steak & Mash.
   APPEND this entire block to the END of the existing recipe-updates.js.
   Do NOT replace the original file with this block by itself.
   Loaded after recipes.js and before app.js.
*/
(() => {
  'use strict';
  const newRecipes = [
  {
    "id": "seed-17",
    "title": "Hachis Parmentier",
    "category": "Main Courses",
    "time": "25 min prep · 45–55 min cooking",
    "servings": "6",
    "description": "A comforting French classic with richly seasoned beef underneath a buttery, fluffy mashed potato topping, baked until golden.",
    "image": "hachis-parmentier.jpg",
    "seed": true,
    "ingredients": [
      "BEEF FILLING — 700 g minced beef",
      "1 medium onion, finely diced",
      "2 carrots, finely diced",
      "1 celery stalk, finely diced (optional)",
      "3 garlic cloves, minced",
      "2 tbsp tomato paste",
      "200 g chopped tomatoes",
      "150 ml beef stock",
      "2 tbsp olive oil",
      "1 tsp dried thyme",
      "1 tsp dried oregano",
      "1 bay leaf",
      "Salt and freshly ground black pepper",
      "60 ml red wine (optional)",
      "MASHED POTATO TOPPING — 1.2 kg floury potatoes, peeled",
      "100 g unsalted butter",
      "120–150 ml warm whole milk",
      "80–100 g grated Gruyère, Emmental or Parmesan",
      "A pinch of nutmeg",
      "Salt and black pepper"
    ],
    "method": [
      "Prepare the potatoes: Peel and cut the potatoes into evenly sized chunks. Place in a saucepan of cold, generously salted water, bring to a boil and simmer for 15–20 minutes until completely tender. Drain thoroughly, then return to the warm pan for one minute to evaporate excess moisture.",
      "Make the mashed potatoes: Mash the potatoes while hot until smooth. Add the butter first, then gradually mix in the warm milk until creamy but firm enough to hold its shape. Season with salt, pepper and nutmeg. Avoid using a blender, which can make the mash gluey.",
      "Build the flavour base: Heat the olive oil in a large frying pan over medium heat. Add the onion, carrot and celery. Cook for 6–8 minutes until softened. Add the garlic and cook for another 30 seconds.",
      "Brown the beef: Increase the heat to medium-high, add the minced beef and break it into small pieces. Let it develop some golden-brown colour before stirring too frequently. Cook until no raw pink remains.",
      "Develop the sauce: Stir in the tomato paste and cook for 1–2 minutes. If using wine, add it now and allow it to reduce. Add the chopped tomatoes, beef stock, thyme, oregano and bay leaf.",
      "Simmer until rich: Reduce the heat and simmer gently for 20–25 minutes, stirring occasionally. The filling should be moist and savoury, but not watery. Remove the bay leaf and adjust the seasoning.",
      "Assemble: Preheat the oven to 200°C conventional / 180°C fan. Spread the beef filling evenly in a medium baking dish. Spoon the mashed potatoes over the top, starting at the edges to seal in the filling. Smooth with a spatula and create ridges using a fork.",
      "Bake: Sprinkle with grated cheese and bake for 20–25 minutes, until bubbling around the edges and golden on top. For extra colour, grill briefly at the end while watching carefully.",
      "Rest and serve: Leave the dish to rest for 10 minutes before serving, so the layers settle and hold together more neatly."
    ],
    "notes": "Chef's notes: Keep the beef filling juicy but well reduced, and the mash creamy but not runny. Assemble a day ahead if convenient, refrigerate promptly, then bake until piping hot throughout. This is the newly approved shorter-simmer variation; it replaces the earlier draft in the cookbook."
  },
  {
    "id": "seed-20",
    "title": "Pan-Seared Steak with Creamy Mashed Potatoes",
    "category": "Main Courses",
    "time": "20 min prep · 25–35 min cooking",
    "servings": "2",
    "description": "A perfectly seared steak, basted with fragrant garlic and herb butter, served with smooth, rich mashed potatoes.",
    "image": "steak-mashed-potatoes.jpg",
    "seed": true,
    "ingredients": [
      "STEAK — 2 ribeye, sirloin or entrecôte steaks, approximately 250–300 g each, 2.5–3 cm thick",
      "1 tbsp neutral oil with a high smoke point",
      "40 g unsalted butter",
      "3 garlic cloves, lightly crushed",
      "3–4 sprigs fresh thyme or rosemary",
      "Salt and freshly ground black pepper",
      "MASHED POTATOES — 700 g floury potatoes",
      "60 g unsalted butter",
      "100–130 ml warm whole milk",
      "30 ml double cream (optional)",
      "Salt and white or black pepper",
      "A pinch of nutmeg (optional)"
    ],
    "method": [
      "Prepare the potatoes: Peel and cut the potatoes into even chunks. Place in cold salted water, bring to a boil and simmer for 15–20 minutes until very tender.",
      "Prepare the steaks: Remove the steaks from the refrigerator about 20–30 minutes before cooking. Pat every surface thoroughly dry with kitchen paper. Season generously with salt and black pepper just before searing.",
      "Finish the mash: Drain the cooked potatoes and let excess steam escape. Mash or pass through a potato ricer. Mix in the butter, followed gradually by the warm milk and optional cream. Season until flavourful and silky. Keep warm over very low heat, without letting it boil.",
      "Heat the pan: Place a heavy-bottomed frying pan over medium-high to high heat until properly hot. Add the oil. The steaks should sizzle immediately when they touch the surface.",
      "Sear the steaks: Place the steaks in the pan without overcrowding. For steaks around 2.5–3 cm thick, begin with approximately 2–3 minutes per side, adjusting according to thickness and desired doneness. Avoid moving them constantly: a good crust needs uninterrupted contact with the pan.",
      "Butter-baste: Lower the heat slightly. Add the butter, crushed garlic and herbs. Once the butter foams, tilt the pan and repeatedly spoon it over the steaks for about 30–60 seconds, taking care not to burn the butter. Sear the fatty edge briefly if needed.",
      "Check doneness: A thermometer is the most reliable way to judge the centre. For medium-rare, aim for a final resting temperature of approximately 54–57°C; for medium, around 60–63°C. Remove the steak a few degrees before your target because it continues cooking while resting.",
      "Rest the meat: Transfer the steaks to a warm plate and rest for 5–10 minutes. This helps retain their juices. Do not cut them immediately.",
      "Plate and serve: Spoon the creamy mashed potatoes onto warm plates. Serve the steak whole or sliced against the grain, drizzle with the garlic-herb butter and finish with freshly cracked pepper."
    ],
    "notes": "Chef's notes: A dry steak surface and a properly heated pan are essential for a beautiful crust. Don't add butter too early or it may burn. For luxurious mashed potatoes, use a potato ricer and add the butter before the milk. Doneness timings are approximate; a food thermometer is more reliable."
  }
];
  const byId = new Map(newRecipes.map(recipe => [recipe.id, recipe]));
  const merge = (items) => {
    if (!Array.isArray(items)) return items;
    const result = items.map(recipe =>
      byId.has(recipe.id) ? { ...recipe, ...byId.get(recipe.id) } : recipe
    );
    for (const recipe of newRecipes) {
      if (!result.some(item => item.id === recipe.id)) result.push({ ...recipe });
    }
    return result;
  };
  if (Array.isArray(window.SEED_RECIPES)) {
    window.SEED_RECIPES = merge(window.SEED_RECIPES);
  }
  try {
    const raw = localStorage.getItem('maika_recipes');
    if (raw) {
      const saved = JSON.parse(raw);
      if (Array.isArray(saved)) {
        localStorage.setItem('maika_recipes', JSON.stringify(merge(saved)));
      }
    }
  } catch (error) {
    console.warn('Batch 3 recipe update could not access local storage:', error);
  }
})();
/* Maika's Cookbook — Batch 4: Poulet Mayo + Arroz de Entrecosto.
   APPEND this block at the BOTTOM of the existing recipe-updates.js.
   Do not erase any existing recipe updates.
*/
(() => {
  'use strict';
  const newRecipes = [
  {
    "id": "seed-27",
    "title": "Congolese Poulet Mayo",
    "category": "Main Courses",
    "time": "20 min prep · 55–70 min cooking",
    "servings": "5–6",
    "description": "A comforting Congolese-inspired chicken dish with golden chicken, softened onions and a creamy mayonnaise finish.",
    "image": "poulet-mayo.jpg",
    "seed": true,
    "ingredients": [
      "CHICKEN — 1 whole chicken, approximately 1.5–1.8 kg, cut into serving pieces",
      "3 large onions, thinly sliced",
      "4 garlic cloves, minced",
      "1 chicken stock cube, or seasoning to taste",
      "1 tsp white pepper",
      "½ tsp black pepper",
      "1 tsp paprika (optional)",
      "2 tbsp neutral cooking oil",
      "Salt, to taste",
      "150–250 ml water, as needed",
      "MAYONNAISE SAUCE — 200–250 g full-fat mayonnaise",
      "1 tbsp Dijon mustard (optional)",
      "1–2 tbsp concentrated chicken cooking juices",
      "Fresh parsley, optional"
    ],
    "method": [
      "Prepare and season the chicken: Pat the chicken pieces dry with kitchen paper. Season with white pepper, black pepper, paprika if using, garlic and crumbled stock cube. Mix thoroughly so the seasoning reaches every piece. Refrigerate for at least 30 minutes if you have time. Do not taste any marinade that has touched raw chicken.",
      "Brown the chicken: Heat the oil in a large heavy-bottomed pot over medium-high heat. Add the chicken in batches, skin-side down where applicable. Cook until golden on both sides, approximately 3–5 minutes per side. You are developing flavour here, not cooking the chicken completely. Transfer to a plate.",
      "Cook the onions: Reduce the heat to medium and add the sliced onions to the same pot. Stir to loosen the browned chicken bits from the bottom. Cook for 8–12 minutes, stirring occasionally, until the onions soften, release their moisture and begin to turn lightly golden. They should be sweet and soft rather than crisp.",
      "Build the cooking sauce: Return the chicken and its juices to the pot. Add approximately 150 ml water, scraping up any remaining browned bits. Cover and simmer gently for 25–35 minutes, turning the pieces occasionally. Add a little extra water only if the pot becomes too dry. The chicken should be fully cooked and tender, reaching at least 74°C at the thickest part.",
      "Concentrate the juices: Remove the lid and allow excess liquid to reduce for 5–10 minutes. You want flavourful, concentrated cooking juices coating the chicken, not a watery broth. If there is a lot of liquid, temporarily remove the chicken and reduce the juices separately.",
      "Prepare the mayonnaise mixture: In a clean bowl, combine the mayonnaise and optional mustard. Allow the concentrated cooking juices to cool slightly, then stir in 1–2 tablespoons gradually. This loosens the mayonnaise and incorporates the chicken flavour.",
      "Coat the chicken: Remove the pot from direct heat and let vigorous bubbling subside. Fold the mayonnaise mixture into the chicken and onions, coating everything evenly. If necessary, warm very gently without bringing the sauce to a hard boil, which can make it separate or become oily.",
      "Adjust the texture: The sauce should cling to the chicken, with softened onions distributed throughout. If too thick, add a small spoonful of warm cooking juices. If too thin, avoid adding more water; allow the mixture to settle and adjust carefully.",
      "Serve: Transfer to a serving dish and finish with parsley if desired. Serve hot with rice, fried plantain, potatoes or your preferred accompaniment."
    ],
    "notes": "A proposed home-style interpretation rather than Maika's original, unrecovered recipe. Let the onions soften and sweeten; full-fat mayonnaise gives a richer coating. Avoid vigorous boiling after adding mayonnaise. Some Congolese versions grill the chicken and finish in a parcel with onions and peppers."
  },
  {
    "id": "seed-18",
    "title": "Arroz de Entrecosto (Creamy Portuguese Pork Rib Rice)",
    "category": "Pasta & Rice",
    "time": "20 min prep · 75–100 min cooking",
    "servings": "3–4",
    "description": "Tender pork ribs and Portuguese-style short-grain rice simmered in a deeply flavoured tomato broth until glossy and creamy.",
    "image": "arroz-entrecosto.jpg",
    "seed": true,
    "ingredients": [
      "PORK RIBS — 700 g pork ribs (entrecosto), cut into individual pieces",
      "2 tbsp olive oil",
      "1 medium onion, finely chopped",
      "3 garlic cloves, minced",
      "½ red bell pepper, finely diced",
      "2 ripe tomatoes, grated, or 200 g canned chopped tomatoes",
      "1 tbsp tomato paste",
      "1 tsp sweet or smoked paprika",
      "½ tsp dried thyme (optional)",
      "1 bay leaf",
      "Salt and freshly ground black pepper",
      "RICE — 300 g short-grain round rice, such as Cigala arroz redondo",
      "Approximately 1–1.2 litres hot beef, pork or vegetable stock, including any flavourful pork cooking liquid",
      "Fresh parsley, finely chopped, to serve"
    ],
    "method": [
      "Prepare the ribs: Pat the pork ribs dry with kitchen paper and season generously with salt and black pepper. If the pieces are particularly large, cut them into smaller portions so they cook more evenly.",
      "Brown the ribs: Heat the olive oil in a large heavy-bottomed pot over medium-high heat. Add the ribs in a single layer and brown on all sides, working in batches if necessary. This should take approximately 8–12 minutes in total. Look for deep golden patches on the meat. Remove and set aside.",
      "Build the flavour base: Reduce the heat to medium. Add the onion and red pepper to the same pot, using the fat and browned bits left by the ribs. Cook for 5–7 minutes until softened. Add the garlic and stir for another 30–60 seconds, until fragrant.",
      "Cook the tomato mixture: Add the grated tomatoes, tomato paste, paprika, thyme and bay leaf. Stir thoroughly and cook for approximately 5–8 minutes. The tomatoes should soften and reduce into a thicker, more concentrated sauce. This step gives the rice its deep colour and flavour.",
      "Tenderise the pork: Return the browned ribs to the pot and add enough hot stock or water to mostly cover them. Bring to a gentle simmer, cover and cook for approximately 40–60 minutes, or until the pork is tender. The exact time depends on the size of the ribs. Check occasionally and add a little liquid if needed.",
      "Prepare the rice stage: Once the ribs are tender, check how much liquid remains. You want approximately 900 ml hot liquid available to begin cooking the 300 g rice, with more hot stock reserved to adjust the consistency. Keep additional stock hot in a separate saucepan or jug.",
      "Add the rice: Stir the uncooked Cigala round rice directly into the pot with the ribs and tomato base. Mix gently for about one minute so the grains are coated with the seasoned cooking juices.",
      "Cook gradually: Add enough hot stock to keep the rice generously covered and simmer over medium-low heat, stirring periodically to prevent sticking. Unlike a classic Italian risotto, you don't need to add the stock one ladle at a time, but adding more as it absorbs gives you control over the final texture.",
      "Monitor the rice carefully: Begin checking after approximately 15 minutes and continue according to the package instructions, usually around 15–20 minutes in total. Cigala round rice may release starch and absorb liquid differently from risotto rice, so use the texture rather than the clock as your final guide. The grains should be tender but not disintegrating.",
      "Achieve the creamy consistency: As the rice approaches doneness, stir gently and add small splashes of hot stock if it becomes too thick. You want the grains suspended in a glossy, lightly flowing sauce. When you move a spoon through the pot, the rice should settle back slowly rather than remaining in a dry mound.",
      "Finish the seasoning: Remove the bay leaf and taste the rice. Adjust salt and black pepper carefully, particularly if using seasoned stock. If it looks slightly looser than you want, allow it to rest briefly; it will continue absorbing liquid.",
      "Serve immediately: Sprinkle with fresh parsley and serve while hot and creamy. This style of rice is at its best straight from the pot, before the grains absorb the remaining sauce."
    ],
    "notes": "Built around the 700 g pork rib batch and Cigala round rice, with a creamy risotto-like finish. Tenderise pork before adding rice. Add hot stock according to texture; round rice absorbs liquid differently from Arborio. Serve promptly, as leftovers thicken substantially. This newly approved version replaces an earlier pressure-cooker draft."
  }
];
  const byId = new Map(newRecipes.map(recipe => [recipe.id, recipe]));
  function merge(items) {
    if (!Array.isArray(items)) return items;
    const result = items.map(recipe => byId.has(recipe.id)
      ? { ...recipe, ...byId.get(recipe.id) }
      : recipe);
    for (const recipe of newRecipes) {
      if (!result.some(item => item.id === recipe.id)) result.push({ ...recipe });
    }
    return result;
  }
  if (Array.isArray(window.SEED_RECIPES)) {
    window.SEED_RECIPES = merge(window.SEED_RECIPES);
  }
  try {
    const raw = localStorage.getItem('maika_recipes');
    if (raw) {
      const saved = JSON.parse(raw);
      if (Array.isArray(saved)) {
        localStorage.setItem('maika_recipes', JSON.stringify(merge(saved)));
      }
    }
  } catch (error) {
    console.warn('Batch 4 recipe update could not access local storage:', error);
  }
})();
/* Maika's Cookbook — Batch 5: Cinnamon Rolls & Rosca Doce.
   APPEND to the end of the EXISTING recipe-updates.js, after its final })();
   Do not replace the existing file. */
(() => {
  'use strict';
  const updates = [
  {
    "id": "seed-12",
    "title": "Soft & Gooey Cinnamon Rolls",
    "category": "Desserts & Baking",
    "time": "35 min active + 1½–2¼ hr rising + 20–25 min baking",
    "servings": "12 rolls",
    "description": "Pillowy, buttery cinnamon rolls with generous cinnamon-sugar swirls, soft centres and a delicate vanilla glaze, made with my favourite enriched dough.",
    "image": "cinnamon-rolls.jpg",
    "seed": true,
    "ingredients": [
      "DOUGH — 500 g all-purpose flour",
      "250 ml whole milk, lukewarm (35–38°C)",
      "7 g instant yeast",
      "75 g granulated sugar",
      "1 large egg + 1 egg yolk",
      "75 g unsalted butter, softened",
      "7 g fine salt",
      "20 g milk powder (optional, for extra softness)",
      "CINNAMON FILLING — 80 g unsalted butter, very soft",
      "110 g soft brown sugar",
      "1½ tbsp ground cinnamon",
      "Small pinch of salt",
      "BEFORE BAKING — 60 ml heavy cream, at room temperature",
      "VANILLA GLAZE — 100 g powdered sugar",
      "20 g softened butter",
      "2–3 tbsp whole milk",
      "½ tsp vanilla extract"
    ],
    "method": [
      "Prepare the milk mixture. Warm the milk until lukewarm, approximately 35–38°C; it should feel comfortably warm, never hot. Add the instant yeast, sugar, egg and egg yolk, and whisk until combined.",
      "Bring the dough together. Add the flour, salt and optional milk powder to the bowl of a stand mixer. Pour in the milk mixture and mix using the dough hook on low speed until a rough dough forms.",
      "Knead the dough. Continue kneading for approximately 5 minutes until the mixture becomes cohesive. Gradually add the softened butter in small pieces, allowing each addition to incorporate before adding more.",
      "Develop the gluten. Knead for another 8–12 minutes on low to medium-low speed, until the dough becomes smooth, stretchy and elastic. It may feel slightly tacky, but it should not be excessively wet. Avoid adding too much extra flour, as this can make the rolls dense.",
      "First rise. Shape the dough into a ball and transfer it to a lightly greased bowl. Cover and leave in a warm place for approximately 1–1½ hours, or until roughly doubled in size.",
      "Prepare the filling. Mix the softened butter, brown sugar, cinnamon and pinch of salt into a spreadable paste. The butter should be soft enough to spread without tearing the dough, but not melted.",
      "Roll and fill. Turn the risen dough onto a lightly floured surface. Roll it into a rectangle approximately 35 × 45 cm. Spread the cinnamon filling evenly over the surface, leaving a narrow border along one long edge.",
      "Shape the rolls. Starting from the opposite long edge, roll the dough into a tight log. Cut into 12 evenly sized pieces using unflavoured dental floss or a sharp serrated knife.",
      "Second rise. Arrange the rolls in a buttered baking dish, leaving a little space between them. Cover loosely and allow to rise for approximately 35–50 minutes, until visibly puffy and beginning to touch.",
      "Add the cream. Preheat the oven to 175°C using conventional heat. Just before baking, gently pour the room-temperature heavy cream into the gaps between the rolls. This helps create a particularly soft, moist texture.",
      "Bake. Bake for approximately 20–25 minutes, until the tops are lightly golden and the centres are cooked through. If the tops colour too quickly, cover loosely with aluminium foil toward the end.",
      "Prepare the glaze. While the rolls bake, whisk together the powdered sugar, softened butter, vanilla and enough milk to create a smooth, thick but pourable glaze.",
      "Finish and serve. Allow the rolls to cool for approximately 8–10 minutes before spreading the glaze over them. The residual warmth will soften the glaze and allow it to settle into the cinnamon swirls."
    ],
    "notes": "My favourite enriched dough, also used for coconut roscas. For more pronounced cinnamon swirls, increase the filling by about 50% and roll tightly. Aim for soft, gooey centres rather than dry, bread-like rolls. Avoid overbaking and serve slightly warm."
  },
  {
    "id": "seed-13",
    "title": "Rosca Doce com Calda de Coco",
    "category": "Desserts & Baking",
    "time": "35 min active + 1½–2¼ hr rising + 17–22 min baking",
    "servings": "8 roscas",
    "description": "Soft, golden Brazilian-style sweet bread twists made with the same buttery dough as my cinnamon rolls and soaked in a sweet, creamy coconut-milk syrup.",
    "image": "rosca-doce-coconut.jpg",
    "seed": true,
    "ingredients": [
      "SWEET DOUGH — 500 g all-purpose flour",
      "250 ml whole milk, lukewarm (35–38°C)",
      "7 g instant yeast",
      "75 g granulated sugar",
      "1 large egg + 1 egg yolk",
      "75 g unsalted butter, softened",
      "7 g fine salt",
      "COCONUT SYRUP — 150 g sweetened condensed milk",
      "100 ml full-fat coconut milk",
      "60 ml heavy cream",
      "30–50 ml whole milk, to adjust consistency",
      "Small pinch of salt",
      "½ tsp vanilla extract (optional)"
    ],
    "method": [
      "Prepare the milk mixture. Warm the milk until lukewarm, approximately 35–38°C. Combine it with the instant yeast, sugar, whole egg and egg yolk. Mix until smooth.",
      "Make the dough. Add the flour and salt to the bowl of a stand mixer fitted with the dough hook. Pour in the milk mixture and knead on low speed until a rough dough forms.",
      "Incorporate the butter. Once the dough has begun to develop, add the softened butter gradually, kneading between additions. Continue mixing for approximately 8–12 minutes, until smooth, supple and elastic.",
      "First rise. Shape the dough into a ball, place it in a lightly greased bowl and cover. Leave in a warm place for approximately 1–1½ hours, or until doubled in size.",
      "Divide the dough. Transfer the risen dough to a lightly floured work surface. Gently press out the excess gas and divide it into eight equal portions. For consistent results, weigh the dough and divide the total by eight.",
      "Shape the roscas. Roll each portion into a long, even rope. Fold it in half and twist the two strands around one another. Bring the ends together and tuck them underneath to form a small twisted ring or rosca. Repeat with the remaining dough.",
      "Second rise. Arrange the shaped roscas on a parchment-lined baking tray, leaving enough space for expansion. Cover loosely and allow to rise for approximately 30–45 minutes, until visibly puffy.",
      "Preheat the oven. Heat the oven to 175°C using conventional heat. If you want a particularly golden finish, lightly brush the roscas with a little milk before baking.",
      "Bake. Bake for approximately 17–22 minutes, until lightly golden and cooked through. The roscas should remain soft rather than developing a thick, crunchy crust.",
      "Prepare the coconut syrup. While the roscas bake, combine the condensed milk, coconut milk, heavy cream and salt in a bowl. Add the optional vanilla. Whisk until completely smooth.",
      "Adjust the syrup. Add 30 ml of regular milk initially. Check the consistency and add up to another 20 ml if necessary. The syrup should be fluid enough to soak into the warm bread but still rich and creamy.",
      "Soak the warm roscas. Transfer the freshly baked roscas to a shallow dish. While still warm, spoon the coconut syrup generously over each one, allowing it to run into the twists and crevices.",
      "Repeat the soaking. Wait several minutes for the first addition to absorb, then spoon more syrup over the roscas. Continue until they are moist and glossy, without leaving them completely submerged.",
      "Rest and serve. Allow the roscas to sit for approximately 10–15 minutes so the syrup can penetrate the soft bread. Serve slightly warm or at room temperature, with any remaining syrup spooned over the top."
    ],
    "notes": "Uses exactly the same soft enriched dough base as my cinnamon rolls. Coconut flavour comes from the syrup, not shredded coconut or a coconut filling. Add the creamy syrup in stages while the bread is still warm, so it soaks in rather than sitting on top. The finished roscas should be soft, moist and slightly sticky."
  }
];
  const byId = new Map(updates.map(recipe => [recipe.id, recipe]));
  function merge(recipes) {
    if (!Array.isArray(recipes)) return recipes;
    const merged = recipes.map(recipe => byId.has(recipe.id)
      ? { ...recipe, ...byId.get(recipe.id) }
      : recipe);
    for (const update of updates) {
      if (!merged.some(recipe => recipe.id === update.id)) merged.push({ ...update });
    }
    return merged;
  }
  if (Array.isArray(window.SEED_RECIPES)) {
    window.SEED_RECIPES = merge(window.SEED_RECIPES);
  }
  try {
    const raw = localStorage.getItem('maika_recipes');
    if (raw) {
      const saved = JSON.parse(raw);
      if (Array.isArray(saved)) {
        localStorage.setItem('maika_recipes', JSON.stringify(merge(saved)));
      }
    }
  } catch (error) {
    console.warn('Batch 5 recipe update could not access local storage:', error);
  }
})();
