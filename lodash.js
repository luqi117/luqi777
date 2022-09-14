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
    fill: function fill(array,value,start=0,end=array.length) {
        for (var i = start;i < end;i ++) {
            array[i] = value
        }
        return array
    },
}
