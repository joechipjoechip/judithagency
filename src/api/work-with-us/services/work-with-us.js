'use strict';

/**
 * work-with-us service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::work-with-us.work-with-us');
