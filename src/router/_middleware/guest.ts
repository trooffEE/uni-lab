import AuthModule from '@/store/modules/auth'

export default async function guest ({ next, nextMiddleware }: any) {
  if (AuthModule.self) {
    return next({ name: 'profile' })
  }
  return nextMiddleware()
}
