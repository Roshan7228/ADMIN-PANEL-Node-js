let fs = require('fs');
let { addID } = require('../middlewares/addID.middleware');

let createdata = (request, response) => {

    let newdata = request.body;

    fs.readFile("./db.json", 'utf-8', (err, data) => {
        if (err) {
            return response.status(400).json({
                message: err.message
            });
        }

        let parsedData = JSON.parse(data);
        let heroes = parsedData.heroes;

        heroes.push(newdata);               // data push first
        let updatedHeroes = addID(heroes);  // id assign after push

        parsedData.heroes = updatedHeroes;

        fs.writeFile("./db.json", JSON.stringify(parsedData, null, 2), (err) => {
            if (err) {
                return response.status(400).json({
                    message: err.message
                });
            }

            return response.status(200).json({
                message: "Data created successfully",
                data: newdata
            });
        });
    });
};

module.exports = { createdata };
