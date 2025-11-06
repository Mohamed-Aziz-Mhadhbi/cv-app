import { View, Text, Image, TouchableOpacity, Linking, ImageSourcePropType } from "react-native";

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  image: ImageSourcePropType;
  link: string;
};

export default function ProjectCard({ title, description, tech, image, link }: ProjectCardProps) {
  return (
    <TouchableOpacity
      onPress={() => Linking.openURL(link)}
      className="bg-white dark:bg-gray-800 p-4 mb-4 rounded-2xl shadow"
    >
      <Image source={image} className="w-full h-40 rounded-lg mb-3" />
      <Text className="text-xl font-semibold text-gray-800 dark:text-white">{title}</Text>
      <Text className="text-gray-500 mb-2">{description}</Text>
      <View className="flex-row flex-wrap">
        {tech.map((t, i) => (
          <Text
            key={i}
            className="mr-2 text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-md text-gray-700 dark:text-white"
          >
            {t}
          </Text>
        ))}
      </View>
    </TouchableOpacity>
  );
}
