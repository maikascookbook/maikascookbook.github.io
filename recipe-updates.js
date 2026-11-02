/* Maika's Cookbook: targeted two-recipe update.
   Load after recipes.js and before app.js. */
(() => {
  'use strict';
  const updates = [
  {
    "id": "seed-21",
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
  const byId = new Map(updates.map(recipe => [recipe.id, recipe]));
  const apply = (items) => Array.isArray(items)
    ? items.map(recipe => byId.has(recipe.id)
        ? { ...recipe, ...byId.get(recipe.id) }
        : recipe)
    : items;

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
