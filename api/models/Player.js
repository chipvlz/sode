/**
 * Player.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string'
    },
    phone: {
      type: 'string'
    },
    bonus: {
      type: 'float'
    },
    count: {
      type: 'integer',
      defaultsTo: 0
    },
    income: {
      type: 'integer',
      defaultsTo: 0
    },
    outcome: {
      type: 'integer',
      defaultsTo: 0
    },
    total: {
      type: 'float',
      defaultsTo: 0
    },
    owner: {
      model: 'user'
    },
    bets: {
      collection: 'bet',
      via: 'player'
    }
  }
};

