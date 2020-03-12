module.exports = class BasicAlbum {
    constructor(albumObj) {
        this.data = {
            artist: albumObj.artist,
            album: albumObj.album,
            release_year: albumObj.release_year,
            format: albumObj.format,
            meta: {
                added: null,
                modified: null
            }
        };
    }

    setAdded(date) {
        this.data.meta.added = date;
        this.data.meta.modified = date;
    }

    setModified(date) {
        this.data.meta.modified = date;
    }

    getData() {
        return this.data;
    }

}
