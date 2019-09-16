import qs from 'qs'
import CONFIG from '@/api/config'
// 引用axios
var axios = require('axios')

function setRoot (path){
  let isProduction = CONFIG.isProduction
  let pathPattenList = isProduction? CONFIG.productoinPatten : CONFIG.devPatten
  pathPattenList.forEach(function(item){
    let reg = new RegExp(item.patten)
    if(reg.test(path)){
      path = item.root + path
    }
  })
  return path
  
}


// 自定义判断元素类型JS

function toType (obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
// 参数过滤函数
function filterNull (o) {
  for (var key in o) {
    if (o[key] === null) {
      delete o[key]
    }
    if (toType(o[key]) === 'string') {
      o[key] = o[key].trim()
    } else if (toType(o[key]) === 'object') {
      o[key] = filterNull(o[key])
    } else if (toType(o[key]) === 'array') {
      o[key] = filterNull(o[key])
    }
  }
  return o
}
/*
  接口处理函数
  这个函数每个项目都是不一样的，如果是其他接口
  需要根据接口的参数进行调整。参考说明文档地址：
  https://cnodejs.org/topic/5378720ed6e2d16149fa16bd
  主要是，不同的接口的成功标识和失败提示是不一致的。
  另外，不同的项目的处理方法也是不一致的，这里出错就是简单的alert
*/

// 返回在vue模板中的调用接口
export default {
//get: function (url, params, success, failure) {
  get: function (obj) {
    //设置sso
    try{
      obj.url = setRoot(obj.url)
      obj.data.accessToken = sessionStorage.getItem('accessToken')
    } catch (e){
      console.error(e)
//    alert('sso in not found')
    }
   	axios.get(obj.url, {
   	  params: obj.data
   	})
   	.then(function(res){
   	  	obj.success(res.data)
   	})
   	.catch(function(err){
   	  if(obj.error){
   	    obj.error(err.data)
   	  }
   	})
  	
  },
//post: function (url, params, success, failure) {
post: function (obj) {
//axios.post(obj.url, qs.stringify(obj.data),{
//    headers:{
//      'content-type':'application/x-www-form-urlencoded; charset=utf-8'
//    }
//  })
//初始化params
	if(!obj.params) obj.params = {}
  //设置sso
  try{
    //obj.url = setRoot(obj.url)
    if(obj.data instanceof FormData){
    	obj.url = setRoot(obj.url)+"?accessToken="+sessionStorage.getItem('accessToken')
			//obj.data.append("accessToken",sessionStorage.getItem('accessToken'))
  	}else {
  		obj.url = setRoot(obj.url)
  		if(sessionStorage.getItem('accessToken')!=null){
  			obj.data.accessToken = sessionStorage.getItem('accessToken')
  		}
  	}
  } catch(e) {
    console.error(e)
  }
  if(!(obj.data instanceof FormData)){
  	obj.data = qs.stringify(obj.data)
  }
  axios.post(obj.url, obj.data, obj.params)
    .then(function(res){
    	obj.success(res.data);
    })
    .catch(function(err){
			//console.error(err);
    	obj.error(err);
    })
  },
//put: function (url, params, success, failure) {
  put: function (obj) {
   	alert("不允许使用 PUT 方法！")
  },
//delete: function (url, params, success, failure) {
  delete: function (obj) {
   	alert("不允许使用 DELETE 方法！")
  }
}