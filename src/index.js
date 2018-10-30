import React from "react";
import { render } from "react-dom";
import Game from "./components/Game";
import "./styles.scss";

render(<Game size="9" />, document.getElementById("app"));
