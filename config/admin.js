module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '27a1b2eb3a9bf411f081cc801a0663ae'),
  },
});
