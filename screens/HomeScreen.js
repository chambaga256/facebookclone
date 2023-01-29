import { View, Text, TouchableOpacity, Image, ScrollView, Button,StyleSheet } from 'react-native'
import React from 'react'
import { ArrowLeftIcon, ChatBubbleBottomCenterIcon, ChevronRightIcon, ComputerDesktopIcon, HomeModernIcon, LinkIcon, MagnifyingGlassCircleIcon, MinusCircleIcon, PlayCircleIcon, PlusCircleIcon, QuestionMarkCircleIcon, StarIcon, VideoCameraIcon } from 'react-native-heroicons/outline';
import { Video } from 'expo-av';
import Topbar from '../components/Topbar';
const HomeScreen = () => {
  const video = React.useRef(null);
  const secondVideo = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [statusSecondVideo, setStatusSecondVideo] = React.useState({});
  
  return (
    <View>
    
  <Topbar />
  
  
    </View>
  )
}


export default HomeScreen