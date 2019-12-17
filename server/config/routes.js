const serenity = require('../controllers/serenitys.js');
//----^^-----------------------------------^^Change Controller
module.exports = function (app) {

    app.get("/api/quote", (request, response) => serenity.index(request,response));  

    app.get("/api/location", (request, response) => serenity.indexL(request,response));  

    app.get("/api/quote/:id", (request, response) => serenity.show(request,response));

    app.post("/api/serenity/new", (request, response) => serenity.create(request,response)); 

    app.put("/api/serenity/update/:id", (request, response) => serenity.update(request,response));

    app.delete("/api/serenity/destroy/:id", (request, response) => serenity.destroy(request,response));  

}