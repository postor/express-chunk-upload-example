const { join } = require('path')
const { Router } = require('express')
const getUploadRouter = require('express-chunk-upload/get-router')
let router = Router()

router.use('/upload', getUploadRouter({
  uploadPath: join(__dirname, '..', 'public', 'uploads')
}))

module.exports = router