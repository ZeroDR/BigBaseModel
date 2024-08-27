export default {
  dateFormat(fmt,date){
    // let date = new Date(timestamp);//若timestamp为时间戳格式需添加此行代码
    var o = {
      "y+" : date.getFullYear(), //年份
      "M+" : date.getMonth()+1, //月份
      "d+" : date.getDate(), //日
      "H+" : date.getHours(), //小时
      "m+" : date.getMinutes(), //分
      "s+" : date.getSeconds(), //秒
      "w+" : date.getDay(),//星期
      "q+" : Math.floor((date.getMonth()+3)/3), //季度
      "S" : date.getMilliseconds() //毫秒
    };
    if(/(y+)/.test(fmt)){
      // RegExp.$1是RegExp的一个属性,指的是与正则表达式匹配的第一个 子匹配(以括号为标志)字符串，以此类推，RegExp.$2，RegExp.$3，..RegExp.$99总共可以有99个匹配
      fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));
    }
    if(/(w+)/.test(fmt)){
      let weekday = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
      fmt=fmt.replace(RegExp.$1, weekday[date.getDay()]);
    }
    for(var k in o){
      if(new RegExp("("+ k +")").test(fmt)){
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
      }
    }
    return fmt;
  },
  downloadFile(blob, name, type) {
    const file = new Blob([blob], { type });
    // 兼容不同浏览器的URL对象
    const url = window.URL || window.webkitURL || window.moxURL;
    // 创建下载链接
    const downloadHref = url.createObjectURL(file);
    // 创建a标签并为其添加属性
    let downloadLink = document.createElement("a");
    downloadLink.setAttribute("href", downloadHref);
    downloadLink.setAttribute("download", name);
    //将a标签添加到body中
    document.body.appendChild(downloadLink);
    // 触发a标签的点击，自动下载
    downloadLink.click();
    //下载完成后移除a标签
    document.body.removeChild(downloadLink);
    //释放下载链接
    url.revokeObjectURL(downloadHref);
  },
}