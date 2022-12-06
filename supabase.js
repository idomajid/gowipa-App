import AsyncStorage from "@react-native-async-storage/async-storage";

import { createClient } from "@supabase/supabase-js";
import { SUPABASE_URL, SUPABASE_KEY } from "@env";
import { setupURLPolyfill } from "react-native-url-polyfill";

setupURLPolyfill();

const supabaseUrl = SUPABASE_URL;
const supabaseAnonKey = SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  // localStorage: AsyncStorage,

  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: false,
    storage: AsyncStorage,
  },
});
