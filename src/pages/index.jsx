import { MarketingFooter } from '../components/marketing/footer'
import { MarketingHeader } from '../components/marketing/header'

export default function LandingPage() {
  return (
    <div className="w-full max-w-4xl">
      <MarketingHeader />
      <main className="min-h-screen">
        <section className="text-gray-600">
          <div className="container flex flex-col items-center justify-center px-5 pt-32 pb-10 mx-auto">
            <div className="w-full text-center lg:w-2/3">
              <h3 className="mb-4 text-neutral-600/75">
                Lorem ipsum text, because I don't know what to put here
              </h3>
              <h1 className="mb-4 text-3xl font-medium text-gray-900 ">
                A modern marketing website built with adex to streamline your
                projects.
              </h1>
            </div>
            <div className="flex flex-col items-center w-full mb-20 text-center">
              <div className="flex justify-center mt-10">
                <a
                  href="/register"
                  className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium tracking-wide text-white transition-colors duration-200 rounded-md shadow bg-neutral-950 hover:bg-neutral-900 focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900"
                >
                  Get Started &rarr;
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 -m-4 sm:grid-cols-2 md:grid-cols-3 sm:border-l sm:border-r">
              <FeatureCard
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                  >
                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
                  </svg>
                }
                title="Fast"
              >
                Experience rapid build times using{' '}
                <a
                  href="https://vite.dev/"
                  className="underline text-neutral-600 hover:text-neutral-950 underline-offset-4"
                >
                  Vite
                </a>
              </FeatureCard>

              <FeatureCard
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                }
                title="Simple"
              >
                Enjoy a straightforward experience – build pages and APIs
                without unnecessary complexity.
              </FeatureCard>

              <FeatureCard
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                  >
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  </svg>
                }
                title="NodeJS Based"
              >
                Deploy anywhere Node.js is supported, from cloud environments to
                lightweight MicroVMs.
              </FeatureCard>
            </div>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </div>
  )
}

function FeatureCard({ icon, title, children }) {
  return (
    <div className="w-full">
      <div className="p-6 rounded-lg">
        <div className="inline-flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-neutral-100 text-neutral-500">
          {icon}
        </div>
        <h2 className="mb-2 text-lg font-medium text-gray-900 ">{title}</h2>
        <p className="text-base leading-relaxed">{children}</p>
      </div>
    </div>
  )
}
