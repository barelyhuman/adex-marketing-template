export const MarketingFooter = () => (
  <footer class="px-3 text-neutral-600">
    <div class="w-full flex justify-center">
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-2  w-full">
        <div></div>
        <div></div>
        <div class="w-full flex flex-col items-end">
          <h2 class=" font-medium text-neutral-900 tracking-widest text-sm mb-3">
            Social
          </h2>
          <nav class="list-none flex flex-col items-end gap-2 mb-10">
            <li>
              <a
                href="https://x.com/barelyreaper"
                target="_blank"
                rel="noopener"
                class="text-neutral-600 text-sm hover:text-neutral-900"
              >
                X
              </a>
            </li>
            <li>
              <a
                href="https://bsky.app/profile/reaper.is"
                class="text-neutral-600 text-sm hover:text-neutral-900"
                target="_blank"
                rel="noopener"
              >
                BlueSky
              </a>
            </li>
          </nav>
        </div>
        <div class="w-full flex flex-col items-end">
          <h2 class=" font-medium text-neutral-900 tracking-widest text-sm mb-3">
            Links
          </h2>
          <nav class="list-none flex flex-col items-end gap-2 mb-10">
            <li>
              <a
                href="https://github.com/barelyhuman/adex"
                class="text-neutral-600 text-sm hover:text-neutral-900"
              >
                Github
              </a>
            </li>
          </nav>
        </div>
      </div>
    </div>
    <div class="border-t border-t-neutral-200">
      <div class="mx-auto py-4 flex flex-wrap flex-col sm:flex-row">
        <p class="text-neutral-500 text-sm text-center sm:text-left">
          © 2025 Adex —
          <a
            href="https://twitter.com/barelyreaper"
            rel="noopener noreferrer"
            class="text-neutral-600 ml-1"
            target="_blank"
          >
            @reaper
          </a>
        </p>
      </div>
    </div>
  </footer>
)
