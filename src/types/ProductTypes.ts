export type Category = {
  id: string;
  name: string;
};

export type Product = {
  id: string;
  title: string;
  price: number;
  thumbnail: string;
  available_quantity: number;
  pictures: [
    {
      id: string;
      url: string;
    },
  ]
  attributes: [
    {
      id: string;
      name: string;
      values: [
        {
          name: string;
        },
      ]
    },
  ]
  warranty: string;
};

export type ProductCart = {
  id: string;
  title: string;
  price: number;
  totalPrice: number;
  productStock: number;
  thumbnail: string;
  quantity: number;
};
