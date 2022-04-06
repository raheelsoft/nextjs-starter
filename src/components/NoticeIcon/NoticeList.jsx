import { Avatar, List, Badge, Skeleton } from "antd";
import React from "react";
import classNames from "classnames";
import classes from "./NoticeList.module.less";
import noNotification from "../../../public/noNotification.svg";
// import InfiniteScroll from "react-infinite-scroller";

const NoticeList = ({
  data = [],
  onClick,
  onClear,
  title,
  onViewMore,
  emptyText,
  showClear = true,
  clearText,
  viewMoreText,
  showViewMore = false,
  currentUser,
  notifications,
  totalNotifications,
  loading,
  dispatch,
}) => {
  if (!data || data.length === 0) {
    return (
      <div className={classes.notFound}>
        <img src={noNotification} alt="not found" />
        <div>{emptyText}</div>
      </div>
    );
  }

  const loadMoreData = (page) => {
    dispatch({
      type: `${GLOBAL_NAME_SPACE}/fetchNotifications`,
      payload: { take: 20, skip: page * 20, isScroll: true },
    });
  };

  return (
    <div style={{ height: "400px", overflow: "auto" }}>
      {/* <InfiniteScroll
        initialLoad={false}
        loadMore={loadMoreData}
        hasMore={totalNotifications > notifications?.length}
        useWindow={false}
        loader={
          loading ? (
            <div style={{ marginLeft: 10 }}>
              <Skeleton avatar paragraph={{ rows: 1 }} active />
            </div>
          ) : null
        }
      > */}
      <List
        className={classes.list}
        dataSource={data}
        renderItem={(item, i) => {
          const itemCls = classNames(classes.item, {
            [read]: item.read,
          }); // eslint-disable-next-line no-nested-ternary

          const leftIcon = item.avatar ? (
            typeof item.avatar === "string" ? (
              <Avatar className={classes.avatar} src={item.avatar} />
            ) : (
              <span className={classes.iconElement}>{item.avatar}</span>
            )
          ) : null;
          return (
            <List.Item
              className={classes.itemCls}
              key={item.key || i}
              onClick={() => {
                onClick?.(item);
              }}
            >
              <List.Item.Meta
                className={classes.meta}
                avatar={leftIcon}
                title={
                  <div className={classes.title}>
                    {!item[`${currentUser?.role}_seen`] ? (
                      <Badge text={item.title} color={"geekblue"} />
                    ) : (
                      item.title
                    )}
                    <div className={classes.extra}>{item.extra}</div>
                  </div>
                }
                description={
                  <div>
                    <div className={classes.description}>
                      {item.description}
                    </div>
                    <div className={classes.datetime}>{item.datetime}</div>
                  </div>
                }
              />
            </List.Item>
          );
        }}
      />
      {(showClear || showViewMore) && (
        <div className={classes.bottomBar}>
          {showClear ? (
            <div onClick={onClear}>
              {clearText} {title}
            </div>
          ) : null}
          {showViewMore ? (
            <div
              onClick={(e) => {
                if (onViewMore) {
                  onViewMore(e);
                }
              }}
            >
              {viewMoreText}
            </div>
          ) : null}
        </div>
      )}
      {/* </InfiniteScroll> */}
    </div>
  );
};

export default NoticeList;
