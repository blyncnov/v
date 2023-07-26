export const UserInfo = () =>
  useState("user-info", () => {
    return {
      firstName: "Olarewaju",
      lastName: "Mumu",
    };
  });
