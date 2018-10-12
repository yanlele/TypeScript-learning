# 学习TypeScript       

目录
- [01、基础类型](./app/src/01、基础部分/基础部分1-10.md#class01-01)
- [02、变量申明](./app/src/01、基础部分/基础部分1-10.md#class01-02)
- [03、接口](./app/src/01、基础部分/基础部分1-10.md#class01-03)
- [04、类](./app/src/01、基础部分/基础部分1-10.md#class01-04)
- [05、函数](./app/src/01、基础部分/基础部分1-10.md#class01-05)
- [06、泛型](./app/src/01、基础部分/基础部分1-10.md#class01-06)
- [07、枚举](./app/src/01、基础部分/基础部分1-10.md#class01-07)
- [08、类型推论](./app/src/01、基础部分/基础部分1-10.md#class01-08)
- [09、类型的兼容性](./app/src/01、基础部分/基础部分1-10.md#class01-09)
- [10、高级类型](./app/src/01、基础部分/基础部分1-10.md#class01-010)
- [11、Symbols](./app/src/01、基础部分/基础部分11-16.md#class01-11)
- [12、迭代器和生成器](./app/src/01、基础部分/基础部分11-16.md#class01-12)
- [13、模块](./app/src/01、基础部分/基础部分11-16.md#class01-13)
- [14、命名空间](./app/src/01、基础部分/基础部分11-16.md#class01-14)
- [15、声明合并](./app/src/01、基础部分/基础部分11-16.md#class01-15)
- [16、装饰器](./app/src/01、基础部分/基础部分11-16.md#class01-16)


               

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




## 其他
- [一篇关于ts装饰器的文章](https://www.cnblogs.com/winfred/p/8216650.html)



































## 申明文件


## 项目配置
