import { useLocation } from "@reach/router";

export default () => {
  const location = useLocation();
  return location.pathname.split("/").splice(2).join("/") || "";
};
