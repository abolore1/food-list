import {Link} from 'react-router-dom'

const Navbar = () => {
  return ( 
    <nav className="navbar">
      <h1>This is Dojo blog</h1>
      <div className="links">
        <Link to='/'>Home</Link>
        <Link to='/create'>New Blog</Link>
        {/* style={{color:"white",backgroundColor:"#f1356d",borderRadius:'8px'}} */}
      </div>
    </nav>
   );
}
 
export default Navbar;

