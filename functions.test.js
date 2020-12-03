const functions = require('./functions');


test('Probar la suma de 2 + 2 es igual 4',() =>{
    expect(2+2).toBe(4);
});


test('Probar la suma de 2 + 2 es igual 4 con una funcion',() =>{
    expect(functions.suma(2,2)).toBe(4);
});

test('Probar la suma de 2 + 2 No es igual 5',() =>{
    expect(functions.suma(2,2)).not.toBe(5);
});

test('Probar la resta de 6 - 2 es igual 4 con una funcion',() =>{
    expect(functions.resta(6,2)).toBe(4);
});

test('Should be null', () =>{
    expect(functions.isNull()).toBeNull();
});

test('Validar nombre usuario',() => {
    //console.log("Usuario: ", functions.createUser())
    expect(functions.createUser()).toEqual({
        nombre: 'Yuri',
        apellido: 'Reyes'
    });
});

test('Validar hola mundo',() =>{
    expect(functions.holaMundo()).toBe('¡Hola Mundo!')
});
