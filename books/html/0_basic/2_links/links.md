---
title: "Adding HTML Links on Web page"
slug: "html/0_basic/2_links"
stack: "HTML"
---

> the internet is made up of lots of links.

- Almost everything you click on while surfing the web is a link takes you to another page within the website you are visiting or to an external site.

- Links are included in an attribute opened by the `<a>` tag. This element is the first that we’ve met which uses an attribute and so it looks different to previously mentioned tags.

## Anchor Tag

- The `<a>` (or anchor) opening tag is written in the format:

```html
<a href="https://blogging.com/how-to-start-a-blog/">Your Link Text Here </a>
```

- The first part of the attribute `href` points to the page that will open once the link is clicked.
- Meanwhile, the second part of the attribute contains the text which will be displayed to a visitor in order to entice them to click on that link.
- If you are building your own website then you will most likely host all of your pages on professional web hosting. In this case, internal links on your website will

```html
<a href="”mylinkedpage.html”">Linktle Here</a>
```

Let’s try it out. Make a duplicate of the code from your current **index.html** page. Copy / paste it into a new window in your HTML editor.

Save this new page as **page2.html** and ensure that it is saved in the same folder as your **index.html** page.

On **page2.html** add the following code:

```html
<a href="http://www.google.com">Google</a>
```

This will create a link to Google on page 2. Hit save and return to your **index.html** page.

On a new line on **index.html** add the following code:

```html
<a href="*folder(s)*/page2.html">Page2</a>
```

Ensure the folder path to the file (**page2.html**) is correct. Hit save and preview **index.html** in your browser.

If everything is correct then you will see a link which will take you to your second page. On the second page, there will be a link that will take you to google.com.

### `<a>` tag [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes)

This element's attributes include the [global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes).

#### `href`
  
The URL that the hyperlink points to. Links are not restricted to HTTP-based URLs — they can use any URL scheme supported by browsers:

- Telephone numbers with `tel`: URLs
- Email addresses with `mailto`: URLs
- SMS text messages with `sms`: URLs
- Executable code with `javascript`: URLs

#### `target`

Where to display the linked URL, as the name for a browsing context (a tab, window, or [`<iframe>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe)). The following keywords have special meanings for where to load the URL:

- `_self`: The current browsing context. (Default)
- `_blank`: Usually a new tab, but users can configure browsers to open a new window instead.
- `_parent`: The parent browsing context of the current one. If no parent, behaves as \_self.
- `_top`: The topmost browsing context. To be specific, this means the "highest" context that's an ancestor of the current one. If no ancestors, behaves as \_self.

#### `rel`

The relationship of the linked URL as space-separated link types.

#### `referrerpolicy`

How much of the [referrer](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer) to send when following the link.

- `no-referrer`: The [Referer](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer) header will not be sent.
- `no-referrer-when-downgrade`: The Referer header will not be sent to [origin](https://developer.mozilla.org/en-US/docs/Glossary/Origin)s without [TLS](https://developer.mozilla.org/en-US/docs/Glossary/TLS) ([HTTPS](https://developer.mozilla.org/en-US/docs/Glossary/HTTPS)).
- `origin`: The sent referrer will be limited to the origin of the referring page: its [scheme](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), [host](https://developer.mozilla.org/en-US/docs/Glossary/Host), and [port](https://developer.mozilla.org/en-US/docs/Glossary/Port).
- `origin-when-cross-origin`: The referrer sent to other origins will be limited to the scheme, the host, and the port. Navigations on the same origin will still include the path.
- `same-origin`: A referrer will be sent for [same origin](https://developer.mozilla.org/en-US/docs/Glossary/Same-origin_policy), but cross-origin requests will contain no referrer information.
- `strict-origin`: Only send the origin of the document as the referrer when the protocol security level stays the same (HTTPS→HTTPS), but don't send it to a less secure destination (HTTPS→HTTP).
- `strict-origin-when-cross-origin` (default): Send a full URL when performing a same-origin request, only send the origin when the protocol security level stays the same (HTTPS→HTTPS), and send no header to a less secure destination (HTTPS→HTTP).
- `unsafe-url`: The referrer will include the origin and the path (but not the fragment, password, or username). This value is unsafe, because it leaks origins and paths from TLS-protected resources to insecure origins.

#### `download`

Causes the browser to treat the linked URL as a download. Can be used with or without a filename value:

- Without a value, the browser will suggest a filename/extension, generated from various sources:

  - The [Content-Disposition](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition) HTTP header
  - The final segment in the URL [path](https://developer.mozilla.org/en-US/docs/Web/API/URL/pathname)
  - The [media type](https://developer.mozilla.org/en-US/docs/Glossary/MIME_type) (from the Content-Type header, the start of a data: URL, or Blob.type for a blob: URL)

- `filename`: defining a value suggests it as the filename. `/` and `\` characters are converted to underscores (`_`). Filesystems may forbid other characters in filenames, so browsers will adjust the suggested name if necessary.
