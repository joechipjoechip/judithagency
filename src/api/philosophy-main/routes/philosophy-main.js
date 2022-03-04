'use strict';

/**
 * philosophy-main router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::philosophy-main.philosophy-main');
