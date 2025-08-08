export interface Monster {
  id: number;
  name: string;
  difficulty: number; // 1+; higher means tougher
  likelihood: number; // relative frequency/weight 1-100
  image: string;
}

const UNIMON_URL_PREFIX =
  "https://raw.githubusercontent.com/alma-labs/unimon-lists/refs/heads/main/assets/slayer";

export const monsters: Monster[] = [
  {
    id: 0,
    name: "Impling",
    difficulty: 2,
    likelihood: 40,
    image: `${UNIMON_URL_PREFIX}/0.png`,
  },
  {
    id: 1,
    name: "Slime",
    difficulty: 5,
    likelihood: 30,
    image: `${UNIMON_URL_PREFIX}/1.png`,
  },
  {
    id: 2,
    name: "Swarm",
    difficulty: 8,
    likelihood: 15,
    image: `${UNIMON_URL_PREFIX}/2.png`,
  },
  {
    id: 3,
    name: "Ogre",
    difficulty: 12,
    likelihood: 10,
    image: `${UNIMON_URL_PREFIX}/3.png`,
  },
  {
    id: 4,
    name: "Dragon",
    difficulty: 16,
    likelihood: 2,
    image: `${UNIMON_URL_PREFIX}/4.png`,
  },
];
