const APIRoutes = {
  products: "/products",
  postReview: (itemId: string) => `/products/${itemId}/reviews`,
  getProduct: (itemId: string) => `/products/${itemId}`,
};
export default APIRoutes;
