import { useState, useRef } from 'react'

import './App.css'
import { Heading, VStack, Box, Text, Center } from '@chakra-ui/react'


function App() {
  const [playingAudio, setPlayingAudio] = useState(null);
  const [playingVideo, setPlayingVideo] = useState(null);
  const audioRefs = useRef([]);
  const videoRefs = useRef([]);
  const videos = [
    {
      title: "Anthem Trailer",
      description: "Music Composition, Sound Design and Dialogue.",
      url: "https://player.vimeo.com/video/985409640?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },
    {
      title: "The Rat (Short Film)",
      description: "Music Composition",
      url: "https://player.vimeo.com/video/985415125?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },
    {
      title: "Expecting (Short Film)",
      description: "Music Composition, Sound Design and Dialogue.",
      url: "https://www.youtube.com/embed/z8SCkwJjyg8?si=CxIm2DawtBYIvneU",
    },
    {
      title: "The Perfect Team (Short Film)",
      description: "Music Composition, Sound Design and Dialogue.",
      url: "https://player.vimeo.com/video/985415719?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },
    {
      title: "VPD Public Service Anouncement",
      description: "Music Composition",
      url: "https://player.vimeo.com/video/382533001?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },
    
  ];
  
  const audioClips = [
    {
      title: "Can I be him - sunnyk",
      description: "Written, Composed, Recorded, Mixed, Mastered and Performed",
      url: "/masteridk3.mp3",
    },
    {
      title: "Angie Faith - Darling",
      description: "Recorded, Mixed and Mastered",
      url: "/OhDarlingfixed.mp3",
    },
    
    {
      title: "Su Riza - Golden Ganga ft Tugstar",
      description: "Recorded, Mixed and Mastered",
      url: "/Remix2Suriza_1.mp3",
    },
    {
      title: "Brown Eyez - Kym",
      description: "Recorded, Mixed and Mastered",
      url: "/BrownEyez48KhzMaster.mp3",
    },
    {
      title: "Stay Woke - Bxundless",
      description: "Recorded, Mixed and Mastered",
      url: "/StayWokeBounce_1.mp3",
    },
  ];
  const handlePlay = (index) => {
    if (playingAudio !== null && playingAudio !== index) {
      audioRefs.current[playingAudio].pause();
    }
    setPlayingAudio(index);
  };
  const handleVideoPlay = (index) => {
    if (playingVideo !== null && playingVideo !== index) {
      videoRefs.current[playingVideo].pause();
    }
    setPlayingVideo(index);
  };
  return (
    <>
      <VStack spacing={4} w={"100vw"} h={"100%"}>
     
      <Heading as="h1" size="2xl">Adel Boussenane's Audio Portfolio</Heading>
      <Text>For my software development portfolio, visit <a href="https://www.adeljs.dev">adeljs.dev</a>.</Text>
      <Box mb={8}>
      <Heading as="h2" size="lg" mb={4}>
        Videos
      </Heading>
      <VStack spacing={4} align="stretch">
        {videos.map((item, index) => (
          <Box key={index} p={4}  borderRadius="lg" w={"75vw"} h={"30vh"} mb={20}>
            <Heading as="h3" size="md" mb={2}>
              {item.title}
            </Heading>
            <Text mb={2}>{item.description}</Text>
            
              <iframe src={item.url} width={"100%"} height={"100%"} frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" title="VPD Animation by Aktash Singh"
              ref={(el) => (videoRefs.current[index] = el)}
              onPlay={() => handleVideoPlay(index)}
              ></iframe> 
            
          </Box>
        ))}
      </VStack>
    </Box>
    <Box mb={8}>
      <Heading as="h2" size="lg" mb={4}>
        Audio
      </Heading>
      <VStack spacing={4} align="stretch">
        {audioClips.map((item, index) => (
          <Box key={index} p={4} borderWidth={1} borderRadius="lg">
            <Heading as="h3" size="md" mb={2}>
              {item.title}
            </Heading>
            <Text mb={2}>{item.description}</Text>
            <Center>
              <audio controls 
              ref={(el) => (audioRefs.current[index] = el)}
              onPlay={() => handlePlay(index)}
              >
                <source src={item.url} type="audio/wav" />
                Your browser does not support the audio element.
              </audio>
              </Center>
          </Box>
        ))}
      </VStack>
    </Box>
    
      </VStack>
      
    </>
  )
}

export default App
