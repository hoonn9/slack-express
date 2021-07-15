const express = require('express')

const app = express()
app.set('PORT', process.env.PORT || 3095)

app.listen(app.get('PORT'), () => {
  console.log(`listening on port ${app.get('PORT')}`)
})
