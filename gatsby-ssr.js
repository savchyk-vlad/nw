const React = require("react");

exports.onRenderBody = ({ setHeadComponents, setHtmlAttributes }) => {
  setHtmlAttributes({
    lang: "en",
  });

  setHeadComponents([
    React.createElement("meta", {
      key: "viewport",
      name: "viewport",
      content: "width=device-width, initial-scale=1, viewport-fit=cover",
    }),
    React.createElement("meta", {
      key: "theme-color",
      name: "theme-color",
      content: "transparent",
    }),
    React.createElement("meta", {
      key: "apple-mobile-web-app-capable",
      name: "apple-mobile-web-app-capable",
      content: "yes",
    }),
    React.createElement("meta", {
      key: "apple-mobile-web-app-status-bar-style",
      name: "apple-mobile-web-app-status-bar-style",
      content: "black-translucent",
    }),
  ]);
};
