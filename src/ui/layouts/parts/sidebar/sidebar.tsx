import styled from 'styled-components';
import Link from 'next/link'
import React from 'react';

const StyledBar = styled.div`
  background-image: linear-gradient(
    20deg,
    ${props => props.theme.colors.mainColor2}, 
    ${props => props.theme.colors.mainColor3}
  );
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 0 0 150px;

  transition: all 1s ease;

  &.active{
      left: 0;
  }
}
`

const StyledUL = styled.ul`
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  width: 60%;
`

const StyledLI = styled.li`
  margin-bottom: 25px;
  a {
    font-size: inherit;
    color: inherit;
  }
`

const SideBar = ({ isSidebarOpen, setSidebarOpen }) => {
  const sideBarMenuLis = [
    {
      className: "sideBarMenuLis",
      href: "/",
      text: "Dashboard",
      key: "0"
    },
    {
      className: "sideBarMenuLis",
      href: "/payments",
      text: "Payments",
      key: "2"
    },
    {
      className: "sideBarMenuLis",
      href: "/store-settings",
      text: "Store Settings",
      key: "3"
    },
    // {
    //   className: "sideBarMenuLis",
    //   href: "/test-page",
    //   text: "Editable Tables",
    //   key: "5"
    // }
  ];

  return (
    <StyledBar className={"menu " + (isSidebarOpen && "active")}>
      <StyledUL>
        {sideBarMenuLis.map((li) => {
          return (
            <StyledLI className={li.className}>
              <Link href={li.href}>{li.text}</Link>
            </StyledLI>
          );
        })}
      </StyledUL>
    </StyledBar>
  );
};

export default SideBar;
