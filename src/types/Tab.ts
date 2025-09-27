export type Tab = {
  content: TabContent[]
  id: number
  image: string
  isVisible?: boolean
  title: string
}

export type TabContent = {
  text: string
  title: string
}
