export interface task {
    status: string
    name: string
    user: string
    date: string
    category: string
    id: number | string
}

export interface category {
    name: string
    id: string
    description?: string
}
