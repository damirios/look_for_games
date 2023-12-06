import { GenreNamesEnum, SlugGenreNamesEnum } from "./enums";

/** Жанр игры */
export interface IGenre {
  /** Id жанра */
  id: number;
  /** Название жанра */
  name: GenreNamesEnum;
  /** TODO! Slug названия жанра */
  slug: SlugGenreNamesEnum;
}
