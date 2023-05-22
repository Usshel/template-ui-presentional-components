# Template UI Components

## Intro

Make sure to always add component modules
Make sure to add component modules to app.testing-module.ts
Do not modify anything else in tests folder (only app.testing-module.ts)

In get instant feedback simply run `npx nx test`

If you want to check your solution and run it in the browser:
Make sure to add component modules to app.module.ts
Make sure to run `npm start`

## Static Components

### Header

Create new component with a selector `header` and html: `<h1>Hello I am a header</h1>`
  
Detach the component from change detection using `ChangeDetectionRef`

## Template Components

### Avatar

Create component with a selector `avatar` and html that contains `img` and `p`.

Add Input called `imageUrl` of type string.
Add Input called `text` of type string.

Bind `imageUrl` to `src` attribute of `img`
Bind `text` to `alt` attribute of `img` and `p` text

### Card

Create component with a selector `card` and html that contains `h2` and `p`.

Create ViewModel for Card that contains `title:string` and `description:string`

Add Input called `card` of type created ViewModel.

Bind `title` to `h2`
Bind `description` to `p`

## Rating View

Create a component with a selector `rating-view` and html that contains `<i>` icons.

There are 3 possile icon css classes:

- icon-star-empty
- icon-star-half-empty
- icon-star

Add Input called `max` of type number
Add Input called `value` of type number
Add Output called `clicked` of type number

Build as many icons as range between 1 and `max` number
Show correct icon css class depending on the `value` input

Assume that `value <= max` and `max > 0` and `value` can be a float (0.2,1.5,3.7, etc.) and `max` is always a full number (1,2,3,4,5, etc.)

When I click on any star, then:

- it should select this start
- and all the stars on the left
- and it should emit the value of the star (number from `1` to `max`)

### Read More Panel

Create component with a selector `read-more-panel` and html that contains `section` in which you will have `p` on top, then `button` and finally another `p` at the bottom

Create ViewModel that will be representation of internal state of the template

Add Input called `mainText` of type string
Add Input called `readMoreText` of type string
Add Input called `openLabel` of type string with default value `Read more`
Add Input called `closedLabel` of type string with default value `Read less`

Bind `mainText` to first `p` element
Bind `readMoreText` to bottom `p` element

We have 2 states in the template: Open and Closed state

Closed state is the default state of the component.

In Closed state:

- Hide second `p` element
- Button label should be value of `openLabel` input

In Open state:

- Show second `p` element
- Button label should be value of `closedLabel` input

Note: If at any time I change either `openLabel` or `closedLabel`, then it may affect the button label depending on which state is currently active

### Hero

Create component with a selector `hero` and html that contains `section`, `h1` and `ng-content`

Add Input called `title` of type string
Add Input called `imageUrl` of type string

Bind `imageUrl` as `background-image` style on top of `section` element
Bind `title` as text of `h1` element

Allow to inject any other content below the h1 in form of `ng-content`

### AddressForm

Create component with a selector `address-form` and html that contains `formfields` with:

- `input` of type `text` representing street
- `input` of type `text` representing city
- `select` with 2 options:
  - `Poland` with id `1`
  - `USA` with id `2`

Add Input called `form` of type: `FormGroup` that will contains FormControls for: `street`, `city` and `countryId`

Bind Input to `formfields` element
Bind `street` to first input
Bind `city` to second input
Bind `countryId` to select

### ProductForm

Create compoennt with a selector `product-form` and html that contains `form` with:

- `input` of type `text` representing product name
- `input` of type `number` representing product price
- `input` of type `submit` to submit the form

Create `ProductFormViewModel` that will contain `id`, `name` and `price` of the product

Add Input called `model` of type `ProductFormViewModel | undefined`

Bind `ProductFormViewModel` to form inside of the component (if it is not undefined).
If it is undefined, then show label `Create` on the submit button.
If it is defined, then show label `Update` on the submit button.

Add Output called `submitted` that will emit event when form is submitted with `Partial<ProductFormViewModel>` data
