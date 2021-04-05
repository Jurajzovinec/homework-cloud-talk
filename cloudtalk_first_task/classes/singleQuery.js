class SingleQuery {

    static generateQuery(fieldArea) {

        const constraintMultiplier = Math.sqrt(fieldArea);
        const startPosition = calcStartPosition();
        const endPosition = calcEndPosition();

        function calcStartPosition() {
            return Array(2).fill().map(() => Math.ceil(Math.random() * constraintMultiplier));
        }

        function calcEndPosition() {
            return Array(2).fill().map((_, i) => Math.floor(Math.random() * (constraintMultiplier - startPosition[i])) + startPosition[i]);
        }

        return startPosition.concat(endPosition);
    }
}

module.exports = SingleQuery;

