import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://mwxmtvrtfoykiayyueay.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im13eG10dnJ0Zm95a2lheXl1ZWF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQxMDY0MDcsImV4cCI6MjAxOTY4MjQwN30.Hp9FErIy21LPXxS4XvvGMhbMUNsa0smKD-uXeNmoi50";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
