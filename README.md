# 学习TypeScript                      

## <div id="class00">起步</div>
首先要安装typescript:            
`npm install -g typescript`                 

配置文件： tsconfig.json
```json
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es5",
    "typeRoots": [
      "/node_modules/@type",
      "/typings/modules"
    ],
    "allowJs": true,
    "moduleResolution": "node",
    "sourceMap": true,
    "outDir": "book/12、学习TypeScript/dist",
    "baseUrl": "."
  },
  "include": [
    "book/12、学习TypeScript/src/**/*"
  ],
  "exclude": [
    "/node_modules"
  ]
}
```

编写好的TS文件直接运行命令行 tsc 就可以直接打包了。                      


## <div id="class01">基础部分</div>
### <div class="class01-01">01、基础类型</div>
**布尔类型**： 略                 

**数字类型**： 略

**字符串类型**： 略

**数组**：                 
申明方式：           
```typescript
let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];
```

**元组 Tuple**: 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。                            
```typescript
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
x = [10, 'hello']; // Error
```

**枚举**:                         
```typescript
enum Color {Red, Green, Blue}
let c: Color = Color.Green;

enum Color {Red = 1, Green, Blue}   // 1开始编号
let c: Color = Color.Green;
```


**Any**:                
```typescript
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

let list: any[] = [1, true, "free"];
list[1] = 100;
```

**void**: 它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void             
```typescript
function warnUser(): void {
    alert("This is my warning message");
}
```          
声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null


**Null 和 Undefined**: 默认情况下null和undefined是所有类型的子类型。

**Never**: 表示的是那些永不存在的值的类型。                         
never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型；               
never类型是任何类型的子类型，也可以赋值给任何类型
```typescript
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}
```

**类型断言**:               
类型断言有两种形式。 其一是“尖括号”语法               
```typescript
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
```
另一个为as语法：               
```typescript
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
```

### <div class="class01-02">02、变量申明</div>
这一节主要讲的是变量申明，var、let、const、解构赋值 等，可以直接参考es6就可以了。


### <div class="class01-03">03、接口</div>
#### 接口初探
举例子：
```typescript
function printLabel(labelledObj: { label: string }) {
  console.log(labelledObj.label);
}
let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

// 重写上面的例子
interface LabelledValue {
  label: string;
}
function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}
let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);
```
需要注意的是，我们在这里并不能像在其它语言里一样，说传给 printLabel的对象实现了这个接口。我们只会去关注值的外形。 只要传入的对象满足上面提到的必要条件，那么它就是被允许的。               
 
#### 可选属性               
接口里的属性不全都是必需的。 有些是只在某些条件下存在，或者根本不存在。 可选属性在应用“option bags”模式时很常用，即给函数传入的参数对象中只有部分属性赋值了。
```typescript
interface SquareConfig {
  color?: string;
  width?: number;
}
function createSquare(config: SquareConfig): {color: string; area: number} {
  let newSquare = {color: "white", area: 100};
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}
let mySquare = createSquare({color: "black"});
```

#### 只读属性                   
一些对象属性只能在对象刚刚创建的时候修改其值。 你可以在属性名前用 readonly来指定只读属性:                  
```typescript
interface Point {
    readonly x: number,
    readonly y: number
}
let p1: Point = {x:5, y:10};
p1.x = 10;
```

TypeScript具有ReadonlyArray<T>类型, 可以确保数组创建后再也不能被修改：                   
```typescript
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
ro[0] = 12; // error!
ro.push(5); // error!
ro.length = 100; // error!
a = ro; // error!
```

可以这样做断言：
```typescript
a = ro as number[];
```

readonly vs const               
最简单判断该用readonly还是const的方法是看要把它做为变量使用还是做为一个属性。 做为变量使用的话用 const，若做为属性则使用readonly。                 

#### 额外的属性检查                    
```typescript
interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}
function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let mySquare = createSquare({colorr: "black"});
```
这我们要表示的是SquareConfig可以有任意数量的属性，并且只要它们不是color和width，那么就无所谓它们的类型是什么。

还有最后一种跳过这些检查的方式，这可能会让你感到惊讶，它就是将这个对象赋值给一个另一个变量： 因为 squareOptions不会经过额外属性检查，所以编译器不会报错。

总结一下就是最好别用这种绕开检测的手段，可能会影响程序的正常进行。                       


