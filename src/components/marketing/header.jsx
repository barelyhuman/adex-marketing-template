export const MarketingHeader = () => {
  return (
    <header
      ref={node => {
        if (!node) return

        var observer = new IntersectionObserver(
          function (entries) {
            for (let entry of entries) {
              entry.target.classList.toggle(
                'border-b',
                entry.intersectionRatio < 1
              )
            }
          },
          { threshold: [1] }
        )

        observer.observe(node)
      }}
      class="sticky mt-10 -top-[1px] bg-neutral-50 text-gray-600 z-50 border-b"
    >
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex  font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span class="ml-3 text-xl">
            <a href="/" class="inline-block w-full">
              Adex
            </a>
          </span>
        </a>
        <nav class="md:ml-auto md:mr-auto flex gap-2 flex-wrap items-center text-base justify-center">
          <a
            href="/pricing"
            class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium tracking-wide text-neutral-900 transition-colors duration-200 rounded-md bg-transparent hover:bg-neutral-200/75 focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900  focus:outline-none"
          >
            Pricing
          </a>
          <a
            href="#"
            class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium tracking-wide text-neutral-900 transition-colors duration-200 rounded-md bg-transparent hover:bg-neutral-200/75 focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900  focus:outline-none"
          >
            Blog
          </a>
          <a
            href="/support"
            class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium tracking-wide text-neutral-900 transition-colors duration-200 rounded-md bg-transparent hover:bg-neutral-200/75 focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900  focus:outline-none"
          >
            Support
          </a>
        </nav>
        <a
          href="/login"
          class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium tracking-wide text-neutral-900 transition-colors duration-200 rounded-md bg-transparent hover:bg-neutral-200/75 focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900  focus:outline-none"
        >
          Sign In
        </a>
      </div>
    </header>
  )
}
