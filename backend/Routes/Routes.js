const {Router} = require("express")
const routeController = require('../controllers/routeControllers')
const path = require("path")


const router  = Router()

router.get('/certificate/:name', routeController.certificate_get);

router.post('/results', routeController.results_post);

router.post('/ResultDisplay', routeController.resultDisplay_post)

router.get('/generatecertificate/:name', routeController.generatecertificate)

module.exports  = router