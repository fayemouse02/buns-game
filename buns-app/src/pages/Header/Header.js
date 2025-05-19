import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Header() {
  return (
    <header>
    <div class="header-content">
         <img src="pixelbear.png" alt="Blog Icon" class="header-image" />
        <h1>The Beary Blog</h1>
     </div>
  
       
      <nav>
        <Link to="/">Home</Link> {/* Use Link for routing */}
        <Link to="/about">Build A Bear</Link> {/* Use Link for routing */}
        <Link to="/posts">Poetry</Link> {/* Use Link for routing */}
        <Link to="/recipies">Recipies</Link> {/* Use Link for routing */}
        <Link to="/letters">Letters</Link> {/* Use Link for routing */}
      </nav>
    </header>
  );
}

export default Header;
