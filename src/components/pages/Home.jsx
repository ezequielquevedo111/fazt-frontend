/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { DataGlobalContext } from "../../context/GlobalContext.jsx";

const Home = () => {
  // const [products, setProducts] = useState([]);
  const { products, setProducts } = useContext(DataGlobalContext);
  const [prev, setPrev] = useState(null);
  const [next, setNext] = useState(null);
  useEffect(() => {
    axios("http://localhost:8080/api/products")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data.docs);
        setPrev(res.data.prevPage);
        setNext(res.data.nextPage);
      })

      .catch((error) => console.log(error));
  }, []);

  const handlePrevPage = () => {
    if (prev) {
      axios(`http://localhost:8080/api/products?page=${prev}`)
        .then((res) => {
          setProducts(res.data.docs);
          setPrev(res.data.prevPage);
          setNext(res.data.nextPage);
        })
        .catch((error) => console.log(error));
    }
  };

  const handleNextPage = () => {
    if (next) {
      axios(`http://localhost:8080/api/products?page=${next}`)
        .then((res) => {
          setProducts(res.data.docs);
          setPrev(res.data.prevPage);
          setNext(res.data.nextPage);
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <main>
      <section
        id="hero"
        className="h-screen flex items-center justify-center bg-[#eeeeed]"
      >
        <div className="text-center">
          <h1 className="font-black text-4xl md:text-6xl lg:text-7xl text-[#303a3d]">
            Get the most cheap components in the market
          </h1>
          <h4 className="font-medium text-lg lg:text-xl text-[#303a3d] mt-6">
            Filter and search according to your preferences, from computer
            components to consoles.
          </h4>
          <a
            href="#cards"
            className="mt-8 inline-block px-6 py-3 font-medium bg-[#1c76fb] text-[#eeeeed] rounded hover:bg-[#303a3d] transition-all	 duration-300 ease-in-out "
            style={{ scrollBehavior: "#cards" }}
          >
            GET NOW
          </a>
        </div>
      </section>
      <section className="min-h-[300px] w-full bg-[#303a3d] text-[#eeeeed] flex flex-col items-center justify-center">
        <p className="text-center font-light text-3xl text-[#1c76fb] pb-5">
          About us
        </p>
        <h3 className="font-light text-3xl text-center px-10">
          This is the place where you can find microprocessors, CPUs,
          motherboards, graphics cards, and consoles at the best prices on the
          market.
        </h3>
      </section>

      <section className="min-h-[1300px] bg-[#eeeeed]" id="cards">
        <div className="">
          <h3 className="text-center font-black text-5xl text-[#303a3d] pt-20">
            Explore ours options!
          </h3>
        </div>

        <div className="pt-28 w-full  flex flex-col items-center bg-[#eeeeed]">
          <div className="w-1/2 flex flex-wrap justify-center gap-10">
            {products.map((product) => {
              return (
                <div className="flex max-w-56" key={product._id}>
                  <a href="#" className="text-decoration-none">
                    <div className="relative overflow-visible group ">
                      <img
                        src={product.photo}
                        className="card-img-left w-auto h-[250px] object-contain transition-all duration-300 ease-in-out"
                        alt="..."
                      />
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full opacity-0 group-hover:opacity-100">
                        <div className="text-[#eeeeed] font-semibold text-lg bg-[#303a3d] py-2 px-4 text-center">
                          VIEW DETAIL
                        </div>
                      </div>
                    </div>
                    <div className="  sm:flex sm:flex-col sm:justify-around sm:items-start gap-1 bg-[#eeeeed]">
                      <h5 className="card-title font-black text-xs sm:text-base text-[#303a3d] ">
                        {product.title}
                      </h5>
                      <p className="card-text font-black text-xs sm:text-sm text-[#303a3d]">
                        {product.price}
                      </p>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>

          <div className="d-flex w-100 min-h-[250px] justify-content-center pt-20">
            <nav aria-label="Page navigation example">
              <ul className="pagination flex justify-center gap-36">
                {prev && (
                  <li className="page-item">
                    <button className="page-link" onClick={handlePrevPage}>
                      <span className="fw-bold pag" aria-hidden="true">
                        Previous
                      </span>
                    </button>
                  </li>
                )}
                {next && (
                  <li className="page-item">
                    <button className="page-link" onClick={handleNextPage}>
                      <span className="fw-bold" aria-hidden="true">
                        Next
                      </span>
                    </button>
                  </li>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
