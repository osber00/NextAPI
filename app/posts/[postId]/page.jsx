import Link from "next/link";
import PostsPage from "../page";
import { Suspense } from "react";

const fetchPost = async (postId) => {
  const peticion = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const respuesta = await peticion.json();
  //await new Promise((resolve) => setTimeout(resolve, 5000));
  return respuesta;
};

export const metadata = {
  title: 'Detalle de la publicación - App Next',
  description: 'Info del usuario'
}

const PostPage = async ({ params }) => {
  const post = await fetchPost(params.postId);
  console.log(post);
  return (
    <>
      <div className='container mx-auto mt-2 bg-slate-800 text-white py-5 px-4 shadow-lg rounded-md'>
        <h2 className='block font-black text-2xl underline'>{post.title}</h2>
        <p className='block mb-3'>{post.body}</p>

        <Link
          href={"/posts"}
          className='bg-violet-500 font-black py-2 px-3 rounded-md uppercase text-xs text-center'>
          Volver a Publicaciones
        </Link>
      </div>
      <div className="container mx-auto mt-6">
        <Suspense
          fallback={
            <div className='text-2xl font-black text-center'>
              Cargando datos...
            </div>
          }>
          <PostsPage />
        </Suspense>
      </div>
    </>
  );
};

export default PostPage;
