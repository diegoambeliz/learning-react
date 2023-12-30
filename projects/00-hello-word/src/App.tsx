import './App.css';
import { YoutubeVideo, YoutubeVideoProps } from './YoutubeVideo';
import { VIDEOS } from './data/videos';



export function App() {

    const videos = VIDEOS.map((video, index) => {
        return (<YoutubeVideo key={index} isVerified={video.isVerified} duration={video.duration} channelName={video.channelName}
            channelLogo={video.channelLogo} videoThumnail={video.videoThumnail}>
            {video.children}
        </YoutubeVideo>)
    })

    return (
        <>
            <section className='yt-video-list'>
                {videos}
            </section>
        </>
    )
}