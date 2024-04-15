import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { DataGlobalContext } from "../../context/GlobalContext.jsx";
import { Link } from "react-router-dom";

const Orders = () => {
  const { dataUser } = useContext(DataGlobalContext);
  const [orderData, setOrderData] = useState([]);

  // console.log(orderData);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/orders/${dataUser}?state=asc`
        );
        if (response.data.statusCode === 404) {
          setOrderData(response.data.statusCode);
        } else {
          setOrderData(response.data.docs);
        }
        // console.log(response.data);
      } catch (error) {
        setOrderData(response.data.statusCode);
        console.error("Error fetching orders:", error);
      }
    };

    if (dataUser) {
      fetchOrders();
    }
  }, [dataUser]);

  const handlerDeleteOrder = async (orderId) => {
    try {
      await axios.delete(`http://localhost:8080/api/orders/${orderId}`);
      const updatedOrders = orderData.filter((order) => order._id !== orderId);
      setOrderData(updatedOrders);
      alert("Order deleted!");
    } catch (error) {
      console.error("Error deleting order: ", error);
    }
  };
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-[#eeeeed]">
      <div className="h-14 flex">
        <h2 className="font-black text-4xl md:text-6xl lg:text-5xl text-[#303a3d]">
          MY ORDERS
        </h2>
      </div>
      {(orderData === 404 || orderData.length === 0) && (
        <section className="h-100 d-flex align-items-center justify-content-center">
          <div className="flex flex-col justify-center items-center text-center gap-10">
            <h3
              className="text-center text-3xl pt-10"
              //   style="padding-bottom: 20px;"
            >
              You haven't placed any orders yet. Go to the home page to start
              your purchase.
            </h3>
            <Link
              className="w-24 h-10 pt-2 text-center font-medium bg-[#1c76fb] text-[#eeeeed] rounded hover:bg-[#303a3d] transition-all duration-300 ease-in-out"
              //   style="color: #e7e4d7;"
              to="/"
            >
              Purchase
            </Link>
          </div>
        </section>
      )}
      {orderData.length > 0 && orderData && (
        <section className="w-full flex justify-center items-center ">
          <div className="w-1/2 bg-[#303a3d] text-[#eeeeed] rounded-md p-5">
            {orderData.map((order) => (
              <div key={order._id} className="card shadow-0 border mb-4 p-5">
                <div className="card-body flex">
                  <div className="w-1/3">
                    <img
                      src={order.productId.photo}
                      className="w-full h-[100px] object-contain"
                      alt="Product"
                    />
                    <a href="#!">
                      <div className="hover-overlay">
                        <div className="mask"></div>
                      </div>
                    </a>
                  </div>
                  <div className="w-1/3 flex flex-col justify-center">
                    <h5 className="text-center">{order.productId.title}</h5>
                    <div className="flex justify-center items-center mt-2">
                      <h4 className="mb-0 me-1">
                        PRICE: ${order.productId.price}
                      </h4>
                    </div>
                  </div>
                  <div className="w-1/3 flex flex-col justify-center">
                    <button
                      className="bg-red-600 w-100 m-5 rounded hover:bg-red-700 transition-all duration-300 ease-in-out"
                      type="button"
                      onClick={() => handlerDeleteOrder(order._id)}
                    >
                      Delete order
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
};

export default Orders;
