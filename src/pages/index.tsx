import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <div />;
}

// According to the assignment web app needs only one page that is '/test/jobs'.
// So we are redirecting user from the base url '/' to '/test/jobs'.
Home.getInitialProps = async (ctx: any) => {
  if (typeof window === "undefined") {
    ctx.res.writeHead(302, {
      Location: "http://www.localhost:3000/test/jobs",
      // Location: "https://zippia-assignment.vercel.app/test/jobs",
    });
    ctx.res.end();
  } else {
    // window.location.href = "https://zippia-assignment.vercel.app/test/jobs";
    window.location.href = "http://www.localhost:3000/test/jobs";
  }
};
