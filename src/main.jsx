import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import faviconImage from "./assets/images/favicon.png";
import "./index.css";
import App from "./App.jsx";

gsap.registerPlugin(ScrollTrigger);

const setFavicon = () => {
    let link = document.querySelector("link[rel='icon']");
    if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "icon");
        document.head.appendChild(link);
    }

    link.setAttribute("type", "image/png");
    link.setAttribute("href", faviconImage);
};

setFavicon();

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
);


