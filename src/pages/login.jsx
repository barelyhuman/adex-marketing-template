import { useLocation } from 'adex/router'
import { Button } from '../components/button'
import { Input } from '../components/input'

export default function Login() {
  const loc = useLocation()

  const onSubmit = async e => {
    try {
      e.preventDefault()

      const form = e.target.closest('form')
      const data = new FormData(form)
      const email = data.get('email')
      const password = data.get('password')

      const res = await fetch('/api/login', {
        method: 'post',
        body: JSON.stringify({
          email,
          password,
        }),
      })
      if (!res.ok) {
        console.error('failed on server with error', res)
        return
      }
      const body = await res.json()
      localStorage.setItem('token', body.token)
      loc.route('/app')
    } catch (err) {
      console.error('failed with error', err)
    }
  }
  return (
    <div className="flex items-center justify-center w-full min-h-screen p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <div class="rounded-lg overflow-hidden border border-neutral-200/60 bg-white text-neutral-700 shadow-sm w-[380px]">
            <div class="p-7">
              <h2 class="mb-2 text-2xl font-bold leading-none tracking-tight">
                Login
              </h2>
              <p class="mb-5 text-neutral-500">
                Enter your email below to login to your account
              </p>
              <form onSubmit={onSubmit}>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <label htmlFor="email">Email</label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="example@example.com"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <label htmlFor="password">Password</label>
                      <a
                        href="#"
                        className="inline-block ml-auto text-sm underline-offset-4 hover:underline"
                      >
                        Forgot your password?
                      </a>
                    </div>
                    <Input
                      name="password"
                      id="password"
                      type="password"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Login
                  </Button>
                </div>
                <div className="mt-4 text-sm text-center">
                  Don't have an account?{' '}
                  <a href="/register" className="underline underline-offset-4">
                    Sign up
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
