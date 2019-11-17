
const MongoClient = require( 'mongodb' ).MongoClient;
var _db;

module.exports = {
	database:"mongodb+srv://mean:mean@cluster0-ex3zb.gcp.mongodb.net/test?retryWrites=true&w=majority&keepAlive=true&poolSize=30&autoReconnect=true&socketTimeoutMS=360000&connectTimeoutMS=360000",
     secret:"your secret",
  connectToServer: function( callback ) {
        MongoClient.connect( "mongodb+srv://mean:mean@cluster0-ex3zb.gcp.mongodb.net/test?retryWrites=true&w=majority&keepAlive=true&poolSize=30&autoReconnect=true&socketTimeoutMS=360000&connectTimeoutMS=360000",
	 { useNewUrlParser: true }, function( err, client ) {
      _db  = client.db('mean');
      return callback( err );
    } );
  },

  getDb: function() {
    return _db;
  }
};