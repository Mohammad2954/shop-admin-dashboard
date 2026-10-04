import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { useNavigate } from "react-router";
import Summery from "../../components/Summery/Summery";

function Home() {
  const isRedirect = useNavigate();
  const CalBtn = () => {
    isRedirect("/products");
  };
  return (
    <div className="px-8">
      <SectionTitle CalBtn={CalBtn} title={"داشبورد"} Buttons={"ایجاد محصول"} />
      <Summery />
    </div>
  );
}

export default Home;
