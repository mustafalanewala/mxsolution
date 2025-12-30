"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const launchDate = new Date("2026-01-01T00:00:00").getTime();
      const now = new Date().getTime();
      const difference = launchDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <main className="flex flex-col items-center justify-center gap-12 px-8 py-16">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 tracking-tight">
            Mx Solution
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light">
            Going Live on 1st of Jan
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 text-center transform hover:scale-105 transition-transform duration-200">
            <div className="text-4xl md:text-6xl font-bold text-blue-600 mb-2">
              {timeLeft.days.toString().padStart(2, "0")}
            </div>
            <div className="text-sm md:text-lg text-gray-500 font-medium uppercase tracking-wide">
              Days
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 text-center transform hover:scale-105 transition-transform duration-200">
            <div className="text-4xl md:text-6xl font-bold text-green-600 mb-2">
              {timeLeft.hours.toString().padStart(2, "0")}
            </div>
            <div className="text-sm md:text-lg text-gray-500 font-medium uppercase tracking-wide">
              Hours
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 text-center transform hover:scale-105 transition-transform duration-200">
            <div className="text-4xl md:text-6xl font-bold text-purple-600 mb-2">
              {timeLeft.minutes.toString().padStart(2, "0")}
            </div>
            <div className="text-sm md:text-lg text-gray-500 font-medium uppercase tracking-wide">
              Minutes
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 text-center transform hover:scale-105 transition-transform duration-200">
            <div className="text-4xl md:text-6xl font-bold text-red-600 mb-2">
              {timeLeft.seconds.toString().padStart(2, "0")}
            </div>
            <div className="text-sm md:text-lg text-gray-500 font-medium uppercase tracking-wide">
              Seconds
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
