const ObjectId = require('mongodb').ObjectId;

module.exports = {

    db: null,
    collection: null,

    setDb: function(db) {
        this.db = db;
        this.collection = db.collection("artistit");
    },

    getAll: async function() {
        let result = await this.collection.find({}).toArray();
        return result;
    },

    getSingle: async function(id) {
        let query = {_id: ObjectId(id)};
        let result = {};
        result = await this.collection.find(query).toArray()
            .catch((err) => { console.log(err);});
        return result;
    },

    search: function(q) {
    }
}
