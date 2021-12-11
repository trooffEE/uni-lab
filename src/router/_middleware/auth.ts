import AuthModule from '@/store/modules/auth'

export default async function auth ({ next, nextMiddleware, to }: any) {
  if (!AuthModule.self) {
    return next({ name: 'auth.login', query: { redirect: to.path } })
  }
  return nextMiddleware()
}
