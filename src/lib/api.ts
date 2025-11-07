'use client'
import { useQuery } from "@tanstack/react-query";


export const useBookingCounter = () => {
  return useQuery({
    queryKey: ["booking"],
    queryFn: fetchbooking,
  });
};

async function fetchbooking() {
  try {
    const res = await fetch("/api/booking");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
