import { useState } from 'react'
import { useTodos } from './hooks/useTodos.js'
import { usePath } from './hooks/usePath.js'
import AppLink from './components/AppLink.jsx'
import TodoPage from './pages/TodoPage.jsx'
import { PrivacyPage, TermsPage, CookiesPage } from './pages/LegalPages.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import './App.css'

function App() {
  const todoState = useTodos()
  const path = usePath()
  const [filter, setFilter] = useState('all')

  function handleFilterChange(nextFilter) {
    setFilter(nextFilter)
    const listNode = document.getElementById('tasks')
    if (listNode) {
      listNode.focus()
    }
  }

  let view
  let footerHeadingId
  if (path === '/privacy') {
    view = <PrivacyPage />
  } else if (path === '/terms') {
    view = <TermsPage />
  } else if (path === '/cookies') {
    view = <CookiesPage />
  } else if (path === '/404') {
    footerHeadingId = 'footer'
    view = <NotFoundPage />
  } else if (path === '/') {
    view = <TodoPage todoState={todoState} filter={filter} onFilterChange={handleFilterChange} />
  } else {
    footerHeadingId = 'footer'
    view = <NotFoundPage />
  }

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <main id="main" className="app-main" tabIndex={-1}>
        {view}
      </main>
      <footer id="footer" className="app-footer">
        <nav aria-label="Legal">
          <AppLink href="/privacy">Privacy</AppLink>
          <AppLink href="/terms">Terms</AppLink>
          <AppLink href="/cookies">Cookies &amp; storage</AppLink>
        </nav>
      </footer>
    </div>
  )
}

export default App
