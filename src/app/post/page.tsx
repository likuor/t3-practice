"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { api } from "~/trpc/server";

const PostBlog = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  // const [title, setTitle] = useState<string>("");
  // const [description, setDescription] = useState<string>("");
  // const allBlogs = api.example.getAllBlogs.useQuery();

  // const postArticle = api.post.createArticle.useMutation({
  //   onSuccess: () => {
  //     router.refresh();
  //     setName("");
  //   },
  // });

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(titleRef.current?.value);
    console.log(descriptionRef.current?.value);

    // ここで `title` と `description` を使って blog を投稿する処理を追加してください。

    // if (titleRef.current && descriptionRef.current) {
    //   postBlog.mutate({
    //     title: titleRef.current.value,
    //     description: descriptionRef.current.value,
    //   });
    // }

    // console.log(titleRef.current?.value);
    // console.log(descriptionRef.current?.value);

    // router.push("/");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          <span className="text-[hsl(280,100%,70%)]">T3</span> App Blog
        </h1>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md rounded-lg bg-white p-6 shadow-md"
        >
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-800"
              htmlFor="title"
            >
              タイトル
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="title"
              type="text"
              placeholder="タイトルを入力"
              ref={titleRef}
            />
          </div>
          <div className="mb-6">
            <label
              className="mb-2 block text-sm font-bold text-gray-800"
              htmlFor="description"
            >
              説明
            </label>
            <textarea
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="description"
              placeholder="説明を入力"
              ref={descriptionRef}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="rounded-md bg-[hsl(280,100%,70%)] px-6 py-4 font-medium"
              type="submit"
            >
              投稿する
            </button>
            <Link
              href="/"
              className="inline-block align-baseline text-sm font-bold text-[hsl(280,100%,70%)] hover:text-orange-800"
            >
              キャンセル
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default PostBlog;
