const {Router} = require('express')
const router = Router()


router.get('/', (req, res) => {
  res.render('page2Add', {
    title: 'Add Page 2',
    isPage2Add: 'false'
  })
})

router.post('/', (req, res) => {
  console.log(req.body)

  res.redirect('/page2')
})

module.exports = router
