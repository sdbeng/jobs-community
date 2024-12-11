/*
The setRole() action checks that the current user has the admin role before updating the specified user's role using Clerk's JavaScript Backend SDK. The removeRole() action removes the role from the specified user.
*/
'use server'

import { checkRole } from '@/utils/roles'
import { clerkClient } from '@clerk/nextjs/server'

export async function setRole(formData: FormData) {
    const client = await clerkClient()

    //check that the user trying to to set the role is an admin
    if(!checkRole('admin')) {
        return { message: 'Not Authorized' }
    }

    try {
        const res = await client.users.updateUser(formData.get('id') as string, {
            publicMetadata: {role: formData.get('role')},
        })
        return { message: res.publicMetadata }
        
    } catch (err) {
        return { message: err}
    }
}

export async function removeRole(formData: FormData) {
    const client = await clerkClient()
  
    try {
      const res = await client.users.updateUser(formData.get('id') as string, {
        publicMetadata: { role: null },
      })
      return { message: res.publicMetadata }
    } catch (err) {
      return { message: err }
    }
  }
