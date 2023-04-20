import { useEffect, useState } from "react";

const UseFetch = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    fetch("https://budget-app-7fed1-default-rtdb.firebaseio.com/").then();
  });
};

export default UseFetch;

useEffect(() => {});
