const jwt = require('jsonwebtoken')

const validateToken = async (req, res, next) => {
    const headers = req.headers;
    const token = headers['authorization'] && headers['authorization'].split(" ")[1]
    if (!token) {
        return res.status(404).json({error: "No hay token disponible"})
    }
    try {
        jwt.sign(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
            if (err) {
                return res.status(401).json({error: "Token no válido"})
            }
            req.user = decoded
            next()
        })
    }catch(error) {
        return res.status(500).json({error: "error en la autenticación del token"})
    }
}

module.exports = validateToken;