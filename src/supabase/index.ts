import { createClient } from "@supabase/supabase-js";
import { Database } from "./database.types";

export const supabase = createClient<Database>(
  import.meta.env.VITE_SUPABASE_URL,
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV6b3Jwa291aHZwZXF2bHpyb2xxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMzkyOTgxNSwiZXhwIjoyMDQ5NTA1ODE1fQ.2H4D5tsFaSPc0sTPAtCH_z0bG_cRhxwiRFDGwnOqiFg"
  // import.meta.env.VITE_SUPABASE_SERVICE_ROLE_KEY
);
