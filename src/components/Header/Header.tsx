import React, { FC, useCallback, useState } from "react";
import { SmallLogo } from "../Logo/LogoStyle";
import SearchElement from "../Search/SearchElement";
import {
  HeaderStyle,
  IconsContainer,
  LogoContainer,
  SearchContainer,
  UserStyle,
} from "./HeaderStyle";
import Notifications from "../../assets/notifications.svg";
import Settings from "../../assets/settings.svg";
import Search from "../../assets/search.svg";
import { useAuth0 } from "@auth0/auth0-react";
import {
  DropdownContainer,
  DropdownItem,
  DropdownListContainer,
  DropdownListLogout,
} from "../Dropdown/DropdownStyle";
import { SmallSearchIcon } from "../Button/ButtonStyle";
import SmallSearch from "../Search/SmallSearch";

const HeaderElement: FC = () => {
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const [isSmallSearchClicked, setIsSmallSearch] = useState(false);
  const { logout } = useAuth0();
  const { user } = useAuth0();
  const toggling = useCallback(() => {
    setIsLogoutOpen((prevIsOpen) => !prevIsOpen);
  }, []);
  const handleSmallSrean = () => {
    setIsSmallSearch((prev) => !prev);
  };

  return (
    <>
      {isSmallSearchClicked && <SmallSearch onBackClick={handleSmallSrean} />}
      {!isSmallSearchClicked && (
        <HeaderStyle>
          <LogoContainer>
            <SmallLogo />
          </LogoContainer>
          <SearchContainer>
            <SearchElement />
          </SearchContainer>
          <DropdownContainer>
            <IconsContainer>
              <SmallSearchIcon
                onClick={handleSmallSrean}
                src={Search}
                alt="serch elememt"
              />
              <img src={Settings} alt="serch elememt"></img>
              <img src={Notifications} alt="serch elememt"></img>
              <UserStyle onClick={toggling}>
                {user &&
                  String(user.name).charAt(0).toUpperCase() +
                    "" +
                    String(user.family_name).charAt(0).toUpperCase()}
              </UserStyle>
            </IconsContainer>
            {isLogoutOpen && (
              <DropdownListContainer>
                <DropdownListLogout>
                  <DropdownItem
                    onClick={() =>
                      logout({
                        returnTo: window.location.origin,
                      })
                    }
                  >
                    Logout
                  </DropdownItem>
                </DropdownListLogout>
              </DropdownListContainer>
            )}
          </DropdownContainer>
        </HeaderStyle>
      )}
    </>
  );
};
export default HeaderElement;
