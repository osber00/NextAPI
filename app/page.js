import CardFotos from "./components/CardFotos";

const fetchImagenes = async () => {
  const peticion = await fetch("https://jsonplaceholder.typicode.com/photos");
  const respuesta = await peticion.json();
  const album = respuesta.filter((foto) => foto.albumId == 1);
  await new Promise(resolve => setTimeout(resolve,3000))
  return album;
};

export const metadata = {
  title: "Inicio - App Next",
  description: "Inicio de la app NextJs",
};

const HomePage = async () => {
  const fotos = await fetchImagenes();
  //console.log(fotos)
  return (
    <div className='container mx-auto py-6 px-6 shadow-lg'>
      <h1 className='text-2xl font-black py-2 px-3'>Fotos</h1>
      <CardFotos fotos={fotos}/>
    </div>
  );
};

export default HomePage;
