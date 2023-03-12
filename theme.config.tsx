import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>お嬢様 AI による ramda.js 日本語不完全解説 </span>,
  project: {
    link: "https://github.com/araera111/ramda-js-japnaese-complete-guide",
  },
  docsRepositoryBase:
    "https://github.com/araera111/ramda-js-japnaese-complete-guide",
  footer: {
    text: "ramda.js 日本語完全解説",
  },
  head: (
    <>
      <title>お嬢様 AI による ramda.js 日本語不完全解説</title>
    </>
  ),
};

export default config;
