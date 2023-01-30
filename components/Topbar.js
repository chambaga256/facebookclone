import { View, Text, SafeAreaView, TouchableOpacity, Image, TextInput, ScrollView, Button } from 'react-native'
import React from 'react'
import { ChartBarSquareIcon, ChartPieIcon, ChatBubbleOvalLeftEllipsisIcon, FilmIcon, MagnifyingGlassIcon, PlayCircleIcon, PlusCircleIcon, PresentationChartLineIcon, VideoCameraIcon, ViewfinderCircleIcon } from 'react-native-heroicons/outline'

const Topbar = () => {
  const numbers =[1,23,4,10]

  // numbers.reduce((i,n)=> i+n,0)
  // console.log(numbers)
  return (
    <View >
      < SafeAreaView className="flex-row items-center "> 
      <View className=" px-2 flex-1">
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
      <ScrollView className="">
      <View className="p-1.5  bg-white " >
        <View className="flex-row  items-center px-4  ">
          <View className="flex-1 flex-row space-x-2">
          <Image
      source={{
        uri:"https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }}
      className="rounded-full bg-gray-200 w-11 h-11 "
      />
      <TextInput  placeholder=' Whats  on Your Mind' className="h-10"/>
          </View>
        
        
        <View className="">
        <FilmIcon  color="green" size={24}/>
        </View>
      
        </View>
      
      </View>
      <View className="bg-gray-300">
        <Text></Text>
      </View>
      <View className="flex-row pt-4 items-center">
        <Text className="ml-[80] text-lg text-gray-700 font-semibold">Stories</Text>
        <Text className="ml-[130]  text-lg  text-gray-700 font-semibold justify-end">Reels</Text>
      </View>
      <ScrollView
      horizontal
    contentContainerStyle={
        {
            paddingHorizontal:15,

        }
    }
    showsHorizontalScrollIndicator={false}
       className="px-4 relative space-x-4
      
      ">
      <Image 
      source={{
        uri:"https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        
      }} className="bg-red-100 w-20 h-[150px] rounded-md"/>
     
      <Image 
      source={{
        uri:"https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        
      }} className="bg-red-100 w-20 h-[150px] rounded-md"/>
      <Image 
      source={{
        uri:"https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        
      }} className="bg-red-100 w-20 h-[150px] rounded-md"/>
      <Image 
      source={{
        uri:"https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        
      }} className="bg-red-100 w-20 h-[150px] rounded-md"/>
      <View className=" ml-5  absolute  pt-11 px-7 w-7 h-7 ">
      {/* <ViewfinderCircleIcon color="black " size={24} /> */}
    </View>
      </ScrollView>

      <Text className="text-lg font-semibold text-gray-700 p-2 px-4">
     People you may know
      </Text>
      <ScrollView
      horizontal
    contentContainerStyle={
        {
            paddingHorizontal:15,

        }
    } className="space-x-3"
    showsHorizontalScrollIndicator={false}>
    <View className="border  border-gray-200 pb-2 " >
    <Image 
      source={{
        uri:"https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        
      }} className="bg-red-100 w-[250] h-[150px] rounded-md"/>
      <Text className="text-lg text-gray-700 px-4 p-2 font-semibold">Abdul Murs</Text>
      <View className="px-4 space-x-1 flex-row items-center "> 
        
      <Image 
      source={{
        uri:"https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        
      }} className="bg-red-100 w-8 h-8 rounded-full"/>
      <Text className="text-gray-700"> 1 mutual friend</Text>

     
      </View>
      <View className="pt-2 px-4 w-40 flex-row space-x-3">
       <TouchableOpacity className="bg-blue-600 items-center p-2 px-4 rounded-md">
        <Text className="text-white">
          Add friend
        </Text>
       </TouchableOpacity>
       <TouchableOpacity className="bg-gray-400 items-center p-2 px-4 rounded-md">
        <Text className="text-white">
          Remove
        </Text>
       </TouchableOpacity>
      </View>
    </View>
    <View className="border  border-gray-200 pb-2">
    <Image 
      source={{
        uri:"https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        
      }} className="bg-red-100 w-[250] h-[150px] rounded-md"/>
      <Text className="text-lg text-gray-700 px-4 p-2 font-semibold">Abdul Murs</Text>
      <View className="px-4 space-x-1 flex-row items-center "> 
        
      <Image 
      source={{
        uri:"https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        
      }} className="bg-red-100 w-8 h-8 rounded-full"/>
      <Text className="text-gray-700"> 1 mutual friend</Text>

     
      </View>
      <View className="pt-2 px-4 w-40 flex-row space-x-3">
       <TouchableOpacity className="bg-blue-600 items-center p-2 px-4 rounded-md">
        <Text className="text-white">
          Add friend
        </Text>
       </TouchableOpacity>
       <TouchableOpacity className="bg-gray-400 items-center p-2 px-4 rounded-md">
        <Text className="text-white">
          Remove
        </Text>
       </TouchableOpacity>
      </View>
    </View>
    <View className="border  border-gray-200 pb-2 ">
    <Image 
      source={{
        uri:"https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        
      }} className="bg-red-100 w-[250] h-[150px] rounded-md"/>
      <Text className="text-lg text-gray-700 px-4 p-2 font-semibold">Abdul Murs</Text>
      <View className="px-4 space-x-1 flex-row items-center "> 
        
      <Image 
      source={{
        uri:"https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        
      }} className="bg-red-100 w-8 h-8 rounded-full"/>
      <Text className="text-gray-700"> 1 mutual friend</Text>

     
      </View>
      <View className="pt-2 px-4 w-40 flex-row space-x-3">
       <TouchableOpacity className="bg-blue-600 items-center p-2 px-4 rounded-md">
        <Text className="text-white">
          Add friend
        </Text>
       </TouchableOpacity>
       <TouchableOpacity className="bg-gray-400 items-center p-2 px-4 rounded-md">
        <Text className="text-white">
          Remove
        </Text>
       </TouchableOpacity>
      </View>
    </View>
    
      
      
      </ScrollView>
      </ScrollView>
      
      
   
    </View>
  )
}

export default Topbar