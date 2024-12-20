import React from "react";

function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-gray-700 mb-4">
        Your privacy is important to us. This policy outlines how we collect,
        use, and protect your personal information.
      </p>
      <h2 className="text-2xl font-bold mt-4">Information We Collect</h2>
      <p className="text-gray-700 mb-4">
        We collect information you provide directly to us, such as when you
        create an account, place an order, or contact us.
      </p>
      <h2 className="text-2xl font-bold mt-4">How We Use Your Information</h2>
      <p className="text-gray-700 mb-4">
        We use your information to fulfill orders, improve our services, and
        communicate with you about your account or transactions.
      </p>
      <h2 className="text-2xl font-bold mt-4">Data Security</h2>
      <p className="text-gray-700">
        We implement a variety of security measures to protect your personal
        information. However, no method of transmission over the Internet is
        100% secure.
      </p>
      <p className="text-gray-700 mt-4">
        For more details, contact our privacy team at privacy@example.com.
      </p>
    </div>
  );
}

export default PrivacyPolicy;
