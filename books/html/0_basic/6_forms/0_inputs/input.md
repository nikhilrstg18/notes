---
title: "Adding HTML Form Input on Web page"
slug: "html/0_basic/6_forms/0_inputs"
stack: "HTML"
---

## `<input>` tag

- The HTML `<input>` element is the most used form element.

- An `<input>` element can be displayed in many ways, depending on the type attribute.

### `<input>` types

#### `<input type="button">`

- defines a button:
  ````html
  <input type="button" onclick="alert('Hello World!')" value="Click Me!" /> ```
  <div>Webpage view</div>
  <div style="border: 2px solid grey; padding:8px">
    <input type="button" onclick="alert('Hello World!')" value="Click Me!" />
  </div>
  ````

#### `<input type="checkbox">`

- defines a checkbox.
- Checkboxes let a user select ZERO or MORE options of a limited number of choices

  ```html
  <form>
    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
    <label for="vehicle1"> I have a bike</label><br />
    <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
    <label for="vehicle2"> I have a car</label><br />
    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
    <label for="vehicle3"> I have a boat</label>
  </form>
  ```

  <div>Webpage view</div>
  <div style="border: 2px solid grey; padding:8px">
  <form>
    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
    <label for="vehicle1"> I have a bike</label><br />
    <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
    <label for="vehicle2"> I have a car</label><br />
    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
    <label for="vehicle3"> I have a boat</label>
  </form>
  </div>

- **checked** attrib specifies that an input field should be pre-selected when the page loads (for type="checkbox" or type="radio")

#### `<input type="color">`

- used for input fields that should contain a color.
- Depending on browser support, a color picker can show up in the input field.

  ```html
  <form>
    <label for="favcolor">Select your favorite color:</label>
    <input type="color" id="favcolor" name="favcolor" />
  </form>
  ```

  <div>Webpage view</div>
  <div style="border: 2px solid grey; padding:8px">

  <form>
    <label for="favcolor">Select your favorite color:</label>
    <input type="color" id="favcolor" name="favcolor" />
  </form>
  </div>

#### `<input type="date">`

- used for input fields that should contain a date.
- Depending on browser support, a date picker can show up in the input field.

  ```html
  <form>
    <label for="birthday">Birthday:</label>
    <input type="date" id="birthday" name="birthday" />
  </form>
  ```

  <div>Webpage view</div>
  <div style="border: 2px solid grey; padding:8px">

  <form>
    <label for="birthday">Birthday:</label>
    <input type="date" id="birthday" name="birthday" />
  </form>
  </div>

- You can also use the `min` and `max` attributes to add restrictions to dates:

  ```html
  <form>
    <label for="datemax">Enter a date before 1980-01-01:</label>
    <input
      type="date"
      id="datemax"
      name="datemax"
      max="1979-12-31"
    /><br /><br />
    <label for="datemin">Enter a date after 2000-01-01:</label>
    <input type="date" id="datemin" name="datemin" min="2000-01-02" />
  </form>
  ```

  <div>Webpage view</div>
  <div style="border: 2px solid grey; padding:8px">

  <form>
    <label for="birthdaytime">Birthday (date and time):</label>
    <input type="datetime-local" id="birthdaytime" name="birthdaytime" />
  </form>
  </div>

#### `<input type="datetime-local">`

- specifies a date and time input field, with no time zone.
- Depending on browser support, a date picker can show up in the input field.

  ```html
  <form>
    <label for="birthdaytime">Birthday (date and time):</label>
    <input type="datetime-local" id="birthdaytime" name="birthdaytime" />
  </form>
  ```

  <div>Webpage view</div>
  <div style="border: 2px solid grey; padding:8px">

  <form>
    <label for="birthdaytime">Birthday (date and time):</label>
    <input type="datetime-local" id="birthdaytime" name="birthdaytime" />
  </form>
  </div>

#### `<input type="email">`

- used for input fields that should contain an e-mail address.

- Depending on browser support, the e-mail address can be automatically validated when submitted.

- Some smartphones recognize the email type, and add ".com" to the keyboard to match email input.

  ```html
  <form>
    <label for="email">Enter your email:</label>
    <input type="email" id="email" name="email" />
  </form>
  ```

  <div>Webpage view</div>
  <div style="border: 2px solid grey; padding:8px">

  <form>
    <label for="email">Enter your email:</label>
    <input type="email" id="email" name="email" />
  </form>
  </div>

#### `<input type="file">`

- defines a file-select field and a "Browse" button for file uploads.

  ```html
  <form>
    <label for="myfile">Select a file:</label>
    <input type="file" id="myfile" name="myfile" />
  </form>
  ```

  <div>Webpage view</div>
  <div style="border: 2px solid grey; padding:8px">

  <form>
    <label for="myfile">Select a file:</label>
    <input type="file" id="myfile" name="myfile" />
  </form>
  </div>

#### `<input type="hidden">`

- defines a hidden input field (not visible to a user).

- A hidden field lets web developers include data that cannot be seen or modified by users when a form is submitted.

- A hidden field often stores what database record that needs to be updated when the form is submitted.

✏️: While the value is not displayed to the user in the page's content, it is visible (and can be edited) using any browser's developer tools or "View Source" functionality. Do not use hidden inputs as a form of security!

```html
<form>
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname" /><br /><br />
  <input type="hidden" id="custId" name="custId" value="3487" />
  <input type="submit" value="Submit" />
