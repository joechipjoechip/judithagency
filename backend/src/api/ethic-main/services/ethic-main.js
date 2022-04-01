'use strict';

/**
 * ethic-main service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ethic-main.ethic-main');
