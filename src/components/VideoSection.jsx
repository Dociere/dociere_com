import React from 'react';

const VideoSection = () => {
    return (
        <div className="section section-light">
            <div className="container">
                <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>How Docière Works</h2>
                <div className="video-grid">
                    <div className="video-card">
                        <div className="video-placeholder"></div>
                        <div className="video-title">Getting Started</div>
                    </div>
                    <div className="video-card">
                        <div className="video-placeholder"></div>
                        <div className="video-title">Real-time Collaboration</div>
                    </div>
                    <div className="video-card">
                        <div className="video-placeholder"></div>
                        <div className="video-title">Advanced Features</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoSection;
