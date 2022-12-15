// router
import { RouterProvider } from "react-router-dom";
import allRoutes from "routes/all-routes";


// toast component
import SHOW_TOAST from 'components/reusable/for-any-project/toastify/show-toast'




export default function App() {

  return (

    <>

      {/*✅ Router  */}
      <RouterProvider router={allRoutes} />


      {/*✅ toast component */}
      <SHOW_TOAST />

    </>




  )

}