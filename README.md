FlexisourceIT ReactJS Front-end Developer Exam.

## Available Scripts

In the project directory, you can run:

`npm start`
`npm test`
`npm build`

## Plugin Used
- axios - in most of the projects I created. I used axios except on Angular since they have their own http client module.
- axios-mock-adapter - for easier mocking of api requests
- lodash - used some of the handful methods
- react-router-dom - routing for react
- query-string - easier to parse or stringify url query string
- styled-components - styling. I prefer styled-components over sass/scss because it is easier to track if the component doesn't have the proper style attribute and it avoids style collision when creating or updating styles.

## Features
- Routing - pretty url `{{id}}-{{slug}}` = 1001-sample-url-slug
- Mobile Responsive - use the developer tools for accurate testing of other breakpoints
- Preloader (not circular loader) - standard when creating an app
- Tests - component testing to important components (Jest + react-testing-library). I also know how to use enzyme but rtl is much easier to use 
- Typescript - superset javascript

## Techniques
- CSS Flexbox - used by most of the ui library. I didn't use any UI library since the test project isn't big enough. But I usually use grid system of bootstrap because it has good implementation for styled-components. Also, flexbox is very easy to manipulate for creating mobile responsive design. `flex-wrap: wrap` played a key role here.
- Photoshop - used to get the actual sizes. However, using the pixels from photoshop isn't accurate because of the line-height provided by the browser. So, I just tried to make it similar as much as I can
- Atomic Web Design Methodology - It is widely used nowadays because it is easier to use and avoid duplication of code inside component. However, there's not too much for this project and it's missing the layout. 