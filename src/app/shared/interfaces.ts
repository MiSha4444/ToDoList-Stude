export interface MenuBarHeader {
  label: string,
  icon: string,
  items: { label: string, icon: string, routerLink: string }[]
}
export interface Task {
  status: string
  name: string
  user: string
  date: string
  category: string
  id: string
  priority: string
}

export interface Category {
  name: string
  id: string
  description?: string
}
