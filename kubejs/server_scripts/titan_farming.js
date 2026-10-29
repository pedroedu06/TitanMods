// TitanMods farming (Mystical Agriculture altar, Botany Pots) for the TitanOres crops and Titan Utilities items.
onEvent('recipes', event => {
  const ORES = ['solarite', 'emberite', 'titanium']

  // Infusion Altar recipe: center item + 8 pedestals (a and b alternate around the altar)
  const infusion = (center, a, b, result) => {
    const ring = []
    for (let i = 0; i < 4; i++) {
      ring.push({ item: a }, { item: b })
    }
    event.custom({
      type: 'mysticalagriculture:infusion',
      input: { item: center },
      ingredients: ring,
      result: { item: result, count: 1 }
    })
  }

  // Eternal Dust: the four Mystical Agriculture element agglomeratios (2x2)
  event.shaped('titanutilities:eternal_dust', ['FW', 'AE'], {
    F: 'mysticalagriculture:fire_agglomeratio',
    W: 'mysticalagriculture:water_agglomeratio',
    A: 'mysticalagriculture:air_agglomeratio',
    E: 'mysticalagriculture:earth_agglomeratio'
  })

  // Blue Soil: grass block on the altar, insanium blocks + eternal dust on the pedestals
  infusion('minecraft:grass_block', 'mysticalagradditions:insanium_block', 'titanutilities:eternal_dust', 'titanutilities:blue_soil')

  // Ore seeds: prosperity seed base on the altar, insanium blocks + ore blocks on the pedestals
  ORES.forEach(ore => {
    infusion('mysticalagriculture:prosperity_seed_base', 'mysticalagradditions:insanium_block', `titanores:${ore}_block`, `titanores:${ore}_seed`)
  })

  // Botany Pots: Blue Soil has its own category, so the ore seeds only grow on it (like in the world)
  event.custom({
    type: 'botanypots:soil',
    input: { item: 'titanutilities:blue_soil' },
    display: { block: 'titanutilities:blue_soil' },
    categories: ['titan_blue_soil'],
    growthModifier: 0
  })

  // Slower than Mystical Agriculture essence crops (1200 ticks); 75% essence + 5% extra seed per harvest
  ORES.forEach(ore => {
    event.custom({
      type: 'botanypots:crop',
      seed: { item: `titanores:${ore}_seed` },
      categories: ['titan_blue_soil'],
      growthTicks: 2400,
      display: { block: `titanores:${ore}_crop`, properties: { age: 7 } },
      results: [
        { chance: 0.75, output: { item: `titanores:${ore}_essence` }, minRolls: 1, maxRolls: 1 },
        { chance: 0.05, output: { item: `titanores:${ore}_seed` }, minRolls: 1, maxRolls: 1 }
      ]
    })
  })
})
