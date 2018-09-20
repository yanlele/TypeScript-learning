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





## 申明文件


## 项目配置
