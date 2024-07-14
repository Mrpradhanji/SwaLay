"use client";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import ArtistProfileSchema from '@/Schema/artistProfileSchema';

const ArtistProfile = () => {
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = {
      labelName: formData.get('labelName'),
      songName: formData.get('songName'),
      isrc: formData.get('isrc'),
      artistName: formData.get('artistName'),
      platforms: formData.getAll('platforms'),
    };

    // Validate the data against the schema
    const result = ArtistProfileSchema.safeParse(data);
    if (!result.success) {
      setErrors(result.error.format());
    } else {
      setErrors({});
      // Handle successful form submission
      console.log(data);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-gray mt-10 shadow-md rounded px-8 pt-8 pb-8 mb-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">New Artist Profile</h2>
        <button className="text-gray-500 hover:text-gray-700">
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="labelName">
            Label Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="labelName"
            name="labelName"
            type="text"
            placeholder="SwaLay Digital"
            disabled
            value="SwaLay Digital" // Since this field is disabled, provide a value
          />
          {errors.labelName && <p className="text-red-500 text-sm">{errors.labelName._errors[0]}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="songName">
            Song Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="songName"
            name="songName"
            type="text"
            placeholder="Enter your song name"
          />
          {errors.songName && <p className="text-red-500 text-sm">{errors.songName._errors[0]}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="isrc">
            ISRC
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="isrc"
            name="isrc"
            type="text"
            placeholder="Enter your ISRC"
          />
          {errors.isrc && <p className="text-red-500 text-sm">{errors.isrc._errors[0]}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="artistName">
            Artist Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="artistName"
            name="artistName"
            type="text"
            placeholder="Enter artist name"
          />
          {errors.artistName && <p className="text-red-500 text-sm">{errors.artistName._errors[0]}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Choose your music platform:
          </label>
          <div className="flex flex-wrap">
            {['Amazon Music', 'JioSaavn', 'iTunes', 'Spotify'].map((platform) => (
              <label key={platform} className="mr-4 mb-2">
                <input type="checkbox" name="platforms" value={platform} className="mr-2" />
                {platform}
              </label>
            ))}
          </div>
          {errors.platforms && <p className="text-red-500 text-sm">{errors.platforms._errors[0]}</p>}
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ArtistProfile;
