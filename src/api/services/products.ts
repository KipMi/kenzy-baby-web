import crypto from "crypto";

const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT as string;
const partnerId = process.env.NEXT_PUBLIC_PARTNER_ID as string;
const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN as string;
const shopId = process.env.NEXT_PUBLIC_SHOP_ID as string;
const partnerKey = process.env.NEXT_PUBLIC_PARTNER_KEY as string;
const timestamp = Math.floor(Date.now() / 1000);

export const createSign = () => {
  const sign = crypto
    .createHmac("sha256", partnerKey)
    .update(
      partnerId +
        "/api/v2/product/get_item_list" +
        timestamp +
        accessToken +
        shopId
    )
    .digest("hex");

  return sign;
};

export async function getProductInfo() {
  const response = await fetch(
    `${apiEndpoint}product/get_item_base_info?partner_id=${partnerId}&sign=${createSign()}&timestamp=${timestamp}&shop_id=${shopId}&access_token=${accessToken}&item_id_list`
  );

  return response.json();
}

export async function getProductList() {
  const url = `${apiEndpoint}product/get_item_list?partner_id=${partnerId}&sign=${createSign()}&timestamp=${timestamp}&shop_id=${shopId}&access_token=${accessToken}&offset=0&page_size=10&update_time_from=1611311600&update_time_to=${timestamp}&item_status=NORMAL`;
  console.log(url);
  const response = await fetch(url, { mode: "no-cors" });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}
