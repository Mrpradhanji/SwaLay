
'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const getLabelWithAsterisk = (label) => (
  <span>
    {label} <span className="text-red-500">*</span>
  </span>
);

const LinkArtistProfileForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md relative">
        <div className="flex justify-between items-center mb-6 border-b pb-2">
          <h2 className="text-lg font-medium text-gray-900">Link Existing Artist Profile</h2>
          <button 
            type="button" 
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={() => console.log('Close button clicked')}
          >
           <FontAwesomeIcon icon={faXmark} bounce />
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Label Name
            </label>
            <input
              type="text"
              {...register('labelName')}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              defaultValue="SwaLay Digital"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              {getLabelWithAsterisk('Song Name')}
            </label>
            <input
              type="text"
              {...register('songName', { required: 'Song Name is required' })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your song name"
            />
            {errors.songName && (
              <span className="text-red-500 text-sm">{errors.songName.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              {getLabelWithAsterisk('ISRC')}
            </label>
            <input
              type="text"
              {...register('isrc', { required: 'ISRC is required' })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your ISRC"
            />
            {errors.isrc && (
              <span className="text-red-500 text-sm">{errors.isrc.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              {getLabelWithAsterisk('Artist Name')}
            </label>
            <input
              type="text"
              {...register('artistName', { required: 'Artist Name is required' })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter Artist name"
            />
            {errors.artistName && (
              <span className="text-red-500 text-sm">{errors.artistName.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Choose your music platform:
            </label>
            <div className="flex flex-wrap space-x-4">
              <label>
                <input
                  type="checkbox"
                  {...register('platforms.spotify')}
                  className="mr-2"
                />
                Spotify
              </label>
              <label>
                <input
                  type="checkbox"
                  {...register('platforms.itunes')}
                  className="mr-2"
                />
                iTunes
              </label>
              <label>
                <input
                  type="checkbox"
                  {...register('platforms.jiosavan')}
                  className="mr-2"
                />
                JioSaavn
              </label>
              <label>
                <input
                  type="checkbox"
                  {...register('platforms.amazon')}
                  className="mr-2"
                />
                Amazon
              </label>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Spotify
            </label>
            <input
              type="text"
              {...register('spotify')}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-200"
              placeholder="Enter link of Spotify"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              iTunes
            </label>
            <input
              type="text"
              {...register('itunes')}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-200"
              placeholder="Enter link of iTunes"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              JioSaavn
            </label>
            <input
              type="text"
              {...register('jiosavan')}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-200"
              placeholder="Enter link of JioSaavn"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Amazon
            </label>
            <input
              type="text"
              {...register('amazon')}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-200"
              placeholder="Enter link of Amazon"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LinkArtistProfileForm;
