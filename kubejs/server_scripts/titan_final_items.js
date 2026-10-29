// Final items of the Titan Modpack (recipes that need other mods' machines/items).
onEvent('recipes', event => {
  // Sponge Bob: 7x8 Create Mechanical Crafter grid
  event.recipes.create.mechanical_crafting('titanores:sponge_bob', [
    'AAAAAAA',
    'AAAAAAA',
    'ACBABCA',
    'AAAAAAA',
    'AAAAAAA',
    'DDDEDDD',
    'FGGEGGF',
    'DDDDDDD'
  ], {
    A: 'minecraft:yellow_wool',
    B: 'minecraft:light_blue_wool',
    C: 'minecraft:white_wool',
    D: 'minecraft:brown_concrete',
    E: 'minecraft:red_wool',
    F: 'minecraft:brown_wool',
    G: 'minecraft:black_concrete'
  })
})
