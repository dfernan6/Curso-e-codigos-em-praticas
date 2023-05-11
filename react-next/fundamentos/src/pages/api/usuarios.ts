import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json([
    { nome: 'João', email: 'jjjoao@gmail.com' },
    { nome: 'Maria', email: 'mmmaria@gmail.com' }
  ])
}
