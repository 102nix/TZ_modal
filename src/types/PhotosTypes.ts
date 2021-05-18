export type PhotosPropsType = {
  url: string
  id: number
  draggable: boolean
  showModal: (id: number) => void
  onDragStart(): void
  onDragOver(event: React.DragEvent<HTMLDivElement>): void
  onDrop(event: React.DragEvent<HTMLDivElement>): void
}