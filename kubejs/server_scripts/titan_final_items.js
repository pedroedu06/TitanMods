// Final items of TitanMods (recipes that need other mods' machines/items).
onEvent('recipes', event => {
  // Sponge Bob: 7x8 Create Mechanical Crafter grid
  event.recipes.create.mechanical_crafting('titanutilities:sponge_bob', [
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

  // Universal Remote: Titan Crafter (fixed 9x7 pattern), uses a full machine (200M FE) over 5 minutes
  event.custom({
    type: 'titanutilities:titan_crafting',
    pattern: [
      '         ',
      ' FFRGRFF ',
      ' FLAMPOF ',
      ' EEECEEE ',
      ' FBASPXF ',
      ' FFWWWFF ',
      '         '
    ],
    key: {
      F: { item: 'industrialforegoing:machine_frame_supreme' },
      R: { item: 'powah:energizing_rod_nitro' },
      G: { tag: 'forge:gears/diamond' },
      L: { item: 'integrateddynamics:logic_programmer' },
      A: { item: 'appliedenergistics2:64k_cell_component' },
      M: { item: 'appliedenergistics2:controller' },
      P: { item: 'refinedstorage:64k_storage_part' },
      O: { item: 'modularrouters:item_router' },
      E: { item: 'mekanism:ultimate_energy_cube' },
      C: { item: 'computercraft:computer_advanced' },
      B: { item: 'ironfurnaces:million_furnace' },
      S: { item: 'refinedstorage:controller' },
      X: { item: 'fluxnetworks:flux_controller' },
      W: { item: 'draconicevolution:wyvern_energy_core' }
    },
    energy: 200000000,
    time: 6000,
    result: { item: 'titanutilities:universal_remote', count: 1 }
  })

  // Iron Man Mask: PneumaticCraft Pressure Chamber at 5.0 bar (items in any order)
  event.custom({
    type: 'pneumaticcraft:pressure_chamber',
    inputs: [
      { type: 'pneumaticcraft:stacked_item', item: 'minecraft:red_wool', count: 3 },
      { type: 'pneumaticcraft:stacked_item', tag: 'forge:storage_blocks/gold', count: 2 },
      { item: 'mekanism:ultimate_energy_cube' },
      { type: 'pneumaticcraft:stacked_item', item: 'solarflux:sp_7', count: 2 },
      { item: 'mekanism:mekasuit_helmet' }
    ],
    pressure: 5.0,
    results: [{ item: 'titanutilities:iron_man_mask' }]
  })
})
