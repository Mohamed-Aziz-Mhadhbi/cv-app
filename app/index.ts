import { View, Text, Image, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView className="p-6 bg-gray-100 dark:bg-gray-900">
      <View className="items-center mt-10">
        <Image
          source={require('../assets/images/profile.png')}
          className="w-32 h-32 rounded-full mb-4"
        />
        <Text className="text-3xl font-bold text-center text-gray-800 dark:text-white">
          Zizou Hama
        </Text>
        <Text className="text-gray-500 mb-4">Full Stack Developer</Text>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('projects')}
        >
          View My Projects
        </Button>
      </View>
    </ScrollView>
  );
}
