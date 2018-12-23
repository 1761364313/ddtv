import {fetch} from "./https";
import {host} from "./config";
import {learnerId} from "./config";

export function getDetail(id) {
  let url=host+'/course/GetClassDetail';
  const data={
    classid: id
  }
  return fetch(url, data)
}
