import React from "react";
import SideBar from "./SideBar";
import { SLayout, SMain } from "./styles";

const Layout = ({ children }) => {
    return (
        <SLayout>
            <SideBar />
            <SMain>{children}</SMain>
        </SLayout>
    );
};

export default Layout;