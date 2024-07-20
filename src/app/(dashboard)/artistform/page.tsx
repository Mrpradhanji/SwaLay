"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaSpotify, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

type FormValues = {
  artistType: string;
  name: string;
  spotify: string;
  instagram: string;
  twitter: string;
  facebook: string;
  phone: string;
  email: string;
  artistImage: FileList;
};

function extractID(url: string): string {
  const parts = url.split(/[/?]/);
  return parts[parts.length - 1];
}

const isValidURL = (url: string, type: string): boolean => {
  const regexes = {
    spotify: /^https:\/\/(open\.spotify\.com\/(track|album|artist)\/[a-zA-Z0-9]+(\?.*)?)$/,
    instagram:/^https:\/\/(www\.)?instagram\.com\/[a-zA-Z0-9._]+\/?(\?.*)?$/,
    twitter: /^https:\/\/x\.com\/[a-zA-Z0-9_]+\/?$/,
    facebook:/(?:https?:\/\/)?(?:www\.)?facebook\.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w\-]*\/)*([\w\-\.]*)/,

  };
  return regexes[type].test(url);
};

function ArtistForm() {
  const { register, handleSubmit, formState: { errors }, setError, clearErrors, setValue } = useForm<FormValues>();
  const [imageURL, setImageURL] = useState<string | null>(null);
  const [uploadDate, setUploadDate] = useState<string | null>(null);
  const [spotifyID, setSpotifyID] = useState("");
  const [instagramID, setInstagramID] = useState("");
  const [twitterID, setTwitterID] = useState("");
  const [facebookID, setFacebookID] = useState("");

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result;
        if (typeof result === 'string') {
          setImageURL(result);
        } else {
          console.error('FileReader result is not a string:', result);
        }
        setUploadDate(new Date().toISOString());
      };
      reader.readAsDataURL(file);
    }
  };

  const clearImage = () => {
    setImageURL(null);
    setUploadDate(null);
  };

  const handleURLBlur = (url: string, type: keyof FormValues) => {
    if (isValidURL(url, type)) {
      const id = extractID(url);
      switch (type) {
        case 'spotify':
          setSpotifyID(id);
          break;
        case 'instagram':
          setInstagramID(id);
          break;
        case 'twitter':
          setTwitterID(id);
          break;
        case 'facebook':
          setFacebookID(id);
          break;
      }
      clearErrors(type);
    } else {
      setError(type, { type: 'manual', message: `Invalid ${type} URL` });
    }
  };

  const onSubmit: SubmitHandler<FormValues> = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white text-gray-900 rounded-lg shadow-2xl p-8 w-full max-w-6xl">
        <h1 className="text-2xl font-bold text-center mb-6">Add New Artist</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Artist Type</label>
            <div className="flex space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  value="vocalist"
                  {...register("artistType", { required: "Artist type is required" })}
                  className="form-radio text-indigo-600"
                />
                <span className="ml-2">Vocalist</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  value="producer"
                  {...register("artistType", { required: "Artist type is required" })}
                  className="form-radio text-indigo-600"
                />
                <span className="ml-2">Producer</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  value="lyricist"
                  {...register("artistType", { required: "Artist type is required" })}
                  className="form-radio text-indigo-600"
                />
                <span className="ml-2">Lyricist</span>
              </label>
            </div>
            {errors.artistType && <p className="mt-1 text-xs text-red-500">{errors.artistType.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              {...register("name", { required: "Name is required" })}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="spotify">Spotify URL</label>
            <div className="relative">
              <input
                type="url"
                id="spotify"
                {...register("spotify", { required: "Spotify URL is required" })}
                onBlur={(e) => handleURLBlur(e.target.value, 'spotify')}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 pl-10"
              />
              <FaSpotify className="absolute left-3 top-3 text-green-500" />
            </div>
            {errors.spotify && <p className="mt-1 text-xs text-red-500">{errors.spotify.message}</p>}
            {spotifyID && <p className="mt-1 text-xs text-gray-600">Spotify ID: {spotifyID}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="instagram">Instagram URL</label>
            <div className="relative">
              <input
                type="url"
                id="instagram"
                {...register("instagram", { required: "Instagram URL is required" })}
                onBlur={(e) => handleURLBlur(e.target.value, 'instagram')}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 pl-10"
              />
              <FaInstagram className="absolute left-3 top-3 text-pink-500" />
            </div>
            {errors.instagram && <p className="mt-1 text-xs text-red-500">{errors.instagram.message}</p>}
            {instagramID && <p className="mt-1 text-xs text-gray-600">Instagram ID: {instagramID}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="twitter">Twitter URL</label>
            <div className="relative">
              <input
                type="url"
                id="twitter"
                {...register("twitter", { required: "Twitter URL is required" })}
                onBlur={(e) => handleURLBlur(e.target.value, 'twitter')}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 pl-10"
              />
              <FaTwitter className="absolute left-3 top-3 text-blue-500" />
            </div>
            {errors.twitter && <p className="mt-1 text-xs text-red-500">{errors.twitter.message}</p>}
            {twitterID && <p className="mt-1 text-xs text-gray-600">Twitter ID: {twitterID}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="facebook">Facebook URL</label>
            <div className="relative">
              <input
                type="url"
                id="facebook"
                {...register("facebook", { required: "Facebook URL is required" })}
                onBlur={(e) => handleURLBlur(e.target.value, 'facebook')}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 pl-10"
              />
              <FaFacebook className="absolute left-3 top-3 text-blue-500" />
            </div>
            {errors.facebook && <p className="mt-1 text-xs text-red-500">{errors.facebook.message}</p>}
            {facebookID && <p className="mt-1 text-xs text-gray-600">Facebook ID: {facebookID}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              {...register("phone", { required: "Phone number is required" })}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              {...register("email", { required: "Email is required" })}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="artistImage">Artist Image</label>
            <input
              type="file"
              id="artistImage"
              {...register("artistImage", { required: "Artist image is required" })}
              onChange={handleFileUpload}
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
            />
            {errors.artistImage && <p className="mt-1 text-xs text-red-500">{errors.artistImage.message}</p>}
            {imageURL && (
              <div className="mt-2">
                <img src={imageURL} alt="Artist" className="w-32 h-32 object-cover rounded-md shadow-lg" />
                <button
                  type="button"
                  onClick={clearImage}
                  className="mt-2 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Clear Image
                </button>
                {uploadDate && (
                  <p className="mt-1 text-xs text-gray-600">Upload Date: {uploadDate}</p>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default ArtistForm;
