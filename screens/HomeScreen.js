import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ChevronDownIcon, UserIcon } from "react-native-heroicons/outline";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  return (
    <SafeAreaView className="bg-white pt-10">
      <Text className="text-green-600">

        {/* Header */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2">

          <Image source={{
            uri: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/66acdb86006859.5d8c9386bd8f4.jpg"
          }} className="h-7 w-7 bg-gray-300 p-4 rounded-full" />

          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>

            <Text className="font-bold text-xl">Current Location
              <ChevronDownIcon size={15} color="#00ccbb" />
            </Text>
          </View>
          <UserIcon size={35} color="#00ccbb" style={{paddingLeft:155}}/>
        </View>
      </Text>
    </SafeAreaView>
  )
}

export default HomeScreen