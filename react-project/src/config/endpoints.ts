const APIRoutes = {
  products: "/products",
  postReview: (itemId: string) => `/products/${itemId}/reviews`,
};
export default APIRoutes;
