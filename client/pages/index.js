import Head from 'next/head';
import { StoryCard, StoryWidget, Header,Categories } from '../components';
import { getStories } from '../services';

// const stories = [
//   { title: 'Rocky Mountain National Park', excerpt: 'World most beautiful park in Alberta, Canada'},
//   { title: 'Raining Seattle', excerpt: 'The day was cold and rainy in Seattle..'},
// ]

export default function Home({ stories }) {
  
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>My Travel Story App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='col-span-1 lg:col-span-8'>
          {
            stories.map((story) => (
              <StoryCard story={story.node} key={story.title} />
            )
          )}
        </div>
        <div className='col-span-1 lg:col-span-4'>
          <div>
            <StoryWidget />
            <Categories />
          </div>
        </div>
      </div>

    </div>
  )
}

export async function getStaticProps() {
  const stories = (await getStories()) || [];
  return {
    props: {
      stories
    }
  }
}