import { useEffect, useContext } from "react";
import { localContext } from ".";
import * as actions from "./actions";
import useFetch from "../../hooks/useFetch";
import useApi from "../../hooks/useSwr";
import * as selectors from "./selectors";

const withApis = (WrappedComponent) => {
  const stateSelectors = {
    userUrl: selectors.userUrlStateSelector,
  };
  const WithApis = (props) => {
    const { localStateSelector, dispatch } = useContext(localContext);
    const { userUrl } = localStateSelector(stateSelectors);

    // let {
    //   loading,
    //   data,
    //   error,
    //   apiCallback: fetchUsers,
    // } = useFetch({
    //   url: "users",
    //   callback: (event) => callback(event),
    // });

    var { loading, data: users } = useApi({
      url: userUrl,
    });

    useEffect(() => {
      if (users) {
        dispatch(actions.fetchPostsSuccess(posts));
      }
    }, [users]);

    return (
      <WrappedComponent
        // fetchUsers={fetchPosts}
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
