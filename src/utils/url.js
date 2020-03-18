export default {
  getProductList: (path, rowIndex, pageSize) =>
    `/mock/products/${path}.json?rowindex=${rowIndex}&pageSize=${pageSize}`
};
