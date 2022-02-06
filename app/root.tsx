import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  Link,
} from 'remix'
import type { MetaFunction } from 'remix'

export const meta: MetaFunction = () => {
  return { title: 'Learning Remix' }
}

export default function App() {
  return (
    <html lang='pt-br'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <Link to='/'>Home</Link> | <Link to='/posts'>Posts</Link>
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}
