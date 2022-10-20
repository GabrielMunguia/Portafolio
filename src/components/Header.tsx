import { Presentation ,Navbar} from "./index"
import style from "../assets/css/components/header.module.css";


export const Header = () => {
  return (
    <div className={style.header_container}>
        <Navbar/>
        <Presentation/>
        
    </div>
  )
}
