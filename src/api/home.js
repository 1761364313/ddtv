import {fetch} from "./https";
import {formatDate} from "../common/js/utils";
import {host} from "./config";

//get banner
export function getBannerList() {
  let url=host+'/home/indexbanner';
  let data={
    type:46,
    pagesize:5
  };
  return fetch(url,data)
}

//get today live player
export function getTodayLivePlayer(){
  let url=host+'/home/indexlive'
  const data={
    time: formatDate({type:5})
  };
  return fetch(url, data)
}

//get free course
export function getFreeList() {
  let url=host+'/home/indexfree'
  const data={
    pagesize:6,
    pageindex:1
  };
  return fetch(url, data)
}

//get skill nav-bar
export function getSkillNavList() {
  let url=host+'/home/indexcategory'
  const data={
    parentid:241
  };
  return fetch(url, data)
}

export function getSkillList(id=242) {
  let url=host+'/home/indextech'
  const data={
    cateid: id,
    pagesize: 6
  };
  return fetch(url, data)
}


