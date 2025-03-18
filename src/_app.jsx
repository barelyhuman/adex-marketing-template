import { beforePageRender } from 'adex/hook'
import twindConfig from '../twind.config.js'
import { install, inline } from '@twind/core'

import 'virtual:adex:global.css'

import {
  LocationProvider,
  Router,
  Route,
  lazy,
  hydrate as preactHydrate,
  ErrorBoundary,
} from 'adex/router'

// @ts-expect-error injected by vite
import { routes } from '~routes'

const tw = install(twindConfig)

beforePageRender(async ctx => {
  ctx.html = inline(
    ctx.html
      .replace(
        '<head>',
        '<head>\n<meta name="viewport" content="width=device-width, initial-scale=1.0">'
      )
      .replace('<body>', '<body class="bg-neutral-50"/>')
      .replace(
        '<div id="app">',
        '<div id="app" class="flex items-start justify-center h-full bg-gray-50">'
      ),
    {
      tw,
    }
  )
})

function ComponentWrapper({ url = '' }) {
  return (
    <LocationProvider url={url}>
      <ErrorBoundary>
        <Router>
          {routes.map(d => (
            <Route path={d.routePath} component={lazy(d.module)} />
          ))}
        </Router>
      </ErrorBoundary>
    </LocationProvider>
  )
}

export const App = ({ url = '' }) => {
  return <ComponentWrapper url={url} />
}

async function hydrate() {
  preactHydrate(<ComponentWrapper />, document.getElementById('app'))
}

if (typeof window !== 'undefined') {
  hydrate()
}
