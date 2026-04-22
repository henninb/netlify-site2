import React from 'react'
import './App.css'

const examples = [
  { label: 'aws-serverless-express', path: '/.netlify/functions/aws-serverless-express', badge: 'fn' },
  { label: 'serverless-http', path: '/.netlify/functions/serverless-http', badge: 'fn' },
  { label: 'react-express-ssr', path: '/.netlify/functions/react-express-ssr', badge: 'fn' },
]

const sites = [
  { label: 'site1', url: 'https://site1.bhenning.com', path: 'site1.bhenning.com' },
  { label: 'site2', url: 'https://site2.bhenning.com', path: 'site2.bhenning.com' },
  { label: 'site3', url: 'https://site3.bhenning.com', path: 'site3.bhenning.com' },
  { label: 'site4', url: 'https://site4.bhenning.com', path: 'site4.bhenning.com' },
  { label: 'site5', url: 'https://site5.bhenning.com', path: 'site5.bhenning.com' },
  { label: 'site6', url: 'https://site6.bhenning.com', path: 'site6.bhenning.com' },
  { label: 'site7', url: 'https://site7.bhenning.com', path: 'site7.bhenning.com' },
  { label: 'site8', url: 'https://site8.bhenning.com', path: 'site8.bhenning.com' },
  { label: 'site9', url: 'https://site9.bhenning.com', path: 'site9.bhenning.com' },
]

function App() {
  return (
    <>
      <header>
        <p className="header-eyebrow">bhenning.com / dashboard</p>
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

      <footer>bhenning.com &mdash; site2</footer>
    </>
  )
}

export default App