</form>
```

  <div>Webpage view</div>
  <div style="border: 2px solid grey; padding:8px">

  <form>
    <label for="fname">First name:</label>
    <input type="text" id="fname" name="fname" /><br /><br />
    <input type="hidden" id="custId" name="custId" value="3487" />
    <input type="submit" value="Submit" />
  </form>
  </div>

#### `<input type="image">`

- defines an image as a submit button.
- The path to the image is specified in the src attribute.

  ```html
  <form>
    <input
      type="image"
      src="https://picsum.photos/200"
      alt="Submit"
      width="48"
      height="48"
    />
  </form>
  ```

  <div>Webpage view</div>
  <div style="border: 2px solid grey; padding:8px">

  <form>
    <input
      type="image"
      src="https://picsum.photos/200"
      alt="Submit"
      width="48"
      height="48"
    />
  </form>
  </div>

#### `<input type="month">`

- Allows the user to select a month and year.
- Depending on browser support, a date picker can show up in the input field.

  ```html
  <form>
    <label for="bdaymonth">Birthday (month and year):</label>
    <input type="month" id="bdaymonth" name="bdaymonth" />
  </form>
  ```

  <div>Webpage view</div>
  <div style="border: 2px solid grey; padding:8px">

  <form>
    <label for="bdaymonth">Birthday (month and year):</label>
    <input type="month" id="bdaymonth" name="bdaymonth" />
  </form>
  </div>

#### `<input type="number">`

- defines a numeric input field.

- You can also set restrictions on what numbers are accepted.

- The following example displays a numeric input field, where you can enter a value from 1 to 5:

  ```html
  <form>
    <label for="quantity">Quantity (between 1 and 5):</label>
    <input type="number" id="quantity" name="quantity" min="1" max="5" />
  </form>
  ```

  <div>Webpage view</div>
  <div style="border: 2px solid grey; padding:8px">

  <form>
    <label for="quantity">Quantity (between 1 and 5):</label>
    <input type="number" id="quantity" name="quantity" min="1" max="5" />
  </form>
  </div>

#### `<input type="password" />`

- defines a password field:

```html
<form>
  <label for="username">Username:</label><br />
  <input type="text" id="username" name="username" /><br />
  <label for="pwd">Password:</label><br />
  <input type="password" id="pwd" name="pwd" />
