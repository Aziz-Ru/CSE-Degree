# CSS For Asthetic Desgin

## Selectors

A CSS selector selects the HTML element(s) you want to style.

1. Simple selectors (select elements based on name, id, class)
2. Combinator selectors (select elements based on a specific relationship between them)
3. Pseudo-class selectors (select elements based on a certain state)
4. Pseudo-elements selectors (select and style a part of an element)
5. Attribute selectors (select elements based on an attribute or attribute value)

Here ALl p text color red and centerd.

```
p {
  text-align: center;
  color: red;
}
```

## The CSS class Selector

The class selector selects HTML elements with a specific class attribute.Here Html element class center that will be center and red colored

```
.center {
  text-align: center;
  color: red;
}
```

## The CSS Universal Selector

The universal selector (\*) selects all HTML elements on the page.

```
* {
  text-align: center;
  color: blue;
}

```

## Background Property

#### background-color

#### background-image

#### background-repeat

#### background-attachment

#### background-position

#### background (shorthand property)

## margin

`margin: 25px 50px 75px 100px;`

top margin is 25px.
right margin is 50px.
bottom margin is 75px.
left margin is 100px.

## Padding

`padding: 25px 50px 75px 100px;`

top padding is 25px.
right padding is 50px.
bottom padding is 75px.
left padding is 100px.

## outline

An outline is a line drawn outside the element's border.
CSS has the following outline properties:
`outline-style:solid;outline-color:red;outline-width:2px;outline-offset:; outline (shorterhand)`

## float

The CSS float property specifies how an element should float.
left - The element floats to the left of its container
right - The element floats to the right of its container

# Pseudo-classes

A pseudo-class is used to define a special state of an element.

Style an element when a user mouses over it
Style visited and unvisited links differently
Style an element when it gets focus

Pseudo-classes can be combined with HTML classes:

### :hover

When mouse over that component that effect excuted

### :first-child

pseudo-class matches a specified element that is the first child of another element.

### :active

a:active Selects the active link

### :checked

input:checked Selects every checked <input> element

## All CSS Pseudo Elements

### ::after

p::after Insert content after every <p> element

::before p::before Insert content before every <p> element
