const Router=require('express')
const router=new Router()
const controller=require('../controller/ticketsController')


router.get('/',controller.getAllTickets)
router.post('/',controller.createTickets)

module.exports = router;