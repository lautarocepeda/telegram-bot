// modules
const loggerController = require('../controllers/logger.controller');



const logger = loggerController.getLogger( 'TE' );


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
    let err = err_message;

    if ( log ) {
        logger.error( err );
    }

    console.error('Error =>', err_message);

    throw new Error( err_message );
}