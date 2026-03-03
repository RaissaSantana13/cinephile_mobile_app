import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";

const Profile = () => {
    return (
        <View className="flex-1 bg-primary">
            <Image source={images.bg} className="absolute w-full z-0" />

            <ScrollView className="flex-1 px-5 mt-20">
                <View className="items-center mb-8">
                    <View className="p-1 rounded-full border-2 border-accent">
                        <Image
                            source={icons.person}
                            className="w-24 h-24 rounded-full"
                            tintColor="#AB8BFF"
                        />
                    </View>
                    <Text className="text-white text-2xl font-bold mt-4">Cinephile User</Text>
                    <Text className="text-light-200 text-sm">member@example.com</Text>
                </View>

                {/* Menu Options */}
                <View className="bg-dark-100 rounded-2xl p-4 mb-4">
                    <MenuOption icon={icons.person} title="Edit Profile" />
                    <MenuOption icon={icons.save} title="My List" border={false} />
                </View>

                <TouchableOpacity className="bg-accent rounded-xl py-4 items-center mt-4">
                    <Text className="text-white font-bold text-base">Logout</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

const MenuOption = ({ icon, title, border = true }: any) => (
    <TouchableOpacity className={`flex-row items-center py-4 ${border ? 'border-b border-light-200/10' : ''}`}>
        <Image source={icon} className="size-6 mr-4" tintColor="#AB8BFF" />
        <Text className="text-white text-base flex-1">{title}</Text>
        <Image source={icons.arrow} className="size-4 rotate-180" tintColor="#A8B5DB" />
    </TouchableOpacity>
);

export default Profile;