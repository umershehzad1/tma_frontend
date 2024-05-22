import { GetApiData } from "@/utils/http-client";



export const GetAllCategories = function () {
  return GetApiData(`category`, "GET", null, true);
 
};
