String.prototype.capitalizeFirstLetter = function () {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
};

module.exports = String.prototype.capitalizeFirstLetter;