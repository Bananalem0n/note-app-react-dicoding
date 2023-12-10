import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/style.css";
import CardList from "./components/cardList";

const root = createRoot(document.getElementById("root"));
root.render(<CardList />);
