import { Product } from "./type";

export const mockedProducts: Product[] = [
  {
    id: 1,
    name: "Optima",
    description: "Games",
    price: 10816.61,
    color: "Crimson",
    size: "XS",
    quantity: 1,
  },
  {
    id: 2,
    name: "Savana 3500",
    description: "Vehicle",
    price: 12071.47,
    color: "Turquoise",
    size: "S",
    quantity: 1,
    featured: true,
    imgUrl: "https://mf-search-app.netlify.app/car.jpeg",
  },
  {
    id: 3,
    name: "Garden Gear",
    description: "Garden",
    price: 35269.2,
    color: "Puce",
    size: "L",
    quantity: 1,
    featured: true,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP1TrsxwNAJhwJxRE6X4wc2ZtL5vQU8pqJMQ&usqp=CAU",
  },
  {
    id: 4,
    name: "Neon",
    description: "Automotive",
    price: 40135.99,
    color: "Fuscia",
    size: "XL",
    quantity: 1,
  },
  {
    id: 5,
    name: "S10",
    description: "Electronics",
    price: 28765.47,
    color: "Khaki",
    size: "XL",
    quantity: 1,
    featured: true,
    imgUrl: "https://mf-search-app.netlify.app/phone.jpeg",
  },
];