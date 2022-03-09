import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import './Products.css';

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
    console.log(data);
   
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  }

  const ShowProducts = () => {

    

    return (
      <>
        <div className="  d-flex justify-content-center mb-5 pb-5 flex-wrap">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("women's clothing")}
          >
            Women's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("jewelery")}
          >
            Jewelery
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("electronics")}
          >
            Electronics
          </button>
        </div>
        {filter?.map((product) => {
          return (
            <>
              <div className="col-md-4 mb-4 ">
                <div
                  class="card h-100 text-center p-4"
                  key={product?.id}
                  style={{ width: "18rem" }}
                >
                  <img
                    height="250px"
                    src={product.image}
                    class="card-img-top"
                    alt={product?.title}
                  />
                  <div class="card-body">
                    <h5 class="card-title">
                      {product?.title.substring(0, 12)}
                    </h5>
                    <p class="card-text">${product?.price}</p>
                    <p class="card-text">Rating: {product?.rating.rate}</p>
                    {/* <p class="card-text">{product?.rating.count}</p> */}
                    <Link to={`/products/${product?.id}`} class="btn btn-outline-dark">
                      Buy now
                    </Link>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="fw-bolder text-center display-6">LATEST PRODUCTS</h1>
          </div>
          <hr />
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
