import {
  CardCategory,
  TCellCategory,
  TOccasionCategory,
} from "../../services/CreatorService/CreatorService.type";

export interface IAvatarPresenterProps {
  category: CardCategory;
  content?: string;
}
