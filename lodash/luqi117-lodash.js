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

    function indexOf(ary, val, fromIndex = 0) {
        for (var i = fromIndex; i < ary.length; i++) {
            if (ary[i] == val) {
                return i
            }
        }
        return - 1
    }

    function initial(ary) {
        ary.pop()
        return ary
    }

    function intersection(...arys) {
        var result = []
        for (var i = 0; i < arys[0].length; i++) {
            var p = true
            for (var j = 1; j < arys.length; j++) {
                if (arys[j].indexOf(arys[0][i]) === -1) {
                    p = false
                    break
                }
            }
            if (p) {
                result.push(arys[0][i])
            }
        }
        return result
    }

    function join(ary, separator = ',') {
        var result = ''
        for (var i = 0; i < ary.length; i++) {
            result += ary[i]
            if (i < ary.length - 1) {
                result += separator
            }
        }
        return result
    }

    function last(ary) {
        return ary[ary.length - 1]
    }

    function lastIndexOf(ary, val, fromIndex = ary.length - 1) {
        if (fromIndex < 0) {
            return - 1
        }
        for (var i = fromIndex; i >= 0; i--) {
            if (ary[i] == val) {
                return i
            }
        }
    }

    function pull(ary, ...vals) {
        var result = []
        for (var i = 0; i < ary.length; i++) {
            if (!vals.includes(ary[i])) {
                result.push(ary[i])
            }
        }
        return result
    }

    function reverse(ary) {
        var result = []
        for (var i = ary.length - 1; i >= 0; i--) {
            result.push(ary[i])
        }
        return result
    }

    function union(...arys) {
        var ary = arys.flat(1)
        var resultAry = []

        for (var i = 0; i < ary.length; i++) {
            var idx = resultAry.indexOf(ary[i])
            if (idx < 0) {
                resultAry.push(ary[i])
            }
        }
        return resultAry
    }

    function sortedIndex(ary,val) {
        for (var i = 0;i < ary.length;i ++) {
            if (ary[i] >= val) {
                return i
            }
        }
    }

    function unionBy(...arys) {
        var pre = arys.pop()
        pre = iteratee(pre)
        var num = []
        var result = []
        for (var idx of arys) {
            for (var i = 0;i < idx.length;i ++) {
                var item = idx[i]
                if (!num.includes(pre(item))) {
                    num.push(pre(item))
                    result.push(item)
                }
            }
        }
        return result
    }

    function uniq(ary) {
        var result = []
        for (var i = 0;i < ary.length;i ++) {
            if (!result.includes(ary[i])) {
                result.push(ary[i])
            }
        }
        return result
    }

    function uniqBy(...arys) {
        var pre = arys.pop()
        pre = iteratee(pre)
    }

    function difference(ary,...val) {
        var num = []
        var result = []
        for (var i = 0;i < val.length;i ++) {
            for (var j = 0;j < val[i].length;j ++) {
                var item = val[i][j]
                if (ary.includes(item)) {
                    num.push(item)
                }
            }
        }
        for (var i = 0;i < ary.length;i ++) {
            if (!num.includes(ary[i])) {
                result.push(ary[i])
            }
        }
        return result
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
        initial,
        intersection,
        join,
        last,
        lastIndexOf,
        pull,
        reverse,
        union,
        sortedIndex,
        unionBy,
        uniq,
        uniqBy,
        difference,
    }

}()
