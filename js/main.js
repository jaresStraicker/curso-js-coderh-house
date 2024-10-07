
// Entregable 01

// Idea principal: buscador de comidas, el usuario busca una comida, si esta se encuentra disponible se dara aviso en preparacion, sino se le indicara que no esta disponible.

// se utilizara una lista de comidas disponibles del restaurante.

// se usara for para recorrer la lista.

// se usara if para comparar si lo que introdujo el usuario se encuentra disponible.

// se utilizara la funcion unicamente  para retornar valor disponible o no disponible de lo que el usuario busque.


let busquedaPorElUsuarioComida = prompt ("¿Que desea comer?").toLowerCase();



function busquedaDeComida (comida){
    let listaDeComida = ['hamburguesa', 'milanesa', 'zapallito', 'emapanada', 'pizza'];

    for (let i = 0; i < listaDeComida.length; i++) {
        if (busquedaPorElUsuarioComida == listaDeComida[i]){
            
            return ("Su pedido esta en preparacion. ");
            
        }
    }

    return ("No esta disponible");
    
};

alert ("solicitud: " + busquedaDeComida(busquedaPorElUsuarioComida));



