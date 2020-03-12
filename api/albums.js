const ObjectId = require('mongodb').ObjectId;

module.exports = {
    db: null,

    setDb: function(db) {
        this.db = db;
    },

    getAll: async function() {
        let result = await db.collection("levyt").find({}).toArray();
        return result;
    },

    getSingle: async function(id) {
        let query = {_id: ObjectId(id)};
        let result = await db.collection("levyt").find(query).toArray();
        return result;
    },

    search: async function(q) {
        let re = new RegExp(q);
        let query = { $or: [
            {artist: {$regex: re, $options: 'i'}},
            {composer: {$regex: re, $options: 'i'}},
            {album: {$regex: re, $options: 'i'}}]};
        return await db.collection("levyt").find(query).toArray();
    },

    postNew: async function(album) {
        return await db.collection("levyt").insertOne(album.getData());
    }
}
