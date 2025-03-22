---
title: "Adding HTML Form Button on Web page"
slug: "html/0_basic/6_forms/3_buttons"
stack: "HTML"
---

## `<button>` tag

- The `<button>` tag defines a clickable button.

- Inside a `<button>` element you can put text (and tags like `<i>,` `<b>,` `<strong>,` `<br>,` `<img>,` etc.). That is not possible with a button created with the `<input>` element!

⭐ Always specify the **type** attribute for a `<button>` element, to tell browsers what type of button it is.

```html
<button type="button">Click Me!</button>
```

  <div>Webpage view</div>
  <div style="border: 2px solid grey; padding:8px">
  <form>
    <button type="button">Click Me!</button>
  </form>
  </div>

### `<button>` attributes

| Attribute           | Value                                                                     | Description                                                                                     |
| ------------------- | ------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| autofocus           | autofocus                                                                 | Specifies that a button should automatically get focus when the page loads                      |
| disabled            | disabled                                                                  | Specifies that a button should be disabled                                                      |
| form                | form_id                                                                   | Specifies which form the button belongs to                                                      |
| formaction          | URL                                                                       | Specifies where to send the form-data when a form is submitted. Only for type="submit"          |
| formenctype         | application/x-www-form-urlencoded <br/>multipart/form-data<br/>text/plain | Specifies how form-data should be encoded before sending it to a server. Only for type="submit" |
| formmethod          | get<br/>post                                                              | Specifies how to send the form-data (which HTTP method to use). Only for type="submit"          |
| formnovalidate      | formnovalidate                                                            | Specifies that the form-data should not be validated on submission. Only for type="submit"      |
| formtarget          | \_blank<br/>\_self<br/>\_parent<br/>\_top<br/>framename                   | Specifies where to display the response after submitting the form. Only for type="submit"       |
| popovertarget       | element_id                                                                | Specifies a which popover element to invoke                                                     |
| popovertargetaction | hide<br/>show<br/>toggle                                                  | Specifies what happens to the popover element when the button is clicked                        |
| name                | name                                                                      | Specifies a name for the button                                                                 |
| type                | button<br/>reset<br/>submit                                               | Specifies the type of button                                                                    |
| value               | text                                                                      | Specifies an initial value for the button                                                       |

> `<button>` supports both [Global Attributes](https://www.w3schools.com/tags/ref_standardattributes.asp) and [Event Attributes](https://www.w3schools.com/tags/ref_eventattributes.asp)
