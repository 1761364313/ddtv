import {fetch} from "./https";
import {host} from "./config";

export function getHotList() {
  let url=host+'/search/GetSearchSuggest';
  let data={
    pagesize:10,
    index:1
  };
  return fetch(url,data)
}
