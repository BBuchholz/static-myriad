const { v4: uuidv4 } = require('uuid');

class Tagging {

    constructor(){
        this.taggedAt = null;
        this.unTaggedAt = null;
    }

    generateTimestamp() {
        const currentTime = new Date();
        return currentTime.toISOString();
    }

    setTagValue(tagValue){
        this.tagValue = tagValue;
    }

    getTagValue(){
        return this.tagValue;
    }

    tag(){
        this.taggedAt = this.generateTimestamp();
    }

    untag(){
        this.unTaggedAt = this.generateTimestamp();
    }

    isTagged(){
        
        if(this.unTaggedAt === null && this.taggedAt !== null){
            return true;
        }

        if(this.unTaggedAt !== null && this.taggedAt !== null){
            return this.unTaggedAt < this.taggedAt;
        }

        if(this.unTaggedAt === null && this.taggedAt === null){
            return false;
        }

        if(this.unTaggedAt !== null && this.taggedAt === null){
            return false;
        }
    } 
}

module.exports = Tagging;