import { beforePageRender } from 'adex/hook'
import { parse } from 'cookie'

beforePageRender(ctx => {
  const cookies = parse(ctx.req.headers.cookie)
  if (!cookies.auth) {
    console.log('unauthenticated')
  } else {
    console.log('might be authenticated')
  }
})

export default function AppPage() {
  return <h1>TODO</h1>
}
