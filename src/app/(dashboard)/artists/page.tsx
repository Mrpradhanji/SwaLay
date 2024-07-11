'use client';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { mainModule } from 'process';




const ArtistProfile = () => {
  return (
    
    <div className="max-w-md mx-auto bg-gray mt-10 shadow-md rounded px-8 pt-8 pb-8 mb-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">New Artist Profile</h2>
        <button className="text-gray-500 hover:text-gray-700">
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="labelName">
            Label Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="labelName"
            type="text"
            placeholder="SwaLay Digital"
            disabled
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="songName">
            Song Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="songName"
            type="text"
            placeholder="Enter your song name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="isrc">
            ISRC
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="isrc"
            type="text"
            placeholder="Enter your isrc"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="artistName">
            Artist Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="artistName"
            type="text"
            placeholder="Enter Artist name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Choose your music platform:
          </label>
          <div className="flex flex-wrap">
            <label className="mr-4 mb-2">
              <input type="checkbox" className="mr-2" />
              Amazon Music
            </label>
            <label className="mr-4 mb-2">
              <input type="checkbox" className="mr-2" />
              JioSaavn
            </label>
            <label className="mr-4 mb-2">
              <input type="checkbox" className="mr-2" />
              iTunes
            </label>
            <label className="mb-2">
              <input type="checkbox" className="mr-2" />
              Spotify
            </label>
          </div>
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
