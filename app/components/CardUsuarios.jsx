import Link from "next/link";

const CardUsuarios = ({ usuarios }) => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
      {usuarios.map((usuario) => (
        <div className='bg-violet-500 text-white py-3 px-4 rounded-md' key={usuario.id}>
          <span className='block font-black'>{usuario.name}</span>
          <span className='block'>{usuario.username}</span>
          <span className='block'>{usuario.email}</span>
          <span className='block mb-2'>{usuario.address.city}</span>
          <Link
            href={`/usuarios/${usuario.id}`}
            className='bg-slate-800 font-black py-2 px-3 rounded-md uppercase text-xs text-center'>
            Información
          </Link>
        </div>
      ))}
    </section>
  );
};

export default CardUsuarios;
