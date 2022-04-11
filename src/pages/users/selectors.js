export const usersStateSelector = ({ users, userUrl }) => {
  console.log(userUrl);
  return users;
};

export const userUrlStateSelector = ({ userUrl }) => userUrl;
