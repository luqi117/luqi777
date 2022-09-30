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
    function compact(array) {
        var num = []
        for (var i = 0; i < array.length; i++) {

            if (Boolean(array[i])) {
                num.push(array[i])
            }
        }
        return num
    }
    function fill(array, value, start = 0, end = array.length) {
        for (var i = start; i < end; i++) {
            array[i] = value
        }
        return array
    }
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

    function sortedIndex(ary, val) {
        for (var i = 0; i < ary.length; i++) {
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
            for (var i = 0; i < idx.length; i++) {
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
        for (var i = 0; i < ary.length; i++) {
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

    function difference(ary, ...val) {
        var num = []
        var result = []
        for (var i = 0; i < val.length; i++) {
            for (var j = 0; j < val[i].length; j++) {
                var item = val[i][j]
                if (ary.includes(item)) {
                    num.push(item)
                }
            }
        }
        for (var i = 0; i < ary.length; i++) {
            if (!num.includes(ary[i])) {
                result.push(ary[i])
            }
        }
        return result
    }

    function dropRight(ary, n = 1) {
        if (n >= ary.length) {
            return []
        }
        var result = []
        var s = ary.length - n
        for (var i = 0; i < s; i++) {
            result.push(ary[i])
        }
        return result
    }

    function nth(ary, n = 0) {
        if (n >= 0) {
            return ary[n]
        } else {
            return ary[ary.length + n]
        }
    }

    function pullAll(ary, num) {
        var result = []
        for (var i = 0; i < ary.length; i++) {
            if (!num.includes(ary[i])) {
                result.push(ary[i])
            }
        }
        return result
    }

    function sortedIndexOf(ary, val) {
        for (var i = 0; i < ary.length; i++) {
            if (ary[i] == val) {
                return i
            }
        }
    }

    function sortedLastIndex(ary, val) {
        return ary[ary.length - val]
    }

    function sortedLastIndexOf(ary, val) {
        for (var i = ary.length - 1; i >= 0; i--) {
            if (ary[i] == val) {
                return i
            }
        }
    }

    function sortedUniq(ary) {
        var result = []
        for (var i = 0; i < ary.length; i++) {
            if (!result.includes(ary[i])) {
                result.push(ary[i])
            }
        }
        return result
    }

    function tail(ary) {
        ary.shift()
        return ary
    }

    function take(ary, n = 1) {
        var n = Math.min(n, ary.length)
        var result = []
        for (var i = 0; i < n; i++) {
            result.push(ary[i])
        }
        return result
    }

    function takeRight(ary, n = 1) {
        var s = Math.min(n, ary.length)
        var result = []
        for (var i = ary.length - s; i < ary.length; i++) {
            result.push(ary[i])
        }
        return result
    }

    function zip(...arys) {
        var result = []
        for (var i = 0; i < arys[0].length; i++) {
            var num = []
            for (var j = 0; j < arys.length; j++) {
                num.push(arys[j][i])
            }
            result.push(num)
        }
        return result
    }

    function zipObject(ary, num) {
        var map = {}
        for (var i = 0; i < ary.length; i++) {
            map[ary[i]] = num[i]
        }
        return map
    }

    function identity(val) {
        return val
    }
    //判断时候相同
    //中间函数
    //
    function isSame(func) {
        if (typeof func == 'function') {
            return func
        }
        if (typeof func == 'string') {
            return function(o) {
                o = o[func]
            }
            return o
        }
        if (Array.isArray(func)) {
            return function(o) {
                for (var i = 0;i < 1;i ++) {
                    if (func[i + 1] !== o[func[i]]) {
                        return false
                    }
                }
                return true
            }
        }
        if (typeof func == 'object') {
            return function(o) {
                for (var i in func) {
                    if (func[i] !== undefined && func[i] !== o[i]) {
                        return false
                    }
                }
                return true
            }
        }
    }
    function differenceBy(ary,...arys) {
        let func = arys[arys.length - 1];
        var num = []
        var result = [];
        var array = [].concat(...arys);
        if (typeof func == 'function') {
            func = isSame(func);
            array.forEach((it,i) => array[i] = func(it));

            for (var i = 0;i < ary.length;i ++) {
                if (!array.includes(func(ary[i]))) {
                    result.push(ary[i])
                }
            };
            return result
        }
        if (typeof func == 'string') {
            array.forEach(it => {
                if (it[func] !== undefined) {
                    num.push(it[func])
                }
            });
            for (var i = 0;i < ary.length;i ++) {
                if (!num.includes(ary[i][func])) {
                    result.push(ary[i])
                }
            }
            return result

        } else {
            return difference(ary,...arys)
        }
    }
    function isEqual(value,other) {
        // 判断数字，字符串，Boolean
        if (value === other) {
            return true
        }
        // 判断NaN
        if (value !== value && other !== other) {
            return true
        }
        if (value === null || other === null || typeof value !== 'object' || typeof other !== 'object') {
            return false
        }
        if (Object.keys(value).length !== Object.keys(other).length) {
            return false
        }
        for (let key in value) {
            if (!(key in other) || !isEqual(value[key],other[key])) {
                return false
            }
        }
        return true

    }
    function differenceWith(ary,num,func) {
        let result = []
        for (let key of ary) {
            for (let pro of num) {
                if (!func(key,pro)) {
                    result.push(key)
                }
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
        dropRight,
        nth,
        pullAll,
        sortedIndexOf,
        sortedLastIndex,
        sortedLastIndexOf,
        sortedUniq,
        tail,
        take,
        takeRight,
        zip,
        zipObject,
        identity,
        isSame,
        differenceBy,
        isEqual,
        differenceWith,
    }

}()
