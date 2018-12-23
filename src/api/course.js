import {fetch} from "./https";
import {host} from "./config";
import {learnerId} from "./config";

export function getMyCourseList({index=1,status=1}={}) {
  let url=host+'/center/GetClassCounter';
  let data={
    learnerid:learnerId,
    status:status,
    sort:1,
    pageindex:index,
    pagesize:8
  }
  return fetch(url,data)
}
