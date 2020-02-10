const {Router} = require('express')
const router = Router()


router.get('/', (req, res) => {
    res.render('index', {
        title: 'Dashboard',
        isDashboard: 'true'
    })
})


module.exports = router