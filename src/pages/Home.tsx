import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Category from "../components/Category";
import HomeStyle from "../styles/pages/Home.module.scss";
import ReportForm from "../components/form/reportForm";
import PrimaryButton from "../components/button/PrimaryButton";
import DefaultLayout from "../components/layout/defaultLayout";
import axios from "axios";
import Cookies from "js-cookie";
import toastItem from "../components/modal/Toast";

const Home = () => {
  const reportDate = useSelector((state: any) => state.posts.date);
  const reportPrice = useSelector((state: any) => state.posts.expence);
  const reportMemo = useSelector((state: any) => state.posts.memo);
  const reportCategory = useSelector((state: any) => state.posts.category);

  const userId = Cookies.get("id");

  const reportDateTime = new Date(reportDate);
  const updateDate = new Date();

  const inputFormRef = useRef<any>(null);
  const categoryRef = useRef<any>(null);

  const { successMsg } = toastItem();

  const clickPost = async () => {
    const newPost = {
      content: reportMemo,
      authorId: userId,
      categoryId: reportCategory,
      createdAt: reportDateTime,
      updatedAt: updateDate,
      price: reportPrice,
    };
    await axios.post("/post", newPost);
    successMsg("レポートを登録しました");
    if (inputFormRef.current !== null || categoryRef.current !== null) {
      inputFormRef.current.clearForm();
      categoryRef.current.clearCategory();
    }
  };

  return (
    <DefaultLayout>
      <div>
        <div className={HomeStyle.reportMain}>
          <ReportForm ref={inputFormRef} />
          <Category ref={categoryRef} />
          <PrimaryButton children="支出を入力する" onClick={clickPost} />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Home;
