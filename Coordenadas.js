function coordenadasCuadrantes(arr) {
    // Inicializar arreglos para almacenar las coordenadas
    let primerCuadrante = [];
    let tercerCuadrante = [];

    // Iterar sobre cada par de coordenadas en el arreglo
    for (let i = 0; i < arr.length; i++) {
        let x = arr[i][0];
        let y = arr[i][1];

        // Verificar si la coordenada está en el primer cuadrante
        if (x > 0 && y > 0) {
            primerCuadrante.push([x, y]);
        }
        // Verificar si la coordenada está en el tercer cuadrante
        else if (x < 0 && y < 0) {
            tercerCuadrante.push([x, y]);
        }
    }

    // Devolver las coordenadas de ambos cuadrantes
    return [primerCuadrante, tercerCuadrante];
}

// Ejemplo de uso
let coordenadas = [[1, 2], [-3, 4], [-2, -5], [3, -6]];
let resultado = coordenadasCuadrantes(coordenadas);
console.log("Coordenadas del primer cuadrante:", resultado[0]);
console.log("Coordenadas del tercer cuadrante:", resultado[1]);