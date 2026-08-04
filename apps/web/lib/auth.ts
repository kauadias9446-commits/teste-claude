import { getServerSession as getNextAuthSession } from 'next-auth/next'
import { authOptions } from '../pages/api/auth/[...nextauth]'

export const getServerAuthSession = (req?: any, res?: any) => {
  return getNextAuthSession(req, res, authOptions)
}
