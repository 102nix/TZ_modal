export interface IUrlBackEnd {
  id: number
  url: string
}

export interface IStateType {
  photos: Array<IUrlBackEnd> | null
  comments: Array<string>
  urlModal: string
  currentPhoto: IUrlBackEnd
}