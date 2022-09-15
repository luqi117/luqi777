var luqi117 = function(){
    function chunk(array, number) {
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
    }
    //
    function compact(array) {
        var num = []
        for (var i = 0; i < array.length; i++) {

            if (Boolean(array[i])) {
                num.push(array[i])
            }
        }
        return num
    }
    //
    function fill(array, value, start = 0, end = array.length) {
        for (var i = start; i < end; i++) {
            array[i] = value
        }
        return array
    }
    //
    function drop(array, n = 1) {
        var num = []
        var m = array.length - n
        if (m <= 0) {
            return []
        } else {
            for (var i = n; i < array.length; i++) {
                num.push(array[i])
            }
        }
        return num
    }
    //
    function flatten(array) {
        var num = []
        for (var i = 0; i < array.length; i++) {
            var item = array[i]
            if (Array.isArray(item)) {
                num.push(...item)
            } else {
                num.push(item)
            }
        }
        return num

    }
    function flattenDeep(array) {
        var num = []
        for (var i = 0; i < array.length; i++) {
            if (Array.isArray(array[i])) {
                array[i] = flattenDeep(array[i])
            }
            num.push(array[i])
        }
    }
    //
    function flattenDepth(ary,depth = 1) {

    }
    return {
        chunk,
        compact,
        fill,
        drop,
        flatten,
        flattenDeep
    }

}()
