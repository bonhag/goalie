var DDPClient = require('ddp');

var ddpclient = new DDPClient({
  host: "localhost",
    port: 3000
});

var sendData = function() {
  var data = process.hrtime()[1];

  var buffer = new Buffer('' + data);
  // make sure it's a string:
  console.log('sending ' + buffer);
  ddpclient.call('insertData', ['fop', buffer]);
};

ddpclient.connect(function(err) {
  if (err) {
    console.log('ha');
    return;
  } else {
    console.log('connected!');
  }

  setInterval(sendData, 1);
});

