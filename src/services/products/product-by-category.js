import { GetApiData } from "@/utils/http-client";

export const GetCategoryByName = function (data) {
  return GetApiData(`product/category/${data}`, "GET", true);
};

export const GetProductById = function (data) {
  return GetApiData(`product/${data}`, "GET", true);
};
