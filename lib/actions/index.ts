"use server"

import createSupabaseServerClient from '../supabase/server'

export default async function readUserSesion() {
    const supabase = await createSupabaseServerClient()
    
    return supabase.auth.getSession()
}