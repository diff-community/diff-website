module.exports = ({ content, title }) => `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="google-site-verification" content="8E94dytOkAxLH-WTWP6qtlpNaTOYvYsjCzlITwDwrD0" />
    <title>${title}</title>
    <link href="/public/css/main.css" rel="stylesheet" />
  </head>
  <body>
    ${content}
  </body>
</html>`