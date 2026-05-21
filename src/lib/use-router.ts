import { createContext, useContext, useEffect, useState } from "react";

type RouterCtx = {
  path: string;
  navigate: (to: string) => void;
};

export const RouterContext = createContext<RouterCtx>({
  path: "/",
  navigate: () => {},
});

export function useRouterProvider(): RouterCtx {
  const [path, setPath] = useState(() => window.location.pathname);

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const navigate = (to: string) => {
    window.history.pushState(null, "", to);
    setPath(to);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  };

  return { path, navigate };
}

export function useRouter(): RouterCtx {
  return useContext(RouterContext);
}
