import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants";
import Logo from "../Logo/Logo";

const links = [
  { name: "Accueil", link: "/" },
  { name: "Services", link: "/services" },
  { name: "Réalisations", link: "/réalisation" },
  { name: "L'agence", link: "/agency" },
  { name: "Blog", link: "/blog" },
  { name: "Contact", link: "/contanct" },
];

const Navigation = ({ sticky }) => {
  const [fixed, setFixed] = React.useState(false);
  const handleScroll = () => {
    if (window.scrollY > 563) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Wrapper>
      <Logo />
      <NavWrapper className={fixed ? "sticky" : ""}>
        <div className="nav_container">
          <nav className="navs">
            <div className="nav">
              <ul className="nav_links">
                {links.map((l, index) => (
                  <li key={index} className="nav_items">
                    <Link
                      to={l.link}
                      activeClassName="active"
                      className="nav_link"
                    >
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </NavWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const NavWrapper = styled.div`
  height: 100px;
  width: 100%;
  transition: all 0.3s ease-in-out;
  .nav_container {
    padding: 0 40px;
    height: 100%;
    .navs {
      height: 100%;
      display: flex;
      align-items: center;
      margin-bottom: 0;
      .nav {
        margin: 0 auto;
        height: 100%;
        display: flex;
        align-items: center;

        .nav_links {
          display: flex;
          align-items: center;
          margin: 0;
          padding: 0;
          list-style: none;
          height: 100%;
          .nav_items {
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            .nav_link {
              padding: 0 15px;
              position: relative;
              height: 100%;
              display: flex;
              align-items: center;
              text-decoration: none;
              color: ${COLORS.whiteChapelTrans};
              font-size: 18px;
            }
            .nav_link::before {
              content: "";
              display: block;
              position: absolute;
              background-color: ${COLORS.whiteChapelTrans};
              height: 1px;
              left: 15px;
              right: calc(102% - 15px);
              bottom: 30px;
              z-index: -1;
              transition: all 0.3s ease-in-out;
            }
            .nav_link:hover::before {
              background-color: ${COLORS.whiteChapel};
              height: 2px;
              right: 15px;
              z-index: 1;
            }
            .nav_link.active {
              color: ${COLORS.whiteChapel};
            }
            .nav_link.active::before {
              content: "";
              display: block;
              position: absolute;
              background-color: ${COLORS.whiteChapel};
              height: 2px;
              left: 15px;
              right: 15px;
              bottom: 30px;
              z-index: 1;
            }
          }
        }
      }
    }
  }
  &.sticky {
    position: fixed;
    top: 0px;

    z-index: 980;
    box-sizing: border-box;
    background-color: ${COLORS.whiteChapel};

    .nav_container .navs .nav .nav_links .nav_items .nav_link {
      color: ${COLORS.blackOlive};
    }
    .nav_container .navs .nav .nav_links .nav_items .nav_link:hover {
      color: ${COLORS.pinkPanther};
    }
    .nav_container .navs .nav .nav_links .nav_items .nav_link::before {
      color: ${COLORS.blackOlive};
      background-color: ${COLORS.pinkPanther};
    }
    .nav_container .navs .nav .nav_links .nav_items .nav_link.active {
      color: ${COLORS.pinkPanther};
    }
  }
`;

export default Navigation;
