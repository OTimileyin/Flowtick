import { navigate } from '../hooks/usePath.js'

function AppLink({ href, children, className }) {
  function handleClick(event) {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.altKey ||
      event.ctrlKey ||
      event.shiftKey
    ) {
      return
    }
    event.preventDefault()
    navigate(href)
  }

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  )
}

export default AppLink
