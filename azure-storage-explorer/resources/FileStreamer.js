var Readable = Stream.Readable;
var util = Util;

function FileStreamer(file, opt) {
    Readable.call(this, opt);

    this.fileReader = new FileReader(file);
    this.file = file;
    this.size = file.size;
    this.chunkSize = 1024 * 1024 * 4;
    this.offset = 0;
    var _me = this;
	
	this.fileReader.onloadend = function loaded(event) {
		var data = event.target.result
		var buf = new Buffer(data);
		if (_me.notify != undefined)
			_me.notify(_me.offset > _me.size ? _me.size : _me.offset, _me.size);
		_me.push(buf);
	}
}
util.inherits(FileStreamer, Readable);

FileStreamer.prototype._read = function() {
    if (this.offset > this.size) {
        console.log("Reach file end");
        this.push(null);
    } else {
        var end = this.offset + this.chunkSize;
        var slice = this.file.slice(this.offset, end);
        this.fileReader.readAsArrayBuffer(slice);
        this.offset = end;
    }
};