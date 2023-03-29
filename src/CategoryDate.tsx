import {
  ForkKnife,
  CoatHanger,
  TShirt,
  Scissors,
  Wine,
  Pill,
  PhoneCall,
  LightbulbFilament,
  Train,
  NotePencil,
  House,
  NavigationArrow,
} from "phosphor-react";

export const categoryDate = [
  {
    id: 1,
    name: `食　費`,
    icon: <ForkKnife color="#FF773E" />,
    categoryId: 7,
  },
  {
    id: 2,
    name: "日用品",
    icon: <CoatHanger color="#663399" />,
    categoryId: 3,
  },
  {
    id: 3,
    name: "衣　服",
    icon: <TShirt color="#5D99FF" />,
    categoryId: 4,
  },
  {
    id: 4,
    name: "美　容",
    icon: <Scissors color="#333333" />,
    categoryId: 1,
  },
  {
    id: 5,
    name: "交際費",
    icon: <Wine color="#FF5192" />,
    categoryId: 12,
  },
  {
    id: 6,
    name: "医療費",
    icon: <Pill color="#2E8B57" />,
    categoryId: 5,
  },
  {
    id: 7,
    name: "通信費",
    icon: <PhoneCall color="#87CEFA" />,
    categoryId: 11,
  },
  {
    id: 8,
    name: "光熱費",
    icon: <LightbulbFilament color="#FFCC99" />,
    categoryId: 2,
  },
  {
    id: 9,
    name: "交通費",
    icon: <Train color="#005500" />,
    categoryId: 8,
  },
  {
    id: 10,
    name: "教育費",
    image: `${process.env.PUBLIC_URL}/pencil.png`,
    icon: <NotePencil color="#FA8072" />,
    categoryId: 9,
  },
  {
    id: 11,
    name: "住居費",
    icon: <House color="#CD853F" />,
    categoryId: 10,
  },
  {
    id: 12,
    name: "その他",
    icon: <NavigationArrow color="#696969" />,
    categoryId: 6,
  },
];