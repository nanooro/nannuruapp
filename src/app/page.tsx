// "use client";
// import { useRouter } from "next/navigation";
// const router = useRouter()
import Image from "next/image";
import ArticlesPage from "@/app/articleList/page";

export default function Home() {
  return (
    <div className="w-full h-screen ">
      <ArticlesPage />
    </div>
  );
}
