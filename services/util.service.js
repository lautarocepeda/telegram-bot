const loggerService = require('../controllers/logger.controller');



const logger = loggerService.getLogger( 'TE' );


module.exports.ReE = (res, err) => {
    if ( typeof err === 'object' && typeof err.message != 'undefined' ) {
        err = err.message;
    }

    return res.json({ success: false, error: err });
}

module.exports.ReS = (res, data) => {
    let send_data = { success: true };

    if ( typeof data == 'object' ) {
        send_data = {...data, send_data};
    }

    return res.json(send_data);
}

module.exports.TE = TE = (err_message, log = true) => {
    let err = toString(err_message);

    if ( log ) {
        logger.error( err );
    }

   throw new Error( err_message );
}