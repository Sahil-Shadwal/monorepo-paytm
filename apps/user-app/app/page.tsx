import { PrismaClient } from "@repo/db/client";

const client = new PrismaClient();
export default function Home() {
  return (
    <div className="flex items-center justify-center text-xl">
      <h1>Hii there jackie</h1>
    </div>
  );
}
