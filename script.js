let user = {
    name: 'John'
};

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

alert( JSON.stringify(descriptor, null, 2 ) );

/*
{
  "value": "John",
  "writable": true,
  "enumerable": true,
  "configurable": true
}
*/


