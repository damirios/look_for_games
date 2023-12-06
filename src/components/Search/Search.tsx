"use client";

import { clsx } from "clsx";
import React, { useState } from "react";

import s from "./search.module.scss";

export const Search = () => {
  const [text, setText] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const searchClassName = clsx("input", s.search__box);
  return (
    <div className={searchClassName}>
      <input
        placeholder="Prey (2017)"
        type="text"
        className={s.search__input}
        value={text}
        onChange={handleChange}
      />
    </div>
  );
};
