# netlify-site2

A React + Express + Netlify Functions application that serves as a navigation dashboard linking to all sites and demonstrating various Netlify Functions patterns. Deployed to `site2.bhenning.com`.

## Tech Stack

- React (Create React App)
- Express (via Netlify Functions using `serverless-http` and `aws-serverless-express`)
- Netlify Functions

## Features

- Dashboard with links to all `bhenning.com` / `brianhenning.com` sites
- Demonstrates multiple Netlify Function patterns:
  - `aws-serverless-express`
  - `serverless-http`
  - `react-express-ssr`

## Setup

```bash
npm install
```

## Running

```bash
./run.sh
```

## Deployment

Deploys to Netlify via `netlify.toml`.
