const {Router} = require('express')
const router = Router()


router.get('/', (req, res) => {
  res.render('page1', {
    title: 'Page 1',
    isPage1: 'false'
  })
})


module.exports = router
