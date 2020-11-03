const { join } = require('path')
const { Router } = require('express')
const getUploadRouter = require('express-chunk-upload/get-router')
let router = Router()

router.use('/upload', getUploadRouter({
  uploadPath: '/tmp/uploads'
}))

module.exports = router