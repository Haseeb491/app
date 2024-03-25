import { getAuthUserDetails, verifyAndAcceptInvitation } from '@/lib/queries'
import { currentUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import React from 'react'

const AgencyDashboard = async () => {


  //logic for users getting an invitation 
  const agencyId =  await verifyAndAcceptInvitation()
  console.log(agencyId)

  //get the user details 
  const user = await getAuthUserDetails()
  return (
    <div>AgencyDashboard</div>
  )
}

export default AgencyDashboard