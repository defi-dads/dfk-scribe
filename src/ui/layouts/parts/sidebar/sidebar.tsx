import styled from 'styled-components';
import Link from 'next/link'

const StyledBar = styled.div`
.menu{
  background-image: linear-gradient($mainColor2, $mainColor3);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: center;
  flex: 0 0 150px;
  // height: 100vh;

  transition: all 1s ease;
  // overflow: hidden;
  // position: sticky;

  &.active{
      left: 0;
  }
  
  ul{
      font-family: 'Roboto', sans-serif;
      margin: 0;
      padding: 0;
      list-style: none;
      font-size: 20px;
      font-weight: 700;
      color: #fff;
      width: 60%;
      
      li{
          margin-bottom: 25px; 

          a{
              font-size: inherit;
              color: inherit;
              text-decoration: none;
          }

          &:hover{
              font-weight: 500;
          }
      }
  }
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
    {
      className: "sideBarMenuLis",
      href: "/test-page",
      text: "Editable Tables",
      key: "5"
    }
  ];

  return (
    <StyledBar className={"menu " + (isSidebarOpen && "active")}>
      <ul>
        {sideBarMenuLis.map((li) => {
          return (
            <li className={li.className}>
              <Link href={li.href}>{li.text}</Link>
            </li>
          );
        })}
      </ul>
    </StyledBar>
  );
};

export default SideBar;
