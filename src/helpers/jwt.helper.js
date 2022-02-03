const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../../config/jwt.config.json')

exports.generateJwtToken = (userObj) => {
  const token = jwt.sign({ _id: userObj._id }, JWT_SECRET, {
    algorithm: 'HS512',
    expiresIn: '90d',
  })
  return token
}
  
exports.genTokenAfterRegistration = (userObj) => {
  const token = jwt.sign({ _id: userObj.id, user_type: userObj.user_type }, JWT_SECRET, {
    algorithm: 'HS512',
    expiresIn: '90d',
  })
  return token
}
  
exports.verifyJwtToken = (token) => {
  const decodedData = jwt.verify(token, JWT_SECRET, { algorithms: 'HS512' })
  return decodedData
}
