const { check, validationResult } = require('express-validator');
    
exports.register = [
    
    check('mobile_no')
        .not()
        .isEmpty()
        .withMessage('Mobile number is a required field')
        .matches(/^[6-9]\d{9}$/)
        .withMessage('Invalid mobile number')
        .trim(),
    check('password')
        .not()
        .isEmpty()
        .withMessage('Password is a required field')
        .trim(),  
    check('full_name')
        .not()
        .isEmpty()
        .withMessage('Full name is a required field')
        .trim(),
    check('address')
        .not()
        .isEmpty()
        .withMessage('Address is a required field')
        .trim(),
    check('ref_id')
        .not()
        .isEmpty()
        .withMessage('Reference id is a required field'),
    check('tran_password')
        .not()
        .isEmpty()
        .withMessage('Transaction password is a required field')
        .isNumeric()
        .withMessage('Transaction password must be a number')
        .matches(/^([0-9]{4})$/)
        .withMessage('Transaction password must have exactly 4 digits')
        .trim(),        
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ error: true, errors: errors.array() });
        } else {
            next();
        } 
    }
];

exports.updateProfile = [
    check('full_name')
        .not()
        .isEmpty()
        .withMessage('Full name is a required field')
        .trim(),
    check('email') 
        .not()
        .isEmpty()
        .withMessage('Email is a required field')
        .isEmail()
        .withMessage('Email is not valid')
        .trim(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ error: true, errors: errors.array() });
        } else {
            next();
        } 
    }
];

exports.writeReview = [
    check('user_id')
        .not()
        .isEmpty()
        .withMessage('User id is a required field')
        .trim(),
    check('rating')
        .not()
        .isEmpty()
        .withMessage('Rating is a required field')
        .trim(),
    check('review')
        .not()
        .isEmpty()
        .withMessage('Review is a required field')
        .trim(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ error: true, errors: errors.array() });
        } else {
            next();
        } 
    }
];
    
exports.writeReport = [
    check('store_id')
        .not()
        .isEmpty()
        .withMessage('Store id is a required field')
        .trim(),
    check('user_id')
        .not()
        .isEmpty()
        .withMessage('User id is a required field')
        .trim(),
    check('comment')
        .not()
        .isEmpty()
        .withMessage('Comment is a required field')
        .trim(),    
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ error: true, errors: errors.array() });
        } else {
            next();
        } 
    }
];
    
exports.merchantForm = [
    check('cat_id')
        .not()
        .isEmpty()
        .withMessage('Please Select Store Category')
        .trim(),
    check('business_name') 
        .not()
        .isEmpty()
        .withMessage('Business Name is a required field')
        .trim(),
    check('business_owner_name') 
        .not()
        .isEmpty()
        .withMessage('Business Owner Name is a required field')
        .trim(),
    check('business_address') 
        .not()
        .isEmpty()
        .withMessage('Business Address is a required field')
        .trim(),
    check('registered_address') 
        .not()
        .isEmpty()
        .withMessage('Registered Address is a required field')
        .trim(),
    check('gaddress') 
        .not()
        .isEmpty()
        .withMessage('Google Address is a required field')
        .trim(),
    check('lat') 
        .not()
        .isEmpty()
        .withMessage('Latitude is a required field')
        .trim(),
    check('lng') 
        .not()
        .isEmpty()
        .withMessage('Longitude is a required field')
        .trim(),
    check('store_owner_whatsapp') 
        .not()
        .isEmpty()
        .withMessage('Store Owner Whatsapp is a required field')
        .matches(/^[6-9]\d{9}$/)
        .withMessage('Invalid Store Owner Whatsapp Number')
        .trim(),
    check('store_owner_mobile_no') 
        .not()
        .isEmpty()
        .withMessage('Store Owner Mobile no is a required field')
        .matches(/^[6-9]\d{9}$/)
        .withMessage('Invalid Store Owner Mobile Number')
        .trim(),
    check('store_owner_email') 
        .not()
        .isEmpty()
        .withMessage('Store Owner Email is a required field')
        .isEmail()
        .withMessage('Store Owner Email is not valid')
        .trim(),    
    check('store_owner_trade_license') 
        .not()
        .isEmpty()
        .withMessage('Store Owner Trade License is a required field')
        .trim(),
    check('bank_name') 
        .not()
        .isEmpty()
        .withMessage('Bank Name is a required field')
        .trim(),
    check('acc_type') 
        .not()
        .isEmpty()
        .withMessage('Please Select Type of Account')
        .trim(),    
    check('branch_name') 
        .not()
        .isEmpty()
        .withMessage('Branch Name is a required field')
        .trim(),    
    check('acc_no') 
        .not()
        .isEmpty()
        .withMessage('Account Number is a required field')
        .trim(),
    check('accholder_name') 
        .not()
        .isEmpty()
        .withMessage('Bank Holder Name is a required field')
        .trim(),    
    check('executive_code') 
        .not()
        .isEmpty()
        .withMessage('Executive Code is a required field')
        .trim(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ error: true, errors: errors.array() });
        } else {
            next();
        } 
    }
];
                    
exports.kycForm = [
    check('store_owner_id_type') 
        .not()
        .isEmpty()
        .withMessage('Please Select ID Proof')
        .trim(),
    (req, res, next) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).json({ error: true, errors: errors.array() });
            } else {
                next();
            } 
        }    
];
        
exports.verifyTranPassword = [
    check('tran_password')
    .not()
    .isEmpty()
    .withMessage('Transaction password is a required field')
    .isNumeric()
    .withMessage('Transaction password must be a number')
    .matches(/^([0-9]{4})$/)
    .withMessage('Transaction password must have exactly 4 digits')
    .trim(),        
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ error: true, errors: errors.array() });
        } else {
            next();
        } 
    }
];
    
exports.walletFundTransfer = [
    check('amount')
    .not()
    .isEmpty()
    .withMessage('Amount is a required field')
    .isNumeric()
    .withMessage('Amount must be a number')
    .trim(),            
    check('mobile_no')
    .not()
    .isEmpty()
    .withMessage('Mobile number is a required field')
    .matches(/^[6-9]\d{9}$/)
    .withMessage('Invalid mobile number')
    .trim(),  
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ error: true, errors: errors.array() });
        } else {
            next();
        } 
    }
];
    
exports.updateAddress = [
    check('address')
    .not()
    .isEmpty()
    .withMessage('Address is a required field')
    .trim(),        
    check('city')
    .not()
    .isEmpty()
    .withMessage('City is a required field')
    .trim(),  
    check('zip_code')
    .not()
    .isEmpty()
    .withMessage('Zip Code is a required field')
    .trim(), 
    check('state')
    .not()
    .isEmpty()
    .withMessage('Please Select State')
    .isNumeric()
    .withMessage('State must be a number')
    .trim(), 
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ error: true, errors: errors.array() });
        } else {
            next();
        } 
    }
];