import { useLocation } from 'adex/router'
import { Button } from '../components/button'
import { Input } from '../components/input'

export default function Login() {
  const loc = useLocation()
  const handleSubmit = async e => {
    try {
      e.preventDefault()

      const form = e.target.closest('form')
      const data = new FormData(form)
      const email = data.get('email')
      const password = data.get('password')

      const res = await fetch('/api/register', {
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
      const body = res.json()
      loc.route('/login')
    } catch (err) {
      console.error('failed with error', err)
    }
  }
  return (
    <div className="w-full max-w-4xl">
      <div className="flex items-center justify-center w-full min-h-screen p-6 md:p-10">
        <div className="w-full max-w-sm">
          <div className="flex flex-col gap-6">
            <div class="rounded-lg overflow-hidden border border-neutral-200/60 bg-white text-neutral-700 shadow-sm w-[380px]">
              <div class="p-7">
                <h2 class="mb-2 text-2xl font-bold leading-none tracking-tight">
                  Register
                </h2>
                <p class="mb-5 text-neutral-500">
                  Enter your email below to create an account
                </p>
                <form onSubmit={handleSubmit}>
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
                      </div>
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Register
                    </Button>
                  </div>
                  <div className="mt-4 text-sm text-center">
                    Already have an account?{' '}
                    <a href="/login" className="underline underline-offset-4">
                      Login
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
