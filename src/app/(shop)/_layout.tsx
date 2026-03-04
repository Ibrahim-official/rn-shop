// Ths shop is going to be a tab - where we can navigate b/w our shop pg and order page

import { Tabs } from 'expo-router';

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{}} />
      <Tabs.Screen name="orders" options={{}} />
    </Tabs>
  );
};

export default TabsLayout;