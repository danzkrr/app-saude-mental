import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'rgb(249, 249, 250)',
        headerStyle: {
          backgroundColor: '#rgb(118, 181, 214)',
        },
        headerShadowVisible: false,
        headerTintColor: 'rgb(249, 249, 250)',
        tabBarStyle: {
          backgroundColor: '#rgb(118, 181, 214)',
        },
        tabBarLabelStyle: {
          color: 'rgb(249, 249, 250)',
          fontWeight: 'bold',
          fontSize: 12
        }
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarLabel: 'Ínicio',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="doctors"
        options={{
          headerShown: false,
          tabBarLabel: 'Doutores',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'medkit' : 'medkit-outline'} color={color} size={24}/>
          ),
        }}
      />
      <Tabs.Screen 
        name="appointment" 
        options={{ 
          headerShown: false,
          tabBarLabel: 'Consultas', 
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'calendar' : 'calendar-outline'} color={color} size={24} /> 
          ),
        }} 
      />
      <Tabs.Screen 
        name="profile" 
        options={{ 
          headerShown: false,
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'person-circle' : 'person-circle-outline'} color={color} size={24} /> 
          ),
        }} 
      />
    </Tabs>
  );
}

