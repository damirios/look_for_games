"use client";

import { Search } from "@src/components/Search";
import { fetchData } from "@src/services";

import s from "./page.module.css";

export default function Home() {
  const search = "prey";

  const handleClick = async () => {
    const games = await fetchData("/games", "GET", { search });
    console.log("games", games);
  };

  return (
    <div className={s.wrapper}>
      <header className={s.header}>look for games</header>
      <main className={s.main}>
        <Search />
        <button onClick={handleClick}>Click</button>
      </main>
      <footer className={s.footer}>lookforgames | 2023</footer>
    </div>
  );
}
