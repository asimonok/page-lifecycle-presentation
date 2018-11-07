const template = (title, initialState = {}, content = '') => {
  let scripts = '';
  if(content){
    scripts = `
        <script src="client.js"></script>
    `
  }
  let page = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
  <link href="client.css" rel="stylesheet">
</head>
<body>
  <div id="app">${content}</div>
  ${scripts}
</body>
</html>`;

  return page;
}

export default template
