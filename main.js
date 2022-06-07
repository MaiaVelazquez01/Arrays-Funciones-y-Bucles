function ingrediente_Par_Impar (vec1, vec2, vec3) {
  for (let i = 0; i < vec1.length ; i++){
    if (vec1[i].length % 2 == 0) {
      vec2.push(vec1[i]);
    }
    else {
      vec3.push(vec1[i])
    }
  }
}

let ingredientes = ["harina", "sal", "tomate", "aceite", "agua", "queso", "levadura", "aceituna", "morron", "jamon"];
let pares = [];
let impares = [];

ingrediente_Par_Impar(ingredientes, pares, impares);

console.log(`Los ingredientes pares son: ${pares}`);
console.log(`Los ingredientes impares son: ${impares}`);