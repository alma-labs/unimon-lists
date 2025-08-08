import { items } from "./items";
import { monsters as rawMonsters, Monster } from "./slayer";

// Convert the items array to JSON
const jsonItems = JSON.stringify(items, null, 2);

// Write items to JSON file
require("fs").writeFileSync("public/items.json", jsonItems, "utf8");

// Ensure monster likelihoods add to 100 by normalizing proportions
function normalizeLikelihoods(monsters: Monster[]): Monster[] {
  const total = monsters.reduce((sum, m) => sum + m.likelihood, 0);
  if (total === 0) return monsters.map((m, i) => ({ ...m, likelihood: i === 0 ? 100 : 0 }));
  if (total === 100) return monsters;

  const scaled = monsters.map((m) => ({
    monster: m,
    floatWeight: (m.likelihood / total) * 100,
  }));

  // Floor first, then distribute remainder to largest fractional parts
  const withFloors = scaled.map((s) => ({
    monster: s.monster,
    floored: Math.floor(s.floatWeight),
    frac: s.floatWeight - Math.floor(s.floatWeight),
  }));

  let currentSum = withFloors.reduce((sum, w) => sum + w.floored, 0);
  let remainder = 100 - currentSum; // could be positive or negative (rarely negative due to math)

  // Sort indices by descending fractional part for positive remainder, ascending for negative
  const indices = withFloors
    .map((w, idx) => ({ idx, frac: w.frac }))
    .sort((a, b) => (remainder >= 0 ? b.frac - a.frac : a.frac - b.frac))
    .map((x) => x.idx);

  for (let i = 0; remainder !== 0 && i < indices.length; i++) {
    const idx = indices[i % indices.length];
    withFloors[idx].floored += remainder > 0 ? 1 : -1;
    remainder += remainder > 0 ? -1 : 1;
  }

  return withFloors.map((w) => ({ ...w.monster, likelihood: w.floored }));
}

const monsters = normalizeLikelihoods(rawMonsters);
const jsonMonsters = JSON.stringify(monsters, null, 2);

// Write monsters to JSON file
require("fs").writeFileSync("public/slayer.json", jsonMonsters, "utf8");

console.log(`Successfully converted ${items.length} items to JSON`);
console.log(`Output written to: items.json`);
console.log(`Successfully converted ${monsters.length} monsters to JSON (likelihoods normalized to 100)`);
console.log(`Output written to: slayer.json`);
