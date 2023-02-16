export interface Transferencia{ //Responsável por dados da API.

  id?: number | string //? representa propriedade opcional.
  valor: number
  destino: number | string //Número ou caracteres.
  data?: number

}
