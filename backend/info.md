# Folder structure for backend :

- The server.js is the main point in backend.
- `routes folder` - will manage all the routes which will then be listed at server.js
- `controllers folder` - We cannot write all the functions in the route folder files itself it will be very lengthy.
    - So we make use of controllers folder to write the functions for the routes in route folder.
- `models folder` - if we like to have some tables/collections in our db then we use the models folder to define the schema of that db.
