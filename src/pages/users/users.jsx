import { useEffect } from "react";
import { Spin, Typography } from "antd";
import * as selectors from "./selectors";
import * as actions from "./actions";
import withApis from "./withApis";

const { Text } = Typography;

const stateSelectors = {
  users:{
    otherStates: ["userUrl"],
    selectors: selectors.usersStateSelector},
};

const Users = ({
  // fetchUsers,
  localStateSelector,
  dispatch,
  loading,
}) => {
  const { users } = localStateSelector(stateSelectors);

  useEffect(() => {
    // fetchUsers();
    dispatch(actions.fetchUsersRequest({ userUrl: "users" }));
  }, []);


  return (
    <Spin spinning={loading}>
      {users?.map((item, index) => (
        <Text style={{ display: "block" }} key={item?.id}>
          {`${index} - ${item?.name}`}
        </Text>
      ))}
    </Spin>
  );
};

export default withApis(Users);
