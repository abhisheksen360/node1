const { verifyJwtToken } = require('../helpers/jwt.helper')

module.exports = function(req, res, next) {
    const token = req.header('Authorization')

    if(!token) return res.sendStatus(200).json({
        status:401,
        success:false,
        message:"Authorization  Error",
        error:true,
        errors: []
    })

    try {
        const jwtTokenPattern = /^Bearer\s[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/

        const tokenFormatMatched = jwtTokenPattern.test(token)
        let rawToken = ''
        if(tokenFormatMatched) {
            rawToken = token.substr(token.indexOf(' ') + 1)
            const decodedData = verifyJwtToken(rawToken)
            req.user = decodedData
            next()
        } else {
            return res.sendStatus(200).json({
                status:401,
                success:false,
                message:"Authorization  Error",
                error:true,
                errors: []
            })
        }


    } catch(err) {
        res.sendStatus(200).json({
            status:401,
            success:false,
            message:"Authorization  Error",
            error:true,
            errors: []
        })
    }

}
