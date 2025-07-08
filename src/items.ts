interface Item {
  id: number;
  name: string;
  equipable: boolean;
  attackImpact: number;
  defenseImpact: number;
  probabilityImpact: number;
  consumable: boolean;
  description: string;
  image: string;
}

const URL_PREFIX =
  "https://raw.githubusercontent.com/alma-labs/unimon-lists/refs/heads/main/assets/items";

export const items: Item[] = [
  {
    id: 0,
    name: "Unimon Energy",
    equipable: false,
    attackImpact: 0,
    defenseImpact: 0,
    probabilityImpact: 0,
    consumable: false,
    description:
      "Pure energy essence that powers up your Unimon and restores their vitality.",
    image: `${URL_PREFIX}/0.png`,
  },
  {
    id: 1,
    name: "Unikey",
    equipable: false,
    attackImpact: 0,
    defenseImpact: 0,
    probabilityImpact: 0,
    consumable: false,
    description:
      "A mystical key that unlocks secret treasures in the Unimon world.",
    image: `${URL_PREFIX}/1.png`,
  },
  {
    id: 2,
    name: "Mint Coupon",
    equipable: false,
    attackImpact: 0,
    defenseImpact: 0,
    probabilityImpact: 0,
    consumable: false,
    description:
      "A special coupon that can be redeemed to mint new Unimon at a discount.",
    image: `${URL_PREFIX}/2.png`,
  },
  {
    id: 3,
    name: "Uni Scimmy",
    equipable: true,
    attackImpact: 1,
    defenseImpact: -1,
    probabilityImpact: 0,
    consumable: false,
    description:
      "A swift curved blade that increases attack power but leaves you more vulnerable to counterattacks.",
    image: `${URL_PREFIX}/3.png`,
  },
  {
    id: 4,
    name: "Uniberry",
    equipable: true,
    attackImpact: 0,
    defenseImpact: 0,
    probabilityImpact: 0,
    consumable: true,
    description:
      "A magical berry that provides temporary stat boosts and can be eaten for health recovery.",
    image: `${URL_PREFIX}/4.png`,
  },
  {
    id: 5,
    name: "Unisocks",
    equipable: true,
    attackImpact: 0,
    defenseImpact: 0,
    probabilityImpact: 0,
    consumable: false,
    description:
      "Comfortable magical socks that provide enhanced mobility and protection for your feet.",
    image: `${URL_PREFIX}/5.png`,
  },
  {
    id: 6,
    name: "Full Uni Helm",
    equipable: true,
    attackImpact: 0,
    defenseImpact: 0,
    probabilityImpact: 0,
    consumable: false,
    description:
      "A sturdy helmet that offers comprehensive head protection and enhances your Unimon's appearance.",
    image: `${URL_PREFIX}/6.png`,
  },
];
