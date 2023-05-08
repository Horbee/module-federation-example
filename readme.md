# Module Federations Example with Create React App

This project is an example of using Module Federations with Create React App (CRA). It consists of three separate projects: `mf-shell`, `mf-search-app`, and `mf-checkout-app`. The module federations plugin and the webpack configurations are customized with `CRACO`.

## Project Structure

- `mf-shell`: This is the shell application that glues the product search and checkout pages together. It acts as the main entry point for the eCommerce shop, it sets up the `client side routing` and share the common `cart store`.

- `mf-search-app`: This project represents the product search page. It is a standalone application that provides functionality for searching and displaying products. It shares the `ProductSearch` page and the `FeaturedProducts` components via Module Federations.

- `mf-checkout-app`: This project represents the checkout page. It is another standalone application responsible for handling the checkout process. It shares the `Navbar` and the `CheckoutPage` components via Module Federations.

## Features

- `Module Federations`: The module federations plugin is used to share components and the cart state between the projects.

- `CRACO Customization`: The webpack configurations are customized using CRACO (Create React App Configuration Override). This allows for fine-grained control over the webpack settings.

## Usage

1. Clone the repository:

```bash
git clone https://github.com/Horbee/module-federation-example.git
```

2. Install dependencies for all projects:

```bash
cd module-federations-example

cd mf-shell
npm install


cd mf-search-app
npm install


cd mf-checkout-app
npm install
```

3. Start the all the application from the root folder:

```bash
cd module-federations-example
npm start
```

4. Open your browser and visit http://localhost:3000 to access the example app.

# Authors

Norbert Horgas (norbert.horgas@mathema.de)

Paterson Djemi (paterson.djemi@mathema.de)
