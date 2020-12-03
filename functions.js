const functions = {
    //suma: function(num1,num2){return num1 + num2},
    suma: (num1, num2) => num1 + num2,
    //resta: function(num1,num2){return num1 - num2}
    resta: (num1,num2) => num1 - num2,
    isNull: () => null,
    createUser: () => {
        const user = {nombre:'Yuri'};
        user['apellido'] = 'Reyes';
        return user;
    },
    holaMundo: () => '¡Hola Mundo!'

}

module.exports = functions
