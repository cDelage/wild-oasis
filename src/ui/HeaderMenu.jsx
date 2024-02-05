import styled from "styled-components";
import Logout from "../features/authentication/Logout";
import { HiOutlineUser } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import ButtonIcon from "./ButtonIcon";
import DarkModeToggle from "./DarkModeToggle";

const StyledHeaderMenyu = styled.ul`
display: flex;
`;

function HeaderMenu() {
  const navigate = useNavigate();
  return (
    <StyledHeaderMenyu>
      <li>
        <ButtonIcon onClick={() => navigate("/account")}>
          <HiOutlineUser />
        </ButtonIcon>
      </li>
      <li>
        <DarkModeToggle/>
      </li>
      <li>
        <Logout/>
      </li>
    </StyledHeaderMenyu>
  );
}

export default HeaderMenu;