</form>
```

  <div>Webpage view</div>
  <div style="border: 2px solid grey; padding:8px">

  <form>
    <label for="username">Username:</label><br />
    <input type="text" id="username" name="username" /><br />
    <label for="pwd">Password:</label><br />
    <input type="password" id="pwd" name="pwd" />
  </form>
  </div>

#### `<input type="radio">`

- defines a radio button.
- Radio buttons let a user select ONLY ONE of a limited number of choices:

  ```html
  <p>Choose your favorite Web language:</p>

  <form>
    <input type="radio" id="html" name="fav_language" value="HTML" />
    <label for="html">HTML</label><br />
    <input type="radio" id="css" name="fav_language" value="CSS" />
    <label for="css">CSS</label><br />
    <input
      type="radio"
      id="javascript"
      name="fav_language"
      value="JavaScript"
    />
    <label for="javascript">JavaScript</label>
  </form>
  ```

  <div>Webpage view</div>
  <div style="border: 2px solid grey; padding:8px">

    <p>Choose your favorite Web language:</p>

    <form>
      <input type="radio" id="html" name="fav_language" value="HTML" />
      <label for="html">HTML</label><br />
      <input type="radio" id="css" name="fav_language" value="CSS" />
      <label for="css">CSS</label><br />
      <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
      <label for="javascript">JavaScript</label>
    </form>
  </div>

#### `<input type="range">`

- defines a control for entering a number whose exact value is not important (like a slider control). Default range is 0 to 100. However, you can set restrictions on what numbers are accepted with the min, max, and step attributes:

  ```html
  <form>
    <label for="vol">Volume (between 0 and 50):</label>
    <input type="range" id="vol" name="vol" min="0" max="50" />
  </form>
  ```

  <div>Webpage view</div>
  <div style="border: 2px solid grey; padding:8px">

  <form>
    <label for="vol">Volume (between 0 and 50):</label>
    <input type="range" id="vol" name="vol" min="0" max="50" />
  </form>
  </div>

#### `<input type="reset">`

- defines a reset button that will reset all form values to their default values

  ```html
  <form action="/action_page.php">
    <label for="fname">First name:</label><br />
    <input type="text" id="fname" name="fname" value="John" /><br />
    <label for="lname">Last name:</label><br />
    <input type="text" id="lname" name="lname" value="Doe" /><br /><br />
    <input type="submit" value="Submit" />
    <input type="reset" value="Reset" />
  </form>
  ```

  <div>Webpage view</div>
  <div style="border: 2px solid grey; padding:8px">

  <form action="/action_page.php">
    <label for="fname">First name:</label><br />
    <input type="text" id="fname" name="fname" value="John" /><br />
    <label for="lname">Last name:</label><br />
    <input type="text" id="lname" name="lname" value="Doe" /><br /><br />
    <input type="submit" value="Submit" />
    <input type="reset" value="Reset" />
  </form>
  </div>

#### `<input type="search">`

- used for search fields (a search field behaves like a regular text field).

  ```html
  <form>
    <label for="gsearch">Search Google:</label>
    <input type="search" id="gsearch" name="gsearch" />
  </form>
  ```

  <div>Webpage view</div>
  <div style="border: 2px solid grey; padding:8px">

  <form>
    <label for="gsearch">Search Google:</label>
    <input type="search" id="gsearch" name="gsearch" />
  </form>
  </div>

#### `<input type="submit">`

- defines a button for submitting form data to a form-handler.
- The form-handler is typically a server page with a script for processing input data.
- The form-handler is specified in the form's action attribute:

  ```html
  <form action="/action_page.php">
    <label for="fname">First name:</label><br />
    <input type="text" id="fname" name="fname" value="John" /><br />
    <label for="lname">Last name:</label><br />
    <input type="text" id="lname" name="lname" value="Doe" /><br /><br />
    <input type="submit" value="Submit" />
  </form>
  ```

  <div>Webpage view</div>
  <div style="border: 2px solid grey; padding:8px">
  <form action="/action_page.php">
    <label for="fname">First name:</label><br />
    <input type="text" id="fname" name="fname" value="John" /><br />
    <label for="lname">Last name:</label><br />
    <input type="text" id="lname" name="lname" value="Doe" /><br /><br />
    <input type="submit" value="Submit" />
  </form>
  </div>

#### `<input type="tel">`

- used for input fields that should contain a telephone number.

  ```html
  <form>
    <label for="phone">Enter your phone number:</label>
    <input
      type="tel"
      id="phone"
      name="phone"
      pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
    />
  </form>
  ```

  <div>Webpage view</div>
  <div style="border: 2px solid grey; padding:8px">

  <form>
    <label for="phone">Enter your phone number:</label>
    <input
      type="tel"
      id="phone"
      name="phone"
      pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
    />
  </form>
  </div>

#### `<input type="text">`

- Defines a single-line text input field

  ```html
  <form>
    <label for="fname">First name:</label><br />
    <input type="text" id="fname" name="fname" /><br />
    <label for="lname">Last name:</label><br />
    <input type="text" id="lname" name="lname" />
  </form>
  ```

  <div>Webpage view</div>
  <div style="border: 2px solid grey; padding:8px">

  <form>
    <label for="fname">First name:</label><br />
    <input type="text" id="fname" name="fname" /><br />
    <label for="lname">Last name:</label><br />
    <input type="text" id="lname" name="lname" />
  </form>
  </div>

#### `<input type="time">`

- Allows the user to select a time (no time zone).
- Depending on browser support, a time picker can show up in the input field.

  ```html
  <form>
    <label for="appt">Select a time:</label>
    <input type="time" id="appt" name="appt" />
  </form>
  ```

  <div>Webpage view</div>
  <div style="border: 2px solid grey; padding:8px">

  <form>
    <label for="appt">Select a time:</label>
    <input type="time" id="appt" name="appt" />
  </form>
  </div>

#### `<input type="url">`

- Used for input fields that should contain a URL address.

- Depending on browser support, the url field can be automatically validated when submitted.

- Some smartphones recognize the url type, and adds ".com" to the keyboard to match url input.

  ```html
  <form>
    <label for="homepage">Add your homepage:</label>
    <input type="url" id="homepage" name="homepage" />
  </form>
  ```

  <div>Webpage view</div>
  <div style="border: 2px solid grey; padding:8px">

  <form>
    <label for="homepage">Add your homepage:</label>
    <input type="url" id="homepage" name="homepage" />
  </form>
  </div>

#### `<input type="week">`

- Allows the user to select a week and year.
- Depending on browser support, a date picker can show up in the input field

  ```html
  <form>
    <label for="week">Select a week:</label>
    <input type="week" id="week" name="week" />
  </form>
  ```

  <div>Webpage view</div>
  <div style="border: 2px solid grey; padding:8px">
  <form>
    <label for="week">Select a week:</label>
    <input type="week" id="week" name="week" />
  </form>

  </div>

### `<input>` attributes

- `<input>` supports [Global Attributes](https://www.w3schools.com/tags/ref_standardattributes.asp)
- `<input>` supports [Event Attributes](https://www.w3schools.com/tags/ref_eventattributes.asp)
- Attributes applicable on `<input>` tag as as below

#### `value`

- specifies an initial value for an input field

  ```html{3, 5}
  <form>
    <label for="fname">First name:</label><br />
    <input type="text" id="fname" name="fname" value="John" /><br />
    <label for="lname">Last name:</label><br />
    <input type="text" id="lname" name="lname" value="Doe" />
  </form>
  ```

  <div>Webpage view</div>
  <div style="border: 2px solid grey; padding:8px">
  <form>
    <label for="fname">First name:</label><br />
    <input type="text" id="fname" name="fname" value="John" /><br />
    <label for="lname">Last name:</label><br />
    <input type="text" id="lname" name="lname" value="Doe" />
  </form>
  </div>

#### `readonly`

- Specifies that an input field is read-only.
- A read-only input field cannot be modified (however, a user can tab to it, highlight it, and copy the text from it).
- The value of a read-only input field will be sent when submitting the form!

  ```html{3}
  <form>
    <label for="fname">First name:</label><br />
    <input type="text" id="fname" name="fname" value="John" readonly /><br />
    <label for="lname">Last name:</label><br />
    <input type="text" id="lname" name="lname" value="Doe" />
  </form>
  ```

  <div>Webpage view</div>
  <div style="border: 2px solid grey; padding:8px">
  <form>
    <label for="fname">First name:</label><br />
    <input type="text" id="fname" name="fname" value="John" readonly /><br />
    <label for="lname">Last name:</label><br />
    <input type="text" id="lname" name="lname" value="Doe" />
  </form>
  </div>

#### `disabled`

- Specifies that an input field should be disabled.
- A disabled input field is unusable and un-clickable.
- The value of a disabled input field will not be sent when submitting the form!

  ```html{3}
  <form>
    <label for="fname">First name:</label><br />
    <input type="text" id="fname" name="fname" value="John" disabled /><br />
    <label for="lname">Last name:</label><br />
    <input type="text" id="lname" name="lname" value="Doe" />
  </form>
  ```

  <div>Webpage view</div>
  <div style="border: 2px solid grey; padding:8px">
  <form>
    <label for="fname">First name:</label><br />
    <input type="text" id="fname" name="fname" value="John" disabled /><br />
    <label for="lname">Last name:</label><br />
    <input type="text" id="lname" name="lname" value="Doe" />
  </form>
  </div>

#### `size`

- Specifies the visible width, in characters, of an input field.
- The default value for size is 20.

✏️: The size attribute works with the following input types: _text_, _search_, _tel_, _url_, _email_, and _password_.

```html{3,5}
<form>
  <label for="fname">First name:</label><br />
  <input type="text" id="fname" name="fname" size="50" /><br />
  <label for="pin">PIN:</label><br />
  <input type="text" id="pin" name="pin" size="4" />
