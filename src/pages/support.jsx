import { Button } from '../components/button'
import { Input } from '../components/input'
import { MarketingFooter } from '../components/marketing/footer'
import { MarketingHeader } from '../components/marketing/header'

export default function SupportPage() {
  return (
    <div className="w-full max-w-4xl">
      <MarketingHeader />
      <main className="min-h-screen">
        <section class="text-neutral-600 relative">
          <div class="container px-5 pt-24 pb-10 mx-auto">
            <div class="flex flex-col text-center w-full mb-12">
              <h1 class="sm:text-2xl text-xl font-medium mb-4 text-neutral-900">
                Need support?
              </h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                We're just an email away.
              </p>
            </div>
            <div class="lg:w-1/2 md:w-2/3 mx-auto">
              <div class="flex flex-wrap -m-2">
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <Input
                      type="email"
                      placeholder="Email"
                      id="email"
                      name="email"
                    />
                  </div>
                </div>
                <div class="p-2 w-full">
                  <div class="relative w-full mx-auto">
                    <textarea
                      type="text"
                      placeholder="Type your message here."
                      class="flex w-full h-auto min-h-[80px] px-3 py-2 text-sm bg-white border rounded-md border-neutral-300 placeholder:text-neutral-400 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-50"
                    ></textarea>
                  </div>
                </div>
                <div class="p-2 w-full flex justify-end">
                  <Button>Send Message</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </div>
  )
}
