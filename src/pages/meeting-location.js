import { useState } from 'react';
import Link from 'next/link';

export default function MeetingLocation() {
  const [location, setLocation] = useState('');
  const [onlineLink, setOnlineLink] = useState('');
  const [saved, setSaved] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    console.log("Meeting location info:", { location, onlineLink });
    setSaved(true);
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Meeting Location & Online Meeting Link Management</h1>
      {saved ? (
        <p className="text-green-600">Information saved successfully!</p>
      ) : (
        <form onSubmit={handleSave}>
          <div className="mb-4">
            <label className="block mb-1 font-bold">Meeting Location:</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="border p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-bold">Online Meeting Link:</label>
            <input
              type="text"
              value={onlineLink}
              onChange={(e) => setOnlineLink(e.target.value)}
              className="border p-2 w-full"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2">
            Save Information
          </button>
        </form>
      )}
      <div className="mt-4">
        <Link href="/"><a className="text-blue-500">Back to Home</a></Link>
      </div>
    </div>
  );
}
