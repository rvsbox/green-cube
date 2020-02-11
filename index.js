const express = require('express')
const exphbs = require('express-handlebars')
const dshbRoutes = require('./routes/dashboard')
const pg1Routes = require('./routes/page-1')
const pg2Routes = require('./routes/page-2')
const pg2adRoutes = require('./routes/page-2-add')
const sc1Routes = require('./routes/section-1')
const sc2Routes = require('./routes/section-2')

const app = express()


// START - Настройка шаблонизатора handlebars---------------------------------------------------------------------------
//конфигурирование handlebars
const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
})

app.engine('hbs', hbs.engine) //регистрация движка
app.set('view engine', 'hbs') //использование движка
app.set('views', 'views') //папка с шаблонами
// END - Настройка шаблонизатора handlebars-----------------------------------------------------------------------------


app.use(express.static('public')) //установка папки public
app.use('/', dshbRoutes)
app.use('/page-1', pg1Routes)
app.use('/page-2', pg2Routes)
app.use('/page-2-add', pg2adRoutes)
app.use('/section-1', sc1Routes)
app.use('/section-2', sc2Routes)


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

