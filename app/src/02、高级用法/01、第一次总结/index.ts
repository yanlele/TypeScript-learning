const data = {
  name: 'yanle',
  age: 27,
};

function get(o: object, name: string) {
  return o[name]
}

function get1<T extends object, K extends keyof T>(o: T, name: K): T[K] {
  return o[name];
}

console.log(get(data, 'sfsdf'));

console.log(get1(data, 'age1'));

