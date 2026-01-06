ServerEvents.recipes(event => {

  /**
   * -----------------------------------------------------------
   * TAC:Z x Mekanism 配方修改
   * 目標：將 TAC:Z 所有配方中的「鐵錠」強制替換為 Mekanism「鋼錠」
   * -----------------------------------------------------------
   */

  // 1. 替換 鐵錠 -> 鋼錠
  // 這會影響槍械、零件、彈藥等所有 TAC:Z 的合成
  event.replaceInput(
    { mod: 'tacz' },             // 過濾條件：只針對 TAC:Z 模組的配方
    'minecraft:iron_ingot',      // 原始材料：鐵錠
    'mekanism:ingot_steel'       // 新材料：鋼錠
  )

  // 2. 替換 鐵粒 -> 鋼粒 (如果有的話)
  event.replaceInput(
    { mod: 'tacz' },
    'minecraft:iron_nugget',
    'mekanism:nugget_steel'
  )
  
  // 3. (選用) 替換 鐵磚 -> 鋼磚 (用於製作槍械工作台本身或重型武器)
  event.replaceInput(
    { mod: 'tacz' },
    'minecraft:iron_block',
    'mekanism:block_steel'
  )

  console.info('[KubeJS] 已將 TAC:Z 的製作材料升級為 Mekanism 鋼材')
})
