Array.prototype.customMap = function(callbackFn) {
    const result = [];
    for(let i = 0; i < this.length; i++) {
        result.push(callbackFn(this[i], i, this));
    }
    return result;
}

Array.prototype.customSlice = function (start, end) {
    const result = [];
    let stop;
    if (start === undefined) {
        return this;
    }
    if (start < 0) {
        start = start + this.length
    }

    if (end !== undefined && end > 0) {
        stop = end - 1
    } else if (end < 0) {
        stop = end + (this.length - 1)
    } else if (end === 0) {
        return [];
    } else {
        stop = this.length - 1
    }
    for (let i = start; i <= stop; i++) {
        result.push(this[i]);

    }
    return result;
}