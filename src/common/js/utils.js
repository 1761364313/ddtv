//====================时间格式化====================
/**
 * [formatDate 时间格式化]
 * @param {Object} times [需要格式化的时间]
 * @param {Object} type [不同的时间格式属性 ]
 * @return {string} {string}  [返回需要的时间格式]
 */
export function formatDate({times = new Date(), type = 1} = {}) {
  const time = new Date(times);
  let y = time.getFullYear().toString();
  let m = (time.getMonth() + 1).toString().padStart(2, '0');
  let t = time.getDate().toString().padStart(2, '0');
  let h = time.getHours().toString().padStart(2, '0');
  let ms = time.getMinutes().toString().padStart(2, '0');
  let s = time.getSeconds().toString().padStart(2, '0');
  switch (type) {
    case 1:
      return y + '/' + m + '/' + t + ' ' + h + ":" + ms + ":" + s;
      break;
    case 2:
      return y + '-' + m + '-' + t + ' ' + h + ":" + ms + ":" + s;
      break;
    case 3:
      return y + '年' + m + '月' + t + '日' + h + '时' + ms + '分' + s + '秒';
      break;
    case 4:
      return y + '-' + m + '-' + t;
      break;
    case 5:
      return y+m+t
  }
}
