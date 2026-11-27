import { createClient } from
'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const SUPABASE_URL = 'https://nojnsnsftmwelsjfkprx.supabase.co';

const SUPABASE_ANON_KEY = 'sb_publishable_jQAgPCpeYobQ2-mpWW2fQQ_3hJvNuw7';

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
