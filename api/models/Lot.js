/**
 * Lot.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string' // đài chính , đài phụ , đài phụ 1 , đài MB
    },
    more: {
      type: 'string' // đối với đài miền nam
    },
    special: {
      type: 'string' // giải đặc biệt
    },
    one: {
      type: 'string' // giải nhất
    },
    two: {
      type: 'string' // giải hai
    },
    three: {
      type: 'string' // giải ba
    },
    four: {
      type: 'string' // giải bốn
    },
    five: {
      type: 'string' // giải năm
    },
    six: {
      type: 'string' // giải sáu
    },
    seven: {
      type: 'string' // giải bảy
    },
    eight: {
      type: 'string' // giải tám - chỉ có ở đài miền nam
    },
    ngay : {
      type: 'string'
    }

  }
};

