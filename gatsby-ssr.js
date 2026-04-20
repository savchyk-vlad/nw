const React = require("react");

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    React.createElement("meta", {
      key: "viewport",
      name: "viewport",
      content: "width=device-width, initial-scale=1, viewport-fit=cover",
    }),
    React.createElement("meta", {
      key: "theme-color",
      name: "theme-color",
      content: "#595f39",
    }),
    React.createElement("meta", {
      key: "apple-mobile-web-app-status-bar-style",
      name: "apple-mobile-web-app-status-bar-style",
      content: "default",
    }),
  ]);
};
