// API
var formidable = require('formidable');
var path = require('path')
var uploadDir = path.join(__dirname, '/..', '/..', '/..', '/uploads/')
var admin = require("firebase-admin");

var serviceAccount = require("../../../config/test-c5933-firebase-adminsdk-k69e8-b8776c03e4.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://test-c5933.firebaseio.com"
});

module.exports = function setup(app) {
  app.post('/api/files', (req, res) => {
    var form = new formidable.IncomingForm();
    form.multiples = true;
    form.keepExtensions = true;
    form.uploadDir = uploadDir;
    form.parse(req, (err, fields, files) => {
      console.log(err);
      if (err) return res.status(500).json({
        error: err
      })
      res.status(200).json({
        uploaded: true
      })
    })
    res.json('HOLA');
    // form.on('fileBegin', function (name, file) {
    //   const [fileName, fileExt] = file.name.split('.')
    //   file.path = path.join(uploadDir, `${fileName}_${new Date().getTime()}.${fileExt}`)
    // })
  });
};