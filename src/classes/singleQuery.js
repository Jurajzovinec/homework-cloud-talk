class singleQuery{
    
    constructor(fieldArea){
        this.constraintMultiplier = Math.sqrt(fieldArea);
        this.startPosition = this.calcStartPosition();
        this.endPosition = this.calcEndPosition();
        this.query = this.startPosition.concat(this.endPosition);
        this.length = this.query.length;
    }

    calcStartPosition(){
        return Array(2).fill().map((_, i) => Math.ceil(Math.random() * this.constraintMultiplier));
    }

    calcEndPosition(){
        return Array(2).fill().map((_, i) => Math.floor(Math.random() * (this.constraintMultiplier - this.startPosition[i])) + this.startPosition[i]);
    }
}

module.exports = singleQuery;