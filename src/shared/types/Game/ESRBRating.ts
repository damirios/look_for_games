import {
  LocalizedRatingNamesEnum,
  RatingNamesEnum,
  SlugRatingNamesEnum,
} from "./enums";

/** Рейтинг ESRB (Entertainment Software Rating Board) */
export interface IESRBRating {
  /** Уникальный идентификатор рейтинга */
  id: number;
  /** Название рейтинга */
  name: RatingNamesEnum;
  /** Название рейтинга на русском */
  name_ru: LocalizedRatingNamesEnum;
  /** Название рейтинга на английском (видимо то же, что и name) */
  name_en: RatingNamesEnum;
  /** TODO! Slug названий рейтинга */
  slug: SlugRatingNamesEnum;
}
