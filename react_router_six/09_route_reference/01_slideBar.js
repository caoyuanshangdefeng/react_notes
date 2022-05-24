const slideBarConfig = [
  {name: "列表", icon: "ordered-list", url: "/list", children: [
    {name: "详情", url: "/list/detail", hidden: true},
  ]},
  {name: "系统管理", icon: "appstore", url: "/system", children: [
    {name: "账号管理", url: "/system/accountManage"},
    {name: "角色管理", url: "/system/roleManage"}
  ]},
  {name: "兄弟组件传值", icon: "hdd", url: "/childToChild", hidden: true,},
  {name: "父组件向子组件传值", icon: "snippets", url: "/parentToChild"},
  {name: "子组件向父组件传值", icon: "copy", url: "/childToParent"},
  {name: "状态管理Redux", icon: "inbox", url: "/redux"}
];

export default slideBarConfig;


getSubmenu = () => {
  return slideBarConfig.map(item => {
      if(!item.children || item.children.length === 0){    //如果当前路由没有子路由且该路由的hidden为false或不设置该路由的hidden时则直接显示该路由，若该路由的hidden为true则不显示该路由
          if(item.hidden) return false

          return (
              <MenuItem key={item.url}>
                  <Link to={item.url} replace> {/*加一个replace是因为当前路由下的 history 不能 push 相同的路径到 stack 里。只有开发环境存在，生产环境不存在，目前还没看到官方有去掉的意思*/}
                      <Icon type={item.icon} />
                      <span>{item.name}</span>
                  </Link>
              </MenuItem>
          )
      }else if(item.children && item.children.length === 1){
          if(item.hidden) return false

          let noHiddenRouter = [];
          let hiddenRouter = [];
          item.children.map(v => {
              if(v.hidden){
                  hiddenRouter.push(v)
              }else{
                  noHiddenRouter.push(v)
              }

              return true
          })

          if(hiddenRouter.length > 0){ //当子路由只有一个且该子路由的hidden为true同时其父路由的hidden为false或不设置其父路由的hidden时则显示其父路由
              return <MenuItem key={item.url}><Link to={item.url} replace><Icon type={item.icon} /><span>{item.name}</span></Link></MenuItem>
          }

          if(noHiddenRouter.length > 0){ //当子路由只有一个且该子路由的hidden为false或不设置该子路由的hidden时则显示其父路由和下拉的子路由
              return (
                  <SubMenu key={item.url} title={<span><Icon type={item.icon} /><span>{item.name}</span></span>}>
                      {
                          noHiddenRouter.map(v => {
                              return <MenuItem key={v.url}><Link to={v.url} replace>{v.name}</Link></MenuItem>
                          })
                      }
                  </SubMenu>
              )
          }
      }else if(item.children && item.children.length > 1){  //当当前路由有两个及两个以上子路由时，若两个子路由的hidden都为true时则该路由和其子路由全部隐藏
          if(item.hidden) return false

          let noHiddenRouter = [];
          item.children.map(v => {
              if(v.hidden){
                  return <MenuItem key={item.url}><Link to={item.url} replace><Icon type={item.icon} /><span>{item.name}</span></Link></MenuItem>
              }else{
                  noHiddenRouter.push(v)
                  return true
              }
          })

          if(noHiddenRouter.length > 0){
              return (
                  <SubMenu key={item.url} title={<span><Icon type={item.icon} /><span>{item.name}</span></span>}>
                      {
                          noHiddenRouter.map(v => {
                              return <MenuItem key={v.url}><Link to={v.url} replace>{v.name}</Link></MenuItem>
                          })
                      }
                  </SubMenu>
              )
          }
      }

      return true
  });
}
