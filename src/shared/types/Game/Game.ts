import { INullable } from "../common";
import { IGenre } from "../Genre";
import { IAddedByStatus } from "./AddedByStatus";
import { IESRBRating } from "./ESRBRating";

export interface IGame {
  /** Суммарное число раз, когда игра отмечена в графе added_by_status */
  added: number;
  /** Информация об отметкаях игры */
  added_by_status: INullable<IAddedByStatus>;
  /** Ссылка на постер игры */
  background_image: string;
  /** TODO! */
  clip: INullable<any>;
  /** Основной цвет (видимо не особо важная штука) */
  dominant_color: string;
  /** ESRB рейтинг */
  esrb_rating: IESRBRating;
  /** Жанры данной игры */
  genres: IGenre;
  /** ID игры */
  id: number;
  /** Оценка на metacritic */
  metacritic: number;
  /** Название игры */
  name: string;
}
