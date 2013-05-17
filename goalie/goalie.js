Data = new Meteor.Collection('data');

if (Meteor.isClient) {
  Template.dangerously.data_list = function() {
    return Data.find({}, {sort: {time: -1}, limit: 10}).map(function(z) {
      var bytesAsCharacters = atob(z.data);

      function charCodeFromCharacter(c) {
        return c.charCodeAt(0);
      }

      var byteValueArray = Array.prototype.map.call(bytesAsCharacters, charCodeFromCharacter);
      var uint8Data = new Uint8Array(byteValueArray);
      var blob = new Blob([uint8Data], {type: "image\/jpeg"});
      var url = URL.createObjectURL(blob);
      return { name: z.name, url: url };
    });
  };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    Data.remove({});

    Meteor.methods({
      insertData: function(name, data) {
        //        var d = Data.findOne({name: name});
        //        if (d) {
        //          console.log('found some data called ' + name);
        //          Data.update(d, {data: data, name: name});
        //        } else {
        //          console.log('no existing data called ' + name);
        Data.insert({name: name, data: data, time: new Date().getTime()});

        //        }
        return "thanks for that data!";
      }
    });
  });
}
