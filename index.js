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

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about')
})


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

