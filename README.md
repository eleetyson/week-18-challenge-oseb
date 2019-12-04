# Week 18 Challenge


## React Todo App


### Project Instructions

In this challenge we will create an application that incorporates data from an external API. The API we will be using is: http://api.open-notify.org/astros. Go ahead and check out the link to see the structure of the data!

This application will have four components:
- App
- People
- Number
- NavBar

To complete this challenge you will practice working with the following concepts:
- Lifecycle Methods
- Async React
- Class vs. Functional Components
- Client-Side Routing


The skeleton of each component has been set up for you but you will need to implement the functionality outlined below.  

## App Component

The App component will be responsible for requesting the data from the API. Which lifecycle method would make sense to use for this request? The App component will also need to store the fetched data.

You should also set up your routes inside the App component. You should have three routes: one for your People component, one for your Number component, and one for your NavBar component.

You should NOT directly render any of the components. What path should you use for your NavBar component if you ALWAYS want it rendered on the screen?

Consider: What type of component (functional or class) will App need to be and why?

## NavBar Component

The NavBar component is responsible for holding two Links: one for the People component and one for the Number component.  

Consider: What type of component (functional or class) should NavBar be and why?

## People Component

The People component should render the `name` and `craft` values of each person.

Consider: What type of component (functional or class) should People be and why?

## Number Component

The Number component should render the number of people currently in space.

Consider: What type of component (functional or class) should Number be and why?

## Getting Started

To start install the necessary packages, run `npm install` and then run `npm start` to start the application.
