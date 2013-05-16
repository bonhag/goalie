Data = new Meteor.Collection('data');

if (Meteor.isClient) {
  Template.dangerously.data_list = function() {
    return Data.find({});
  };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    Data.remove({});
    Meteor.methods({
      insertData: function(name, data) {
        var d = Data.findOne({name: name});
        if (d) {
          console.log('found some data called ' + name);
          Data.update(d, {data: data, name: name});
        } else {
          console.log('no existing data called ' + name);
          Data.insert({name: name, data: data});
        }
        return "thanks for that data!";
      }
    });
  });
}
