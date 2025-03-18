export const Button = ({ className, href, ...props }) => {
  const classList = [
    className,
    'inline-flex items-center justify-center px-4 py-2 text-sm font-medium tracking-wide text-white transition-colors duration-200 rounded-md bg-neutral-950 hover:bg-neutral-900 focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900 focus:outline-none',
  ]
    .map(d => (d ? d.split(' ') : undefined))
    .flat(2)
    .filter(Boolean)
    .join(' ')
  if (href) {
    return <a href={href} type="button" {...props} class={classList} />
  }
  return <button type="button" {...props} class={classList} />
}
