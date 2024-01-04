"use client";

export const MainProducts = () => {
  console.log("anything", process.env.NEXT_PUBLIC_SHOPIFY_HOSTNAME);
  return (
    <section>
      <h1>A{process.env.NEXT_PUBLIC_SHOPIFY_HOSTNAME}a</h1>;
    </section>
  );
};
