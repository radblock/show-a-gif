var aws = require('aws-sdk')

var S3_BUCKET = 'u.monks.co'

function rand_nth (items) {
  return items[Math.floor(Math.random() * items.length)]
}

exports.handler = function (event, context, callback) {
  'use strict'

  var s3 = new aws.S3()

  s3.listObjects({Bucket: S3_BUCKET}, function (err, data) {
    if (err) {
      callback(err)
    } else {
      var gifs = data.Contents
      var random_gif = rand_nth(gifs)
      console.log(random_gif)
      var random_gif_url = 'http://' + S3_BUCKET + '/' + random_gif.Key
      console.log(random_gif_url)
      callback(null, random_gif_url)
    }
  })
}

