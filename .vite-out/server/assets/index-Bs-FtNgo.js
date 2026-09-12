import { jsxs, jsx } from "react/jsx-runtime";
function Home() {
  return /* @__PURE__ */ jsxs("main", { className: "flex min-h-dvh flex-col items-center justify-center gap-3 px-6 text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-2xl font-semibold tracking-tight", children: "Your Blink app is ready" }),
    /* @__PURE__ */ jsxs("p", { className: "max-w-md text-sm text-muted-foreground", children: [
      "This is the full-bleed starter home with no sidebar. Edit",
      " ",
      /* @__PURE__ */ jsx("code", { className: "rounded bg-muted px-1", children: "src/routes/index.tsx" }),
      " to build your page, or add routes under",
      " ",
      /* @__PURE__ */ jsx("code", { className: "rounded bg-muted px-1", children: "src/routes/" }),
      "."
    ] })
  ] });
}
export {
  Home as component
};
