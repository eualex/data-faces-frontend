import 'next'

declare module 'next' {
  export interface NextApiRequest {
    file: {
      location: string
      key: string
    }
  }
}
