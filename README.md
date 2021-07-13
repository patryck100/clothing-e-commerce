This is a React project to represent a full e-commerce clothing shopping. The application displays a collection of clothes divided by category that allows the user to preview the first 4 items of each category. The user can add or remove items to the cart, sign in and sign out, and pay for the items on the checkout page (using a test card provided in the application). 

User authentication
* The application uses google firebase to authenticate and store user data

Storage
* User authentication is stored in google firebase
* It uses Redux-persist to store cart items localy during navigation even if the page is refreshed
* The application fetches data using promise object and Async Await functionality

Performance
* Users are able to quickly navigate between pages through Router and Switch from React-router-dom
* The application makes use of Selectors (Memoization technic to cache and avoid unecessary rendering)

Scalability
* The application is well divided into various components to make it reusable and scalable-proof
* The application makes use of Redux to manage the state and mitigate complexity and allow future scalability

Payment
* The application uses Stripe API interface to allow payments (test card is provided and no real payment is performed in this project)


Future updates **
* Future versions will implement GrapthQL and integrade backend *
* Implement React Hooks instead of Redux
* Create the contact page



