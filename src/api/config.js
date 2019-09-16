function getPort(){
    try{
      return window.location.port
    } catch(e){
      alert(e)
    }
  }
  
  
  // 检查是否为生产环境
  function checkDevEnviroment(baseUrl){
    // 目前采用域名匹配，如果与指定域名匹配，则返回匹配结果，否则返回空（非生产环境）
    return baseUrl.match(/1\.200|gdwx\.e-chinalife/)
  }
  
  function getBaseUrl(){
    try{
      return window.location.protocol + '//' + window.location.hostname 
    } catch (e){
      alert(e)
    }
  
  }
  
  const baseUrl  = getBaseUrl ()
  
  export default {
    isProduction: checkDevEnviroment(baseUrl),
    productoinPatten:[
      // 生产环境
      {
        patten: '/node/*',
        root: baseUrl + ':3200' // 生产环境
      },
      {
        patten: '/admin/*',
        root: baseUrl + ':'+ getPort() +'/gzchinalife-FinanceManage' // 生产环境
      }
    ],
    devPatten:[
    // 测试环境
      {
        patten: '/node/*',
  //    root: 'http://10.113.5.121:3200' // 开发环境
        root: 'http://10.113.1.200:3200' // 200生产库环境
      },
      {
        patten: '/admin/*',
        root: 'http://10.113.5.212:8099/gzchinalife-FinanceManage' // 开发环境
      }
    ]
  }
  