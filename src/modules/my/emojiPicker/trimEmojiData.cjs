'use strict';

const requiredKeys = [
  'annotation',
  'emoji',
  'emoticon',
  'group',
  'order',
  'shortcodes',
  'tags',
  'version'
];

function assertEmojiBaseData (emojiBaseData) {
  if (!emojiBaseData ||
    !Array.isArray(emojiBaseData) ||
    !emojiBaseData[0] ||
    (typeof emojiBaseData[0] !== 'object') ||
    requiredKeys.some(key => (!(key in emojiBaseData[0])))) {
    throw new Error('Expected emojibase full (not compact) data, but data is in wrong format')
  }
}

const optionalKeys = ['skins', 'emoticon'];
const allKeys = [...requiredKeys, ...optionalKeys];

const allSkinsKeys = ['tone', 'emoji', 'version'];

function trimEmojiData (emojiBaseData) {
  assertEmojiBaseData(emojiBaseData);
  return emojiBaseData.map(emoji => {
    const res = {};
    for (const key of allKeys) {
      if (key in emoji) {
        if (key === 'skins') { // trim skins even further
          res[key] = emoji[key].map(skin => {
            const skinRes = {};
            for (const skinKey of allSkinsKeys) {
              skinRes[skinKey] = skin[skinKey];
            }
            return skinRes
          });
        } else {
          res[key] = emoji[key];
        }
      }
    }
    return res
  })
}

module.exports = trimEmojiData;
