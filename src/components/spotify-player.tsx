"use client";

import React, { useEffect, useState } from "react";

type NowPlayingSong = {
    album: string;
    albumImageUrl: string;
    artist: string;
    isPlaying: boolean;
    isLastPlayed?: boolean;
    songUrl: string;
    title: string;
};

export function SpotifyPlayer({ className = "" }: { className?: string }) {
    const [song, setSong] = useState<NowPlayingSong | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNowPlaying = async () => {
            try {
                const res = await fetch("/api/now-playing");
                if (res.ok) {
                    const data = await res.json();
                    setSong(data);
                }
            } catch (e) {
                console.error("Failed to fetch Spotify status", e);
            } finally {
                setLoading(false);
            }
        };

        fetchNowPlaying();

        // Refresh every 30 seconds
        const interval = setInterval(fetchNowPlaying, 30000);
        return () => clearInterval(interval);
    }, []);

    if (loading) {
        return (
            <div className={`flex items-center gap-3 font-mono text-xs text-neutral-500 bg-[#111] border border-neutral-800 w-full sm:w-fit px-6 h-20 sm:h-24 rounded-none ${className}`}>
                <div className="w-1.5 h-1.5 bg-neutral-600 animate-pulse"></div>
                FETCHING_AUDIO_STREAM...
            </div>
        );
    }

    if (!song?.title) {
        return (
            <div className={`flex items-center gap-3 font-mono text-xs text-neutral-500 bg-[#111] px-6 h-20 sm:h-24 border border-neutral-800 w-full sm:w-fit rounded-none shadow-inner group ${className}`}>
                <div className="w-2 h-2 bg-neutral-700/50 flex items-center justify-center">
                    <div className="w-1 h-1 bg-neutral-600"></div>
                </div>
                <div className="flex flex-col">
                    <span className="text-[10px] text-neutral-600 tracking-widest uppercase mb-0.5">Spotify_Status</span>
                    <span className="text-neutral-500">Currently Offline</span>
                </div>
            </div>
        );
    }

    return (
        <a
            href={song.songUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`group isolate relative flex flex-row items-center font-mono w-full sm:w-fit cursor-pointer ${className}`}
        >
            {/* Corner brackets */}
            <div className={`absolute -top-2 -left-2 w-3 h-3 border-t-2 border-l-2 transition-colors z-20 ${song.isPlaying ? 'border-emerald-500/40 group-hover:border-emerald-500' : 'border-neutral-500/40 group-hover:border-neutral-400'}`} />
            <div className={`absolute -top-2 -right-2 w-3 h-3 border-t-2 border-r-2 transition-colors z-20 ${song.isPlaying ? 'border-emerald-500/40 group-hover:border-emerald-500' : 'border-neutral-500/40 group-hover:border-neutral-400'}`} />
            <div className={`absolute -bottom-2 -left-2 w-3 h-3 border-b-2 border-l-2 transition-colors z-20 ${song.isPlaying ? 'border-emerald-500/40 group-hover:border-emerald-500' : 'border-neutral-500/40 group-hover:border-neutral-400'}`} />
            <div className={`absolute -bottom-2 -right-2 w-3 h-3 border-b-2 border-r-2 transition-colors z-20 ${song.isPlaying ? 'border-emerald-500/40 group-hover:border-emerald-500' : 'border-neutral-500/40 group-hover:border-neutral-400'}`} />

            <div className={`w-full sm:w-80 h-20 sm:h-24 bg-neutral-900 border transition-all duration-500 p-1 relative overflow-hidden shadow-2xl flex flex-row items-center gap-4 sm:gap-6 px-4 py-3 sm:px-6 z-10 ${song.isPlaying ? 'border-neutral-800 group-hover:border-emerald-500/30' : 'border-neutral-800 group-hover:border-neutral-500/30'}`}>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] z-0 pointer-events-none opacity-50 group-hover:opacity-20 transition-opacity duration-500" />

                {song.isPlaying && (
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,1)] -translate-y-[20px] group-hover:translate-y-[120px] transition-transform duration-[2s] ease-in-out z-10 pointer-events-none" />
                )}

                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 z-0" />

                <div className={`relative z-20 w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0 border border-neutral-800 transition-colors overflow-hidden`}>
                    <img
                        src={song.albumImageUrl}
                        alt={song.album}
                        className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    />

                    {song.isPlaying ? (
                        <>
                            <div className="absolute inset-0 bg-emerald-500/20 mix-blend-color z-10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                            <div className="absolute bottom-1 right-1 flex items-end gap-[1.5px] z-20">
                                <span className="w-1 bg-emerald-500 animate-[bounce_1s_infinite] h-2"></span>
                                <span className="w-1 bg-emerald-500 animate-[bounce_1.2s_infinite] h-3"></span>
                                <span className="w-1 bg-emerald-500 animate-[bounce_0.8s_infinite] h-1.5"></span>
                            </div>
                        </>
                    ) : (
                        <div className="absolute inset-0 bg-neutral-500/20 mix-blend-color z-10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                    )}
                </div>

                <div className="flex flex-col justify-center min-w-[150px] z-10">
                    <div className="flex items-center gap-2 mb-1">
                        <span className={`w-1.5 h-1.5 ${song.isPlaying ? 'bg-emerald-500 animate-pulse' : 'bg-neutral-600'}`}></span>
                        <span className={`text-[10px] uppercase tracking-widest ${song.isPlaying ? 'text-emerald-500' : 'text-neutral-500'}`}>
                            {song.isPlaying ? 'Now_Playing' : 'Last_Played'}
                        </span>
                    </div>
                    <div className="text-sm text-neutral-300 group-hover:text-white transition-colors truncate max-w-[200px] sm:max-w-[250px] font-bold">
                        {song.title}
                    </div>
                    <div className="text-xs text-neutral-500 truncate max-w-[200px] sm:max-w-[250px]">
                        {song.artist}
                    </div>
                </div>

                <div className="absolute right-0 top-0 h-full w-4 flex flex-col items-center justify-between py-2 border-l border-neutral-800/50 bg-[#0a0a0a]/50 z-20">
                    <div className={`w-1 h-1 bg-neutral-800 transition-colors ${song.isPlaying ? 'group-hover:bg-emerald-500/40' : 'group-hover:bg-neutral-500/40'}`}></div>
                    <div className={`w-1 h-1 bg-neutral-800 transition-colors ${song.isPlaying ? 'group-hover:bg-emerald-500/40' : 'group-hover:bg-neutral-500/40'}`}></div>
                    <div className={`w-1 h-1 bg-neutral-800 transition-colors ${song.isPlaying ? 'group-hover:bg-emerald-500/40' : 'group-hover:bg-neutral-500/40'}`}></div>
                </div>
            </div>
        </a>
    );
}
