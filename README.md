# Flamengo-2019-frontend - React Ts

## Contributors:
* [Alexandre Magno](https://github.com/alemagno10)
* [Eduardo Vaz](https://github.com/EduardoMVAz)
* [João Lucas](https://github.com/JoaoLucasMBC)
* [Lucca Hiratsuca Costa](https://github.com/LuccaHiratsuca)
* [Pedro Pertusi](https://github.com/PedroPertusi)
* [Thomas Chiari Ciocchetti de Souza](https://github.com/thomaschiari)

## Project Structure

### Folder Structure:
```python
src
├── assets
│   ├── images
│   └── icons
├── components
├── context
├── middlewares
├── pages
├── routes
├── services
├── store
  ├── actions
  ├── constants
  ├── reducers
├── types
├── util
```

### Descriptions:

- `assets`: Used to store lightweight images (for heavy images, prefer using a CDN), icons, etc.
- `components`: Reusable components of the application. These are units for your application, like buttons, modals, etc.
- `context`: Maintains all the contexts of the application.
- `middlewares`:
- `pages`: The pages are what the user will see and where the components will be sumarized
- `services`: Contains the configurations for HTTP clients and connections for API's.
- `store`: Holds the definitions for state managers, context API, zustand, redux.
- `types`: Stores TypeScript typings (types and interfaces) that are common across various parts of the project.
- `utils`: Utility functions such as formatCurrency, formatPhone, convertTimezone, parsePhone, etc. (pure JavaScript).


## Progress

### Basic Features:
- [x] Setup with all the folders (organized)
- [x] Implement Routes General
- [x] Implement Routes User (Authentication: login/register)
- [x] Basic Page Login
- [x] Connect to Zambom's API
- [x] Save the token in local storage
- [x] Implement React Redux
- [x] Implement: get data from Zambom's API and save in React Redux
- [x] Add Persistance in react redux
- [x] Add Middleware unathorized
- [x] Connect to Palmeiras's API (our backend)
- [x] Basic Page Rentals (main(list of all))
- [x] Basic Page Rentals (main(list of all)) - with filters
- [x] Refresh Token (implementation)
- [x] Implement Routes Rentals (main(list of all)/new)
- [x] Basic Page New Rental (creation of a rental)

### Extra Features:
- [x] Add Header
- [ ] Validation in forms
- [ ] Make tests
- [ ] Logout
- [ ] Filter of data
- [ ] "More Details" of each rental
- [ ] Update a rental
- [ ] Delete a rental