</form>
```

  <div>Webpage view</div>
  <div style="border: 2px solid grey; padding:8px">
  <form>
    <label for="fname">First name:</label><br />
    <input type="text" id="fname" name="fname" size="50" /><br />
    <label for="pin">PIN:</label><br />
    <input type="text" id="pin" name="pin" size="4" />
  </form>
  </div>

#### `maxlength`

- The input maxlength attribute specifies the maximum number of characters allowed in an input field.

✏️: When a maxlength is set, the input field will not accept more than the specified number of characters. However, this attribute does not provide any feedback. So, if you want to alert the user, you must write JavaScript code.

```html{5}
<form>
  <label for="fname">First name:</label><br />
  <input type="text" id="fname" name="fname" size="50" /><br />
  <label for="pin">PIN:</label><br />
  <input type="text" id="pin" name="pin" maxlength="4" size="4" />
</form>
```

  <div>Webpage view</div>
  <div style="border: 2px solid grey; padding:8px">
  <form>
    <label for="fname">First name:</label><br />
    <input type="text" id="fname" name="fname" size="50" /><br />
    <label for="pin">PIN:</label><br />
    <input type="text" id="pin" name="pin" maxlength="4" size="4" />
  </form>
  </div>

#### `min` and `max`

-- The input **min** and **max** attributes specify the minimum and maximum values for an input field.

- The min and max attributes work with the following input types: number, range, date, datetime-local, month, time and week.

✅: Use the max and min attributes together to create a range of legal values.

```html{3,6, 9}
<form>
  <label for="datemax">Enter a date before 1980-01-01:</label>
  <input type="date" id="datemax" name="datemax" max="1979-12-31" /><br /><br />

  <label for="datemin">Enter a date after 2000-01-01:</label>
  <input type="date" id="datemin" name="datemin" min="2000-01-02" /><br /><br />

  <label for="quantity">Quantity (between 1 and 5):</label>
  <input type="number" id="quantity" name="quantity" min="1" max="5" />
