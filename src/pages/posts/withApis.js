import { useEffect, useContext } from "react";
import { localContext } from ".";
import * as actions from "./actions";
import useFetch from "../../hooks/useFetch";
import useApi from "../../hooks/useSwr";
import * as selectors from "./selectors";

const withApis = (WrappedComponent) => {
  const stateSelectors = {
    postUrl: { selector: selectors.postUrlStateSelector },
  };
  const WithApis = (props) => {
    const { localStateSelector, dispatch } = useContext(localContext);
    const { postUrl } = localStateSelector(stateSelectors);

    // let {
    //   loading,
    //   data,
    //   error,
    //   apiCallback: fetchPosts,
    // } = useFetch({
    //   url: "posts",
    //   callback: (event) => callback(event),
    // });

    var { loading, data: posts } = useApi({
      url: postUrl,
    });

    useEffect(() => {
      if (posts) {
        dispatch(actions.fetchPostsSuccess(posts));
      }
    }, [posts]);

    return (
      <WrappedComponent
        // fetchPosts={fetchPosts}
        localStateSelector={localStateSelector}
        dispatch={dispatch}
        loading={loading}
        {...props}
      />
    );
  };
  return WithApis;
};
export default withApis;
