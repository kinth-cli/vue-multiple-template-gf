// @author kinth-cjx
// 根据登录人角色列表验证权限
function authRoleList(arr){
    const roleList = sessionStorage.roleList.split(",");
    return roleList.filter(id => {
      return arr.indexOf(String(id))>-1 || arr.indexOf(Number(id))>-1
    }).length;
  }
  
  // 根据登录人角色ID验证权限
  function authRoleId(arr){
    return arr.indexOf(sessionStorage.roleId)>-1 || arr.indexOf(Number(sessionStorage.roleId))>-1; 
  }
  
  export{authRoleList,authRoleId}
  