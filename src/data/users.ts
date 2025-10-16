export type User = {
  id: number
  email: string
  password: string
}

export const users: User[] = [
  {
    id: 1,
    email: 'user@example.com',
    password: 'Password123',
  }
]
