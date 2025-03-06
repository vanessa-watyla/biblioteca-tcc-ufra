require('dotenv').config(); // Carrega as variáveis do .env

const express = require("express");
const { S3Client } = require("@aws-sdk/client-s3");
const multer = require("multer");
const multerS3 = require("multer-s3-v3");
const app = express();

const s3Client = new S3Client({
  region: "us-east-2", // Use a região correta do seu bucket
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  }
});

// Definindo acl como undefined para não enviar esse header
const upload = multer({
  storage: multerS3({
    s3: s3Client,
    bucket: "biblioteca-tcc-pds",
    contentDisposition: 'inline',
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString() + "_" + file.originalname);
    }
  })
});

app.post("/upload", (req, res) => {
  upload.single("pdfFile")(req, res, function(err) {
    if (err) {
      console.error("Erro durante o upload:", err);
      return res.status(500).json({ error: err.message });
    }
    if (!req.file) {
      return res.status(400).send("Nenhum arquivo enviado.");
    }
    res.json({ url: req.file.location });
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
