// TEMPORARY placeholder imagery sourced from Unsplash (royalty-free, Unsplash License).
// Each slot below mirrors the *composition* of the matching image on the reference site
// (toptierpaintingidaho.com) — a happy family for the hero, a glass tower for commercial,
// a classic house for residential, etc. Swap every entry here for the client's real photos
// as soon as they arrive (see the image shopping list handed to the client).
const u = (id, w = 1600) => `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`

export const images = {
  // Hero — happy family / homeowners (reference: hugging couple by the fence)
  heroFamily: u('photo-1609220136736-443140cffec6'),

  // Property-type cards
  residentialHouse: u('photo-1570129477492-45c003edd2be'), // classic two-story home + lawn
  commercialBuilding: u('photo-1486406146926-c627a92ad1ab'), // glass towers

  // NOTE: the previous `teamPro` entry (photo-1589939705384-5185137a7f0f) was removed —
  // it showed a carpenter operating a circular saw, i.e. the wrong trade for a painting
  // company, and it was rendering on the home page, the About page and a service page.
  // Real crew photos from the client should be added back here under this key.

  // Paint-action hero/CTA imagery
  paintRoller: u('photo-1562259949-e8e7689d7828'), // roller laying blue paint

  // Testimonial house
  testimonialHouse: u('photo-1600585154340-be6161a56a0c'), // modern home at dusk
  houseDusk: u('photo-1568605114967-8130f3a36994'),

  // Interiors — services / gallery
  interiorLiving: u('photo-1600607687939-ce8a6c25118c'),
  interiorStairs: u('photo-1600566753086-00f18fb6b3ea'),
  interiorYellow: u('photo-1586023492125-27b2c045efd7'),
  interiorWarm: u('photo-1618221195710-dd6b41faaea6'),
  // Real kitchen with painted cabinetry — the previous `interiorKitchen` id was from the
  // same office series as `officeInterior` below and showed a corridor, not a kitchen.
  interiorKitchen: u('photo-1556909212-d5b604d0c90d'),
  officeOpenPlan: u('photo-1497366216548-37526070297c'),
  officeInterior: u('photo-1497366811353-6870744d04b2'),

  rollerWall: u('photo-1717281234297-3def5ae3eee1'), // painter on scaffolding, sheeted floor

  // Real rooms for the before/after sliders. The previous entries here were abstract
  // paint-texture close-ups (peeling render, pink swirl, blue swatch) — they read as
  // stock texture art, not as a job this company finished, so they were replaced with
  // actual interiors. Each pair is framed alike so the wipe reads as one room changing.
  roomBefore1: u('photo-1763667083561-90f384685999'), // dated room, peeling walls, window
  roomAfter1: u('photo-1625585598750-3535fe40efb3'), // same-style room, freshly painted white
  roomBefore2: u('photo-1669729414773-0dd7473fbdd3'), // stripped/patched plaster + radiator
  roomAfter2: u('photo-1692133220749-1c55bb918ad8'), // clean finished room, crisp edges

  // Finished rooms with real wall colour (replace the old flat colour swatches).
  blueWallRoom: u('photo-1634638415860-cef1aafb60c4'),
  greenWallRoom: u('photo-1664995156397-99bd42f5a8ab'),
}
