"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const AdminBookingPage = () => {
  const [count, setCount] = useState<number>(2050);
  const [loading, setLoading] = useState(false);

  // ✅ handle submit
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ count }),
      });

      if (!res.ok) throw new Error("Request failed");

      const data = await res.json();
      toast.success(`Booking count updated to ${data.count}`);
    } catch (error) {
      console.error(error);
      toast.error("Failed to update booking count");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <form
        onSubmit={onSubmit}
        className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-sm border border-gray-100"
      >
        <h2 className="text-xl font-semibold mb-4 text-center">
          Update Booking Counter
        </h2>

        <input
          type="number"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
          placeholder="Enter booking count"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <Button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white hover:bg-blue-700"
        >
          {loading ? "Updating..." : "Submit"}
        </Button>
      </form>
    </div>
  );
};

export default AdminBookingPage;
