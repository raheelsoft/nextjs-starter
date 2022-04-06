import { useEffect } from "react";
import { Spin, Typography } from "antd";
import * as selectors from "./selectors";
import * as actions from "./actions";
import withApis from "./withApis";

const { Text } = Typography;

const stateSelectors = {
  posts: selectors.postsStateSelector,
};

const Posts = ({
  // fetchPosts,
  localStateSelector,
  dispatch,
  loading,
}) => {
  const { posts } = localStateSelector(stateSelectors);

  useEffect(() => {
    // fetchPosts();
    dispatch(actions.fetchPostsRequest({ postUrl: "posts" }));
  }, []);

  return (
    <Spin spinning={loading}>
      {posts?.map((item, index) => (
        <Text style={{ display: "block" }} key={item?.id}>
          {`${index} - ${item?.title}`}
        </Text>
      ))}
    </Spin>
  );
};

export default withApis(Posts);
