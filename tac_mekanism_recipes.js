ServerEvents.recipes(event => {

  /**
   * -----------------------------------------------------------
   * TAC:Z x Mekanism 智慧配方修改
   * 目標：將 TAC:Z 的材料升級為鋼，但「手槍類」維持原版鐵製配方
   * -----------------------------------------------------------
   */

  // 定義要排除的手槍關鍵字 (正則表達式)
  // 這些是 TAC:Z 預設包常見的手槍 ID 片段
  // 如果你有加裝其他槍包，請將它們的 ID 關鍵字加在中間，用 | 隔開
  const pistolFilter = /glock|m1911|deagle|usp|p92|cz75|tt33|pistol|revolver|python/

  // 1. 替換 鐵錠 -> 鋼錠 (排除手槍)
  event.replaceInput(
    { 
      mod: 'tacz',                // 限制為 TAC:Z 模組
      not: { id: pistolFilter }   // 【關鍵】排除 ID 中包含上述手槍名字的配方
    },
    'minecraft:iron_ingot',       // 原始：鐵錠
    'mekanism:ingot_steel'        // 目標：鋼錠
  )

  // 2. 替換 鐵粒 -> 鋼粒 (排除手槍)
  event.replaceInput(
    { 
      mod: 'tacz',
      not: { id: pistolFilter }
    },
    'minecraft:iron_nugget',
    'mekanism:nugget_steel'
  )
  
  // 3. 槍械工作台與重型武器 (通常不排除，除非你想讓工作台也很便宜)
  // 如果你想讓工作台也維持鐵製，請在下方 id 過濾器中加入 'workbench'
  event.replaceInput(
    { 
      mod: 'tacz',
      not: { id: pistolFilter } 
    },
    'minecraft:iron_block',
    'mekanism:block_steel'
  )

  console.info('[KubeJS] TAC:Z 配方已更新：手槍維持鐵製，其餘升級為 Mekanism 鋼材。')
})
