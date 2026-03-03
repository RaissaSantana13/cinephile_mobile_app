import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { images } from "@/constants/images";
import MovieCard from "@/components/MovieCard";
import useFetch from "@/services/useFetch"; // Use your custom hook

const Saved = () => {
    const { data: savedMovies, loading } = useFetch(() => Promise.resolve([]));

    return (
        <View className="flex-1 bg-primary">
            <Image source={images.bg} className="absolute w-full z-0" />

            <View className="flex-1 px-5 mt-20">
                <Text className="text-white text-2xl font-bold mb-6">Saved Movies</Text>

                {savedMovies?.length === 0 ? (
                    <View className="flex-1 justify-center items-center">
                        <Text className="text-light-200 text-center text-lg">
                            You haven't saved any movies yet.
                        </Text>
                    </View>
                ) : (
                    <FlatList
                        data={savedMovies}
                        renderItem={({ item }) => <MovieCard {...item} />}
                        keyExtractor={(item) => item.id.toString()}
                        numColumns={3}
                        columnWrapperStyle={{
                            justifyContent: 'flex-start',
                            gap: 20,
                            marginTop: 10
                        }}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: 100 }}
                    />
                )}
            </View>
        </View>
    );
};

export default Saved;