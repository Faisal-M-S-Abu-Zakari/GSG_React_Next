/* eslint-disable @typescript-eslint/no-explicit-any */
// هان الشغل كله رياكت طبيعي و في الكلاينت سايد
"use client";
import React from "react";

import Categories from "@/components/categories/Categories";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      <h1>Categories Page</h1>
      <Categories />

      <ul>
        <li>
          <Link href="/news-list/sports/us">US Sports</Link>
        </li>
        <li>
          <Link href="/news-list/sports/gb">UK Sports</Link>
        </li>
        <li>
          <Link href="/news-list/politics/us">US Politics</Link>
        </li>
        <li>
          <Link href="/news-list/politics/gb">UK Politics</Link>
        </li>
        <li>
          <Link href="/news-list/business/us">US Business</Link>
        </li>
        <li>
          <Link href="/news-list/business/gb">UK Business</Link>
        </li>
      </ul>
    </div>
  );
};

export default Page;