</form>
```

  <div>Webpage view</div>
  <div style="border: 2px solid grey; padding:8px">
  <form>
    <label for="datemax">Enter a date before 1980-01-01:</label>
    <input type="date" id="datemax" name="datemax" max="1979-12-31" /><br /><br />
    <label for="datemin">Enter a date after 2000-01-01:</label>
    <input type="date" id="datemin" name="datemin" min="2000-01-02" /><br /><br />
    <label for="quantity">Quantity (between 1 and 5):</label>
    <input type="number" id="quantity" name="quantity" min="1" max="5" />

  </form>
  </div>

#### `multiple`

- Specifies that the user is allowed to enter more than one value in an input field.
- The multiple attribute works with the following input types: _email_, and _file_.

  ```html{3}
  <form>
    <label for="files">Select files:</label>
    <input type="file" id="files" name="files" multiple />
  </form>
  ```

  <div>Webpage view</div>
  <div style="border: 2px solid grey; padding:8px">
  <form>
    <label for="files">Select files:</label>
    <input type="file" id="files" name="files" multiple />
  </form>
  </div>

#### `pattern`

- The input pattern attribute specifies a regular expression that the input field's value is checked against, when the form is submitted.
- The pattern attribute works with the following input types: text, date, search, url, tel, email, and password.

✅: Use the global title attribute to describe the pattern to help the user.

```html{7}
<form>
  <label for="country_code">Country code:</label>
  <input
    type="text"
    id="country_code"
    name="country_code"
    pattern="[A-Za-z]{3}"
    title="Three letter country code"
  />
