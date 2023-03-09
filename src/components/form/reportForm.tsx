import React from "react";
import reportPostStyle from "../../styles/reportPost/reportPost.module.scss";

const ReportForm = () => {
  return (
    <div className={reportPostStyle.container}>
      <form>
        <div className={reportPostStyle.postList}>
          <label htmlFor="date">日付</label>
          <input type="date" id="date" />
        </div>
        <div className={reportPostStyle.postList}>
          <label htmlFor="memo">メモ</label>
          <input type="text" id="memo" />
        </div>
        <div className={reportPostStyle.postList}>
          <label htmlFor="expence">支出</label>
          <input type="text" id="expence" />
        </div>
      </form>
    </div>
  );
};

export default ReportForm;
