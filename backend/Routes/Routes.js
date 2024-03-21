const {Router} = require("express")
const routeController = require('../controllers/routeControllers')



const router  = Router()

router.post('/results', routeController.results_post);

router.post('/ResultDisplay', routeController.resultDisplay_post)

module.exports  = router;