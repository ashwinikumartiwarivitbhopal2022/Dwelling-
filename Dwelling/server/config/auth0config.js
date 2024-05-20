import {auth} from 'express-oauth2-jwt-bearer'

const jwtCheck = auth({
    audience: "http://localhost:8000",
    issuerBaseURL: "Your Base Url here",
    tokenSigningAlg: "RS256"
})

export default jwtCheck