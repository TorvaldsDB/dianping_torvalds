export default {
  getProductList: (path, rowIndex, pageSize) =>
    `/mock/products/${path}.json?rowindex=${rowIndex}&pageSize=${pageSize}`,
  getProductDetail: id => `/mock/product_detail/${id}.json`,
  getShopById: id => `/mock/shop_detail/${id}.json`
};
