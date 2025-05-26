import React from 'react'
import { HeroSection, Service, BigNFTSilder, Subscribe, Title, Category, Filter, NFTCard, Collection, FollowerTab, AudioLive, Slider, Brand, Video } from "@/components";

const page = () => {
  return (
    <div>
      <HeroSection />
      <Service />
      <BigNFTSilder />
      <Subscribe />
      <Title heading="Audio Collection"
        paragraph="Discover the most outstanding NFTs in all topics of life." />
      <Category />
      <Filter />
      <NFTCard />
      <Collection />
      <FollowerTab />
      <AudioLive />
      <Slider />
      <Brand />
      <Video />
    </div>
  )
}

export default page;
