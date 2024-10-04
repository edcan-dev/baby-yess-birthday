import 'animate.css';
import './HomeCover.css';
import { HomeSection } from '@/components';
import { Metadata } from 'next';
import { FeaturedMomentsPhoto } from '@/interfaces';

export const metadata: Metadata = {
  title: "Baby Yess Training",
  description: "Baby Yess Training"
};


const loadFeaturedMomentsData = async() => {
  const file = await import('../data/featured-moments-data.json')
  return file.featuredMomentsData as unknown as FeaturedMomentsPhoto[];
}

export default async function Home() {

  const featuredMoments = await loadFeaturedMomentsData();

  return (
    <main
      className="min-h-screen bg-lilac"
    >
      <HomeSection featuredMomentsPhotos={ featuredMoments }/>
      
    </main>
  );
}
