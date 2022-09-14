var luqi117 = {
    chunk:function  (array, number) {
        var num = []
        for (var i = 0; i < array.length;) {
            var ary = []
            for (var j = 0; j < number; j++, i++) {
                if (array[i] === undefined) {
                    break
                } else {

                    ary.push(array[i])
                }
            }
            num.push(ary)
        }
        return num
    },
    compact: function compact(array) {
        var num = []
        for (var i = 0; i < array.length; i++) {

            if (Boolean(array[i])) {
                num.push(array[i])
            }
        }
        return num
    },
    fill: function fill(array, value, start = 0, end = array.length) {
        for (var i = start; i < end; i++) {
            array[i] = value
        }
        return array
    },
    drop: function drop(array, n = 1) {
        var num = []
        var m = array.length - n
        if (m <= 0) {
            return []
        } else {
            for (var i = n;i < array.length;i ++) {
                num.push(array[i])
            }
        }
        return num
    },
    findindex: function findindex(array) {

    },
    findLastIndex: function findLastIndex(array) {

    },
    flatten: function flatten(array) {
        var num = []
        for (var i = 0;i < array.length;i ++) {
            if (!Array.isArray(array[i])) {
                num.push(array[i])
            } else {
                num.push(flatten(array[i]))
            }
        }
        return num

    },
    flattenDeep: function flattenDeep(array) {

    },
    findLastIndex: function findLastIndex(array) {

    },
    findLastIndex: function findLastIndex(array) {

    },
    findLastIndex: function findLastIndex(array) {

    },
    findLastIndex: function findLastIndex(array) {

    },
    findLastIndex: function findLastIndex(array) {

    },
    findLastIndex: function findLastIndex(array) {

    },
    findLastIndex: function findLastIndex(array) {

    },
    findLastIndex: function findLastIndex(array) {

    },
    findLastIndex: function findLastIndex(array) {

    },
    findLastIndex: function findLastIndex(array) {

    },
    findLastIndex: function findLastIndex(array) {

    },
    findLastIndex: function findLastIndex(array) {

    },
    findLastIndex: function findLastIndex(array) {

    },
    findLastIndex: function findLastIndex(array) {

    },
    findLastIndex: function findLastIndex(array) {

    },
    findLastIndex: function findLastIndex(array) {

    },
    findLastIndex: function findLastIndex(array) {

    },


}
