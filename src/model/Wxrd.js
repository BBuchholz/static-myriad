const { v4: uuidv4 } = require('uuid');

class Wxrd {

    constructor(defaultAlias) {
        this.metaData = new Map();
        this.setAlias(defaultAlias);
        this.setCreatedAt(this.generateTimestamp());
        this.setUuid(this.generateUuid());
    }

    generateTimestamp() {
        const currentTime = new Date();
        return currentTime.toISOString();
    }

    generateUuid() {

        return uuidv4();
    }

    /**
     * 
     * @param {string} tagString 
     */
    setTagsFromTagString(tagString){

        let existingTags = toTagList(getTags());
        let newTags = toTagList(tagString);        
    }

    getTagStringFromTags(){
        // TODO:
        // refer to logic used in Gauntlet, see:
        // https://github.com/BBuchholz/Gauntlet/blob/master/app/src/main/java/com/nineworldsdeep/gauntlet/mnemosyne/v5/MediaListItem.java
    }

    setMetaDataByKey(key, val) {
        if(!this.metaData.has(key)){
            this.metaData.set(key, []);
        }
        this.metaData.get(key).push({
            value: val,
            valueSetAt: this.generateTimestamp()
        });
    }

    getMetaDataByKey(key) {
        return this.metaData.get(key)
            .sort((a, b) => (a.valueSetAt < b.valueSetAt) ? 1 : -1)[0].value;
    }

    getDefaultAliasValue(){
        return this.getMetaDataByKey("alias");
    }

    setAlias(aliasValue) {
        this.setMetaDataByKey("alias", aliasValue);
    }

    setCreatedAt(createdAt) {
        this.setMetaDataByKey("createdAt", createdAt);
    }

    /**
     * @returns {string} Date createdAt in ISO string format (as provided
     * by the standard Date.toISOString() method)
     */
    getCreatedAt() {
        return this.getMetaDataByKey("createdAt");
    }

    getAllAliases(){
        return this.metaData.get("alias").map((x) => x.value);
    } 

    getUuid(){
        return this.getMetaDataByKey("uuid");
    }

    /**
     * 
     * @param {string} uuid to set 
     */
    setUuid(uuid){
        this.setMetaDataByKey("uuid", uuid);
    }
}

module.exports = Wxrd;