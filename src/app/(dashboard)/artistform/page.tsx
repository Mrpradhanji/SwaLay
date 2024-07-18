"use client"
import React, { useState } from 'react';

function extractID(url: string): string {
  const parts = url.split('/');
  return parts[parts.length - 1];
}

function ArtistForm() {
  const [artistType, setArtistType] = useState<string>('');
  const [imageURL, setImageURL] = useState<string | null>(null);
  const [uploadDate, setUploadDate] = useState<string | null>(null);
  const [spotifyID, setSpotifyID] = useState<string>('');
  const [instagramID, setInstagramID] = useState<string>('');
  const [twitterID, setTwitterID] = useState<string>('');
  const [facebookID, setFacebookID] = useState<string>('');

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setImageURL(result);
        setUploadDate(new Date().toISOString());
      };
      reader.readAsDataURL(file);
    }
  };

  const clearImage = () => {
    setImageURL(null);
    setUploadDate(null);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-700 p-8">
      <div className="bg-white text-gray-900 rounded-lg shadow-2xl p-8 w-full max-w-6xl">
        <h1 className="text-3xl font-bold text-center mb-8">Add New Artist</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="artistType">Artist Type</label>
            <select
              id="artistType"
              name="artistType"
              value={artistType}
              onChange={(e) => setArtistType(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Select Artist Type</option>
              <option value="vocalist">Vocalist</option>
              <option value="producer">Producer</option>
              <option value="lyricist">Lyricist</option>
            </select>
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="spotify">Spotify URL</label>
            <input
              type="url"
              id="spotify"
              name="spotify"
              onBlur={(e) => setSpotifyID(extractID(e.target.value))}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            {spotifyID && <p className="mt-2 text-sm text-gray-600">Spotify ID: {spotifyID}</p>}
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="instagram">Instagram URL</label>
            <input
              type="url"
              id="instagram"
              name="instagram"
              onBlur={(e) => setInstagramID(extractID(e.target.value))}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            {instagramID && <p className="mt-2 text-sm text-gray-600">Instagram ID: {instagramID}</p>}
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="twitter">Twitter URL</label>
            <input
              type="url"
              id="twitter"
              name="twitter"
              onBlur={(e) => setTwitterID(extractID(e.target.value))}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            {twitterID && <p className="mt-2 text-sm text-gray-600">Twitter ID: {twitterID}</p>}
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="facebook">Facebook URL</label>
            <input
              type="url"
              id="facebook"
              name="facebook"
              onBlur={(e) => setFacebookID(extractID(e.target.value))}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            {facebookID && <p className="mt-2 text-sm text-gray-600">Facebook ID: {facebookID}</p>}
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="artistImage">Upload Artist Image</label>
            <input
              type="file"
              id="artistImage"
              name="artistImage"
              accept="image/*"
              onChange={handleFileUpload}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>

        {imageURL && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Image Preview:</h2>
            <img src={imageURL} alt="Artist" className="border border-gray-300 rounded-lg" />
            {uploadDate && <p className="mt-2 text-gray-600">Uploaded on: {uploadDate}</p>}
            <button
              onClick={clearImage}
              className="mt-4 px-6 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-700 transition"
            >
              Clear Image
            </button>
          </div>
        )}

        <div className="flex justify-center space-x-4 mt-8">
          <button
            type="submit"
            className="px-6 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-700 transition"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={clearImage}
            className="px-6 py-2 bg-gray-500 text-white rounded-lg shadow hover:bg-gray-700 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}

export default ArtistForm;
