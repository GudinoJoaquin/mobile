import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function Screen({ children }: { children: React.ReactNode }) {
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['top', 'left', 'right']}>{children}</SafeAreaView>
    </SafeAreaProvider>
  );
}
