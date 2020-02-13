const {Router} = require('express')
const router = Router()
const Page2 = require('../models/Page2')


router.get('/', (req, res) => {
  res.render('page2Add', {
    title: 'Add Page 2',
    isPage2Add: 'false'
  })
})

router.post('/', async(req, res) => {
  const page2 = new Page2(req.body.title, req.body.price, req.body.description)

  await page2.save()

  res.redirect('/page2')
})

module.exports = router
