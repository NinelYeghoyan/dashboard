import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store } from "@app/store";
import { ROUTER_URL } from "@config/index";

import App from "./App";

import "@i18n/config";

const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);

root.render(
    <Provider store={store}>
        <BrowserRouter basename={ROUTER_URL}>
            <App />
        </BrowserRouter>
    </Provider>,
);
