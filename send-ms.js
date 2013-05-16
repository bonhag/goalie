var DDPClient = require('ddp');

var ddpclient = new DDPClient({
  host: "localhost",
  port: 3000
});

var sendData = function() {
  var data = process.hrtime()[1];
  console.log('sending ' + data);
  ddpclient.call('insertData', ['fop', data]);
};

ddpclient.connect(function(err) {
  if (err) {
    console.log('ha');
    return;
  } else {
    console.log('connected!');
  }

  setInterval(sendData, 1000);
});

