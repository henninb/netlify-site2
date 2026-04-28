import React from 'react'
import './App.css'

const hostname = window.location.hostname
const domain = hostname.endsWith('brianhenning.com') ? 'brianhenning.com' : 'bhenning.com'

const examples = [
  { label: 'aws-serverless-express', path: '/.netlify/functions/aws-serverless-express', badge: 'fn' },
  { label: 'serverless-http', path: '/.netlify/functions/serverless-http', badge: 'fn' },
  { label: 'react-express-ssr', path: '/.netlify/functions/react-express-ssr', badge: 'fn' },
]

const siteLabels = ['site1', 'site2', 'site3', 'site4', 'site5', 'site6', 'site7', 'site8', 'site9']

function App() {
  const sites = siteLabels.map(label => ({
    label,
    url: `https://${label}.${domain}`,
    path: `${label}.${domain}`,
  }))

  return (
    <>
      <header>
        <p className="header-eyebrow">{domain} / dashboard</p>
        <h1>site<em>2</em></h1>
        <p className="header-sub">react + express + netlify functions — select a destination</p>
        <div className="header-rule" />
      </header>

      <section>
        <div className="section-label"><h2>Functions</h2></div>
        <div className="grid">
          {examples.map(({ label, path, badge }) => (
            <a key={path} href={path} className="card">
              <span className="card-name">{label}</span>
              {badge && <span className="badge">{badge}</span>}
              <span className="card-path">{path}</span>
              <span className="arrow">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section>
        <div className="section-label"><h2>Sites</h2></div>
        <div className="grid">
          {sites.map(({ label, url, path }) => (
            <a key={url} href={url} className="card">
              <span className="card-name">{label}</span>
              <span className="card-path">{path}</span>
              <span className="arrow">↗</span>
            </a>
          ))}
        </div>
      </section>

      <footer>{domain} &mdash; site2</footer>
    </>
  )
}

export default App
