export class ResponseModel {
  responseCode!: string
  responseMessage!: string
  data!: any
  order!: []

}
export class PaggingModel {
  totalElements!: number
  totalPage!: number
  result!: any
}

