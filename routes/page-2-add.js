const {Router} = require('express')
const router = Router()


router.get('/', (req, res) => {
  res.render('page-2-add', {
    title: 'Add Page 2',
    isPage2Add: 'false'
  })
})


module.exports = router
