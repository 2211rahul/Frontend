
import { Link } from "react-router-dom";



import { MdInventory2, MdOutlinePayments } from "react-icons/md";
import { AiFillDashboard, AiFillSetting } from "react-icons/ai";
import { FcBookmark } from "react-icons/fc";



export default function Archdash() {
  
  
  const email = sessionStorage.getItem("email");
  const name=sessionStorage.getItem("name");
  const orders=sessionStorage.getItem("orders");
  return (
    <div>
      
      <div class="grid-container" >
        <aside id="sidebar">
          <div class="sidebar-title">
            <div class="sidebar-brand">
              <span class="material-icons-outlined"></span> {email}
            </div>
            <span class="material-icons-outlined" onclick="closeSidebar()">
              close
            </span>
          </div>

          <ul class="sidebar-list">
            <li class="sidebar-list-item">
              <a href="#" target="_blank">
                <span class="material-icons-outlined"></span> Welcome {name}
              </a>
            </li>
            
            <li class="sidebar-list-item">
              <Link to={"/edituser"}>
                <AiFillSetting></AiFillSetting> &nbsp;  Settings
              </Link>
            </li>

            <li class="sidebar-list-item">
              <Link to={"/book"}>
                <FcBookmark></FcBookmark>&nbsp; Bookings
              </Link>
            </li>
           {orders==false?
            <li class="sidebar-list-item">
            <Link to={"/order"}  >
              <MdInventory2></MdInventory2> &nbsp; Orders
            </Link>
          </li>
           :
          <li class="sidebar-list-item">
            <Link to={"/add"}>Add Properties
             + &nbsp; 
            </Link>
          </li>
            
           }
          </ul>
        </aside>

        <main class="main-container">
          <div class="main-title">
          
            <p class="font-weight-bold">
              <AiFillDashboard></AiFillDashboard> &nbsp;DASHBOARD
           
            </p>
          </div>
        </main>
        
      </div>
      &nbsp;
    </div>
  );
}

