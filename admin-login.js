import { supabase } from './supabase.js';

const form = document.getElementById('adminLoginForm');
const status = document.getElementById('status');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  status.textContent = 'Checking admin access...';

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) throw error;

    const { data: admin, error: adminError } = await supabase
      .from('admin_users')
      .select('user_id')
      .eq('user_id', data.user.id)
      .maybeSingle();

    if (adminError) throw adminError;

    if (!admin) {
      await supabase.auth.signOut();
      status.textContent = 'This account is not authorized as admin.';
      return;
    }

    window.location.href = 'admin.html';

  } catch (error) {
    status.textContent = 'Login failed: ' + error.message;
  }
});
