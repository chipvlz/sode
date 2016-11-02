/**
 * Bet.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    message: {
      type: 'string'
    },
    msgedit: {
      type: 'string',
      defaultsTo: 'không cần sửa'
    },
    owner: {
      model: 'user'
    },
    player: {
      model: 'player'
    }
  }
};

