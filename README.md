# [Form validation problem](https://springload.github.io/form-validation-problem/)
Form validation solution. Download, unzip, and open [index.html](index.html) in a browser to view.

## Technology
I used plain JavaScript to perform the validation. For any significant project I would utilise React or choose a framework, but for a single page form with a ~2 hour time constraint I think that Javascript alone is sufficient. Advantages: Getting started was simple, there's very little boilerplate surrounding the code I added, and my dev iterations were fast.
Limitations:
This wouldn't scale well. If this was a project of any significant size I would want typing to avoid bugs
Browsers with JavaScript disabled will be able to submit the form without validation, so server-side validation is also necessary.

## Design notes
#### I added the error messages to the HTML rather than generating them on validation.
* Advantages:
  * Code simplicity. The message is shown and hidden without any scripting beyond adding an error class to the parent element.
* Disadvantages: 
  * Only one error message per input. For more complicated input, it would be better to set the error text to specific messages returned from the validation function.
  *  Error messages are separated from the validation that triggers them. If min password length is raised to 9, two files will be touched.

#### Email addresses are validated with a fairly basic regex
Regex is pulled from https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address
* Advantages:
  * Regular expressions are better supported than <input type=email> in older browsers
  * The regex is simple enough that I can break it down and understand it
* Disadvantages:
  * Not all invalid email addresses will be caught (Server-side validation should fill this gap. The surest way to validate an email is to send something to it.)

#### The tiger checking only checks for a non empty string.
I considered making this stricter, only accepting alphabetic characters, spaces, and hyphens, but in the end I decided open ended was better. With limited knowledge of how the form will be used, I decided to prioritize not unintentionally disallowing things like "Görlitz Zoo's Bengal #4".

<br>If getting normalised, valid input is really important, a dropdown should be used instead.

## :cherries:
### Accessibility
* Most input elements have the aria-required and aria-invalid property set to make content more accessible to screen readers.
* My changes did not change keyboard navigation of the form
* I used semantic tagging for error messages. Using \<em\> conveys emphasis on error messages without relying on red or italicised text.
* Added lang='en' to the HTML element, something than screen readers look for

### Testing
* I performed manual testing across browsers, with JavaScript disabled, using mobile phone screen dimensions, and using keyboard navigation only.
* I also ran the regex through a test set of valid and invalid email addresses before including it in code.
* I did not write any automated tests for this project in its barebones state. If I were to add tests I would use a testing framework like Jest or Mocha.

### Browser compatibility
* I checked coverage of CSS rules, functions, and language features across all major browsers as I worked, aiming for coverage right down to IE7.

### Documentation
* This README begins with instructions for running the project, and design decisions are documented under [Design Notes](#Design-Notes).
* I believe in self documenting code, and generally only comment to explain why something is done. A comment explaining what code is doing can usually be replaced with better variable and function naming and/or more intermediate steps.

### Progressive Enhancement
* The form loads and can be submitted (sans validation) without JavaScript enabled, something that would have been lost if I'd adopted React with client-side rendering.
* The validation runs on old browsers with slow connections. It has a solid base, and can now be enhanced with conditional rendering of input elements, animal emojis in the select elements, a spinning submit button...

<br><br>
Thanks very much for taking the time to review my submission. I'd love to hear what I did well, and how I could do better! 