</form>
```

  <div>Webpage view</div>
  <div style="border: 2px solid grey; padding:8px">
  <form>
    <label for="country_code">Country code:</label>
    <input
      type="text"
      id="country_code"
      name="country_code"
      pattern="[A-Za-z]{3}"
      title="Three letter country code"
    />
  </form>
  </div>

#### `placeholder`

- The input placeholder attribute specifies a short hint that describes the expected value of an input field (a sample value or a short description of the expected format).
- The short hint is displayed in the input field before the user enters a value.
- The placeholder attribute works with the following input types: **text**, **search**, **url**, **number**, **tel**, **email**, and **password**.

  ```html{7}
  <form>
    <label for="phone">Enter a phone number:</label>
    <input
      type="tel"
      id="phone"
      name="phone"
      placeholder="123-45-678"
      pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
    />
  </form>
  ```

  <div>Webpage view</div>
  <div style="border: 2px solid grey; padding:8px">
  <form>
    <label for="phone">Enter a phone number:</label>
    <input
      type="tel"
      id="phone"
      name="phone"
      placeholder="123-45-678"
      pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
    />
  </form>
  </div>

#### `required`

- The input required attribute specifies that an input field must be filled out before submitting the form.
- The required attribute works with the following input types: **text**, **search**, **url**, **tel**, **email**, **password**, date **pickers**, **number**, **checkbox**, **radio**, and **file**.

  ```html{3}
  <form>
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required />
  </form>
  ```

  <div>Webpage view</div>
  <div style="border: 2px solid grey; padding:8px">
  <form>
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required />
  </form>
  </div>

#### `step`

- The input step attribute specifies the legal number intervals for an input field. Eg: if step="3", legal numbers could be -3, 0, 3, 6, etc.

✅: This attribute can be used together with the max and min attributes to create a range of legal values.

- The step attribute works with the following input types: **number**, **range**, **date**, **datetime-local**, **month**, **time** and **week**.

  ```html{3}
  <form>
    <label for="points">Points:</label>
    <input type="number" id="points" name="points" step="3" />
  </form>
  ```

  <div>Webpage view</div>
  <div style="border: 2px solid grey; padding:8px">
  <form>
    <label for="points">Points:</label>
    <input type="number" id="points" name="points" step="3" />
  </form>
  </div>

#### `autofocus`

- Specifies that an input field should automatically get focus when the page loads.

  ```html{3}
  <form>
    <label for="fname">First name:</label><br />
    <input type="text" id="fname" name="fname" autofocus /><br />
    <label for="lname">Last name:</label><br />
    <input type="text" id="lname" name="lname" />
  </form>
  ```

  <div>Webpage view</div>
  <div style="border: 2px solid grey; padding:8px">
  <form>
    <label for="fname">First name:</label><br />
    <input type="text" id="fname" name="fname" autofocus /><br />
    <label for="lname">Last name:</label><br />
    <input type="text" id="lname" name="lname" />
  </form>

  </div>

#### `height` and `width`

- Specify the height and width of an `<input type="image">` element

  ```html{10-11}
  <form>
    <label for="fname">First name:</label>
    <input type="text" id="fname" name="fname" /><br /><br />
    <label for="lname">Last name:</label>
    <input type="text" id="lname" name="lname" /><br /><br />
    <input
      type="image"
      src="https://picsum.photos/200"
      alt="Submit"
      width="48"
      height="48"
    />
  </form>
  ```

  <div>Webpage view</div>
  <div style="border: 2px solid grey; padding:8px">
  <form>
    <label for="fname">First name:</label>
    <input type="text" id="fname" name="fname" /><br /><br />
    <label for="lname">Last name:</label>
    <input type="text" id="lname" name="lname" /><br /><br />
    <input
      type="image"
      src="https://picsum.photos/200"
      alt="Submit"
      width="48"
      height="48"
    />
  </form>
  </div>

#### `list`

- The input `list` attribute refers to a `<datalist>` element that contains pre-defined options for an `<input>` element.

  ```html
  <form>
    <input list="browsers" />
    <datalist id="browsers">
      <option value="Edge"></option>
      <option value="Firefox"></option>
      <option value="Chrome"></option>
      <option value="Opera"></option>
      <option value="Safari"></option>
    </datalist>
  </form>
  ```

  <div>Webpage view</div>
  <div style="border: 2px solid grey; padding:8px">
  <form>
    <input list="browsers" />
    <datalist id="browsers">
      <option value="Edge"></option>
      <option value="Firefox"></option>
      <option value="Chrome"></option>
      <option value="Opera"></option>
      <option value="Safari"></option>
    </datalist>
  </form>
  </div>

#### `autocomplete`

- The input autocomplete attribute specifies whether a form or an input field should have autocomplete on or off.
- Autocomplete allows the browser to predict the value. When a user starts to type in a field, the browser should display options to fill in the field, based on earlier typed values.
- The autocomplete attribute works with `<form>` and the following `<input>` types: **text**, **search**, **url**, **tel**, **email**, **password**, **datepickers**, **range**, and **color**.

  ```html{1}
  <form action="/action_page.php" autocomplete="on">
    <label for="fname">First name:</label>
    <input type="text" id="fname" name="fname" /><br />
    <label for="lname">Last name:</label>
    <input type="text" id="lname" name="lname" /><br />
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" autocomplete="off" /><br />
    <input type="submit" value="Submit" />
  </form>
  ```

  <div>Webpage view</div>
  <div style="border: 2px solid grey; padding:8px">
  <form action="/action_page.php" autocomplete="on">
    <label for="fname">First name:</label>
    <input type="text" id="fname" name="fname" /><br /><br />
    <label for="lname">Last name:</label>
    <input type="text" id="lname" name="lname" /><br /><br />
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" autocomplete="off" /><br /><br />
    <input type="submit" value="Submit" />
  </form>
  </div>
