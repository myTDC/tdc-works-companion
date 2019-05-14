import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./redux";

// if (process.env.NODE_ENV !== 'production') {
// 	console.log("Env: ", process.env.NODE_ENV);
// 	import('react-axe').then(axe => {
// 		var axe = require('react-axe');
//   	axe(React, ReactDOM, 1000);
//     // axe(React, ReactDOM, 1000)
//     ReactDOM.render(
// 			<Provider store={store}>
// 				<App />
// 			</Provider>,
// 			document.getElementById("root")
// 		);
//   });
// } else {
// 	// console.log("Env: ", process.env.NODE_ENV);
//   ReactDOM.render(
// 		<Provider store={store}>
// 			<App />
// 		</Provider>,
// 		document.getElementById("root")
// 	);
// }

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

// <Provider store={store}>
// <BrowserRouter>
//     <App />
// </BrowserRouter>
// </Provider>,
