import Link from "next/link";
import React from "react";

const CardPost = ({posts}) => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-2 text-white'>
      {posts.map((post) => (
        <div
          key={post.id}
          className='bg-gray-800 py-4 px-4 rounded-md h-32 uppercase'>
          <h3 className='font-black text-sm mb-3'>
            {post.id}. {post.title}
          </h3>
          <Link href={`/posts/${post.id}`} className='bg-violet-500 text-xs uppercase py-2 px-4 rounded-md'>
            Leer
          </Link>
        </div>
      ))}
    </section>
  );
};

export default CardPost;
