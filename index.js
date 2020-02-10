const express = require('express')
const exphbs = require('express-handlebars')

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


app.use(express.static('public')) //установка точки входа


// START - Маршрутизация -----------------------------------------------------------------------------------------------
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Dashboard',
        isDashboard: 'true'
    })
})

app.get('/page-1', (req, res) => {
    res.render('page-1', {
        title: 'Page 1',
        isPage1: 'false'
    })
})

app.get('/page-2', (req, res) => {
    res.render('page-2', {
        title: 'Page 2',
        isPage2: 'false'
    })
})

app.get('/section-1', (req, res) => {
    res.render('section-1', {
        title: 'Section 1',
        isSection1: 'false'
    })
})

app.get('/section-2', (req, res) => {
    res.render('section-2', {
        title: 'Section 2',
        isSection2: 'false'
    })
})
// END - Маршрутизация -------------------------------------------------------------------------------------------------


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

