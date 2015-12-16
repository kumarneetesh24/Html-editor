this.Documents= new Mongo.Collection('document');

if (Meteor.isClient) {
  //helper to find first document in document collection and return its id
  Template.editor.helpers({
    mydoc: function(){
      var doc = Documents.findOne();
      if(doc){
        return doc._id;
      }
      else return undefined;
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    if (!Documents.findOne()){// no documents yet!
        Documents.insert({title:"my new document"});
    }
  });
}
