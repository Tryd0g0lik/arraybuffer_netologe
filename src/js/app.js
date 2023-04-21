export function getBuffer() {
	const data = "{'data':{'user':{'id':1,'name':'Hitman','level':10}}}";
	return ((input) => {
		const buffer = new ArrayBuffer(data.length * 2);
		const bufferView = new Uint16Array(buffer);

		for (let i = 0; i < input.length; i += 1) {
			bufferView[i] = input.charCodeAt(i);
		}
		return bufferView;
	})(data);
}

export class ArrayBufferConverter{
	set load(buffer) {
		this.buffer = buffer;
	} // который может загружать данные

	toString() {
		let result = "";
		for (let i = 0; i < this.buffer.length; i += 1) {
			result += String.fromCharCode(this.buffer[i]);
		}
		return result;
	} // который умеет переводить содержимое загруженного ArrayBuffer в строку.
}

// const buff = getBuffer();
// console.log(`buff: ${buff}`);

// const arrayBuf = new ArrayBufferConverter();
// arrayBuf.load = buff;
// console.log(`toString: ${arrayBuf.toString()}`);
