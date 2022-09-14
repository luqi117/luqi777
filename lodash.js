var luqi = {
    chunk: function (array, number) {
        var num = []
        var n = Math.ceil(array.length / 2)
        for (var i = 0; i < array.length;) {
            for (var j = 0; j < number; j++, i++) {
                var ary = []
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
}
