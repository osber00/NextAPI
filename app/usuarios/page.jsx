import CardUsuarios from "../components/CardUsuarios";

const fetchUsuarios = async () => {
  const peticion = await fetch("https://jsonplaceholder.typicode.com/users");
  const respuesta = await peticion.json();
  return respuesta;
};

export const metadata = {
  title: "Usuarios - App Next",
  description: "Proyecto NextJS",
};

const UsuariosPage = async () => {
  const usuarios = await fetchUsuarios();

  return (
    <div className='container mx-auto py-6 px-6 shadow-lg'>
      <h1 className='text-2xl font-black py-2 px-3'>Usuarios</h1>
      <CardUsuarios usuarios={usuarios} />
    </div>
  );
};

export default UsuariosPage;
