import { Button } from '../components/button'
import { MarketingFooter } from '../components/marketing/footer'
import { MarketingHeader } from '../components/marketing/header'

export default function PricingPage() {
  return (
    <div className="w-full max-w-4xl">
      <MarketingHeader />
      <main className="min-h-screen">
        <section class="text-neutral-600">
          <div class="container px-5 pt-24 pb-10 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
              <h1 class="sm:text-3xl text-2xl font-medium  mb-2 text-neutral-900">
                Pricing
              </h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                Transparent pricing plans tailored to your needs
              </p>
            </div>
            <div class="w-full max-w-lg mx-auto overflow-auto">
              <ul class="divide-y divide-neutral-200 rounded-md">
                <li class="py-4 px-2 flex items-center justify-between gap-2">
                  <span>Free</span>
                  <span class="text-sm font-semibold">$0</span>
                </li>
                <li class="py-4 px-2 flex items-center justify-between gap-2">
                  <span>Starter</span>
                  <span class="text-sm font-semibold">$20</span>
                </li>
                <li class="py-4 px-2 flex items-center justify-between gap-2">
                  <span>Pro</span>
                  <span class="text-sm font-semibold">$50</span>
                </li>
              </ul>
            </div>
            <div class="w-full mt-10 flex items-center justify-center max-w-lg mx-auto overflow-auto">
              <Button href="/register">Let's Go &rarr;</Button>
            </div>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </div>
  )
}
