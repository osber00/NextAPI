import CardPost from "../components/CardPost";

const fetchPosts = async () => {
  const peticion = await fetch("https://jsonplaceholder.typicode.com/posts");
  const respuesta = await peticion.json();
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return respuesta;
};

export const metadata = {
  title: 'Publicaciones - App next',
  description: 'Publicaciones del sitio'
}

const PostsPage = async () => {
  const posts = await fetchPosts();
  return (
    <div className='container mx-auto py-6 px-6 shadow-lg'>
      <h1 className='text-2xl font-black'>Publicaciones</h1>
      <CardPost posts={posts}/>
    </div>
  );
};

export default PostsPage;
