const express = require('express')
const router  = express.Router()
const { applyExpert, allExpert, allExpertTypes, findPendingWorkForExpert } = require('../Controllers/expertControllers')
const isLoggedIn = require('../middleware/isLoggedIn')


router.route('/applyExpert').post(isLoggedIn,applyExpert)

router.route('/allExpert').get(isLoggedIn,allExpert)

router.route('/allExpertTypes').get(isLoggedIn,allExpertTypes)

router.route('/findPendingWorkForExpert').post(isLoggedIn,findPendingWorkForExpert)


module.exports = router