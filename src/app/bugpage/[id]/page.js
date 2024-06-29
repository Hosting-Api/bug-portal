// import BugForm from '@/BugForm';
import BugForm from '@/app/components/BugForm';
import React from 'react'

const getBugByID = async (id) => {
  try {
    const res = await fetch(`http://bug-portal.vercel.app/api/bugs/${id}`,
      {
        cache: 'no-store',
      })
    
    if(!res.ok){
      throw new Error('Failed to get Bug ');
    }
    return res.json();
    
  } catch (error) {
    
  }

}

const BugPage = async({params}) => {
  const EDITMODE = params.id === 'new' ? false : true;
  let updateBugData = {};

  if(EDITMODE){
    updateBugData = await getBugByID(params.id);
    // console.log(updateBugData)
    updateBugData = updateBugData.foundBug;
  }else{
    updateBugData ={
      _id: "new",
    }
  }
  return (
    <div >
      {/* Bug ID: {params.id} */}
      {/* <BugForm  /> */}
      {/* <BugForm bug ={updateBugData} /> */}
      <BugForm bug ={updateBugData} />
    </div>
  )
}

export default BugPage;
