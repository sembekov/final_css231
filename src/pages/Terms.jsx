import React from "react";

function Terms() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
      <p className="text-gray-700 mb-4">
        Welcome to our store! By using our website, you agree to the following
        terms and conditions.
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>All purchases are subject to our return policy.</li>
        <li>
          Unauthorized duplication or distribution of content is prohibited.
        </li>
        <li>
          Prices and availability of products are subject to change without
          notice.
        </li>
      </ul>
      <p className="text-gray-700 mt-4">
        For any questions regarding these terms, please contact us at
        support@example.com.
      </p>
    </div>
  );
}

export default Terms;
