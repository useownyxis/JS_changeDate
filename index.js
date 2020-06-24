/**
 * @param {String} date
 * @returns {Object}
 */


module.exports = function (date) {
    
    if (Object.getOwnPropertyDescriptor(this, 'value') === undefined){
        var dateArray = date.match(/[0-9]+/gi)
        Object.defineProperty(this, 'value', {
            value: new Date(dateArray[0], dateArray[1] - 1, dateArray[2], dateArray[3], dateArray[4]),
            writable: true 
        })
    }
    
    
    var tryChangeDate = function(number, type, operationType){
        if (number < 0){
            throw TypeError()
        }
        switch (type){
            case 'years':
                this.valueate.setFullYear(this.value.getFullYear() + operationType * number)
                break
            case 'months':
                this.value.setMonth(this.value.getMonth() + operationType * number)
                break
            case 'days':
                this.value.setDate(this.value.getDate() + operationType * number)
                break
            case 'hours':
                this.value.setHours(this.value.getHours() + operationType * number)
                break
            case 'minutes':
                this.value.setMinutes(this.value.getMinutes() + operationType * number)
                break
            default:
                throw TypeError()
                break
        }
        Object.defineProperty(this, 'value', {
            value: this.value,
            writable: true 
        })
        console.log(this.value.toString())
    }

    Date.prototype.toString = function() {
        function pad(number){
            if (number < 10) {
                return '0' + number
            }
            return number
        }
    
        return this.getFullYear() +
            '-' + pad(this.getMonth() + 1) +
            '-' + pad(this.getDate()) +
            ' ' + pad(this.getHours()) +
            ':' + pad(this.getMinutes())
    }

    return {
        add: function (number, type) {
            tryChangeDate(number, type, 1)
            return this
        },
        subtract: function (number, type) {
            tryChangeDate(number, type, -1)
            return this
        },
        value: this.value.toString()
    }
};
