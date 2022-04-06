export function insertIntoStorage(data) {
  localStorage.setItem("token", data.token);
  localStorage.setItem("role", data.role);
  sessionStorage.setItem("token", data.token);
  sessionStorage.setItem("role", data.role);
  localStorage.setItem("userData", JSON.stringify(data.user));
  sessionStorage.setItem("userData", JSON.stringify(data.user));
}

export function checkStorage() {
  const sAccessToken = sessionStorage.getItem("token");
  const lAccessToken = localStorage.getItem("token");
  if (sAccessToken === null) {
    if (lAccessToken !== null) {
      // session Storage
      const lRole = localStorage.getItem("role");
      sessionStorage.setItem("token", lAccessToken);
      sessionStorage.setItem("role", lRole);
    }
  }
}

export function getUserData() {
  const sessionData = sessionStorage.getItem("userData");
  const localData = localStorage.getItem("userData");
  if (sessionData == null) {
    if (localData) {
      // session Storage
      sessionStorage.setItem("userData", localData);
      return JSON.parse(localData);
    }
  } else return JSON.parse(sessionData);
  return null;
}

export function clearStorage() {
  localStorage.clear();
  sessionStorage.clear();
}
