---
title: "Adding HTML Form Select on Web page"
slug: "html/0_basic/6_forms/1_selects_option_optgroup_datalist"
stack: "HTML"
---

## `<select>` & `<option>` tag

- The `<select>` element is used to create a drop-down list.
- The `<select>` element is most often used in a form, to collect user input.
- The name attribute is needed to reference the form data after the form is submitted (if you omit the name attribute, no data from the drop-down list will be submitted).
- The id attribute is needed to associate the drop-down list with a label.
  - The `<option>` tag defines an option in a select list.
  - `<option>` elements go inside a `<select>,` `<optgroup>,` or `<datalist>` element.

✏️: The `<option>` tag can be used without any attributes, but you usually need the value attribute, which indicates what is sent to the server on form submission.

```html
<label for="cars">Choose a car:</label>

<select name="cars" id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
```

  <div>Webpage view</div>
  <div style="border: 2px solid grey; padding:8px">
  <form>
  <label for="cars">Choose a car:</label>

  <select name="cars" id="cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
  </select>
  </form>
  </div>

### `<select>` attributes

- Attributes applicable on `<select>` tag as as below

  | Attribute | Value     | Description                                                                          |
  | --------- | --------- | ------------------------------------------------------------------------------------ |
  | autofocus | autofocus | Specifies that the drop-down list should automatically get focus when the page loads |
  | disabled  | disabled  | Specifies that a drop-down list should be disabled                                   |
  | form      | form_id   | Defines which form the drop-down list belongs to                                     |
  | multiple  | multiple  | Specifies that multiple options can be selected at once                              |
  | name      | name      | Defines a name for the drop-down list                                                |
  | required  | required  | Specifies that the user is required to select a value before submitting the form     |
  | size      | number    | Defines the number of visible options in a drop-down list                            |

### `<option>` attributes

- Attributes applicable on `<option>` tag as as below

  | Attribute | Value    | Description                                                         |
  | --------- | -------- | ------------------------------------------------------------------- |
  | disabled  | disabled | Specifies that an option should be disabled                         |
  | label     | text     | Specifies a shorter label for an option                             |
  | selected  | selected | Specifies that an option should be pre-selected when the page loads |
  | value     | text     | Specifies the value to be sent to a server                          |

## `<optgroup>` tag

⭐: If you have a long list of options, you can group related options within the `<optgroup>` tag.

```html
<label for="cars">Choose a car:</label>
<select name="cars" id="cars">
  <optgroup label="Swedish Cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
  </optgroup>
  <optgroup label="German Cars">
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
  </optgroup>
</select>
```

  <div>Webpage view</div>
  <div style="border: 2px solid grey; padding:8px">
  <form>
  <label for="cars">Choose a car:</label>
  <select name="cars" id="cars">
    <optgroup label="Swedish Cars">
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
    </optgroup>
    <optgroup label="German Cars">
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </optgroup>
  </select>
  </form>
  </div>

### `<optgroup>` attributes

- Attributes applicable on `<optgroup>` tag as as below

  | Attribute | Value    | Description                                       |
  | --------- | -------- | ------------------------------------------------- |
  | disabled  | disabled | Specifies that an option-group should be disabled |
  | label     | text     | Specifies a label for an option-group             |

## `<datalist>` tag

- The `<datalist>` tag specifies a list of pre-defined options for an `<input>` element.

- The `<datalist>` tag is used to provide an "autocomplete" feature for `<input>` elements. Users will see a drop-down list of pre-defined options as they input data.

- The `<datalist>` element's id attribute must be equal to the `<input>` element's list attribute (this binds them together).

```html
<label for="browser">Choose your browser from the list:</label>
<input list="browsers" name="browser" id="browser" />

<datalist id="browsers">
  <option value="Edge"></option>
  <option value="Firefox"></option>
  <option value="Chrome"></option>
  <option value="Opera"></option>
  <option value="Safari"></option>
</datalist>
```

  <div>Webpage view</div>
  <div style="border: 2px solid grey; padding:8px">
  <form>
  <label for="browser">Choose your browser from the list:</label>
  <input list="browsers" name="browser" id="browser">

  <datalist id="browsers">
    <option value="Edge">
    <option value="Firefox">
    <option value="Chrome">
    <option value="Opera">
    <option value="Safari">
  </datalist>
  </div>
  <br/>

> `<select>`, `<option>`, `<optgroup>` and `<datalist>` supports both [Global Attributes](https://www.w3schools.com/tags/ref_standardattributes.asp) and [Event Attributes](https://www.w3schools.com/tags/ref_eventattributes.asp)
