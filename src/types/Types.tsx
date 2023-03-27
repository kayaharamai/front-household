import { ReactNode } from "react";
import { store } from "..";

export type FormState = {
  authForm: {
    email: string;
    password: string;
    error: boolean;
    confirmPassword: string;
  };
};

export type PostState = {
  state: {
    authorId: number;
    category: { id: number; name: string };
    categoryId: number;
    content: string;
    createdAt: string;
    price: number;
    updatedAt: string;
  };
};

export type PostAll = {
  id: number;
  authorId: number;
  category: [];
  categoryId: number;
  content: string;
  createdAt: string;
  price: number;
  updatedAt: any;
};

export type categoryGroup = {
  categoryId: Number;
  subtotal: number;
  name: string;
};

export type CategoryData = {
  id: number;
  name: string;
  icon: ReactNode;
  categoryId: number;
};

export type RootState = ReturnType<typeof store.getState>;

export type ModalState = {
  editModalIsOpen: boolean;
  setEditModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onClick: () => void;
  children: string;
};
