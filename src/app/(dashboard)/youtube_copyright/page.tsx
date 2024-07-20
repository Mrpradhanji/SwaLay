"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Select from "react-select";

type FormValues = {
  album: { label: string; value: string };
  youtubeLink: string;
  labelId: string;
  status: string;
};

const albumOptions = [
  { label: "Album 1", value: "1" },
  { label: "Album 2", value: "2" },
  { label: "Album 3", value: "3" },
  // Add more album options here
];

const statusOptions = [
  { label: "Pending", value: "pending" },
  { label: "Approved", value: "approved" },
  { label: "Rejected", value: "rejected" },
];

const isValidURL = (url: string): boolean => {
  const regex = /^https:\/\/(www\.)?youtube\.com\/watch\?v=[a-zA-Z0-9_-]+$/;
  return regex.test(url);
};

const extractID = (url: string): string => {
  const params = new URLSearchParams(new URL(url).search);
  return params.get("v") || "";
};

const YouTubeCopyrightForm = () => {
  const { register, handleSubmit, formState: { errors }, setError, clearErrors, setValue } = useForm<FormValues>();
  const [entries, setEntries] = useState<FormValues[]>([]);
  const [youtubeID, setYoutubeID] = useState("");

  const handleURLBlur = (url: string) => {
    if (isValidURL(url)) {
      const id = extractID(url);
      setYoutubeID(id);
      clearErrors("youtubeLink");
    } else {
      setError("youtubeLink", { type: "manual", message: "Invalid YouTube URL" });
    }
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setEntries([...entries, { ...data, status: "pending" }]);
  };

  const handleDelete = (index: number) => {
    const newEntries = [...entries];
    newEntries.splice(index, 1);
    setEntries(newEntries);
  };

  const handleStatusChange = (index: number, status: string) => {
    const newEntries = [...entries];
    newEntries[index].status = status;
    setEntries(newEntries);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white text-gray-900 rounded-lg shadow-2xl p-8 w-full max-w-6xl mb-8">
        <h1 className="text-2xl font-bold text-center mb-6">YouTube Copyright Form</h1>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="album">Album Name</label>
          <Select
            options={albumOptions}
            onChange={(option) => setValue("album", option as any)}
            placeholder="Select Album"
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.album && <p className="mt-1 text-xs text-red-500">{errors.album.message}</p>}
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="youtubeLink">YouTube Link</label>
          <input
            type="url"
            id="youtubeLink"
            {...register("youtubeLink", { required: "YouTube link is required" })}
            onBlur={(e) => handleURLBlur(e.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.youtubeLink && <p className="mt-1 text-xs text-red-500">{errors.youtubeLink.message}</p>}
          {youtubeID && <p className="mt-1 text-xs text-gray-600">YouTube ID: {youtubeID}</p>}
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="labelId">Label ID</label>
          <input
            type="text"
            id="labelId"
            {...register("labelId", { required: "Label ID is required" })}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.labelId && <p className="mt-1 text-xs text-red-500">{errors.labelId.message}</p>}
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>

      <div className="bg-white text-gray-900 rounded-lg shadow-2xl p-8 w-full max-w-6xl">
        <h2 className="text-xl font-bold text-center mb-6">Entries</h2>
        <ul className="space-y-4">
          {entries.map((entry, index) => (
            <li key={index} className="bg-gray-100 p-4 rounded-md shadow-sm flex justify-between items-center">
              <div>
                <p><strong>Album:</strong> {entry.album.label}</p>
                <p><strong>YouTube Link:</strong> <a href={entry.youtubeLink} target="_blank" rel="noopener noreferrer">{entry.youtubeLink}</a></p>
                <p><strong>Label ID:</strong> {entry.labelId}</p>
                <p><strong>Status:</strong> {entry.status}</p>
              </div>
              <div className="flex space-x-4">
                <Select
                  options={statusOptions}
                  defaultValue={statusOptions.find(option => option.value === entry.status)}
                  onChange={(option) => handleStatusChange(index, (option as any).value)}
                  className="w-40"
                />
                <button
                  onClick={() => handleDelete(index)}
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default YouTubeCopyrightForm;
