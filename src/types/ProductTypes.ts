export type Category = {
  id: string;
  name: string;
};

export type Product = {
  id: string;
  title: string;
  price: number;
  thumbnail: string;
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
