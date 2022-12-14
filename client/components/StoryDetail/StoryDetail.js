import React from 'react'

const StoryDetail = ({story}) => {
    return (
        <div className='bg-white shadow-lg rounded-lg p-5 lg:p-5 pb-10 mb-2'>
            <div className='relative overflow-hidden shadow-lg mb-5'>
                <img src={story.featuredImage} alt={story.title}
                    className="object-top h-full w-full" />
                <div className='story-detail-title'>
                    <h1>
                        {story.title}
                    </h1>
                </div>
            </div>
            <div className='story-detail mt-7 mb-8'>
                {story.content}
            </div>
        </div>
    )
}

export default StoryDetail