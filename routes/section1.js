const {Router} = require('express')
const router = Router()


router.get('/', (req, res) => {
    res.render('section1', {
        title: 'Section 1',
        isSection1: 'false'
    })
})


module.exports = router
