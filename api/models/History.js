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
    aname: {
      type: 'string'
    },
    aphone: {
      type: 'string'
    },
    name: {
      type: 'string'
    },
    phone: {
      type: 'string'
    },
    content: {
      type: 'longtext'
    },
    allmsg: {
      type: 'integer'
    },
    total: {
      type: 'string'
    },
    countmsg: {
      type: 'integer'
    },
    outcome: {
      type: 'string'
    },
    income: {
      type: 'string'
    },
    calculator: {
      type: 'string'
    },
    status: {
      type: 'integer'
    }
  }
};

