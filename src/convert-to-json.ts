import { items } from "./items";

// Convert the items array to JSON
const jsonData = JSON.stringify(items, null, 2);

// Write to a JSON file
require("fs").writeFileSync("public/items.json", jsonData, "utf8");

console.log(`Successfully converted ${items.length} items to JSON`);
console.log(`Output written to: items.json`);
