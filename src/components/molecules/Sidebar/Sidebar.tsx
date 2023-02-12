import React from "react";
import ListItem from "src/components/atoms/ListItem/ListItem";
import Logo from "src/components/atoms/Logo/Logo";

const Sidebar = () => {
  return (
    <aside className="sidebar flex flex-col h-[100%] fixed w-[248px] translate-x-[-248px] md:translate-x-[0] bg-white py-[30px] px-6 pr-[50px]">
      <Logo />
      <div className="list-items flex flex-col flex-1 justify-between">
        <ul className="top-list">
          <ListItem text="dashboard" icon="dashboard" />
          <ListItem text="cars" icon="car" />
        </ul>
        <ul className="bottom-list bottom-0">
          <ListItem text="settings" icon="settings" />
          <ListItem text="log out" icon="sign-out" />
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
