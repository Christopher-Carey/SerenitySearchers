require('../models/model')

const mongoose = require('mongoose'),
    location = mongoose.model("Location");
    quote = mongoose.model("Quote");

    module.exports = {

        index: function (request, response) {
            quote.find()
                .then(quotes => response.json({ results: quotes }))
                .catch(err => response.json({ error: err.error }))
        },
        indexL: function (request, response) {
            location.find()
                .then(quotes => response.json({ results: quotes }))
                .catch(err => response.json({ error: err.error }))
        },
        show: function (request, response) {
            console.log(request.params.id)

            quote.findOne({date: request.params.id})
                .then(quote => {
                    console.log(request.params.id)

                    response.json({ results: quote })}
                )
                .catch(err => response.json({ error: err.error }))
        },
        create: function (request, response) {
            quote.create(request.body)
                .then(quote => response.json({ results: quote }))
                .catch(err => response.json({ error: err.error }))
        },
        destroy: function (request, response) {
            quote.remove({ _id: request.params.id })
                .then(quote => response.json({ results: quote }))
                .catch(err => response.json({ error: err.error }))
        },
        update: function (request, response) {
            console.log(request.body)
            quote.updateOne({_id:request.params.id}, request.body)
                .then(result =>  response.json({ results: result }))
                .catch(err => response.json({ error: err.error }))
        }
    };