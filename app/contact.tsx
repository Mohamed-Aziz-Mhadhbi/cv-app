import { View, Text, TouchableOpacity, Linking } from 'react-native';
import { Mail, Linkedin, Github } from 'lucide-react-native';

export default function ContactScreen() {
  const links = {
    email: 'mailto:your.email@example.com',
    linkedin: 'https://linkedin.com/in/your-profile',
    github: 'https://github.com/your-username',
  };

  return (
    <View className="flex-1 justify-center items-center bg-gray-100 dark:bg-gray-900">
      <Text className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Let s Connect!</Text>
      <TouchableOpacity onPress={() => Linking.openURL(links.email)}>
        <Mail color="#007AFF" size={30} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL(links.linkedin)}>
        <Linkedin color="#0A66C2" size={30} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL(links.github)}>
        <Github color="#000" size={30} />
      </TouchableOpacity>
    </View>
  );
}
