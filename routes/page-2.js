const {Router} = require('express')
const router = Router()


router.get('/', (req, res) => {
    res.render('page-2', {
        title: 'Page 2',
        isPage2: 'false'
    })
})


module.exports = router