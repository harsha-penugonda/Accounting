const configRoutes = (app) => {
  app.use("*", (req, res) => {
    res.json({ message: "Hello World!" });
  });
};

module.exports = configRoutes;