#### 函数类型                   
为了使用接口表示函数类型，我们需要给接口定义一个调用签名。 它就像是一个只有参数列表和返回值类型的函数定义。参数列表里的每个参数都需要名字和类型。

```typescript
interface SearchFunc {
  (source: string, subString: string): boolean;
}

// 最经典的写法
let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
};

//对于函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配。 比如，我们使用下面的代码重写上面的例子：
let mySearch: SearchFunc;
mySearch = function(src: string, sub: string): boolean {
  let result = src.search(sub);
  return result > -1;
};

// 这样写也是可以的
let mySearch: SearchFunc;
mySearch = function(src, sub) {
    let result = src.search(sub);
    return result > -1;
}
```

#### 可索引的类型                     
可索引类型具有一个 索引签名，它描述了对象索引的类型，还有相应的索引返回值类型。 
```typescript
interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];
```
这个索引签名表示了当用 number去索引StringArray时会得到string类型的返回值。

共有支持两种索引签名：字符串和数字。 可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型。
```typescript
class Animal {
    name: string;
}
class Dog extends Animal {
    breed: string;
}
// 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
interface NotOkay {
    [x: number]: Animal;
    [x: string]: Dog;
}
```

下面的例子里， name的类型与字符串索引类型不匹配，所以类型检查器给出一个错误提示：
```typescript
interface NumberDictionary {
  [index: string]: number;
  length: number;    // 可以，length是number类型
  name: string       // 错误，`name`的类型与索引类型返回值的类型不匹配
}
```

最后，你可以将索引签名设置为只读，这样就防止了给索引赋值：
```typescript
interface ReadonlyStringArray {
    readonly [index: number]: string;
}
let myArray: ReadonlyStringArray = ["Alice", "Bob"];
myArray[2] = "Mallory"; // error!
```

#### 类类型
**实现接口**                    
```typescript
interface ClockInterface {
    currentTime: Date;
}

class Clock implements ClockInterface {
    currentTime: Date;
    constructor(h: number, m: number) { }
}
```

**类静态部分与实例部分的区别**

当你操作类和接口的时候，你要知道类是具有两个类型的：静态部分的类型和实例的类型。

看下面的例子，我们定义了两个接口， ClockConstructor为构造函数所用和ClockInterface为实例方法所用。 为了方便我们定义一个构造函数 createClock，它用传入的类型创建实例。

#### 继承接口                   
```typescript
interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;

// 这样也可以
let square = <{color: string, sideLength: number}>{};
square.color = "blue";
square.sideLength = 10;
console.log(square);
```

一个接口可以继承多个接口，创建出多个接口的合成接口。
```typescript
interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
```


#### 混合类型               
```typescript
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
```

#### 接口继承类              
```typescript
class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() { }
}

class TextBox extends Control {
    select() { }
}

// 错误：“Image”类型缺少“state”属性。
class Image implements SelectableControl {
    select() { }
}

class Location {
}
```


### <div id="class01-04">04、类</dvi>
#### 介绍
```typescript
class Greeter {
    greeting: string;       // 属性
    constructor(message: string) {      // 构造函数
        this.greeting = message;
    }
    greet() {       // 方法
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");
```

#### 继承
```typescript
class Animal {
    move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal {
    bark() {
        console.log('Woof! Woof!');
    }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();
```

来看一个更加复杂的例子
```typescript
class Animal{
    name: string;
    constructor(theName: string) {
        this.name = theName
    }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters} m.`)
    }
}
class Snake extends Animal {
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeters = 5) {
        console.log('slithering......');
        super.move(distanceInMeters);
    }
}
class Horse extends Animal{
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeters = 45) {
        console.log('Galloping......');
        super.move(distanceInMeters);
    }
}
let sam = new Snake('Sammy the python');
let tom:Horse = new Horse('Tommy the Palomino');

sam.move();
tom.move(34);
```

#### 公共，私有与受保护的修饰符                  
**默认为 public**

你也可以明确的将一个成员标记成 public。 我们可以用下面的方式来重写上面的 Animal类：
```typescript
class Animal {
    public name: string;
    public constructor(thename: string) {
        this.name = thename;
    }
    public move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters} m.`)
    }
}
```

**理解 private**

当成员被标记成 private时，它就不能在声明它的类的外部访问
```typescript
class Animal {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}
new Animal("Cat").name; // 错误: 'name' 是私有的.
```






## 申明文件


## 项目配置
