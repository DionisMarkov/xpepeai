import Link from "next/link";
import { Link as Scroll } from "react-scroll";
import { Socials } from "../components";
import { Divider, Logo } from "../components/";
import { motion } from "framer-motion";
import AlchemyLogo from "../components/AlchemyLogo";

const menuItems = [
  { icon: "", label: "BUIDL Plan", to: "section-roadmap", isExternal: false },
  { icon: "", label: "About", to: "section-fundamentals", isExternal: false },
  { icon: "", label: "FAQ", to: "section-faq", isExternal: false },
];

const secondaryLinks = [
  { label: "Docs", to: "https://xpepe-ai.gitbook.io/home/" },
  {
    label: "Terms Of Use",
    to: "terms-of-use",
  },
];



const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-wide-screen">
        <Logo path="/" />
        <div className="links">
          <nav className="navbar__nav">
            <ul className="navbar__list">
              {menuItems.map(({ icon, label, to, isExternal }, i) =>
                isExternal ? (
                  <li className="navbar__item" key={i}>
                    <Link href={to}>
                      <a
                        href="https://blog.kromatika.finance/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {icon}
                        {label}
                      </a>
                    </Link>
                  </li>
                ) : (
                  <li className="navbar__item" key={i}>
                    <Scroll
                      activeClass="active"
                      to={to}
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={50}
                    >
                      {icon}
                      {label}
                    </Scroll>
                  </li>
                )
              )}
            </ul>
          </nav>
          <Socials />
          <nav className="navbar__nav">
            <ul className="navbar__list">
              {secondaryLinks.map(({ label, to }, i) => (
                <li className="navbar__item" key={i}>
                  <Link href={to}>
                    <a href={to} target="_blank" rel="noopener noreferrer">
                      {label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <Divider type="horizontal" w="188px" />

        <div className="copyright">
          <h3>Copyright &copy; {currentYear} All rights reserved.</h3>
          <a href="mailto: contact@xpepeai.finance">
          contact@xpepeai.finance
          </a>
        </div>
      </div>
      <div className="footer-mobile-screen">
        <nav className="navbar__nav">
          <ul className="navbar__list">
            {menuItems.map(({ icon, label, to, isExternal }, i) =>
              isExternal ? (
                <li className="navbar__item" key={i}>
                  <Link href={to}>
                    <a
                      href="https://blog.kromatika.finance/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {icon}
                      {label}
                    </a>
                  </Link>
                </li>
              ) : (
                <li className="navbar__item" key={i}>
                  <Scroll
                    activeClass="active"
                    to={to}
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    {icon}
                    {label}
                  </Scroll>
                </li>
              )
            )}
            {secondaryLinks.map(({ label, to }, i) => (
              <li className="navbar__item" key={i}>
                <Link href={to}>
                  <a href={to} target="_blank" rel="noopener noreferrer">
                    {label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Logo path="/" />
        <Socials />
        <Divider type="horizontal" w="188px" />

        <div className="copyright">
          <h3>Copyright &copy; {currentYear} All rights reserved.</h3>
          <a href="mailto: contact@kromatika.finance">
            contact@xpepeai.finance
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
