import Link from "next/link";

const fetchUsuario = async (usuarioId) => {
  const peticion = await fetch(
    `https://jsonplaceholder.typicode.com/users/${usuarioId}`
  );
  const respuesta = await peticion.json();
  return respuesta;
};

export const metadata = {
  title: 'Detalle usuario - App Next',
  description: 'Info del usuario'
}

const UsuarioPage = async ({ params }) => {
  const usuario = await fetchUsuario(params.usuarioId);
  return (
    <div className='container mx-auto mt-2 bg-slate-800 text-white py-5 px-4 shadow-lg rounded-md'>
      <span className='block font-black text-2xl'>{usuario.name}</span>
      <span className='block'>Usuario: {usuario.username}</span>
      <span className='block'>Email: {usuario.email}</span>
      <span className='block'>Ciudad: {usuario.address.city}</span>
      <span className='block'>Web: {usuario.website}</span>
      <span className='block mb-2'>Compañía: {usuario.company.name}</span>
      <Link
        href={"/usuarios"}
        className='bg-violet-500 font-black py-2 px-3 rounded-md uppercase text-xs text-center'>
        Volver a usuarios
      </Link>
    </div>
  );
};

export default UsuarioPage;
