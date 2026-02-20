import { NextResponse } from "next/server";
import { getNowPlaying, getRecentlyPlayed } from "@/lib/spotify";

export const dynamic = "force-dynamic";

export async function GET() {
    try {
        const response = await getNowPlaying();

        if (response.status === 204 || response.status > 400) {
            // Fallback to recently played
            return await fetchRecentlyPlayed();
        }

        const song = await response.json();

        if (song.item === null) {
            return await fetchRecentlyPlayed();
        }

        const isPlaying = song.is_playing;
        const title = song.item.name;
        const artist = song.item.artists.map((_artist: any) => _artist.name).join(", ");
        const album = song.item.album.name;
        const albumImageUrl = song.item.album.images[0].url;
        const songUrl = song.item.external_urls.spotify;

        return NextResponse.json({
            album,
            albumImageUrl,
            artist,
            isPlaying,
            songUrl,
            title,
        });
    } catch (error) {
        return NextResponse.json({ isPlaying: false, error: "Failed to fetch Spotify data" }, { status: 500 });
    }
}

async function fetchRecentlyPlayed() {
    try {
        const response = await getRecentlyPlayed();

        if (response.status === 204 || response.status > 400) {
            return NextResponse.json({ isPlaying: false });
        }

        const data = await response.json();

        if (!data.items || data.items.length === 0) {
            return NextResponse.json({ isPlaying: false });
        }

        const track = data.items[0].track;

        return NextResponse.json({
            album: track.album.name,
            albumImageUrl: track.album.images[0].url,
            artist: track.artists.map((_artist: any) => _artist.name).join(", "),
            isPlaying: false,
            isLastPlayed: true,
            songUrl: track.external_urls.spotify,
            title: track.name,
        });
    } catch (error) {
        return NextResponse.json({ isPlaying: false, error: "Failed to fetch Spotify data" }, { status: 500 });
    }
}
