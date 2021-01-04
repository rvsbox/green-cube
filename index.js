const express = require('express')
const exphbs = require('express-handlebars')
const dshbRoutes = require('./routes/dashboard')
const pg1Routes = require('./routes/page1')
const pg2Routes = require('./routes/page2')
const pg2adRoutes = require('./routes/page2Add')
const sc1Routes = require('./routes/section1')
const sc2Routes = require('./routes/section2')

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
app.use(express.urlencoded({extended: true})) //добавлен middleware??

app.use('/', dshbRoutes)
app.use('/page1', pg1Routes)
app.use('/page2', pg2Routes)
app.use('/page2Add', pg2adRoutes)
app.use('/section1', sc1Routes)
app.use('/section2', sc2Routes)


const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

