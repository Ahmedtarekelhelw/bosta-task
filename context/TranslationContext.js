// "use client";
// import { useParams } from "next/navigation";
// import { createContext, useContext } from "react";

// const Context = createContext();

// const TranslationContext = ({ children }) => {
//   const { locale } = useParams();
//   const dir = locale === "ar" ? "right" : "left";
//   const reverseFlex = locale === "ar" && "flex-row-reverse";
//   return (
//     <Context.Provider value={{ dir, reverseFlex, locale }}>
//       {children}
//     </Context.Provider>
//   );
// };

// export default TranslationContext;

// export const useDirecion = () => useContext(Context);
