import React from "react";
import Link from "next/link";

// pages/404.js
const Custom404 = () => {
  return (
    <div className="w-full flex items-center justify-center" style={{ width: "100%", minHeight: "100vh" }}>
      <div>
        <h1>404 - Page Not Found</h1>
        <Link href="/">
          <a>Go back home</a>
        </Link>
      </div>
    </div>
  );
};

export default Custom404;
