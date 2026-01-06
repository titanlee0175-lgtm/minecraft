ServerEvents.recipes(event => {

  /*
   =========================
   TAC 槍械零件（安全修改）
   =========================
  */

  // 槍管
  event.remove({ output: 'tacz:gun_barrel' })
  event.shaped('tacz:gun_barrel', [
    ' S ',
    ' S ',
    ' S '
  ], {
    S: 'mekanism:ingot_steel'
  })

  // 槍械框架
  event.remove({ output: 'tacz:gun_frame' })
  event.shaped('tacz:gun_frame', [
    'S S',
    ' S ',
    'S S'
  ], {
    S: 'mekanism:ingot_steel'
  })

  console.info('[KubeJS] TAC parts now use Mekanism steel.')

})
