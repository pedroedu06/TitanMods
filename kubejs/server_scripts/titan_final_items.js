// TitanMods recipes (items/machines from other mods).
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

  // Titan Star: 9x9 Create Mechanical Crafter cross (all 10 final items + Titanium Stars, emberium and 1x nether star blocks)
  event.recipes.create.mechanical_crafting('titanutilities:titan_star', [
    '    N    ',
    '   NUN   ',
    '   EIE   ',
    ' NEECEEN ',
    'NTDQSRMTN',
    ' NEEAEEN ',
    '   ELE   ',
    '   NTN   ',
    '    N    '
  ], {
    N: 'allthecompressed:nether_star_block_1x',
    E: 'titanores:emberium_block',
    T: 'titanores:titanium_star',
    U: 'titanutilities:universal_remote',
    I: 'titanutilities:iron_man_mask',
    C: 'titanutilities:world_core',
    S: 'titanutilities:sponge_bob',
    A: 'titanutilities:antenna',
    L: 'titanutilities:calculator',
    D: 'titanutilities:ancestral_seed',
    Q: 'titanutilities:source_crystal',
    R: 'titanutilities:raid_king',
    M: 'titanutilities:music_disc_titanium'
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

  // Calculator: crafting table
  event.shaped('titanutilities:calculator', [' A ', 'BCT', 'SR '], {
    A: 'appliedenergistics2:wireless_access_point',
    B: 'compactmachines:machine_large',
    C: 'computercraft:computer_advanced',
    T: 'appliedenergistics2:wireless_terminal',
    S: 'titanores:solarite_magnet',
    R: 'appliedenergistics2:memory_card'
  })

  // Antenna: crafting table (any PneumaticCraft drone in slot D)
  event.custom({
    type: 'minecraft:crafting_shaped',
    pattern: ['ABC', 'EFD', 'GHI'],
    key: {
      A: { item: 'aeinfinitybooster:dimension_card' },
      B: { item: 'xnet:antenna' },
      C: { item: 'blue_skies:moonstone' },
      E: { item: 'powah:energy_cell_nitro' },
      F: { item: 'create:linked_controller' },
      D: [{ item: 'pneumaticcraft:drone' }, { tag: 'pneumaticcraft:basic_drones' }],
      G: { item: 'appliedenergistics2:quantum_ring' },
      H: { item: 'refinedstorageaddons:wireless_crafting_grid' },
      I: { item: 'twilightforest:fiery_ingot' }
    },
    result: { item: 'titanutilities:antenna', count: 1 }
  })

  // Ancestral Seed: Mystical Agriculture Infusion Altar (emberite seed in the center, 8 pedestals)
  event.custom({
    type: 'mysticalagriculture:infusion',
    input: { item: 'titanores:emberite_seed' },
    ingredients: [
      { item: 'titanores:emberium_block' }, { item: 'mysticalagradditions:insanium_block' },
      { item: 'titanores:emberium_block' }, { item: 'mysticalagradditions:insanium_block' },
      { item: 'titanores:emberium_block' }, { item: 'mysticalagradditions:insanium_block' },
      { item: 'titanores:emberium_block' }, { item: 'mysticalagradditions:insanium_block' }
    ],
    result: { item: 'titanutilities:ancestral_seed', count: 1 }
  })
})
