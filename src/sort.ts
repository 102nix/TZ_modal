import { IUrlBackEnd } from "./types/stateInterfaces"

export const sortsEl = (a: IUrlBackEnd, b: IUrlBackEnd) => {
  if ((a.id || 0) > (b.id || 0)) return 1
  return -1
}