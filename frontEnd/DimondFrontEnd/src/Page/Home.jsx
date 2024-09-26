import React, { useEffect, useState } from "react";
import HeroSection from "../component/home/HeroSection";
// import FeatureProducts from "../component/home/FeatureProducts";
import axios from "axios";
// import CompanyFeatures from "../component/home/CompanyFeatures";
import LatestProducts from "../component/home/LatestProducts";
import { useLocation } from "react-router-dom";

export default function Home() {
  const userSession = sessionStorage.signInUser;
  const [featureProducts, setFeaturedProducts] = useState([]);
  const [latestProducts, setLatestProducts] = useState([]);
  const location = useLocation();

  const fetchFeaturedProductList = async () => {
    await axios
      .get("http://localhost:3000/product/featured")
      .then((res) => {
        setFeaturedProducts(res.data);
      })
      .then((err) => console.log(err));
  };

  const fetchLatestProductList = async () => {
    await axios
      .get("http://localhost:3000/product/latest")
      .then((res) => {
        setLatestProducts(res.data);
      })
      .then((err) => console.log(err));
  };

  useEffect(() => {
    fetchFeaturedProductList();
    fetchLatestProductList();
  }, []);

  return (
    <div className="w-full flex flex-col">
      <HeroSection />
      {/* <FeatureProducts list={featureProducts} /> */}
      <LatestProducts list={latestProducts} />
    </div>
  );
}