'use client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faHome, faPenToSquare, faRightFromBracket, faRightToBracket, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";


const Navbar = () => {
  const { data: session } = useSession();
   var uname = session?.user?.name;
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <FontAwesomeIcon icon={faHome} className="icon" />
        </Link>
        <Link href="/admin/edit">
          {/* <FontAwesomeIcon icon={faTicket} className="icon" /> */}
          <FontAwesomeIcon icon={faPenToSquare} className="icon" />
        </Link>
      </div>
      <div>
    
      <Link href="/dashboard">
          {/* <FontAwesomeIcon icon={faUserPlus} className="icon" /> */}
          <FontAwesomeIcon icon={faUserCircle} className="icon text-2xl" />
        <label className="text-default-text cursor-pointer font-bold">&nbsp;{uname}</label>&nbsp;&nbsp;
        </Link>

            {/* LogOut start */}
          	<FontAwesomeIcon icon={faRightToBracket} className="icon text-2xl cursor-pointer "  onClick={() => signOut()}/> 
        {/* LogOut End */}

        {/* <p className="text-default-text ">{uname}</p> */}
      </div>
    </nav>
  );
};

export default Navbar;
