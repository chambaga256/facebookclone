import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { ChartBarSquareIcon, ChartPieIcon, ChatBubbleOvalLeftEllipsisIcon, MagnifyingGlassIcon, PlayCircleIcon, PlusCircleIcon, PresentationChartLineIcon } from 'react-native-heroicons/outline'

const Topbar = () => {
  return (
    <SafeAreaView className="flex-row items-center ">
      <View className=" px-4 flex-1">
      <Text className="text-3xl font-bold text-blue-600 p-4">facebook</Text>
      </View>
      <View className="flex-row mr-4 space-x-4">
        <TouchableOpacity className=" bg-gray-200 rounded-full h-10 w-10 items-center pt-1">
        <PlusCircleIcon size={30} color="black" />

        </TouchableOpacity>
        <TouchableOpacity className="  bg-gray-200 rounded-full h-10 w-10 items-center pt-1">
        <MagnifyingGlassIcon  size={30} color="black"/>

        </TouchableOpacity>
   
      
        <TouchableOpacity className=" bg-gray-200 rounded-full h-10 w-10 items-center pt-1"> 
      <ChatBubbleOvalLeftEllipsisIcon  size={30} color="black" />
      </TouchableOpacity>
        
      </View>
    
   
    </SafeAreaView>
  )
}

export default Topbar