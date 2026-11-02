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
/* Maika's Cookbook — Batch 6: Carrot Cake + Vanilla Sponge Buttercream.
   APPEND the entire block below to the END of your EXISTING recipe-updates.js.
   Do not overwrite earlier batches. */
(() => {
  'use strict';
  const updates = [
  {
    "id": "seed-8",
    "title": "Moist Carrot Cake with Cream Cheese Frosting",
    "category": "Desserts & Baking",
    "time": "20 min prep + 25–35 min baking + cooling",
    "servings": "9–12 slices · 20 × 20 cm square pan",
    "description": "A tender, exceptionally moist single-layer carrot cake with warm spices, a generous swirl of tangy cream cheese frosting and optional crunchy walnuts.",
    "image": "carrot-cake.jpg",
    "seed": true,
    "ingredients": [
      "CARROT CAKE — 180 g all-purpose flour",
      "150 g granulated sugar",
      "2 large eggs, at room temperature",
      "120 ml neutral vegetable oil",
      "200 g carrots, finely grated",
      "1 tsp baking powder",
      "½ tsp baking soda",
      "1½ tsp ground cinnamon",
      "½ tsp ground nutmeg",
      "½ tsp fine salt",
      "1 tsp vanilla extract",
      "60 g chopped walnuts or pecans (optional)",
      "CREAM CHEESE FROSTING — 200 g cold, full-fat cream cheese",
      "80 g unsalted butter, softened",
      "120–150 g powdered sugar, sifted",
      "1 tsp vanilla extract",
      "Small pinch of salt",
      "TO FINISH — A few chopped walnuts, optional"
    ],
    "method": [
      "Prepare the oven and pan. Preheat to 175°C conventional (top and bottom heat). Grease a 20 × 20 cm square baking pan and line it with parchment paper, leaving an overhang for easy lifting.",
      "Prepare the carrots. Peel and finely grate the carrots using the small holes of a box grater. Do not squeeze out the moisture; it contributes to the cake’s soft, tender texture.",
      "Mix the dry ingredients. In a medium bowl, whisk together the flour, baking powder, baking soda, cinnamon, nutmeg and salt until evenly combined.",
      "Mix the wet ingredients. In a large bowl, whisk the eggs and sugar until smooth and slightly lighter in colour. Gradually whisk in the vegetable oil, followed by the vanilla extract.",
      "Combine the batter. Fold the dry ingredients into the wet mixture in two additions using a spatula. Stop as soon as no dry flour remains; overmixing can make the crumb tough.",
      "Add the carrots. Gently fold in the finely grated carrots and, if using, the chopped walnuts or pecans, distributing them evenly throughout the batter.",
      "Fill the pan. Transfer the batter to the prepared square pan, spread into the corners and smooth the top.",
      "Bake. Place on the middle oven rack and bake for approximately 25–35 minutes. Begin checking at 25 minutes. The centre should spring back lightly and a skewer should emerge clean or with a few moist crumbs.",
      "Cool completely. Rest the cake in the pan for 10–15 minutes, then lift it out using the parchment paper and transfer to a cooling rack. The cake must be completely cool before frosting.",
      "Beat the butter. Using the paddle attachment on a KitchenAid or an electric mixer, beat the softened butter until creamy. Add the sifted powdered sugar gradually and beat for 2–3 minutes until pale and smooth.",
      "Finish the frosting. Add the vanilla, salt and cold cream cheese. Mix on low speed only until combined and smooth. Avoid prolonged beating, which can loosen cream cheese frosting.",
      "Frost the single layer. Spread the cream cheese frosting generously over the top of the cooled square cake, creating soft swirls with an offset spatula. There is no filling or second cake layer.",
      "Chill briefly and serve. Refrigerate for 20–30 minutes to help the frosting set, then cut into neat squares. Garnish with a few chopped walnuts if desired. Allow slices to stand briefly at room temperature before serving."
    ],
    "notes": "This is a SINGLE-LAYER square carrot cake, not a layered cake. The grated carrots and oil keep the crumb moist; do not squeeze the carrots or overbake. Add cold cream cheese last and beat only briefly. Store covered in the refrigerator for 3–4 days."
  },
  {
    "id": "seed-1",
    "title": "Vanilla Sponge Cake with White Vanilla Buttercream",
    "category": "Desserts & Baking",
    "time": "25 min prep + 25–35 min baking + cooling & frosting",
    "servings": "10–12 slices · two 20 cm round layers",
    "description": "A soft, buttery vanilla sponge baked in two layers and finished with silky white vanilla buttercream, with a generous slice revealing the tender golden crumb.",
    "image": "vanilla-sponge-buttercream.jpg",
    "seed": true,
    "ingredients": [
      "VANILLA SPONGE — 340 g all-purpose flour",
      "300 g granulated sugar",
      "2½ tsp baking powder",
      "180 g softened butter (110 g salted + 70 g unsalted)",
      "3 large eggs, at room temperature",
      "270 ml whole milk, at room temperature",
      "2 tsp vanilla extract",
      "WHITE VANILLA BUTTERCREAM — 250 g unsalted butter, softened",
      "400 g powdered sugar, sifted",
      "2 tsp vanilla extract",
      "2–3 tbsp whole milk or heavy cream, as needed",
      "Small pinch of salt",
      "FOR THE PANS — Softened butter and parchment paper"
    ],
    "method": [
      "Prepare the oven. Preheat to 175°C conventional (top and bottom heat), with a rack in the centre.",
      "Prepare two cake pans. Grease two 20 cm round cake pans and line the bases with parchment paper. Dividing the batter into two pans creates the two distinct layers shown in the photograph.",
      "Bring ingredients to room temperature. The eggs, milk and butter should all be at room temperature to help the batter emulsify evenly.",
      "Combine dry ingredients. Whisk or sift the flour and baking powder together in a medium bowl and set aside.",
      "Cream the butter and sugar. Using the paddle attachment on a KitchenAid, beat the softened salted and unsalted butter with the sugar on medium speed for approximately 3–5 minutes until paler and fluffy. Scrape down the bowl occasionally.",
      "Add the eggs. Beat in the eggs one at a time, mixing well after each. If the mixture appears slightly split, add one tablespoon of the measured flour to help bring it together.",
      "Add vanilla. Mix in the vanilla extract briefly.",
      "Alternate flour and milk. On low speed, add one-third of the flour mixture, then half the milk. Repeat, finishing with the remaining flour. Mix only until incorporated to avoid a dense or tough sponge.",
      "Finish and divide the batter. Gently fold once or twice with a spatula to check for unmixed flour at the bottom. Divide the batter equally between the two prepared 20 cm pans and smooth the tops.",
      "Bake the two layers. Bake for approximately 25–35 minutes, checking from minute 25. The tops should be lightly golden and spring back when gently touched; a skewer should come out clean or with a few moist crumbs. Pan depth and ovens vary.",
      "Cool. Leave the cakes in their pans for 10–15 minutes, then carefully turn out onto cooling racks. Let both layers cool completely before frosting.",
      "Beat the buttercream base. Beat the softened unsalted butter with the paddle attachment for approximately 4–5 minutes until smooth, fluffy and noticeably paler.",
      "Add the sugar. Add the sifted powdered sugar in several additions on low speed, then beat until smooth. Add the vanilla and salt.",
      "Adjust the consistency. Add milk or cream one tablespoon at a time until the frosting is smooth and easily spreadable but still holds its shape. Beat briefly on low speed at the end to reduce large air bubbles.",
      "Fill the cake. Place one cooled sponge layer on a cake stand. Spread an even layer of vanilla buttercream over the top. Set the second sponge layer on top, with the flatter side facing upward.",
      "Frost the exterior. Apply a thin crumb coat around the top and sides and chill for 15–20 minutes. Spread the remaining buttercream over the cake, using an offset spatula to make relaxed, elegant swirls.",
      "Slice and serve. Allow the frosted cake to sit at a cool room temperature briefly before slicing so the buttercream softens and the crumb tastes tender and moist."
    ],
    "notes": "This is the ORIGINAL lighter vanilla sponge base, now with an added white vanilla buttercream and instructions for TWO 20 cm layers to match the approved photo. The richer Vanilla Butter Cake remains a separate recipe. For the softest texture, do not overmix after adding flour or overbake. The buttercream is deliberately generous for filling and coating the layer cake."
  }
];
  const byId = new Map(updates.map(recipe => [recipe.id, recipe]));
  const merge = (recipes) => {
    if (!Array.isArray(recipes)) return recipes;
    const result = recipes.map(recipe =>
      byId.has(recipe.id) ? { ...recipe, ...byId.get(recipe.id) } : recipe
    );
    for (const update of updates) {
      if (!result.some(recipe => recipe.id === update.id)) {
        result.push({ ...update });
      }
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
    console.warn('Batch 6 recipe storage update:', error);
  }
})();
/* MAIKA’S COOKBOOK — BATCH 7: Vanilla Butter Cake + Toddy Tres Leches
   APPEND ONLY to the bottom of the existing recipe-updates.js, after the last })();.
   Do NOT replace existing batches or change styles.css. */
(() => {
  'use strict';
  const updates = [
  {
    "id": "seed-2",
    "title": "Rich Vanilla Butter Cake with Swiss Meringue Buttercream",
    "category": "Desserts & Baking",
    "time": "30 min preparation + 35–45 min baking + cooling and decorating",
    "servings": "10–12 slices · two 20 cm round layers",
    "description": "A tender, buttery vanilla layer cake with a golden crumb and silky, not-too-sweet Swiss meringue buttercream.",
    "image": "vanilla-swiss-meringue-cake-batch7.jpg",
    "seed": true,
    "ingredients": [
      "BUTTER CAKE — 225 g unsalted butter, softened",
      "300 g granulated sugar",
      "4 large eggs, at room temperature",
      "2½ tsp vanilla extract",
      "300 g all-purpose flour",
      "2½ tsp baking powder",
      "½ tsp fine salt",
      "180 ml whole milk, at room temperature",
      "SWISS MERINGUE BUTTERCREAM — 4 large egg whites (approximately 120 g)",
      "240 g granulated sugar",
      "300 g unsalted butter, softened but cool",
      "2 tsp vanilla extract",
      "Small pinch of salt",
      "FOR PREPARING THE TINS — A little butter and parchment paper"
    ],
    "method": [
      "Preheat the oven to 170°C using conventional top-and-bottom heat. Grease and line the bases of two 20 cm round cake tins.",
      "Sift or whisk the flour, baking powder and salt together in a separate bowl, making sure the baking powder is evenly distributed.",
      "Using the paddle attachment of a stand mixer, beat the softened butter and granulated sugar on medium speed for approximately 4–5 minutes, until noticeably paler and fluffy. Scrape down the bowl regularly.",
      "Add the eggs one at a time, mixing well after each addition. Add the vanilla extract and mix briefly. If the mixture begins to split, add a spoonful of the measured flour.",
      "On low speed, add the dry ingredients in three additions, alternating with the milk in two additions. Begin and finish with flour. Mix only until combined, then gently fold with a spatula to check for any unmixed flour at the bottom.",
      "Divide the batter equally between the prepared tins and smooth the surfaces. Bake for approximately 35–45 minutes, checking from minute 30; the cakes are ready when the centres spring back lightly and a skewer comes out clean or with a few moist crumbs.",
      "Cool the cakes in their tins for 10–15 minutes, then turn out onto wire racks and allow them to cool completely before frosting.",
      "To make the Swiss meringue buttercream, put the egg whites and sugar into a clean heatproof bowl over a pan of gently simmering water, ensuring the bowl does not touch the water. Whisk continuously until the sugar dissolves and the mixture reaches 70–72°C on a food thermometer.",
      "Transfer the mixture to the stand mixer with the whisk attachment. Whip on medium-high speed until thick, glossy, firm peaks form and the bowl has cooled to room temperature. This cooling step is important to prevent the butter from melting.",
      "Switch to the paddle attachment. Add the softened-but-cool butter gradually, a few pieces at a time, beating until incorporated. The mixture may look curdled temporarily; continue mixing. If it becomes soupy, refrigerate briefly and beat again.",
      "Add the vanilla and a pinch of salt. Mix on low speed until the buttercream is smooth, silky and relatively free of air bubbles.",
      "Place the first completely cooled cake layer on a stand or serving plate. Spread an even layer of Swiss meringue buttercream over the top, then place the second cake layer on top.",
      "Apply a thin crumb coat to the top and sides and refrigerate for approximately 15–20 minutes. Use the remaining buttercream to frost the cake generously, smoothing the sides and creating gentle swirls on top.",
      "Allow the cake to come toward room temperature before serving so the buttercream becomes silky and the cake tastes tender and buttery. Cut into slices with a clean sharp knife."
    ],
    "notes": "This is the richer vanilla BUTTER cake, separate from the lighter vanilla sponge recipe. The two-layer 20 cm format is a presentation choice for this version; the original saved recipe did not specify a pan size. Swiss meringue buttercream has a silkier, less sugary finish than American buttercream. Use a thermometer for the heated egg whites; do not add butter until the meringue has cooled. Keep the cake chilled if storing and bring slices toward room temperature to serve."
  },
  {
    "id": "seed-9",
    "title": "Toddy Tres Leches Cake",
    "category": "Desserts & Baking",
    "time": "45 min preparation + 28–35 min baking + overnight chilling",
    "servings": "12–15 portions · 23 × 33 cm dish",
    "description": "A deeply soaked, delicate vanilla-and-Toddy sponge with chocolate-milk tres leches and a silky piped meringue topping, inspired by the original homemade cake.",
    "image": "toddy-tres-leches-batch7.jpg",
    "seed": true,
    "ingredients": [
      "SPONGE — 6 large eggs",
      "160 g granulated sugar",
      "170 g all-purpose flour",
      "30 g Toddy chocolate powder",
      "60 ml whole milk",
      "25 ml neutral vegetable oil",
      "8 g baking powder",
      "10 ml vanilla extract",
      "Pinch of salt",
      "TRES LECHES SOAK — 400 ml evaporated milk",
      "300 g sweetened condensed milk",
      "200 ml heavy cream",
      "100 g Toddy chocolate powder",
      "½ tsp vanilla extract",
      "Pinch of salt",
      "Extra whole or evaporated milk, to adjust sweetness and consistency",
      "SWISS MERINGUE TOPPING — 3 large egg whites (approximately 90 g)",
      "180 g granulated sugar",
      "½ tsp vanilla extract",
      "10–15 g Toddy powder, optional, for a light dusting just before serving"
    ],
    "method": [
      "Preheat the oven to 170°C using conventional heat. Lightly grease or line a 23 × 33 cm baking dish suitable for serving the cake directly from the dish.",
      "Beat the eggs and sugar using the stand mixer whisk attachment for approximately 7–10 minutes, until very pale, thick and ribbon-like. The mixture should leave a visible trail briefly when the whisk is lifted.",
      "Sift together the flour, Toddy powder, baking powder and salt. Fold these dry ingredients into the whipped eggs in several additions, using a wide spatula and gentle movements to preserve as much air as possible.",
      "In a separate bowl, combine the milk, vegetable oil and vanilla. Stir a few spoonfuls of batter into this mixture to lighten it, then gently fold everything back into the main batter.",
      "Pour into the prepared baking dish and bake for approximately 28–35 minutes, until the cake is springy in the centre and a skewer comes out clean. Allow it to cool until just warm.",
      "Prepare the soak by whisking together the evaporated milk, condensed milk, heavy cream, Toddy, vanilla and salt until the powder is fully incorporated. Taste the mixture before pouring it over the cake.",
      "If the milk mixture is sweeter than you prefer, add extra evaporated milk or whole milk a little at a time. The finished soak should taste balanced, creamy and gently chocolatey, not intensely chocolate-flavoured.",
      "Use a skewer to make holes all across the warm sponge, reaching almost to the bottom. Slowly pour the tres leches mixture over the cake in several rounds, waiting for each addition to absorb before adding more.",
      "Continue soaking until the sponge is thoroughly saturated. It is normal for some milk to collect at the edges and bottom of the dish. Cover and refrigerate for at least 6 hours, preferably overnight.",
      "For the Swiss meringue topping, combine the egg whites and sugar in a clean heatproof bowl over gently simmering water, ensuring the bowl does not touch the water. Whisk continuously until the sugar has dissolved and the mixture reaches 70–72°C on a food thermometer.",
      "Transfer the warm egg-white mixture to the stand mixer with the whisk attachment. Whip until thick, glossy, stable peaks form and the bowl has cooled. Beat in the vanilla briefly.",
      "For the piped finish shown in the photograph, transfer the meringue to a piping bag fitted with a wide star or round tip. Pipe close rows of soft swirls over the fully chilled tres leches cake. Alternatively, spread it generously with an offset spatula.",
      "If desired, dust a little Toddy powder over the meringue just before serving. Avoid folding a large amount of Toddy into the finished meringue, since it can make the topping lose firmness.",
      "Cut the cake into generous squares and serve chilled, spooning some of the chocolate-milk soak from the dish around each portion."
    ],
    "notes": "This recipe retains the original vanilla sponge with a subtle Toddy flavour and a generous three-milk soak. In the earlier homemade attempt the soak initially tasted too sweet; balance it with additional evaporated or whole milk. The original topping was Italian meringue and became less firm when Toddy was mixed into it. This version PROPOSES Swiss meringue for a silkier texture, but that variation has not yet been tested on this cake. The approved image is a stylized AI interpretation of the user’s actual tres leches photograph."
  }
];
  const byId = new Map(updates.map(recipe => [recipe.id, recipe]));
  function merge(recipes) {
    if (!Array.isArray(recipes)) return recipes;
    const merged = recipes.map(recipe =>
      byId.has(recipe.id) ? { ...recipe, ...byId.get(recipe.id) } : recipe
    );
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
    console.warn('Batch 7 recipe storage update:', error);
  }
})();
/* Maika's Cookbook — Batch 8: Apple Tarte Tatin + Molten Chocolate Fondants.
   APPEND this entire block to the END of your existing recipe-updates.js.
   Do not replace or delete the code from Batches 1–7. */
(() => {
  'use strict';
  const updates = [
  {
    "id": "seed-10",
    "title": "Caramelized Apple Tarte Tatin",
    "category": "Desserts & Baking",
    "time": "25–30 min prep + 30–35 min baking",
    "servings": "6–8 slices · 23–24 cm tart",
    "description": "A classic French upside-down apple tart with glossy amber caramel, tender apples and a golden, buttery shortcrust pastry.",
    "image": "apple-tarte-tatin-batch8.jpg",
    "seed": true,
    "ingredients": [
      "CARAMELIZED APPLES — 6–7 medium firm apples (Pink Lady, Braeburn or Granny Smith)",
      "150 g granulated sugar",
      "75 g unsalted butter, cold and cubed",
      "1 tsp vanilla extract (optional)",
      "Small pinch of salt",
      "PASTRY — 1 sheet all-butter shortcrust pastry (approximately 230–280 g)",
      "A little flour for rolling, if needed"
    ],
    "method": [
      "Preheat the oven to 180°C conventional heat. Prepare a 23–24 cm ovenproof frying pan or tarte Tatin dish.",
      "Peel the apples, cut them into halves or large quarters and remove the cores. Keep the pieces fairly large so they retain their shape.",
      "Roll the shortcrust pastry into a circle slightly larger than the pan. Refrigerate the pastry while preparing the caramel.",
      "Scatter the sugar evenly over the base of the pan. Heat over medium heat until it begins to melt, without vigorous stirring.",
      "Continue heating until the sugar becomes a deep golden-amber caramel. Watch closely, because it can change from golden to burnt in seconds.",
      "Reduce the heat and add the cold butter in several additions, stirring carefully until incorporated. The caramel may bubble and splatter.",
      "Stir in the pinch of salt and optional vanilla extract.",
      "Arrange the apples tightly in the caramel, with the rounded sides facing down. Pack them closely because they will shrink as they cook.",
      "Cook the apples over medium-low heat for approximately 10–15 minutes, until they begin to soften and release some juices.",
      "Remove the pan from the heat and allow the bubbling caramel to settle briefly.",
      "Lay the chilled pastry over the apples. Carefully tuck the edges down inside the pan and cut a small steam vent in the centre.",
      "Bake for approximately 30–35 minutes, until the pastry is thoroughly cooked and deeply golden.",
      "Remove from the oven and rest for 5–10 minutes. The caramel should settle but remain fluid enough to release from the pan.",
      "Wearing oven gloves, place a large serving plate over the pan and invert the tart carefully in one confident movement. Beware of hot caramel.",
      "Serve warm, plain or with vanilla ice cream or lightly whipped cream."
    ],
    "notes": "The original apple and pastry quantities were not recovered; the amounts above are practical estimates for a 23–24 cm tart. Your first caramel burned, so watch it closely and avoid overcooking. Bake the pastry until properly golden, and invert while the caramel is still fluid."
  },
  {
    "id": "seed-11",
    "title": "Molten Chocolate Fondants",
    "category": "Desserts & Baking",
    "time": "15 min prep + 15–20 min chilling + approximately 11 min baking",
    "servings": "2 large fondants · approximately 10 cm ramekins",
    "description": "Individual dark chocolate cakes with delicate baked exteriors and rich, warm molten chocolate centres that flow onto the plate when cut.",
    "image": "molten-chocolate-fondants-batch8.jpg",
    "seed": true,
    "ingredients": [
      "100 g good-quality dark chocolate (60–70% cocoa)",
      "90 g unsalted butter",
      "2 large eggs",
      "55 g granulated sugar",
      "25 g all-purpose flour",
      "1 tsp vanilla extract",
      "Small pinch of salt",
      "Extra softened butter and flour for preparing the ramekins"
    ],
    "method": [
      "Grease two large oven-safe ramekins, approximately 10 cm in diameter, thoroughly with softened butter, covering the bottoms and sides.",
      "Dust the inside of each ramekin with flour. Rotate to coat evenly, then tap out any excess.",
      "Chop the dark chocolate into small pieces and place in a heatproof bowl with the butter.",
      "Melt the chocolate and butter gently over barely simmering water, stirring until smooth. Alternatively, microwave in short bursts, stirring between each.",
      "Remove from the heat and cool slightly. The chocolate mixture should remain fluid but not be hot.",
      "In a separate bowl, whisk the eggs and sugar until well combined, slightly thickened and a little lighter in colour.",
      "Gradually pour the warm chocolate mixture into the egg mixture while whisking gently.",
      "Mix in the vanilla extract and pinch of salt.",
      "Sift in the flour and fold gently with a spatula just until no dry flour remains.",
      "Divide the batter evenly between the two prepared ramekins.",
      "Refrigerate for approximately 15–20 minutes to firm the batter slightly.",
      "Meanwhile, preheat the oven to 200°C conventional heat, or 190°C fan.",
      "Set the ramekins on a baking tray and bake for approximately 11 minutes. The edges should look set while the centres still wobble slightly. Timing varies with the oven and ramekin size.",
      "Remove from the oven and allow to rest for approximately 1–2 minutes.",
      "Run a thin knife carefully around the edges, place a dessert plate over each ramekin and invert gently.",
      "Lift the ramekins away and serve immediately, while the centres are warm and molten."
    ],
    "notes": "This preserves your original recipe without cocoa powder. Eleven minutes is a starting point rather than a guaranteed bake time; testing one fondant first is worthwhile because even 1–2 minutes can change the centre from molten to set."
  }
];
  const byId = new Map(updates.map(recipe => [recipe.id, recipe]));
  function merge(items) {
    if (!Array.isArray(items)) return items;
    const result = items.map(recipe =>
      byId.has(recipe.id) ? { ...recipe, ...byId.get(recipe.id) } : recipe
    );
    for (const update of updates) {
      if (!result.some(recipe => recipe.id === update.id)) result.push({ ...update });
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
    console.warn('Batch 8 recipe storage update:', error);
  }
})();
/* Maika's Cookbook — Batch 9: Vanilla Cupcakes + Chocolate Cupcakes.
   APPEND to the END of your existing recipe-updates.js; keep all prior batches. */
(() => {
  'use strict';
  const updates = [
  {
    "id": "seed-4",
    "title": "Soft Vanilla Cupcakes with Swiss Meringue Buttercream",
    "category": "Desserts & Baking",
    "time": "20 min prep + 17–21 min baking + cooling & frosting",
    "servings": "6 cupcakes",
    "image": "vanilla-cupcakes-batch9.jpg",
    "seed": true,
    "description": "Small-batch, soft vanilla cupcakes with a delicate, moist crumb and silky, lightly sweet vanilla Swiss meringue buttercream.",
    "ingredients": [
      "VANILLA CUPCAKES — 75 g unsalted butter, softened",
      "80 g caster sugar",
      "1 large egg, room temperature",
      "1 tsp vanilla extract",
      "90 g all-purpose flour",
      "¾ tsp baking powder",
      "60 ml whole milk, room temperature",
      "15 g full-fat sour cream",
      "SWISS MERINGUE BUTTERCREAM — 2 large egg whites (approximately 60 g)",
      "120 g granulated sugar",
      "150 g unsalted butter, softened but cool",
      "1 tsp vanilla extract",
      "Small pinch of salt"
    ],
    "method": [
      "Preheat the oven to 175°C conventional heat and line six wells of a muffin tin with cupcake liners.",
      "Whisk the flour and baking powder together in a small bowl to distribute the raising agent evenly.",
      "Using the paddle attachment on a stand mixer, cream the softened butter and caster sugar for approximately 3–4 minutes, until pale and fluffy.",
      "Add the room-temperature egg and beat until incorporated, scraping down the sides of the bowl as needed.",
      "Mix in the vanilla extract.",
      "In a small jug, whisk the whole milk and sour cream together until smooth.",
      "With the mixer on low, add one-third of the flour mixture followed by half of the milk mixture. Repeat and finish with the remaining flour. Mix only until incorporated.",
      "Divide the batter evenly between six cupcake liners, filling each approximately two-thirds full.",
      "Bake for approximately 17–21 minutes until the cupcakes spring back gently and a toothpick inserted into the centre comes out clean.",
      "Cool in the muffin tin for approximately five minutes, then transfer to a wire rack and cool completely before frosting.",
      "For the Swiss meringue buttercream, place the egg whites and sugar in a heatproof bowl over a pan of gently simmering water, keeping the bowl above the water. Whisk continuously until the sugar dissolves and the mixture reaches approximately 70–72°C.",
      "Transfer to a stand mixer fitted with the whisk attachment and whip until thick and glossy and the bowl has cooled to room temperature.",
      "Switch to the paddle attachment and add the softened, cool butter gradually. Continue mixing until the buttercream becomes smooth and silky.",
      "Mix in the vanilla extract and salt. Beat briefly on low speed to reduce large air bubbles.",
      "Pipe elegant swirls of buttercream onto the completely cooled cupcakes using a large star or round piping tip."
    ],
    "notes": "The sour cream adds tenderness. Do not overmix after adding flour or overbake. This is a small batch of Swiss meringue buttercream rather than American buttercream. A thermometer is recommended when heating the egg whites and sugar."
  },
  {
    "id": "seed-5",
    "title": "Moist Chocolate Cupcakes with Chocolate Buttercream",
    "category": "Desserts & Baking",
    "time": "20 min prep + 17–21 min baking + cooling & frosting",
    "servings": "6 cupcakes",
    "image": "chocolate-cupcakes-batch9.jpg",
    "seed": true,
    "description": "Deeply chocolatey, moist cupcakes made with cocoa, melted dark chocolate and hot coffee, topped with smooth, creamy chocolate buttercream.",
    "ingredients": [
      "CHOCOLATE CUPCAKES — 63 g all-purpose flour",
      "22 g unsweetened cocoa powder",
      "100 g granulated sugar",
      "½ tsp baking soda",
      "¼ tsp baking powder",
      "½ large beaten egg (approximately 25 g without shell)",
      "60 ml buttermilk",
      "40 ml neutral vegetable oil",
      "½ tsp vanilla extract",
      "60 ml hot freshly brewed coffee",
      "30 g dark chocolate, chopped",
      "CHOCOLATE BUTTERCREAM — 85 g salted butter, softened",
      "140 g powdered sugar, sifted",
      "2 tbsp unsweetened cocoa powder",
      "2 tbsp heavy cream, plus more if needed",
      "1 tsp vanilla extract",
      "20–30 g melted dark chocolate (optional)"
    ],
    "method": [
      "Preheat the oven to 175°C conventional heat and line six wells of a muffin tin with cupcake liners.",
      "Sift the flour, cocoa powder, baking soda and baking powder into a bowl. Add the sugar and whisk until combined.",
      "Beat one large egg in a separate bowl and weigh approximately 25 g of it for the recipe.",
      "In another bowl, whisk together the measured egg, buttermilk, vegetable oil and vanilla extract.",
      "Pour the wet ingredients into the dry ingredients and stir gently until just combined.",
      "Melt the chopped dark chocolate gently in a microwave using short bursts or over barely simmering water.",
      "Stir the melted chocolate into the batter, then gradually add the hot coffee and mix until smooth. The batter will be fairly fluid.",
      "Divide the batter evenly between the six liners, filling each no more than approximately two-thirds full.",
      "Bake for approximately 17–21 minutes. A toothpick inserted into the centre should come out clean or with a few moist crumbs.",
      "Allow the cupcakes to cool in the tin for five minutes, then transfer to a wire rack until completely cool.",
      "For the buttercream, beat the softened salted butter using a stand mixer with the paddle attachment for approximately 3–4 minutes until creamy and paler.",
      "Sift together the powdered sugar and cocoa powder. Add gradually to the butter on low speed.",
      "Add the vanilla and heavy cream. Beat until smooth and fluffy, adding a little extra cream if necessary for a silky piping consistency.",
      "If using extra dark chocolate, allow it to cool to room temperature after melting, then beat it into the buttercream.",
      "Transfer the frosting to a piping bag and pipe generous chocolate swirls onto the cooled cupcakes.",
      "Serve at room temperature for the softest cupcake crumb and smoothest frosting."
    ],
    "notes": "The hot coffee intensifies chocolate flavour without making the cupcakes taste strongly of coffee. This frosting follows the later, lighter and sweeter chocolate buttercream variation, with melted chocolate optional. Avoid overbaking for a moist crumb."
  }
];
  const byId = new Map(updates.map(recipe => [recipe.id, recipe]));
  function merge(items) {
    if (!Array.isArray(items)) return items;
    const merged = items.map(recipe =>
      byId.has(recipe.id) ? { ...recipe, ...byId.get(recipe.id) } : recipe
    );
    for (const recipe of updates) {
      if (!merged.some(item => item.id === recipe.id)) merged.push({ ...recipe });
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
    console.warn('Batch 9 recipe storage update:', error);
  }
})();
/* Maika's Cookbook — Batch 10: Garlic Parmesan Mashed Potatoes + Mushroom Risotto.
   APPEND this whole block to the END of the EXISTING recipe-updates.js.
   Do not replace the file or delete previous batches. */
(() => {
  'use strict';
  const updates = [
  {
    "id": "seed-15",
    "title": "Garlic & Herb Parmesan Mashed Potatoes",
    "category": "Sides & Sauces",
    "time": "10 min preparation + 25–30 min cooking",
    "servings": "3–4 as a side",
    "description": "Rich, velvety mashed potatoes enriched with garlic-and-thyme-infused milk, plenty of butter and freshly grated Parmesan.",
    "image": "garlic-parmesan-mashed-potatoes-batch10.jpg",
    "seed": true,
    "ingredients": [
      "6 small-to-medium potatoes (approximately 750–900 g)",
      "60–80 g unsalted butter, cubed",
      "120–180 ml whole milk",
      "40–60 g freshly grated Parmesan",
      "3–4 garlic cloves, lightly crushed",
      "3–4 fresh thyme sprigs",
      "Fine salt, to taste",
      "Freshly ground black pepper, to taste"
    ],
    "method": [
      "Prepare the potatoes. Peel the potatoes and cut them into evenly sized chunks, approximately 4–5 cm, so they cook at the same rate.",
      "Start in cold water. Place the potatoes in a large saucepan and cover with cold water by approximately 2–3 cm. Season the water generously with salt.",
      "Cook until tender. Bring to a gentle boil, then reduce to a steady simmer. Cook for approximately 15–25 minutes, depending on the size and variety of the potatoes, until a knife passes through without resistance.",
      "Infuse the milk. While the potatoes cook, add the milk, crushed garlic cloves and thyme sprigs to a small saucepan.",
      "Warm gently. Heat the milk over low heat for approximately 10–15 minutes, until fragrant and hot without boiling vigorously. Remove from the heat and let the garlic and thyme continue infusing.",
      "Drain thoroughly. Once the potatoes are tender, drain them well. Return them to the warm saucepan over very low heat for approximately one minute to allow excess moisture to evaporate.",
      "Mash while hot. Pass the potatoes through a potato ricer for the smoothest texture, or mash thoroughly by hand. Avoid a blender or food processor, which can make them gluey.",
      "Add the butter first. Add approximately 60 g of cubed butter to the hot potatoes and gently fold until fully absorbed.",
      "Incorporate the milk. Strain the garlic-and-thyme-infused milk, then add it gradually. Begin with approximately 120 ml and increase until the mash reaches your preferred creamy consistency.",
      "Add the Parmesan. Fold in approximately 50 g of finely grated Parmesan. Taste and add more if you want a stronger cheesy flavour.",
      "Adjust the seasoning. Add freshly ground black pepper and salt as needed, remembering that Parmesan already contributes saltiness.",
      "Finish the texture. If the mash feels too thick, add another splash of warm milk. For an especially luxurious finish, incorporate the remaining butter.",
      "Serve immediately. Transfer to a warm serving bowl, create soft swirls with a spoon and garnish with a little thyme or additional Parmesan."
    ],
    "notes": "For silky potatoes, add the butter before the warm infused milk and avoid overworking the starch. Start with approximately 150 ml milk and 50 g Parmesan, then adjust according to texture and taste."
  },
  {
    "id": "seed-16",
    "title": "Creamy Mushroom Parmesan Risotto",
    "category": "Pasta & Rice",
    "time": "15 min preparation + 30–40 min cooking",
    "servings": "6–8",
    "description": "A creamy, deeply savoury risotto with golden sautéed mushrooms, Parmesan and thyme, made with round-grain rice.",
    "image": "mushroom-parmesan-risotto-batch10.jpg",
    "seed": true,
    "ingredients": [
      "500 g round-grain rice suitable for risotto (J. Sendra or Arborio)",
      "500–600 g fresh mushrooms, sliced",
      "1 medium onion, finely diced",
      "4 garlic cloves, minced",
      "1.5–2 litres chicken or vegetable stock, kept hot",
      "150 ml dry white wine (optional)",
      "80 g freshly grated Parmesan",
      "40 g unsalted butter",
      "2 tbsp olive oil",
      "3–4 fresh thyme sprigs",
      "Salt and freshly ground black pepper, to taste"
    ],
    "method": [
      "Prepare the stock. Pour the chicken or vegetable stock into a saucepan and bring it to a gentle simmer. Keep it hot throughout cooking.",
      "Prepare the mushrooms. Clean the mushrooms with a slightly damp cloth and slice them evenly. Avoid soaking them in water.",
      "Brown the mushrooms. Heat one tablespoon of olive oil in a large frying pan over medium-high heat. Add the mushrooms in batches, allowing them to develop a golden-brown colour before stirring too much.",
      "Season and reserve. Once the mushrooms are browned and their excess moisture has evaporated, season lightly with salt and pepper. Transfer to a plate and set aside.",
      "Prepare the aromatics. In a wide, heavy-bottomed saucepan, heat the remaining olive oil over medium heat. Add the finely diced onion and cook gently for approximately 5–7 minutes until softened and translucent.",
      "Add the garlic and thyme. Stir in the minced garlic and thyme leaves. Cook for approximately one minute, until fragrant.",
      "Toast the rice. Add the dry rice directly to the saucepan without rinsing it. Stir for 1–2 minutes so the grains become coated in the aromatic oil.",
      "Deglaze with wine. If using white wine, pour it into the saucepan and stir until most of the liquid has evaporated.",
      "Begin adding stock. Add one or two ladles of hot stock, stirring frequently. Allow most of the liquid to be absorbed before adding another ladle.",
      "Continue cooking. Repeat the process gradually for approximately 18–22 minutes, maintaining a gentle simmer. Stir regularly to help release the rice's starch and create a creamy consistency.",
      "Check the rice. Begin tasting toward the end of cooking. The grains should be tender with a slight bite in the centre, not hard or chalky.",
      "Add the mushrooms. Return the sautéed mushrooms to the saucepan and stir gently. Reserve a small portion for garnishing if desired.",
      "Adjust the consistency. Add another splash of hot stock if the risotto has become too thick. It should be creamy and gently spread across the plate rather than sitting in a stiff mound.",
      "Finish with butter and Parmesan. Turn off the heat. Add the butter and freshly grated Parmesan, stirring gently until melted and incorporated.",
      "Rest briefly. Allow the risotto to rest for approximately one minute, then stir again. Adjust the seasoning with salt and black pepper.",
      "Serve immediately. Spoon the risotto into warm shallow bowls. Finish with reserved golden mushrooms, a little extra Parmesan and fresh thyme."
    ],
    "notes": "The original version used J. Sendra round-grain rice, retained here as an option. Browning the mushrooms separately builds flavour. Risotto is best served immediately; keep extra hot stock ready to loosen it before serving."
  }
];
  const byId = new Map(updates.map(recipe => [recipe.id, recipe]));
  function merge(items) {
    if (!Array.isArray(items)) return items;
    const result = items.map(recipe =>
      byId.has(recipe.id) ? { ...recipe, ...byId.get(recipe.id) } : recipe
    );
    for (const recipe of updates) {
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
    console.warn('Batch 10 recipe storage update:', error);
  }
})();
/* Maika's Cookbook — Batch 11: Chicken Noodle Soup + Ground Beef & Sweet Potato Bowls.
   APPEND the whole block to the END of the existing recipe-updates.js.
   Keep all code from earlier batches intact. */
(() => {
  'use strict';
  const updates = [
  {
    "id": "seed-19",
    "title": "Homemade Chicken Noodle Soup",
    "category": "Main Courses",
    "time": "20 min preparation + 75–90 min simmering",
    "servings": "Large pot · approximately 6–8 servings",
    "description": "A comforting homemade chicken soup with golden broth, tender shredded chicken, sweet vegetables, fragrant herbs and delicate fideos noodles.",
    "image": "chicken-noodle-soup-batch11.jpg",
    "seed": true,
    "ingredients": [
      "CHICKEN BROTH — 4 whole chicken legs",
      "360 g carrots",
      "4 celery stalks",
      "1 medium onion",
      "1 leek",
      "1 medium tomato",
      "5–6 garlic cloves",
      "2.5 litres water, plus up to 750 ml extra as needed",
      "1 tbsp olive oil",
      "3–4 fresh parsley sprigs",
      "2–3 fresh thyme sprigs",
      "2 bay leaves",
      "1 tsp Caldo Benny seasoning, initially",
      "Salt and freshly ground black pepper, to taste",
      "TO FINISH — 100–120 g fine fideos noodles",
      "Fresh parsley, chopped"
    ],
    "method": [
      "Prepare the vegetables. Peel the carrots and cut into bite-sized pieces. Slice the celery and leek, dice the onion and tomato, and lightly crush the garlic cloves.",
      "Prepare the chicken. Pat the chicken legs dry with kitchen paper and inspect for any remaining feather fragments.",
      "Soften the aromatics. Heat the olive oil in a large stockpot over medium heat. Add the onion, leek, carrots and celery. Cook gently for 5–7 minutes, stirring occasionally.",
      "Add the garlic and tomato. Stir in the crushed garlic and chopped tomato. Cook for another 1–2 minutes until fragrant.",
      "Add the chicken and herbs. Place the chicken legs in the pot with the parsley sprigs, thyme and bay leaves.",
      "Add the water. Pour in approximately 2.5 litres of cold water, ensuring the chicken is mostly submerged.",
      "Bring to a gentle simmer. Heat gradually until small bubbles appear. Skim away any foam that rises to the surface.",
      "Season lightly. Add approximately one teaspoon of Caldo Benny seasoning. Avoid adding too much salt at this stage because the broth becomes more concentrated as it cooks.",
      "Simmer slowly. Partially cover the pot and simmer gently for approximately 75–90 minutes, until the chicken is tender and the broth develops a rich flavour. Ensure the chicken is fully cooked.",
      "Adjust the liquid. If too much water evaporates, add some of the reserved 750 ml. Maintain a gentle simmer rather than a vigorous boil.",
      "Remove the chicken. Carefully transfer the chicken legs to a plate and allow them to cool enough to handle.",
      "Shred the meat. Remove the skin and bones, then shred the chicken into bite-sized pieces. Return the meat to the broth.",
      "Check the vegetables. Taste the carrots and celery; they should be tender but not completely falling apart.",
      "Cook the noodles separately. In a separate saucepan, cook the fideos according to their packet instructions, using salted water or a little prepared broth.",
      "Adjust the seasoning. Taste the soup and add more Caldo Benny, salt or black pepper only as needed. Remove the bay leaves and woody herb stems.",
      "Serve. Place a portion of noodles in each bowl, ladle the hot chicken soup over them and finish with freshly chopped parsley."
    ],
    "notes": "Keep the cooked noodles separate from the broth when storing leftovers so they do not become soggy. If desired, strain and reserve a portion of plain broth before adding the shredded chicken back, as in the original preparation."
  },
  {
    "id": "seed-25",
    "title": "Ground Beef & Roasted Sweet Potato Bowls",
    "category": "Main Courses",
    "time": "20 min preparation + 30–40 min cooking",
    "servings": "Approximately 6–8 generous servings",
    "description": "A colourful bowl of spiced ground beef, golden roasted sweet potatoes, creamy avocado, crisp vegetables and a tangy lime-yogurt dressing.",
    "image": "beef-sweet-potato-bowl-batch11.jpg",
    "seed": true,
    "ingredients": [
      "ROASTED SWEET POTATOES — 1.5 kg sweet potatoes",
      "2 tbsp olive oil",
      "1½ tsp smoked or sweet paprika",
      "1 tsp ground cumin",
      "Salt and black pepper, to taste",
      "SEASONED GROUND BEEF — 1 kg ground beef",
      "1 tbsp olive oil, if needed",
      "1½ tsp paprika",
      "1 tsp ground cumin",
      "½ tsp garlic powder",
      "Salt and black pepper, to taste",
      "FRESH VEGETABLES — 2–3 ripe avocados",
      "3 medium tomatoes",
      "1 large cucumber",
      "1 small red onion",
      "Fresh lime juice (optional)",
      "CREAMY DRESSING — 200 g plain Greek yogurt",
      "Juice of 1 lime",
      "1 tsp Dijon mustard",
      "1–2 tbsp water, to adjust consistency",
      "Salt and pepper, to taste"
    ],
    "method": [
      "Preheat the oven to 200°C conventional heat. Line two large baking trays with parchment paper.",
      "Prepare the sweet potatoes. Peel them and cut into evenly sized cubes, approximately 2 cm.",
      "Season the potatoes. Toss the cubes with olive oil, paprika, cumin, salt and black pepper until evenly coated.",
      "Arrange on the trays. Spread the sweet potato cubes in a single layer, leaving some space between them to help them roast rather than steam.",
      "Roast for approximately 30–40 minutes, turning halfway through, until tender inside with golden, caramelized edges.",
      "Prepare the beef. While the sweet potatoes roast, heat a large frying pan over medium-high heat. Add olive oil if the beef is particularly lean.",
      "Brown the beef. Add the ground beef and break it into small pieces with a wooden spoon. Allow some of the meat to develop a browned crust before stirring too frequently.",
      "Season the meat. Add paprika, cumin, garlic powder, salt and black pepper. Stir until evenly distributed.",
      "Finish cooking the beef. Cook until fully browned and no pink remains, approximately 8–12 minutes depending on the pan and quantity. Ground beef should reach 71°C internally.",
      "Prepare the tomatoes. Wash and dice the tomatoes into bite-sized pieces.",
      "Prepare the cucumber and onion. Dice the cucumber and finely chop the red onion. For a milder flavour, briefly soak the chopped onion in cold water and drain.",
      "Prepare the dressing. Whisk together Greek yogurt, lime juice, Dijon mustard, salt and black pepper.",
      "Adjust the dressing. Add water one tablespoon at a time until smooth and pourable.",
      "Slice the avocado just before assembling to help preserve its colour. Add a little lime juice if desired.",
      "Assemble the bowls. Divide the roasted sweet potatoes between serving bowls and add a generous portion of seasoned ground beef.",
      "Add the fresh ingredients. Arrange the tomatoes, cucumber, red onion and avocado around the beef and sweet potatoes.",
      "Finish and serve. Drizzle with the creamy lime-yogurt dressing and serve while the beef and sweet potatoes are warm."
    ],
    "notes": "The original recipe recorded the quantities of beef, sweet potatoes and avocados, but not the exact fresh vegetable or dressing amounts; those are practical suggested proportions. For meal prep, store the warm components separately from the vegetables and dressing, and cut avocado just before serving."
  }
];
  const byId = new Map(updates.map(recipe => [recipe.id, recipe]));
  function merge(items) {
    if (!Array.isArray(items)) return items;
    const merged = items.map(recipe =>
      byId.has(recipe.id) ? { ...recipe, ...byId.get(recipe.id) } : recipe
    );
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
    console.warn('Batch 11 recipe storage update:', error);
  }
})();
/* Maika's Cookbook — Batch 12 corrected landscape real-photo version: Rich & Moist Chocolate Cake + Silky Chocolate Buttercream.
   APPEND this whole block to the END of existing recipe-updates.js. Do not replace earlier batches. */
(() => {
  'use strict';
  const updates = [
  {
    "id": "seed-3",
    "title": "Rich & Moist Chocolate Cake",
    "category": "Desserts & Baking",
    "time": "20 min preparation + 30–40 min baking",
    "servings": "One two-layer 20 cm cake",
    "description": "A deeply chocolatey, tender cake with a soft, moist crumb. Hot coffee intensifies the cocoa flavour without a pronounced coffee taste.",
    "image": "https://images.unsplash.com/photo-1517427294546-5aa121f68e8a?auto=format&fit=crop&crop=entropy&w=2400&h=1350&q=85",
    "seed": true,
    "ingredients": [
      "250 g all-purpose flour",
      "70 g unsweetened cocoa powder",
      "300 g granulated sugar",
      "2 tsp baking powder",
      "1½ tsp baking soda",
      "½ tsp salt",
      "3 large eggs",
      "180 ml neutral vegetable oil",
      "240 ml buttermilk",
      "2 tsp vanilla extract",
      "240 ml hot coffee or hot water"
    ],
    "method": [
      "Preheat the oven to 175°C conventional heat. Grease two 20 cm round cake tins and line their bases with parchment paper.",
      "In a large bowl, sift together the flour, cocoa powder, baking powder, baking soda and salt. Add the sugar and whisk thoroughly.",
      "In a separate bowl, whisk the eggs, vegetable oil, buttermilk and vanilla until smooth.",
      "Pour the wet ingredients into the dry ingredients and mix gently until no visible pockets of flour remain. Avoid overmixing.",
      "Gradually pour in the hot coffee or water while mixing on low speed or whisking gently. The batter will become noticeably thin; this is normal.",
      "Divide the batter evenly between the prepared tins. Gently tap them on the counter to release large air bubbles.",
      "Place the tins on the middle oven rack and bake for approximately 30–40 minutes, checking from 30 minutes onward.",
      "Insert a skewer into the centre. It should come out clean or with a few moist crumbs rather than wet batter.",
      "Leave the cakes in their tins for approximately 10–15 minutes before carefully turning them out onto a wire rack.",
      "Allow the layers to cool completely before adding frosting. Warm cake will melt buttercream.",
      "If the cakes have domed significantly, use a serrated knife to level the tops.",
      "Place the first cake layer on a serving plate, spread with chocolate buttercream, add the second layer and frost the top and sides.",
      "Smooth the frosting with an offset spatula or create soft, textured swirls."
    ],
    "notes": "Your original recipe used 240 ml goat milk mixed with one tablespoon of lemon juice as a buttermilk substitute; let stand about 10 minutes. The original cake frosting was not recorded, so the chocolate buttercream in Batch 12 is a suggested pairing, not a verified original. Baking times and tin sizes are practical estimates."
  },
  {
    "id": "seed-7",
    "title": "Silky Chocolate Buttercream",
    "category": "Desserts & Baking",
    "time": "15–20 min",
    "servings": "One small batch",
    "description": "A smooth, creamy chocolate frosting for filling cakes, frosting cupcakes or piping beautiful swirls. Two original variations are preserved.",
    "image": "https://images.unsplash.com/photo-1590080875852-ba44f83ff2db?auto=format&fit=crop&crop=entropy&w=2400&h=1350&q=85",
    "seed": true,
    "ingredients": [
      "ORIGINAL CHOCOLATE-ENRICHED VERSION",
      "85 g unsalted butter, softened",
      "125 g powdered sugar, sifted",
      "22 g unsweetened cocoa powder, sifted",
      "50 g dark chocolate, melted and cooled",
      "½ tsp vanilla extract",
      "1–2 tbsp heavy cream",
      "LATER ADJUSTED VERSION",
      "85 g salted butter, softened",
      "1 cup + 2 tbsp powdered sugar",
      "2 tbsp unsweetened cocoa powder",
      "2 tbsp heavy cream",
      "1 tsp vanilla extract",
      "Melted dark chocolate, optional"
    ],
    "method": [
      "Remove the butter from the refrigerator and allow it to soften until pliable but not melted.",
      "Sift the powdered sugar and cocoa powder together to eliminate lumps.",
      "If making the original chocolate-enriched version, gently melt the dark chocolate in short microwave bursts or over a bain-marie. Let it cool until no longer warm.",
      "Place the softened butter in a KitchenAid bowl fitted with the paddle attachment. Beat on medium speed for approximately 3–5 minutes until lighter, creamy and smooth.",
      "Reduce the mixer to low speed and gradually incorporate the sifted powdered sugar and cocoa powder.",
      "Once incorporated, increase to medium speed and beat for another 2 minutes, scraping down the bowl as necessary.",
      "Pour in the vanilla extract and mix briefly.",
      "For the original version, add the cooled melted dark chocolate and mix until completely smooth. For the adjusted version, omit it unless desired.",
      "Add heavy cream gradually, starting with one tablespoon, until the frosting reaches your preferred consistency.",
      "For spreading between cake layers, the buttercream should be soft and smooth. For piping, keep it slightly firmer.",
      "Mix on low speed for another 1–2 minutes to reduce large air bubbles.",
      "Taste and adjust with a little more cocoa for deeper chocolate flavour or a small amount of cream if too stiff.",
      "Spread over fully cooled cakes or transfer to a piping bag fitted with your preferred nozzle."
    ],
    "notes": "Two formulas were recorded; the final preferred variation was not conclusively verified. For a full two-layer cake, double or triple the recipe depending on how thickly you frost it. A thin filling and smooth outer layer keep it less heavy."
  }
];
  const byId = new Map(updates.map(recipe => [recipe.id, recipe]));
  function merge(items) {
    if (!Array.isArray(items)) return items;
    const merged = items.map(recipe =>
      byId.has(recipe.id) ? { ...recipe, ...byId.get(recipe.id) } : recipe
    );
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
    console.warn('Batch 12 recipe storage update:', error);
  }
})();
