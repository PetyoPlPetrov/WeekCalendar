# Kidso

This repository will present an application with the following functionality:
1. Week calendar with navigation.
 

## Setting up the project


1. To **build the package** execute `npm install`
1. To **start the app** - `npm start`

## Project structure

```
    - project root
        - src  
                - components
                    - common - basec reusable compoennts
                    - dumb - view only components
                    - hoc - components with reusable business logic
                - constants
                - redux
                    - reducers
                    - selectors
                    - store
                - utils - app utils
                - index.js - app entry point
            - package.json
        - README
        
```
## Things to notice
1. I havent used redux in a while. Yet I decided to combine it with react hooks approach rather its ecossytem for side effetcs.I strived for SOLID and clear separation of concerns.
2. I would not use redux as a caching strategy, but it works for this case.
3. TODO: handle loading state and error state with the created HOCs. I didnt use any additional styled components as my several hours for building it expired.
4. Things I could do further - clarifying questions for handling overlapping events. Writing tests for the dumb components. I would put all of the css into styled scoped components.



## Authors

- **Petyo Petrov**