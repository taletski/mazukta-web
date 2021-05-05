import { CardCategory } from "../../services/CreatorService/CreatorService.type";

export interface ICardPresenterProps {
  cardCategory: CardCategory;
  avatarContent: string;
  header: string;
  message: string;
}
