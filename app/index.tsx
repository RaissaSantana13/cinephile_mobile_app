import "./globals.css"; // Ou o caminho correto para o seu arquivo CSS
import { Text, View } from "react-native";

export default function Index() {
  return (

      <View className="flex-1 items-center justify-center bg-red-500">
          <Text className="text-white font-bold text-xl">Se estiver vermelho, funcionou!</Text>
      </View>
  );
}
