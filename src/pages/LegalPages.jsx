import AppLink from '../components/AppLink.jsx'
import { usePageMeta } from '../hooks/usePageMeta.js'

function LegalPage({ title, description, children }) {
  usePageMeta({ title, description })
  return (
    <div className="legal-page">
      <h1>{title}</h1>
      {children}
      <p className="legal-back">
        <AppLink href="/">Back to Flowtick</AppLink>
      </p>
    </div>
  )
}

export function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="How Flowtick handles data: tasks are stored only in your browser's localStorage. Flowtick collects no personal data and uses no tracking."
    >
      <p>
        Flowtick is a browser-based todo list. This page explains exactly what data Flowtick handles.
        The short version: your tasks never leave your device.
      </p>
      <h2>What Flowtick stores</h2>
      <p>
        Flowtick stores your tasks in your browser&apos;s <strong>localStorage</strong> under the key{' '}
        <code>flowtick.todos</code>. This storage stays on your device, inside the browser you used.
        It is not sent to any server, because Flowtick does not operate one.
      </p>
      <h2>What Flowtick does not collect</h2>
      <ul>
        <li>No personal data such as your name, email address, or location</li>
        <li>No accounts or sign-up information</li>
        <li>No analytics or usage statistics</li>
        <li>No advertising or advertising trackers</li>
        <li>No cookies</li>
        <li>No third-party scripts or trackers of any kind</li>
      </ul>
      <h2>Retention and control</h2>
      <p>
        Your tasks remain in localStorage until you delete them yourself (by deleting the task in the
        app) or until you clear your browser data. Clearing site data in your browser removes all
        Flowtick data permanently, and Flowtick cannot recover it.
      </p>
      <h2>Changes</h2>
      <p>
        If Flowtick ever changes how it handles data, this page will be updated to describe the
        change accurately before it takes effect.
      </p>
    </LegalPage>
  )
}

export function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      description="The terms that apply when you use Flowtick, a free browser-based todo list."
    >
      <p>
        By using Flowtick, you agree to these terms. If you do not agree, please do not use the
        application.
      </p>
      <h2>What Flowtick is</h2>
      <p>
        Flowtick is a free, browser-based todo list. It runs in your browser and stores your tasks
        locally on your device. Flowtick does not sell products, accept payments, or offer paid
        plans.
      </p>
      <h2>Your data is your responsibility</h2>
      <p>
        Tasks are stored only in your browser&apos;s localStorage. If you clear your browser data,
        use private browsing, or switch devices or browsers, stored tasks will not follow you and
        cannot be recovered. Please keep your own backup of anything important.
      </p>
      <h2>Acceptable use</h2>
      <p>Use Flowtick for lawful purposes only.</p>
      <h2>No warranty</h2>
      <p>
        Flowtick is provided &quot;as is&quot;, without warranties of any kind. While it is built
        carefully, it is not guaranteed to be uninterrupted or error-free, and no guarantee is made
        that stored data will never be lost.
      </p>
      <h2>Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, Flowtick&apos;s creators are not liable for any
        damages or data loss arising from your use of the application.
      </p>
      <h2>Changes</h2>
      <p>
        These terms may be updated from time to time. Changes apply to your use of Flowtick from the
        moment they are published on this page.
      </p>
    </LegalPage>
  )
}

export function CookiesPage() {
  return (
    <LegalPage
      title="Cookie & Storage Policy"
      description="Flowtick uses no cookies, no analytics, and no third-party tracking. It stores your tasks locally in browser localStorage."
    >
      <h2>Cookies</h2>
      <p>
        Flowtick does not set or read any cookies. It also uses no analytics, no advertising
        trackers, and no third-party tracking of any kind. Because nothing beyond strictly local
        functionality is used, Flowtick shows no cookie-consent banner.
      </p>
      <h2>Local storage</h2>
      <p>
        Flowtick saves your tasks in your browser&apos;s localStorage under the key{' '}
        <code>flowtick.todos</code>. This is essential to the product you asked for: it is what
        makes your tasks survive a page refresh. The data stays on your device and is never
        transmitted anywhere.
      </p>
      <h2>Managing stored data</h2>
      <p>
        You can remove all Flowtick data at any time by clearing site data for this site in your
        browser settings, or by deleting tasks inside the app. See the{' '}
        <AppLink href="/privacy">Privacy Policy</AppLink> for full details.
      </p>
      <h2>Changes</h2>
      <p>
        If Flowtick ever introduces cookies or third-party services, this page will be updated to
        document them accurately, and consent will be requested where it is required.
      </p>
    </LegalPage>
  )
}
