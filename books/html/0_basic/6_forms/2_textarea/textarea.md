---
title: "Adding HTML Form TextArea on Web page"
slug: "html/0_basic/6_forms/2_textarea"
stack: "HTML"
---

## `<textarea>` tag

- The `<textarea>` tag defines a multi-line text input control.

- The `<textarea>` element is often used in a form, to collect user inputs like comments or reviews.

- A text area can hold an unlimited number of characters, and the text renders in a fixed-width font (usually Courier).

- The size of a text area is specified by the cols and rows attributes (or with CSS).

- The name attribute is needed to reference the form data after the form is submitted (if you omit the name attribute, no data from the text area will be submitted).

- The id attribute is needed to associate the text area with a label.

⭐: Always add the `<label>` tag for best accessibility practices!

```html
<label for="w3review">Review of W3Schools:</label>

<textarea id="w3review" name="w3review" rows="4" cols="50">
At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.
</textarea>
```

  <div>Webpage view</div>
  <div style="border: 2px solid grey; padding:8px">
  <form>
    <label for="w3review">Review of TextArea:</label>
    <textarea id="review" name="review" rows="4" cols="50">
    At schools you will learn how to make a website. They offer free tutorials in all web development technologies.
    </textarea>
  </form>
  </div>

### `<textarea>` attributes

| Attribute   | Value        | Description                                                                     |
| ----------- | ------------ | ------------------------------------------------------------------------------- |
| autofocus   | autofocus    | Specifies that a text area should automatically get focus when the page loads   |
| cols        | number       | Specifies the visible width of a text area                                      |
| dirname     | textareaname.dir |  Specifies that the text direction of the textarea will be submitted        |
| disabled    | disabled     | Specifies that a text area should be disabled                                   |
| form        | form_id      | Specifies which form the text area belongs to                                   |
| maxlength   | number       | Specifies the maximum number of characters allowed in the text area             |
| name        | text         | Specifies a name for a text area                                                |
| placeholder | text         | Specifies a short hint that describes the expected value of a text area         |
| readonly    | readonly     | Specifies that a text area should be read-only                                  |
| required    | required     | Specifies that a text area is required/must be filled out                       |
| rows        | number       | Specifies the visible number of lines in a text area                            |
| wrap        | hard & soft  | Specifies how the text in a text area is to be wrapped when submitted in a form |


> `<textarea>` supports both [Global Attributes](https://www.w3schools.com/tags/ref_standardattributes.asp) and [Event Attributes](https://www.w3schools.com/tags/ref_eventattributes.asp)