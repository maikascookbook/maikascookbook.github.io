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
