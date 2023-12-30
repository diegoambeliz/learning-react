import './YoutubeVideo.css';

export interface YoutubeVideoProps {
    children: string;
    videoThumnail: string;
    channelName: string;
    channelLogo: string;
    duration: string;
    isVerified?: boolean;
}

export function YoutubeVideo({ children, videoThumnail, channelName, channelLogo, duration, isVerified }: YoutubeVideoProps) {
    return (
        <article className='yt-video-option'>
            <header className='yt-video-option-thumbnail'>
                <div className="yt-video-option-image-container">
                    <img className='yt-video-option-image' src={videoThumnail} alt="Imagen video" />
                </div>
                <span className='yt-video-option-duration'>{duration}</span>
            </header>
            <section className='yt-video-option-info'>
                <div className='yt-video-option-avatar-container'>
                    <img className='yt-video-option-avatar' src={channelLogo} alt="Logo del canal" />
                </div>
                <div className='yt-video-option-text'>
                    <strong className='yt-video-option-title'>{children}</strong>
                    <span className='yt-video-option-channel-name'>{channelName} {isVerified && <span>✓</span>} </span>
                </div>
                <button className='yt-video-option-more-button'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 yt-video-option-more-button-icon">
                        <path fillRule="evenodd" d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clipRule="evenodd" />
                    </svg>
                </button>

            </section>
        </article >
    )
}