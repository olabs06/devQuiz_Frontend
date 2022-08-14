import { useNavigate } from "react-router-dom";

function NavBar({ onLogout }) {
  const navigate = useNavigate();

  function handleClick() {
    // logout the user
    onLogout();
    // then navigate them to the login page
    navigate.push("/login");
  }

  return (
    <nav>
      <button onClick={handleClick}>Logout</button>
    </nav>
  );
}



export default NavBar;