import { useState } from 'react';
import Link from 'next/link';

export default function MeetingMinutes() {
  const [minutes, setMinutes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Meeting minutes submitted:", minutes);
    setSubmitted(true);
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Basic Meeting Minutes Creation</h1>
      {submitted ? (
        <p className="text-green-600">Meeting minutes saved successfully!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1 font-bold">Meeting Minutes:</label>
            <textarea
              value={minutes}
              onChange={(e) => setMinutes(e.target.value)}
              className="border p-2 w-full"
              rows="10"
              required
            ></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2">
            Save Minutes
          </button>
        </form>
      )}
      <div className="mt-4">
        <Link href="/"><a className="text-blue-500">Back to Home</a></Link>
      </div>
    </div>
  );
}
