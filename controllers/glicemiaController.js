const Glicemia = require("../models/glicemia");


const addController_get = (req, res) => {
    Glicemia.find()
    .then(result => { res.render("glicemia/glicemias", {title: "Listar glicemias", glicemias: result}) })
    .catch(err => console.log(err))    
 }


const addController_post = (req, res) => {

    const glicemia = new Glicemia(req.body);

    glicemia.save()
        .then(sucess => { res.redirect("/glicemia"), {title: "Glicemia salva!"} } )
        .catch(err => console.log(err))    

}

module.exports = {

    addController_get,
    addController_post,

}