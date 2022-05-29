import dataCrawl from '@/assets/icons/menu/dataCrawl.svg'
import dataShow from '@/assets/icons/menu/dataShow.svg'
import dataSource from '@/assets/icons/menu/dataSource.svg'
export const menuRoute = [
  {
    name: "数据Source",
    icon: dataSource,
    url: "/source",
    sourcePath: "pages/DataSource",
    children: [
      {
        name: "B数据",
        url: "/source/b",
        sourcePath: "pages/DataSource/DataB",
        hidden: true
      },
      {
        name: "Y数据",
        url: "/source/y",
        sourcePath: "pages/DataSource/DataY",
        hidden: true
      },
    ]
  },
  {
    name: "数据Show",
    icon: dataShow,
    url: "/show",
    sourcePath: "pages/DataShow",
    children: [
      {
        name: "I数据",
        url: "/show/i",
        sourcePath: "pages/DataShow/DataI",
        hidden: true
      },
      {
        name: "S数据",
        url: "/show/s",
        sourcePath: "pages/DataShow/DataS",
        hidden: true
      },
    ]
  },
  {
    name: "home",
    icon: "",
    url: "/home",
    sourcePath: "pages/Home",
  },
  {
    name: "home",
    icon: "",
    url: "/",
    sourcePath: "/home",
  },
  {
    name: "NotFoundPage",
    icon: "",
    url: "/404",
    sourcePath: "component/NoFoundPage",
  },
  {
    name: "NotFoundPage",
    icon: "",
    url: "*",
    sourcePath: "/404",
  }




]
