---
title: "Your First HTML Web page"
slug: "html/0_basic"
stack: "HTML"
---

## Creating Your First HTML Webpage

First off, you need to open your HTML editor, where you will find a clean white page on which to write your code.

From there you need to layout your page with the following tags.

![Basic HTML5 Structure](../../../src/images/html/a3.png)

### Basic Construction of an HTML Page

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title></title>
    <meta charset="UTF-8" />
    <meta name="author" content="Nikhil Rustagi" />
  </head>
  <body>
    <h1>This is your header</h1>
    <p>This is your paragraph</p>
  </body>
</html>
```

These tags should be placed underneath each other at the top of every HTML page that you create.

```html{1}
<!DOCTYPE html>
<html lang=en>
  <head>
    <title></title>
    <meta charset="UTF-8">
    <meta name="author" content="Nikhil Rustagi">
  </head>
  <body>
    <h1>This is your header</h1>
    <p>This is your paragraph</p>
  </body>
</html>
```

- `<!DOCTYPE html>` — This tag specifies the language you will write on the page. In this case, the language is HTML 5.

```html{2, 12}
<!DOCTYPE html>
<html lang="en">
  <head>
    <title></title>
    <meta charset="UTF-8" />
    <meta name="author" content="Nikhil Rustagi" />
  </head>
  <body>
    <h1>This is your header</h1>
    <p>This is your paragraph</p>
  </body>
</html>
```

- `<html>` — This tag signals that from here on we are going to write in HTML code.

```html{3-7}
<!DOCTYPE html>
<html lang=en>
  <head>
    <title></title>
    <meta charset="UTF-8">
    <meta name="author" content="Nikhil Rustagi">
  </head>
  <body>
    <h1>This is your header</h1>
    <p>This is your paragraph</p>
  </body>
</html>
```

- `<head>` — This is where all the metadata for the page goes — stuff mostly meant for search engines and other computer programs.
  - Inside the `<head>` tag, there is one tag that is always included: `<title>`, but there are others that are just as important:
    - `<title>` This is where we insert the page name as it will appear at the top of the browser window or tab.
    - `<meta>` This is where information about the document is stored: character encoding, name (page context), description.

```html{8-11}
<!DOCTYPE html>
<html lang=en>
  <head>
    <title></title>
    <meta charset="UTF-8">
    <meta name="author" content="Nikhil Rustagi">
  </head>
  <body>
    <h1>This is your header</h1>
    <p>This is your paragraph</p>
  </body>
</html>
```

- `<body>` — This is where the content of the page goes.

**Adding Content**

- Next, we will make `<body>` tag.
- The HTML `<body>` is where we add the content which is designed for viewing by human eyes.
- This includes text, images, tables, forms and everything else that we see on the internet each day.

## Adding Forms in html page
