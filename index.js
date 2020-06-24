/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
    var dateArray = date.match(/[0-9]+/gi)
    var currentDate = new Date(dateArray[0], dateArray[1] - 1, dateArray[2], dateArray[3], dateArray[4])

    Object.defineProperty(this, 'value', {
        value: currentDate.toString(),
        writable: true
        }
    )
    console.log(this)
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

    var tryChangeDate = function(number, type, operationType){
        if (number < 0){
            throw TypeError()
        }
        switch (type){
            case 'years':
                currentDate.setFullYear(currentDate.getFullYear() + operationType * number)
                break
            case 'months':
                currentDate.setMonth(currentDate.getMonth() + operationType * number)
                break
            case 'days':
                currentDate.setDate(currentDate.getDate() + operationType * number)
                break
            case 'hours':
                currentDate.setHours(currentDate.getHours() + operationType * number)
                break
            case 'minutes':
                currentDate.setMinutes(currentDate.getMinutes() + operationType * number)
                break
            default:
                throw TypeError()
                break
        }
        Object.defineProperty(this, 'value', {
            value: currentDate.toString(),
            writable: true
            }
        )
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
    }
};
