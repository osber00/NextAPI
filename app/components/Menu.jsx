import Link from "next/link";

const Menu = () => {
  return (
    <ul className='flex gap-2 uppercase font-bold'>
      <li>
        <Link href="/">Inicio</Link>
        </li>
      <li>
        <Link href='/usuarios'>Usuarios</Link>
      </li>
      <li>
        <Link href='/posts'>Posts</Link>
      </li>
    </ul>
  );
};

export default Menu;
