---
title: "Your First HTML Web page"
slug: "html/0_basic"
stack: "HTML"
---

## Creating Your First HTML Webpage

First off, you need to open your HTML editor, where you will find a clean white page on which to write your code.

From there you need to layout your page with the following tags.

  <div>Basic HTML Structure</div><br/>
  <div style="border: 2px solid #333; padding:8px 12px;margin :0 auto; width:70%">
   &lt;html&gt;
  <div style="border: 2px solid #55ad9b; padding:8px 12px; margin :8px 0; ">
    &lt;head&gt;
      <div style="border: 2px solid grey; padding:8px 12px; margin :8px 0; ">
      <div style="border: 2px solid #55ad9b; padding:8px 12px; margin :8px 0; ">
      &lt;title&gt;This is your title&lt;/title&gt;
      </div>
      <div style="border: 2px solid #55ad9b; padding:8px 12px; margin :8px 0; ">
      &lt;meta charset="UTF-8" /&gt;
      </div>
  </div>
    &lt;/head&gt;
  </div>
  <div style="border: 2px solid #55ad9b; padding:8px 12px;margin :8px 0; ">
    &lt;body&gt;
    <div style="border: 2px solid grey; padding:8px 12px;margin :8px 0; ">
  <div style="border: 2px solid #55ad9b;padding:8px 12px;margin :8px 0; ">
    &lt;h1&gt;This your heading&lt;/h1&gt;
  </div>
  <div style="border: 2px solid #55ad9b;padding:8px 12px;margin :8px 0; ">
   &lt;p&gt;This is your paragraph&lt;/p&gt;
  </div>
  </div>
    &lt;/body&gt;
  </div>
  &lt;/html&gt;
  </div>

### Basic Construction of an HTML Page

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>This is your title</title>
    <meta charset="UTF-8" />
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
