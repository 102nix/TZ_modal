
export type BaseResponseAPI = {
  config: any
  data: Array<{id: number, url: string}>
  headers: any
  request: any
  status: number
  statusText: string
}
export type ApiGetModal = {
  comments: Array<{id: number, text: string, date: number}>
  id: number
  url: string
}
export type ModalResponseAPI = {
  config: any
  data: ApiGetModal
  headers: any
  request: any
  status: number
  statusText: string
}