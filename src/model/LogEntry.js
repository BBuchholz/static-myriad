import Wxrd from './Wxrd';

class LogEntry{

    /**
     * Wraps an existing Wxrd as a LogEntry with all
     * relevant methods available to it
     * @param {string} content - the content for the entry
     */
    constructor(content){
        
        this.wxrd = new Wxrd("Log Entry");
        let timestamp = this.wxrd.getCreatedAt();
        //modify default alias to include timestamp
        let titleAlias = "Log Entry: " + timestamp;
        this.wxrd.setAlias(titleAlias);
        this.setTitle(titleAlias);
        
        //set content
        this.setBody(content);
    }

    getDefaultAliasValue(){
        return this.getTitle();
    }

    retrieveParentRecords(){
        return this.wxrd.retrieveTagsByPrefix("parentRecord");
    }

    addParentRecord(parentRecordUuid){
        this.wxrd.addTagByPrefix("parentRecord", parentRecordUuid);
    }

    getBody(){
        return this.wxrd.getMetaDataByKey("body");
    }

    getUuid(){
        return this.wxrd.getUuid();
    }

    getTitle(){
        return this.wxrd.getMetaDataByKey("title");
    }

    getEnteredAt(){
        return this.wxrd.getMetaDataByKey("enteredAt");
    }

    getSourceUuid(){
        return this.wxrd.getMetaDataByKey("sourceUuid");
    }


    setBody(body){
        return this.wxrd.setMetaDataByKey("body", body);
    }

    setTitle(title){
        return this.wxrd.setMetaDataByKey("title", title);
    }

    setEnteredAt(enteredAt){
        return this.wxrd.setMetaDataByKey("enteredAt", enteredAt);
    }

    setSourceUuid(sourceUuid){
        return this.wxrd.setMetaDataByKey("sourceUuid", sourceUuid);
    }
}

module.exports = LogEntry;