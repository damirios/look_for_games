import { INullable } from "../common";

export interface IGamesList {
  /** Общее количество найденных игр */
  count: number;
  /** Ссылка на следующую страницу с играми */
  next: INullable<string>;
  /** Ссылка на предыдущую страницу с играми */
  previous: INullable<string>;
  /** TODO! */
  user_platforms: boolean;
  /** Список игр на данной странице */
  results: [];
}
