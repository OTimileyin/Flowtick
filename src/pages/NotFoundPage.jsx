import AppLink from '../components/AppLink.jsx'
import { usePageMeta } from '../hooks/usePageMeta.js'

function NotFoundPage() {
  usePageMeta({
    title: 'Page not found — Flowtick',
    description: 'The page you are looking for does not exist. Head back to the Flowtick app.',
  })
  return (
    <div className="legal-page">
      <h1>Page not found</h1>
      <p>That page does not exist.</p>
      <p className="legal-back">
        <AppLink href="/">Back to Flowtick</AppLink>
      </p>
    </div>
  )
}

export default NotFoundPage
