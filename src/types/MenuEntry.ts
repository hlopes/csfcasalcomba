export type MenuEntry = {
  id: number
  newTab: boolean
  path?: string
  submenu?: MenuEntry[]
  title: string
}
