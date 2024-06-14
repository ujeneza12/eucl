const { token } = require('morgan');
const PurchasedToken = require('../model/purchasedToken');

const generateToken = (req, res) => {
    const { amount, meter_number } = req.body;

    const days = amount / 100;
    const token = Math.floor(10000000 + Math.random() * 90000000).toString();

    PurchasedToken.create({
        meter_number,
        token,
        token_value_days: days,
        amount,
    })
        .then(newToken => res.json({ meterNumber:newToken.meter_number,token:newToken.token, days: newToken. token_value_days }))
        .catch(error => {
            console.log(error);
            res.status(500).json({ error: error })
        });
};

const validateToken = (req, res) => {
    const { token } = req.body;

    PurchasedToken.findOne({ where: { token } })
        .then(tokenData => {
            if (!tokenData) {
                return res.status(404).json({ error: 'Token not found' });
            }
            res.json({ days: tokenData.token_value_days });
        })
        .catch(error => res.status(500).json({ error: 'An error occurred while validating the token' }));
};


const getTokensByMeterNumber = (req, res) => {
    const { meter_number } = req.params;

    PurchasedToken.findAll({ where: { meter_number: meter_number } })
    .then(tokens => res.json(tokens))
    .catch(error => res.status(500).json({ error: 'An error occurred while retrieving tokens' }));
       
};

module.exports = {
    generateToken,
    validateToken,
    getTokensByMeterNumber,
};