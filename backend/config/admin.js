module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5aee27736a00312b0067ff6d44e84a2f'),
  },
});
