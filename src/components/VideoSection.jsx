import React from 'react';

const VideoSection = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                     <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
                        See It in Action
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Discover how Docière Pro transforms your writing workflow with our quick guides.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "Getting Started", gradient: "from-blue-500 to-indigo-600" },
                        { title: "Real-time Collaboration", gradient: "from-purple-500 to-pink-600" },
                        { title: "Advanced Features", gradient: "from-emerald-500 to-teal-600" }
                    ].map((video, index) => (
                        <div key={index} className="group relative rounded-2xl overflow-hidden aspect-video shadow-lg cursor-pointer">
                            <div className={`absolute inset-0 bg-gradient-to-br ${video.gradient} flex items-center justify-center transition-transform duration-500 group-hover:scale-110`}>
                                <div className="h-16 w-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all">
                                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
                                <span className="text-white font-semibold text-lg">{video.title}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
