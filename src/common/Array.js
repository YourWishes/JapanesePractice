Array.prototype.indexOf || (Array.prototype.indexOf = function(d, e) {
    var a;
    if (null == this) throw new TypeError('"this" is null or not defined');
    var c = Object(this),
        b = c.length >>> 0;
    if (0 === b) return -1;
    a = +e || 0;
    Infinity === Math.abs(a) && (a = 0);
    if (a >= b) return -1;
    for (a = Math.max(0 <= a ? a : b - Math.abs(a), 0); a < b;) {
        if (a in c && c[a] === d) return a;
        a++
    }
    return -1
});

Array.prototype.removeObject || (Array.prototype.removeObject = function(o) {
    let i = this.indexOf(o);
    if(i != -1) {
        this.splice(i, 1);
    }
    return this;
});

Array.prototype.randomElement || (Array.prototype.randomElement = function() {
	return this[Math.floor(Math.random()*this.length)];
});

Array.prototype.shuffle || (Array.prototype.shuffle = function() {
	var i = this.length;
	while (i) {
		var j = Math.floor(Math.random() * i);
		var t = this[--i];
		this[i] = this[j];
		this[j] = t;
	}
    return this;
});

Array.prototype.contains || (Array.prototype.contains = function(data) {
    return this.indexOf(data) !== -1;
});