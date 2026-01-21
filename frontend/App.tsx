import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import './global.css';
import { apiService, Item } from './services/api';

export default function App() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    try {
      setLoading(true);
      const data = await apiService.getItems();
      setItems(data);
    } catch (error) {
      console.error('Failed to load items:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 bg-gray-50">
      <StatusBar style="auto" />
      <View className="pt-12 pb-4 bg-white shadow-sm">
        <Text className="text-3xl font-bold text-center text-gray-900">
          My Agent App
        </Text>
        <Text className="text-sm text-center text-gray-500 mt-1">
          React Native + FastAPI
        </Text>
      </View>

      <ScrollView className="flex-1 px-4 py-6">
        {loading ? (
          <Text className="text-center text-gray-500 mt-8">
            加载中...
          </Text>
        ) : items.length === 0 ? (
          <View className="bg-white rounded-lg p-6 mt-4 shadow-sm">
            <Text className="text-center text-gray-500">
              暂无数据，请先启动后端服务
            </Text>
            <Text className="text-center text-gray-400 text-sm mt-2">
              API URL: {process.env.EXPO_PUBLIC_API_URL || 'http://localhost:8000'}
            </Text>
          </View>
        ) : (
          items.map((item) => (
            <View
              key={item.id}
              className="bg-white rounded-lg p-4 mb-3 shadow-sm"
            >
              <Text className="text-lg font-semibold text-gray-900">
                {item.title}
              </Text>
              {item.description && (
                <Text className="text-sm text-gray-600 mt-1">
                  {item.description}
                </Text>
              )}
              <View className="flex-row items-center mt-2">
                <View
                  className={`px-3 py-1 rounded-full ${item.is_completed
                    ? 'bg-green-100'
                    : 'bg-gray-100'
                    }`}
                >
                  <Text
                    className={`text-xs font-medium ${item.is_completed
                      ? 'text-green-800'
                      : 'text-gray-600'
                      }`}
                  >
                    {item.is_completed ? '已完成' : '未完成'}
                  </Text>
                </View>
              </View>
            </View>
          ))
        )}

        <TouchableOpacity
          onPress={loadItems}
          className="bg-blue-500 rounded-lg p-4 mt-4 mb-8"
        >
          <Text className="text-white text-center font-semibold">
            刷新数据
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
