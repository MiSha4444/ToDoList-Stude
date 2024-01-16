export interface MenuBarHeader {
  label: string,
  icon: string,
  items: { label: string, icon: string, routerLink: string }[]
}

export interface Task {
  name: string
  user: string
  date: string
  category: string
  status: string
  id: string
  priority: string
}

export interface Category {
  name: string
  id: string
  description?: string
}

export interface Cols {
  field: string
  header: string
}
