import { Navigate, Route, Routes } from "react-router-dom";
import Menu from "../../components/Menu";
import HomePage from "../../pages/HomePage";
import MastersPage from "../../pages/MastersPage";
import ProcessesPage from "../../pages/ProcessesPage";
import ReportsPage from "../../pages/ReportsPage";
import Content from "../Layouts/Content";

import styles from "./Layouts.module.scss";

const Body = () => {
  return (
    <div className={styles.body}>
      <Menu />
      <Content>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="*" element={<HomePage />}></Route>
          <Route path="/mastersPage" element={<MastersPage />}></Route>
          <Route path="/processesPage" element={<ProcessesPage />}></Route>
          <Route path="/reportsPage" element={<ReportsPage />}></Route>
        </Routes>
      </Content>
    </div>
  );
};

export default Body;
