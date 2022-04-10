import multer from 'multer'
import multerS3 from 'multer-s3'
import { S3, config } from 'aws-sdk'
import crypto from 'crypto'
import { ObjectKey } from 'aws-sdk/clients/s3'

config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.AWS_REGION
})

const s3 = new S3({})

export const upload = multer({
  storage: multerS3({
    s3,
    bucket: process.env.AWS_BUCKET,
    acl: 'public-read',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    metadata(req, file, cb) {
      console.log(file);
      
      cb(null, {
        fieldName: file.fieldname
      })
    },
    key(req, file, cb) {
      console.log('chegou');
      
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err)

        const filename = `${hash.toString('hex')}-${file.originalname}`

        cb(null, filename)
      })
    }
  })
})

export const deleteImage = async (Key?: ObjectKey) => {
  if (!Key) return

  try {
    await s3
      .deleteObject({
        Bucket: process.env.AWS_BUCKET,
        Key
      })
      .promise()
  } catch (err) {
    const message = `Erro ao excluir a imagem ${Key} do cloud.`

    console.log(err)
    throw new Error(message)
  }
}
