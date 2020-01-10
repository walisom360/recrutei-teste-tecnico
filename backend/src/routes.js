const routes = require("express").Router();

const UserController = require("./app/controllers/UserController");

const TypePostController = require("./app/controllers/TypePostController");

const PostController = require("./app/controllers/PostController");

const AtualizedController = require("./app/controllers/AtualizedController");

const SessionController = require("./app/controllers/SessionController");

const AuthMiddleware = require("./app/middlewares/auth");
routes.post("/users", UserController.store);

routes.get("/users/:id", UserController.show);
routes.put("/users/:id", UserController.update);
routes.delete("/users/:id", UserController.destroy);

routes.post("/sessions", SessionController.store);

routes.use(AuthMiddleware);

routes.get("/users", UserController.index);

routes.get("/types", TypePostController.index);
routes.post("/types", TypePostController.store);
routes.delete("/types/:id", TypePostController.destroy);

routes.post("/posts", PostController.store);
routes.get("/posts", PostController.index);
routes.get("/posts/:id", PostController.show);
routes.put("/posts/:id", PostController.update);
routes.delete("/posts/:id", PostController.destroy);

routes.get("/atualized", AtualizedController.index);

module.exports = routes;
