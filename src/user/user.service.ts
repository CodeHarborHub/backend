import { Injectable } from '@nestjs/common';
import { SupabaseService } from '../supabase.service';

@Injectable()
export class UserService {
  constructor(private readonly supabaseService: SupabaseService) {}

  async getAllUsers() {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('users')
      .select('*');

    if (error) throw error;
    return data;
  }

  async createUser(createUserDto: { email: string; password: string }) {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('users')
      .insert(createUserDto);

    if (error) throw error;
    return data;
  }
}
