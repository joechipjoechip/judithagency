module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    "name": 'strapi::security',
    "config": {
      "contentSecurityPolicy": {
        "useDefaults": true,
        "directives": {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', `${process.env.AWSBucketName}.s3.${process.env.AWSRegion}.amazonaws.com`],
          'media-src': ["'self'", 'data:', 'blob:', `${process.env.AWSBucketName}.s3.${process.env.AWSRegion}.amazonaws.com`],
          "upgradeInsecureRequests": null,
        }
      }
    }
  },
];
