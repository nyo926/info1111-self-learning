import { useState } from 'react';
import Link from 'next/link';

export default function MeetingRequest() {
  const [name, setName] = useState('');
  const [reason, setReason] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Meeting request submitted:", { name, reason });
    setSubmitted(true);
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Meeting Request Submission</h1>
      {submitted ? (
        <p className="text-green-600">Request submitted successfully!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1 font-bold">Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-bold">Reason for Request:</label>
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="border p-2 w-full"
              required
            ></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2">
            Submit Request
          </button>
        </form>
      )}
      <div className="mt-4">
        <Link href="/"><a className="text-blue-500">Back to Home</a></Link>
      </div>
    </div>
  );
}
