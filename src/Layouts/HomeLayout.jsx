import React from "react";
import Header from "../Components/Header/Header";
import { Outlet } from "react-router";
import LatestNews from "../Components/LatestNews/LatestNews";
import Navbar from "../Components/Navbar/Navbar";
import LeftAside from "../Components/HomeDesign/LeftAside";
import RightAside from "../Components/HomeDesign/RightAside";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section className="max-w-[1440px] mx-auto">
          <LatestNews></LatestNews>
        </section>
        <section className="max-w-[1440px] mx-auto">
          <Navbar></Navbar>
        </section>
      </header>
      <main className="max-w-[1440px] mx-auto my-4 grid grid-cols-12 gap-4">
        <aside className="col-span-3">
          <LeftAside></LeftAside>
        </aside>
        <section className="main col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
