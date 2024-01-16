import { getTranslations } from "next-intl/server";
import { Cairo } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import TrackingDataContext from "@/context/TrackingDataContext";

const cairo = Cairo({ subsets: ["latin"] });

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("Bosta_Task"),
  };
}

const RootLayout = ({ children, params: { locale } }) => {
  return (
    <html lang={locale}>
      <body className={cairo.className}>
        <Header />
        <main className="">
          <TrackingDataContext>{children}</TrackingDataContext>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
