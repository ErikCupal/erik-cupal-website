const htmlTemplate = (
  title: string,
  appId: string,
  appHtml: string,
  preLoadScripts: string,
  postLoadScripts: string
) => (
  `<!doctype html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${preLoadScripts}
        <title>${title}</title>
      </head>
      <body>
        <div id="${appId}">${appHtml}</div>
        ${postLoadScripts}
      </body>
    </html>`
)

export default htmlTemplate