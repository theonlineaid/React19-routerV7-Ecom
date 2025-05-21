import type { Route } from "./+types/home";
import AddPost from "~/crud/AddPost";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Lol" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function hello() {
  return (
    <div>
      <AddPost />
    </div>
  );
}
