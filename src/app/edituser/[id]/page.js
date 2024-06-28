// import EditUser from '@/app/components/EditUser'
// import React from 'react'

import EditUser from "@/app/components/EditUser";


// import router from "next/navigation";
// const getUserById = async (id) => {
//   // const { user } = await res.json();
//   //   return user;
//     try {
//     const res = await fetch(`/api/edituser/${id}`, {
//       cache: "no-store",
//   });

//     if (!res.ok) {
//       throw new Error('Failed to fetch User !');
//     }
//     return res.json();
//   } catch (error) {
//     console.log('Error fetching User: ', error);
//   }
 
// };
// export default async function EditUsr ({params}){
  
//   const {id} = params;
//   const {user} = await getUserById(id);
//   const {name, email, role, password} = user;
//   return (
//     <div>
//         <EditUser id={id} name={name} email={email} role={role} password={password}/>
//     </div>
//   )
//   // return <EditUser id={id} name={name} email={email} role={role} password={password} />;
// }


const getUserById = async (id) => {
  // const router = useRouter();

  try {
      const res = await fetch(`http://localhost:3000/api/edituser/${id}`, {
          cache: "no-store",
      });

      if (!res.ok) {
          throw new Error("Failed to fetch product");
      }
      return res.json();
  } catch (error) {
      console.log(error);
  }
};

export default async function EditUsr({ params }) {
  const { id } = params;
  const { user } = await getUserById(id);
  const { name, email, role,password } = user;

  return <EditUser id={id} name={name} email={email} role={role} password={password} />;
}