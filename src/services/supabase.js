import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://vxmsaxapymuggrsgangk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4bXNheGFweW11Z2dyc2dhbmdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0NDIxNjksImV4cCI6MjA2NDAxODE2OX0.zeRCIAuDzbPK41-75wAy0NawhNIP6K_hXiflFl8yPmo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
