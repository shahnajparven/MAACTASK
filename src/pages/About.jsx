import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/products/productsSlice";

const About = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.products);

console.log(data)

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return <div>About</div>;
};

export default About;
