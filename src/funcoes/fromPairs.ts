import { KeyAndValue } from "../../types/keyAndValue";

/**
 * Deve criar um objeto a partir da lista de arrays chave/valor
 * 
 * Ex.: fromPairs(['a', 'a'], ['b': 1], ['c': false]) === { a: 'a', b: 1, c: false }
 * 
 * @param args 
 * @returns 
 */
export const fromPairs = (args: KeyAndValue[]): Record<string, unknown> => {
  let novoObj: Record<string, unknown> = {}
  args.forEach((itemIterado)=>{
    novoObj[itemIterado[0]] = itemIterado[1]
  })
  return novoObj;
};

