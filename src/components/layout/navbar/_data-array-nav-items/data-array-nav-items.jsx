import { HiBriefcase } from "react-icons/hi";
import { AiFillMedicineBox } from "react-icons/ai";
import  {FaBloggerB} from "react-icons/fa";


const data_array_nav_items = [


    {
      label:'All Services', link:'/service/cards', icon: <HiBriefcase/>
    },

    {
      label:'Add a New Service', link:'/service/add', icon: <AiFillMedicineBox/> 
    },

    {
      label:'Blog', link:'/blog', icon: <FaBloggerB/> 
    }



]

export default data_array_nav_items