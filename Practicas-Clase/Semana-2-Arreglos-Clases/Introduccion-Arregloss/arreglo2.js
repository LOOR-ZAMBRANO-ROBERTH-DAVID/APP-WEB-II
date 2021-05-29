/**el set impide que se repitan valores al momento de
 * utilizarlos
 */
const numeros = new Set();

numeros.add(5);
numeros.add(5);
numeros.add(7);

console.log(numeros);