import axios from 'axios'
import md5 from 'js-md5'

//get 请求
export function fetch(url,params={}) {
  const token={
    token:md5(param(params))
  };
  const data=Object.assign({},params,token);
  return new Promise((resolve,reject)=>{
    axios.get(url,{
      params:data
    }).then(res=>{
      resolve(res.data)
    }).catch(err=>{
      reject(err)
    })
  })
}

//--------格式化对象 转化成路径---------
export function param(data) {
  let url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += '&' + k + '=' + encodeURIComponent(value)
  }
  return url ? url.substring(1) : ''
}

