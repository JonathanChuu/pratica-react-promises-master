/**
 * Retorna um array com todos os elementos únicos.
 * 
 * > Importante: Os parâmetros não devem ter sua estrutura alterada.
 * 
 * @param items array com itens de qualquer tipo.
 * 
 * @returns somente os itens definidos.
 */

export const uniq = <T>(args: T[]): T[] => {
  let arrResultado: T[] = []
  for(let i = 0; i < args.length; i++){
    if(counter(args[i],arrResultado)===0){
      arrResultado.push(args[i])
    } else{
      continue
    }
  }

  return arrResultado;
};


const counter = (eleVerificado: unknown, arrayVerificado: unknown[]) :number => {
  let contador: number = 0
  arrayVerificado.forEach(eleEach => {
    if(eleVerificado === eleEach) contador++
  });
  return contador
}