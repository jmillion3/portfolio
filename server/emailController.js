require('dotenv').config();

const {SERVICE_ID, TEMPLATE_ID, USER_ID} = process.env;
const env = [{
    service: SERVICE_ID,
    template: TEMPLATE_ID,
    user: USER_ID
}]
console.log(env)

module.exports = {
    getEnv: (req, res) => {
        res.status(200).send(env)
    }
}