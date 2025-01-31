---
title: "Adding HTML Headings on Web page"
slug: "html/0_basic/0_headings"
stack: "HTML"
---

> Adding Headlines For Document Structure

## What does HTML Headings for Document Structure do?

- `<h1>`
- `<h2>`
- `<h3>`
- `<h4>`
- `<h5>`
- `<h6>` elements are used to create headings in descending order of importance where `<h1>` is the most important and `<h6>` the least.

| Display | Usage            |
| ------- | ---------------- |
| block   | semantic/textual |

**Code example**

```html
<h2>Section Title</h2>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at egestas leo, at
consequat lorem. Etiam at ligula et nisl maximus commodo.
<h3>Subsection Title</h3>
Aliquam elit arcu, iaculis vitae hendrerit sed, rutrum quis magna. Suspendisse
iaculis sit amet enim quis interdum. Quisque fringilla et mauris at
sollicitudin. Aenean dictum volutpat elit id varius. Fusce nec pellentesque
arcu, ac dictum ex.
<h3>Subsection Title</h3>
Sed sagittis ipsum eu purus condimentum accumsan. Pellentesque volutpat
porttitor est, sit amet tincidunt risus vehicula porttitor. Morbi condimentum
dapibus fringilla.
```

### Content Headings

The six heading tags are an important part of HTML content writing. Besides the somewhat obvious need they fill (people sometimes want to put headlines on top of things), the headline tags also have SEO value, help you to be a more organized writer, and make pages more user-friendly.

#### Headline Tags and SEO

There are two things that a search engine is trying to figure out about your page:

- What is it about?
- How good is it?

One of the (many) things that Google and other search engines look at determine the content of a page is the words that appear inside heading tags. That’s why, if you are trying to rank for particular words or phrases, it’s a really idea to include those words and phrases into your headline tags

### Headline tags create a content hierarchy

On a page with a single piece of content (which should be most pages), the main title for that content should be an <`h1>` tag. Major sections within that content should be headlined with `<h2>`. Subsections within those sections should be headed with `<h3>`, and so on. It should be possible to extract an outline from your headline tags.

### Headlines are good for users

Here’s a dirty little secret about online content: readers skim. Almost no one reads every word of an online article. And there’s very little you can do about it. You certainly can’t stop it. But you can make it so that skimmers will have something to latch onto as their eyes move down the page. Headlines, if they are well-distributed and relevant to their content, give skimmers a bunch of little ways back into the text of the article. They also break up the article into seemingly-digestible bite-sized pieces, so that an antsy skimmer isn’t made anxious by a long solumn of uninterrupted text.

### Using headline tags to structure your content

- there are two types of content pages: single content pages (which present a single piece of content) and index pages (which list a bunch of content)
- Index pages include the main blog page of a site, category and tag archives, author pages that list all the articles written by the author, and so on.
- Then there is also content (sidebars, widgets, footers) which is appears on nearly every page and which isn’t really “content.” How you use headline tags in these situations can have an impact on SEO and usability.

#### `<h1>` and `<h2>` elements

- **On single content pages** throughout your site, the title of that particular piece of content should almost always be in the `<h1>` tag near the top of the `<body>.` Then, as mentioned above, your sections within the article can use `<h2>` tags.

```html
<main>
  <article>
    <h1>All About Headlines</h1>
    . . .
    <h2>Headlines and SEO</h2>
    . . .
    <h2>Headlines and Structure</h2>
    . . .
  </article>
</main>
```

- **On an index page**, it usually makes sense to put either the site title in an `<h1>` tag, or to put the index name there: the category name, the author name, or whatever it is that defines that page. Then the titles of all the individual pieces that are listed there should have an `<h2>` element for their titles.

```html
<main>
  <h1>Posts about HTML</h1>
  <article>
    <h2>About Headlines</h2>
    . . .
  </article>
  <article>
    <h2>Links</h2>
    . . .
  </article>
  <article>
    <h2>Frames</h2>
    . . .
  </article>
</main>
```

- In the past it has been common to use an `<h2>` tag for the site title when it appears on single-content pages.

```html
<header>
  <h2>HTML Code Tutorials</h2>
  <nav><!-- menu --></nav>
</header>
<main>
  <h1>Actual Title of This Page</h1>
  . . .
</main>
```

#### `<h3>` and `<h4>` elements

Use `<h3>` or `<h4>` elements for widget's titles or non-content in sidebars. Many Content Management Systems simply do this automatically.
