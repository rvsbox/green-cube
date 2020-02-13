const uuid = require('uuid/v4') //для генерации id, используем v4
const fs = require('fs')
const path = require('path')

class Page2 {
  constructor(title, price, description) {
    this.title = title
    this.price = price
    this.description = description
    this.id = uuid() //доступен уникальный идентификатор
  }

  toJSON() {
    return {
      title: this.title,
      price: this.price,
      description: this.description,
      id: this.id
    }
  }

  async save() {
    const page2 = await Page2.getAll()
    page2.push(this.toJSON())

    return new Promise((resolve, reject) => {
      fs.writeFile(
        path.join(__dirname, '..', 'data', 'page2.json'),
        JSON.stringify(page2),
        (err) => {
          if (err) {
            reject(err)
          } else {
            resolve()
          }
        }
      )
    })
  }

  static getAll() {
    return new Promise((resolve, reject) => {
      fs.readFile(
        path.join(__dirname, '..', 'data', 'page2.json'),
        'utf-8',
        (err, content) => {
          if (err) {
            reject(err)
          } else {
            resolve(JSON.parse(content))
          }
        }
      )
    })
  }
}

module.exports = Page2
