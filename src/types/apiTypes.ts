export type ApiAllFotosType = Array<{id: number, url: string}>

export type ApiGetModal = {
  comments: Array<{id: number, text: string, date: number}>
  id: number
  url: string
}