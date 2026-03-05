// Ths shop is going to be a tab - where we can navigate b/w our shop pg and order page

import { Tabs } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const TabsLayout = () => {
  return (
    <SafeAreaView>
      <Tabs>
        <Tabs.Screen name="index"
          options={{
            headerShown: false,
          }} />
        <Tabs.Screen name="orders" options={{}} />
      </Tabs>
    </SafeAreaView>
  );
};

export default TabsLayout;