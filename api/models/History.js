/**
 * History.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    date: {
      type: 'string'
    },
    name: {
      type: 'string'
    },
    phone: {
      type: 'string'
    },
    total: {
      type: 'string'
    },
    status: {
      type: 'integer'
    }
  }
};

