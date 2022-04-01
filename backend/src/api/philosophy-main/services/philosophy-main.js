'use strict';

/**
 * philosophy-main service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::philosophy-main.philosophy-main');
