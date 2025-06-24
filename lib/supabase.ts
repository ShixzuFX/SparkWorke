import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          username: string | null
          avatar_url: string | null
          bio: string | null
          company: string | null
          location: string | null
          website: string | null
          github_url: string | null
          twitter_url: string | null
          linkedin_url: string | null
          created_at: string
          updated_at: string
          role: "user" | "creator" | "admin"
          is_verified: boolean
          total_earnings: number
          total_products: number
          total_sales: number
          rating: number
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          username?: string | null
          avatar_url?: string | null
          bio?: string | null
          company?: string | null
          location?: string | null
          website?: string | null
          github_url?: string | null
          twitter_url?: string | null
          linkedin_url?: string | null
          role?: "user" | "creator" | "admin"
          is_verified?: boolean
          total_earnings?: number
          total_products?: number
          total_sales?: number
          rating?: number
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          username?: string | null
          avatar_url?: string | null
          bio?: string | null
          company?: string | null
          location?: string | null
          website?: string | null
          github_url?: string | null
          twitter_url?: string | null
          linkedin_url?: string | null
          role?: "user" | "creator" | "admin"
          is_verified?: boolean
          total_earnings?: number
          total_products?: number
          total_sales?: number
          rating?: number
        }
      }
    }
  }
}
