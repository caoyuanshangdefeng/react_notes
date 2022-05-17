import React from 'react'
import { userRoutes ,commonRoutes} from 'routes'
import { useRoutes } from 'react-router-dom'
import { isLogined } from 'utils/auth'
export default function Main() {
  userRoutes=useRoutes(userRoutes)
  commonRoutes=useRoutes(commonRoutes)
  console.log('isLogined',isLogined());



  return isLogined() ? (
    <div>Main
      <div>
      {userRoutes}
      </div>
    </div>

  ):(
    <div>
      {commonRoutes}
    </div>
  )

}
