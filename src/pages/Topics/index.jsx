import React from "react";
import { Route, Routes } from "react-router-dom";
import Topics from "../../components/Topics";
import Topic from "../../components/Topic";
import NotFoundPage from "../404";

function TopicsPage() {
  return (
    <Routes>
      <Route path="/" element={<Topics />} />
      <Route path="/:id" element={<Topic />} />
      <Route path="/:id/*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default TopicsPage;
