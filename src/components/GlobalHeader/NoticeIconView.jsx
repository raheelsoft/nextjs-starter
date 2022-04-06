import React, { useEffect } from "react";
import NoticeIcon from "../NoticeIcon";
import classes from "./index.module.less";

const GlobalHeaderRight = ({
  loading = false,
  notifications = null,
  currentUser = null,
  dispatch,
  totalNotifications = 0,
  totalUnseenNotifications = 0,
}) => {
  useEffect(() => {
    // if (dispatch) {
    //   dispatch({
    //     type: `${GLOBAL_NAME_SPACE}/fetchNotifications`,
    //     payload: { take: 20, skip: 0, isScroll: false },
    //   });
    // }
  }, []);

  notifications = notifications?.map((item) => {
    return { ...item, title: item?.body };
  });

  return (
    <NoticeIcon
      className={classes.action}
      totalNotifications={totalNotifications}
      count={totalUnseenNotifications}
      onItemClick={(item) => {
        dispatch({
          type: `${GLOBAL_NAME_SPACE}/clearNotificationById`,
          payload: {
            id: item?.id,
            route: item?.route,
            userRole: currentUser?.role,
          },
        });
      }}
      loading={loading}
    >
      <NoticeIcon.Tab
        tabKey="notification"
        list={notifications}
        title="Notifications"
        emptyText="No notification available"
        showClear={false}
      />
    </NoticeIcon>
  );
};

export default GlobalHeaderRight;
