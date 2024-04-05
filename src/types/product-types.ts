export type PriceInfo = [
  {
    currency: string;
    original_price: number;
    current_price: number;
  }
];

export type Image = {
  image_id_list: string[];
  image_url_list: string[];
};

export type ProductBaseInfo = {
  item_id: number;
  category_id: number;
  item_name: string;
  price_info: PriceInfo;
  image: Image;
};
