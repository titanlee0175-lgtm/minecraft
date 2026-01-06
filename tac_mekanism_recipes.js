// TAC × Mekanism recipes
// Minecraft 1.20.1
// Loaded by KubeJS (server side)

ServerEvents.recipes(event => {

  /*
   =========================
   槍械零件（基礎）
   =========================
  */

  // 移除 TAC 原本槍管配方
  event.remove({ output: 'tac:gun_barrel' })

  // 新槍管配方（Mekanism 鋼）
  event.shaped('tac:gun_barrel', [
    ' S ',
    ' S ',
    ' S '
  ], {
    S: 'mekanism:ingot_steel'
  })


  // 移除槍械框架
  event.remove({ output: 'tac:gun_frame' })

  // 槍械框架（鋼 + 紅石）
  event.shaped('tac:gun_frame', [
    'S S',
    ' S ',
    'S S'
  ], {
    S: 'mekanism:ingot_steel'
  })


  /*
   =========================
   基礎槍械（範例）
   =========================
  */

  // AK47
  event.remove({ output: 'tac:ak47' })

  event.shaped('tac:ak47', [
    ' BS',
    ' FS',
    ' R '
  ], {
    B: 'tac:gun_barrel',
    F: 'tac:gun_frame',
    S: 'mekanism:ingot_steel',
    R: 'minecraft:redstone'
  })


  /*
   =========================
   進階槍械（高階金屬）
   =========================
  */

  // 狙擊槍（假設 ID 為 tac:sniper_rifle）
  event.remove({ output: 'tac:sniper_rifle' })

  event.shaped('tac:sniper_rifle', [
    '  G',
    ' BO',
    'F  '
  ], {
    B: 'tac:gun_barrel',
    F: 'tac:gun_frame',
    O: 'mekanism:ingot_refined_obsidian',
    G: 'minecraft:glass'
  })


  /*
   =========================
   彈藥（示例）
   =========================
  */

  // 移除原子彈配方（假設）
  event.remove({ output: 'tac:ammo_basic' })

  // 工業化彈藥
  event.shaped('tac:ammo_basic', [
    ' I ',
    'IRI',
    ' I '
  ], {
    I: 'mekanism:ingot_steel',
    R: 'minecraft:gunpowder'
  })


  /*
   =========================
   記錄載入成功
   =========================
  */
  console.info('[KubeJS] TAC × Mekanism recipes loaded successfully.')

})
