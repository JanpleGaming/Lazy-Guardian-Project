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

        mongoose.connect('mongodb+srv://Yeet:Yeet@lazyguardian.wr5q3.gcp.mongodb.net/LazyGuardian?retryWrites=true&w=majority', dbOptions);

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