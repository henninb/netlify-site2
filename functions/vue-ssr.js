import { createSSRApp, h } from 'vue'
import { renderToString } from '@vue/server-renderer'

const template = (title, body) => `<html>
  <head>
    <title>${title}</title>
  </head>
  <body>
    ${body}
  </body>
</html>`

exports.handler = async (event, context) => {
  const app = createSSRApp({
    render() {
      return h('div', 'Hello World')
    }
  })

  const body = await renderToString(app)

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: template('Vue SSR Serverless', body)
  }
}
