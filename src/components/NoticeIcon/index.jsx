import React, { useState } from "react";
import classNames from "classnames";
import { Badge, Spin, Tabs } from "antd";
import { BellOutlined } from "@ant-design/icons";
// import useMergedState from "rc-util/es/hooks/useMergedState";
import bellIcon from "../../../public/bellIcon.svg";
import NoticeList from "./NoticeList";
import HeaderDropdown from "../HeaderDropdown";
import classes from "./index.module.less";

const { TabPane } = Tabs;

const NoticeIcon = (props) => {
  const getNotificationBox = () => {
    const {
      children,
      loading,
      onClear,
      onTabChange,
      onItemClick,
      onViewMore,
      clearText,
      viewMoreText,
      totalNotifications,
    } = props;

    if (!children) {
      return null;
    }

    const panes = [];
    React.Children.forEach(children, (child) => {
      if (!child) {
        return;
      }

      const { list, title, tabKey, showClear, showViewMore } = child.props;
      const tabTitle = `${title} (${totalNotifications})`;
      panes.push(
        <TabPane tab={tabTitle} key={tabKey}>
          <NoticeList
            {...child.props}
            clearText={clearText}
            viewMoreText={viewMoreText}
            data={list}
            loading={loading}
            onClear={() => {
              onClear?.(title, tabKey);
            }}
            onClick={(item) => {
              onItemClick?.(item, child.props);
            }}
            onViewMore={(event) => {
              onViewMore?.(child.props, event);
            }}
            showClear={showClear}
            showViewMore={showViewMore}
            title={title}
          />
        </TabPane>
      );
    });
    return (
      <Spin spinning={loading} delay={300}>
        <Tabs className={classes.tabs} onChange={onTabChange}>
          {panes}
        </Tabs>
      </Spin>
    );
  };

  const { className, count, bellIcon } = props;
  const [visible, setVisible] = useState(false);
  //  useMergedState(false, {
  //   value: props.popupVisible,
  //   onChange: props.onPopupVisibleChange,
  // });
  const noticeButtonClass = classNames(className, classes.noticeButton);
  const notificationBox = getNotificationBox();
  const NoticeBellIcon = bellIcon || (
    <BellOutlined
      style={{
        padding: "4px",
        color: "white",
        verticalAlign: "middle",
        cursor: "pointer",
        transition: " all 0.3s",
      }}
    />
  );
  const trigger = (
    <span
      className={classNames(noticeButtonClass, {
        opened: visible,
      })}
    >
      <Badge
        count={count}
        style={{
          boxShadow: "none",
        }}
        className={classes.badge}
      >
        {NoticeBellIcon}
      </Badge>
    </span>
  );

  if (!notificationBox) {
    return trigger;
  }

  return (
    <HeaderDropdown
      placement="bottomRight"
      overlay={notificationBox}
      overlayClassName={classes.popover}
      trigger={["click"]}
      visible={visible}
      onVisibleChange={setVisible}
    >
      {trigger}
    </HeaderDropdown>
  );
};

NoticeIcon.defaultProps = {
  emptyImage: bellIcon,
};
NoticeIcon.Tab = NoticeList;
export default NoticeIcon;
