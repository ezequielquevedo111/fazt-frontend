const Footer = () => {
  return (
    <footer
      className="flex justify-around w-full items-center px-5 font-black text-xs bg-[#1c76fb] h-28"
      // className="d-flex flex-row justify-content-evenly align-items-center pt-5 container-fluid"
      // style="height: 10rem;"
    >
      <p className=" bg-[#1c76fb] text-base w-100">
        Connect with us for the latest updates and exclusive offers.
        <br />
        Follow our journey and stay inspired.
      </p>
      <a
        className=" bg-[#1c76fb] text-base  w-100"
        href="https://github.com/ezequielquevedo111"
        // target="_blank"
        // className="fw-bold text-decoration-none"
        // style="color: #ffc850"
      >
        From Córdoba Argentina <br /> By Ezequiel Quevedo
      </a>

      {/* style="color: #e7e4d7" */}
      <p className=" bg-[#1c76fb]  text-base w-100">
        © 2024 YOUR COMPANY.
        <br />
        ALL RIGHTS RESERVED.
      </p>
    </footer>
  );
};

export default Footer;
