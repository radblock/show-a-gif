# show-a-gif

lambda function to get a random file out of an s3 bucket

## lambda component

edit main.js, changing `S3_BUCKET` to the name of your s3 bucket.

edit package.json and run `npm start` to make a lambda function to handle pre-signing the s3 uploads

give that lambda function a policy like this:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "Stmt1458531615000",
      "Effect": "Allow",
      "Action": [
        "s3:ListBucket"
      ],
      "Resource": [
        "arn:aws:s3:::u.monks.co"
      ]
    }
  ]
}
```

## see also

* https://github.com/claudiajs/claudia

