const {Router} = require('express')
const ModelPage2 = require('../models/Page2')
const router = Router()


router.get('/', async (req, res) => {
  const page2 = await ModelPage2.getAll()
  res.render('page2', {
    title: 'Page 2',
    isPage2: true,
    page2
  })
})


module.exports = router
