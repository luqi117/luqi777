var luqi117 = function () {
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
    function flattenDeep(ary) {
        for (var j = 0; j < Infinity; j++) {
            var num = []
            var p = true
            for (var i = 0; i < ary.length; i++) {
                var item = ary[i]
                if (Array.isArray(item)) {
                    num.push(...item)
                    p = false
                } else {
                    num.push(item)
                }
            }
            if (p) {
                return ary
            } else {
                ary = num
            }
        }
        return ary
    }
    //
    function flattenDepth(ary, depth = 1) {
        for (var j = 0; j < depth; j++) {
            var num = []
            for (var i = 0; i < ary.length; i++) {
                var item = ary[i]
                if (Array.isArray(item)) {
                    num.push(...item)
                } else {
                    num.push(item)
                }
            }
            ary = num
        }
        return ary
    }
    function fromPairs(ary) {
        var map = {}
        for (var i = 0; i < ary.length; i++) {
            var num = ary[i]
            for (var j = 0; j < num.length; j++) {
                item = num[0]
                map[item] = 0
                if (j == 1) {
                    map[item] = num[1]
                }
            }
        }
        return map
    }
    function head(ary) {
        if (!ary) {
            return undefined
        } else {
            return ary[0]
        }

    }

    function indexOf(ary,val,fromIndex=0) {
        for (var i = fromIndex;i < ary.length;i ++) {
            if (ary[i] == val) {
                return i
            }
        }
        return - 1
    }
    return {
        chunk,
        compact,
        fill,
        drop,
        flatten,
        flattenDeep,
        flattenDepth,
        fromPairs,
        head,
        indexOf,
    }

}()
