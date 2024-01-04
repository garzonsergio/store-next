const getProducts = async () => {
  const response = await fetch(`${process.env.SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json`, {
    headers: new Headers({
      'X-Shopify-Access-Token': process.env.SHOPIFY_API_KEY || ""
    })
  })
  const data = await response.json()
  return data
}

export const MainProducts = async () => {
  const products = await getProducts();
  console.log(
    "🚀 ~ file: MainProducts.tsx:17 ~ MainProducts ~ products:",
    products
  );

  return (
    <section>
      <h1>main products</h1>;
    </section>
  );
};
