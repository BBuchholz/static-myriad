import Tagging from './Tagging';
const { v4: uuidv4 } = require('uuid');

class Wxrd {

    constructor(defaultAlias) {
        this.metaData = new Map();
        this.taggings = [];
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

        //get list of existing tags
        let existingTags = this.toTagList(this.getTagString());
        //get list of tags from new tag string
        
        const newTags = this.toTagList(tagString);   
        
        // for each in existing tags, 
        // if new tags !contain, untag
        for (let existingTag of newTags) {
            
            if(!newTags.includes(existingTag)){

                this.getTag(existingTag).untag();
            }
        }

        // for each in new tags, 
        // if existing tags !contain, tag
        for (let newTag of newTags){

            if(!existingTags.includes(newTag)){

                this.getTag(newTag).tag();
            }
        }
    }

    /**
     * create a list of tags from a comma delimited tag string
     * @param {string} tagString 
     */
    toTagList(tagString){

        return (tagString.split(',')).map(tag => tag.trim());
    }

    getTagString(){
        // TODO: 
        // refer to logic used in Gauntlet, see:
        // https://github.com/BBuchholz/Gauntlet/blob/master/app/src/main/java/com/nineworldsdeep/gauntlet/mnemosyne/v5/MediaListItem.java
        // specifically MediaListItem.getTags() method

        let currentTaggings = this.taggings.filter(tagging => tagging.isTagged());        
        let currentTagList = currentTaggings.map(tagging => tagging.getTagValue());
        return currentTagList.join(", ");
    }

    /**
     * 
     * @param {string} tagValue
     * @returns {Tagging} tagging if found, or new one if not 
     */
    getTag(tagValue){

        for(let tagging in this.taggings){

            if(tagging.getTagValue === tagValue){

                return tagging;
            }
        }

        let tagging = new Tagging();
        this.taggings.push(tagging);
        tagging.setTagValue(tagValue);

        return tagging;
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