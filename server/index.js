const routes = (module.exports = require("next-routes")());

routes
  .add("index", "/")
  .add("about", "/aboutus")
  .add("userprofile", "/user/:user")
  .add("occupations", "/occupations/:slug")
  .add("occupation", "/occupation/:slug")
  .add("courses", "/courses/:slug")
  .add("exam", "/exam/:slug")
  .add("exams", "/exams/")
  .add("industries", "/industries/:slug")
  .add("institutions", "/institutions/:slug")
  .add("profile", "/user/:id", "userprofile");
