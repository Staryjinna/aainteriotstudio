/**
 * Placeholder photo helper. Every content entry points at an Unsplash URL via this
 * helper, with the final local filename noted beside it. To swap in a real photo,
 * drop the file into public/images/... and replace the `unsplash(...)` call with
 * the local path string (e.g. "/images/services/kitchen.jpg").
 */
export const unsplash = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=75`;

export type Img = { src: string; alt: string };

// Shared placeholder pool (verified Unsplash IDs)
export const P = {
  kitchenDark: "1600489000022-c2086d79f9d4",
  kitchenIsland: "1600585152220-90363fe7e115",
  kitchenWhite: "1556912172-45b7abe8b7e1",
  kitchenGrey: "1565538810643-b5bdb714032a",
  bedroomTufted: "1616594039964-ae9021a400a0",
  bedroomLamp: "1522771739844-6a9f6d5f14af",
  bedroomOrange: "1540518614846-7eded433c457",
  bedroomClassic: "1505693416388-ac5ce068fe85",
  wardrobeShelf: "1595428774223-ef52624120d2",
  wardrobeDoor: "1558997519-83ea9252edf8",
  livingGrey: "1618221195710-dd6b41faaea6",
  livingBright: "1600210492486-724fe5c67fb0",
  livingCream: "1616486338812-3dadae4b4ace",
  livingBoho: "1631679706909-1844bbd07221",
  livingModern: "1600607687939-ce8a6c25118c",
  livingOrange: "1618220179428-22790b461013",
  livingDark: "1600121848594-d8644e57abab",
  livingBlue: "1505691938895-1758d7feb511",
  ceilingRecessed: "1560448204-e02f11c3d0e2",
  officeHall: "1497366216548-37526070297c",
  officeGlass: "1497215728101-856f4ea42174",
  officeLounge: "1524758631624-e2822e304c36",
} as const;
