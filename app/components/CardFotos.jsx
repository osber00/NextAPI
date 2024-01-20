const CardFotos = ({fotos}) => {
  return (
    <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 '>
      {fotos.map((foto) => (
        <div key={foto.id} className='my-1'>
          <h2 className='font-black truncate text-center mb-2'>
            {foto.id}. {foto.title}
          </h2>
          <img className='rounded-full' src={foto.url} alt={foto.title} />
        </div>
      ))}
    </div>
  );
};

export default CardFotos;
