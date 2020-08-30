const mongoose = require('mongoose');

module.exports = {
    init: () => {
        const dbOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            autoIndex: true,
            poolSize: 5,
            family:4
        };

        mongoose.connect('[LOGIN INFORMATION FOR MONGOOSE(go to mongodb to acquire)]', dbOptions);

        mongoose.set('useFindAndModify', false);
        mongoose.Promise = global.Promise;

        mongoose.connection.on('connected', () => {
            console.log('[Mongoose has been connected!]');
        });

        mongoose.connection.on('err', err => {
            console.error(`[Mongoose has ran into an error while connecting: \n${err.stack}]`);
        });

        mongoose.connection.on('disconnected', () => {
            console.warn('[The connection has been severed with Mongoose]');
        });
    }
}
