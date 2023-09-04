import { Roboto } from "next/font/google";
import "./global.css";
import Navbar from "@/components/Navbar/Navbar";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"],
});
//You can use the metadata in any layout or page
//It's recomended only for pages that are going to be indexed in browsers
//metadata not works with client components
export const metadata = {
  title: "My nextjs course",
  description: "Main page",
  keywords: "course, fazt,nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
