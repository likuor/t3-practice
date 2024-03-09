import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";

// import { CreatePost } from "~/app/_components/create-post";
import { api } from "~/trpc/server";

export default async function Home() {
  noStore();
  const allArticles = await api.post.getAllArticles.query();
  console.log(allArticles);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          <span className="text-[hsl(280,100%,70%)]">T3</span> App Blog
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-8">
          {allArticles.map((article) => (
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
              href={`/article/${article.id}`}
              // target="_blank"
              key={article.id}
            >
              <h3 className="text-2xl font-bold">{article.title}</h3>
              <div className="text-lg">{article.description}</div>
              <span className="text-base text-gray-400">
                {article.createdAt.toLocaleDateString()}
              </span>
            </Link>
          ))}
        </div>
        {/* <div className="flex flex-col items-center gap-2">
          <p className="text-2xl text-white">
            {hello ? hello.greeting : "Loading tRPC query..."}
          </p>
        </div> */}

        {/* <CrudShowcase /> */}
      </div>
    </main>
  );
}

// async function CrudShowcase() {
//   const latestPost = await api.post.getLatest.query();

//   return (
//     <div className="w-full max-w-xs">
//       {latestPost ? (
//         <p className="truncate">Your most recent post: {latestPost.id}</p>
//       ) : (
//         <p>You have no posts yet.</p>
//       )}

//       <CreatePost />
//     </div>
//   );
// }
