import  "./MyDetails.css"
import { Link } from "react-router-dom"
const MyDetails = () => { 
  return (
    <>
      <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum hic quisquam iusto consectetur, sapiente, nulla distinctio molestiae qui aliquam officia nihil commodi pariatur, fugit quasi eveniet architecto corporis ab harum.</p>
      <button className="updateButton"><Link className="link" to="/subbmitForm/updateDetails" >Update / Add info</Link></button>
    </>
  )
}
export default MyDetails