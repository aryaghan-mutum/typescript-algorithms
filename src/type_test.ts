export class MyClass {
	private name: string;
	private age: number;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}

	public asNumber(val: number | string): number {
		return val as number;
	}

	public asNumber2(val: number | string): number {
		return typeof val == 'string' ? Number(val) : val;
	}

	displayInfo = () => console.log(this.name + ' is ' + this.age + ' years old ');

	/**
	 * Overloading functions
	 */
	// add(a: number, b: number);
	// add(a: string, b: string);

	// public add(a: number, b: number) : number{
	// 	return a + b;
	// }

}

var obj = new MyClass('anurag', 26);
console.log('As Nnumber: ' + obj.asNumber(2));
// console.log('Add 2 Nums: ' + obj.add(3, 4));
// console.log('Add 2 Strings: ' + obj.add('hello', 'boy'));

let print = () => console.log('Use lambda function: ' + obj.asNumber2(32));
print();

let sum = (x: number, y: number) => x + y;
console.log('Sum lambda function: ' + sum(2, 4));

obj.displayInfo();

