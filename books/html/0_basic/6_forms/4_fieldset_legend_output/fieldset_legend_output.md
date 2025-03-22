---
title: "Adding HTML Form FieldSet, Legend and Output on Web page"
slug: "html/0_basic/6_forms/4_fieldset_legend_output"
stack: "HTML"
---

## `<fieldset>` and `<legend>` tag

- The `<fieldset>` tag is used to group related elements in a form.

- The `<fieldset>` tag draws a box around the related elements.

- The `<legend>` tag defines a caption for the `<fieldset>` element.

```html
<form action="/action_page.php">
  <fieldset>
    <legend>Personalia:</legend>
    <label for="fname">First name:</label>
    <input type="text" id="fname" name="fname" /><br /><br />
    <label for="lname">Last name:</label>
    <input type="text" id="lname" name="lname" /><br /><br />
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" /><br /><br />
    <label for="birthday">Birthday:</label>
    <input type="date" id="birthday" name="birthday" /><br /><br />
    <input type="submit" value="Submit" />
  </fieldset>
</form>
```

  <div>Webpage view</div>
  <div style="border: 2px solid grey; padding:8px">
  <form action="/action_page.php">
    <fieldset>
      <legend>Personalia:</legend>
      <label for="fname">First name:</label>
      <input type="text" id="fname" name="fname"><br><br>
      <label for="lname">Last name:</label>
      <input type="text" id="lname" name="lname"><br><br>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email"><br><br>
      <label for="birthday">Birthday:</label>
      <input type="date" id="birthday" name="birthday"><br><br>
      <input type="submit" value="Submit">
    </fieldset>
  </form>
  </div>

### `<fieldset>` attributes

| Attribute | Value    | Description                                                        |
| --------- | -------- | ------------------------------------------------------------------ |
| disabled  | disabled | Specifies that a group of related form elements should be disabled |
| form      | form_id  | Specifies which form the fieldset belongs to                       |
| name      | text     | Specifies a name for the fieldset                                  |

## `<output>` tag

The `<output>` tag is used to represent the result of a calculation (like one performed by a script).

```html
<form oninput="x.value=parseInt(a.value)+parseInt(b.value)">
  <input type="range" id="a" value="50" />
  +<input type="number" id="b" value="25" /> =<output
    name="x"
    for="a b"
  ></output>
</form>
```

  <div>Webpage view</div>
  <div style="border: 2px solid grey; padding:8px">
  <form oninput="x.value=parseInt(a.value)+parseInt(b.value)">
    <input type="range" id="a" value="50" />
    +<input type="number" id="b" value="25" /> =<output
      name="x"
      for="a b"
    ></output>
  </form>
  </div>

### `<output>` attributes

| Attribute | Value      | Description                                                                                                |
| --------- | ---------- | ---------------------------------------------------------------------------------------------------------- |
| for       | element_id | Specifies the relationship between the result of the calculation, and the elements used in the calculation |
| form      | form_id    | Specifies which form the output element belongs to                                                         |
| name      | name       | Specifies a name for the output element                                                                    |

> `<output>`, `<fieldset>`, `<legend>` supports both [Global Attributes](https://www.w3schools.com/tags/ref_standardattributes.asp) and [Event Attributes](https://www.w3schools.com/tags/ref_eventattributes.asp)

sasl_ssl://ckfnlpc1dceb01.amer.dell.com:9092,sasl_ssl://ckfnlpc1dceb02.amer.dell.com:9092,sasl_ssl://ckfnlpc1dceb03.amer.dell.com:9092,sasl_ssl://ckfnlpc1dceb04.amer.dell.com:9092


sasl_ssl://ckfnlpc1csbbk01.amer.dell.com:9092,
sasl_ssl://ckfnlpc1csbbk02.amer.dell.com:9092,
sasl_ssl://ckfnlpc1csbbk03.amer.dell.com:9092,
sasl_ssl://ckfnlpc1csbbk04.amer.dell.com:9092,
sasl_ssl://ckfnlpc1csbbk05.amer.dell.com:9092,
sasl_ssl://ckfnlpc1csbbk06.amer.dell.com:9092,
sasl_ssl://ckfnlpc1csbbk07.amer.dell.com:9092,
sasl_ssl://ckfnlpc1csbbk08.amer.dell.com:9092