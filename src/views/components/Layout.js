import { Outlet } from 'react-router-dom'
import HeaderBlock from "./HeaderBlock";
function Layout () {
  return (
      <div>
        <HeaderBlock/>
        <Outlet/>
      </div>
  )
}
export default Layout