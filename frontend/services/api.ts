const API_URL = process.env.EXPO_PUBLIC_API_URL || 'http://localhost:8000';

export interface Item {
  id: number;
  title: string;
  description?: string;
  is_completed: boolean;
}

export interface ItemCreate {
  title: string;
  description?: string;
  is_completed?: boolean;
}

class ApiService {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async request<T>(
    endpoint: string,
    options?: RequestInit
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    return response.json();
  }

  // Items API
  async getItems(): Promise<Item[]> {
    return this.request<Item[]>('/api/items');
  }

  async getItem(id: number): Promise<Item> {
    return this.request<Item>(`/api/items/${id}`);
  }

  async createItem(item: ItemCreate): Promise<Item> {
    return this.request<Item>('/api/items', {
      method: 'POST',
      body: JSON.stringify(item),
    });
  }

  async updateItem(id: number, item: ItemCreate): Promise<Item> {
    return this.request<Item>(`/api/items/${id}`, {
      method: 'PUT',
      body: JSON.stringify(item),
    });
  }

  async deleteItem(id: number): Promise<void> {
    return this.request<void>(`/api/items/${id}`, {
      method: 'DELETE',
    });
  }
}

export const apiService = new ApiService(API_URL);

