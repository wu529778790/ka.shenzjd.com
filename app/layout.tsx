import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | 神族九帝-神卡助手",
    default: "神卡助手",
  },
  description:
    "大流量套餐，流量不限量，月付19元，首月0元，全国通用，支持多终端，支持多平台，支持多设备，支持多运营商，支持多地区，",
  metadataBase: new URL("https://ka.shenzjd.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
