import EmberObject from '@ember/object';

export default EmberObject.extend({
  id: null,
  indexedAt: null,
  trade: {
    priceAmount: null,
    priceCurrency: null,
    whisper: null,
    accountName: null,
    characterName: null
  },
  data: {
    name: null,
    base: null,
    itemLevel: null,
    image: null,
    isIdentified: null,
    isVerified: null,
    isElder: null,
    isShaper: null,
    isCorrupted: null,
    rarity: null,

    // Lists
    implicitMods: null,
    explicitMods: null,
    craftedMods: null,
    properties: null,
    requirements: null,
    sockets: null
  }
});
