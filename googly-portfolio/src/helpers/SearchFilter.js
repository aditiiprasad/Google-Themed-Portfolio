import { Content } from "../data/Content";

export const SearchFilter = (category)=> Content.filter((item) => item.category === category); 