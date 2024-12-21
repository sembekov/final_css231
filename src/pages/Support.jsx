import React from "react";

function Support() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Customer Support</h1>
      <p className="text-gray-700 mb-4">
        Our support team is here to help you with any issues or questions. Feel
        free to reach out to us through the following channels:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Email: support@example.com</li>
        <li>Phone: +123-456-7890</li>
        <li>Live Chat: Available 9 AM - 5 PM, Monday to Friday</li>
      </ul>
      <p className="text-gray-700 mt-4">
        We strive to respond to all inquiries within 24 hours. Your satisfaction
        is our priority.
      </p>
    </div>
  );
}

export default Support;
