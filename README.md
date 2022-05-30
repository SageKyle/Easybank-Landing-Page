# Frontend Mentor - Easybank landing page solution

This is a solution to the [Easybank landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/easybank-landing-page-WaUhkoDN). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![Easybank - Desktop view](easybank%20-%20desktop-view.jpg)
![Easybank - Mobile view](easybank%20-%20mobile-view.jpg)


### Links

- Live Site URL: [Here](https://sagekyle.github.io/Easybank-Landing-Page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Sass
- Desktop-first workflow
- Javascript

### What I learned

Through this project, I learned how to use the Javascript toggle method to create more efficient and responsive navigation bar:

```js
// TOGGLE THE NAVIGATION SECTION
toggle.addEventListener('click', () => {
    toggle.classList.toggle('active')
    navigation.classList.toggle('hidden')
});
```

I also learned how to use the filter CSS property to change the color of an SVG object:

```css
.social-icon:hover {
  filter: invert(61%) sepia(79%) saturate(453%) hue-rotate(83deg) brightness(96%) contrast(85%);
}
```

### Useful resources

- [CSS filter generator](https://codepen.io/sosuke/pen/Pjoqqp) - This is an amazing article which I used to generate the filter color for the SVGs.

## Author

- Github - [Paul Ominyi](https://github.com/SageKyle)
- Frontend Mentor - [@SageKyle](https://www.frontendmentor.io/profile/SageKyle)
- Twitter - [@Ominyi_Sage](https://www.twitter.com/Ominyi_Sage)
