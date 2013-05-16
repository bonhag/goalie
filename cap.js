var cv = require('opencv');
var fs = require('fs');
var DDPClient = require('ddp');

var ddpclient = new DDPClient({
  host: "localhost",
  port: 3000
});

var camera = new cv.VideoCapture(0);

ddpclient.connect(function(err) {
  if (err) {
    console.log('ha');
    return;
  }

  camera.read(function(image) {
    image.save('output.jpg');
  });

  fs.readFile('output.jpg', 'base64', function(err, image) {
    ddpclient.call('insertImage', ['fop', image], function(err, result) {
      console.log('called insertImage');
    });
  });
});

