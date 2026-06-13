"use client";
import { useEffect, useRef, useState } from "react";
import HeroSection from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  featuresData,
  howItWorksData,
  statsData,
  testimonialsData,
} from "@/data/landing";

import Image from "next/image";
import Link from "next/link";
import React from "react";

function Home() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.5 } // jab 50% visible ho to trigger
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="mt-40">
      <HeroSection></HeroSection>

      {/* stats data here */}
      <section className="py-20 bg-[#ffff]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((statsData, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-[#9B27AF] mb-2">
                  {statsData.value}
                </div>
                <div className="text-[#9B27AF] ">{statsData.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* features data here */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Everything you need to manage your finances
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {featuresData.map((feature, index) => (
            <Card
              key={index}
              className={
                "p-6 border border-transparent hover:border-[#842195] transition-colors duration-300"
              }
            >
              <CardContent className={"space-y-4 pt-4"}>
                {feature.icon}
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* how it works data here */}
      <section className="py-20 bg-[#FFFFFF]">
        <div className="container mx-auto px-4"></div>
        <div ref={ref} className="flex justify-center items-center mb-16">
          <h2 className="relative text-3xl font-bold inline-block text-center">
            How It Works
            <svg
              className="absolute left-1/2 -bottom-3 -translate-x-1/2 w-40 h-4"
              viewBox="0 0 200 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 10 C60 0, 140 20, 190 10"
                stroke="#9B27AF"
                strokeWidth="5"
                fill="none"
                strokeLinecap="round"
                strokeOpacity="0.9"
                className={isVisible ? "animate-draw" : ""}
              />
            </svg>
          </h2>

          <style jsx>{`
            @keyframes draw {
              0% {
                stroke-dasharray: 200;
                stroke-dashoffset: 200;
              }
              100% {
                stroke-dasharray: 200;
                stroke-dashoffset: 0;
              }
            }

            .animate-draw {
              animation: draw 1.2s ease-out forwards;
            }
          `}</style>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {howItWorksData.map((step, index) => (
            <div key={index} className="text-center ">
              <div className="w-16 h-16 bg-[#F5E7F8] rounded-full flex items-center justify-center mx-auto mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* //testimonials here */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <Card
                key={index}
                className={
                  "p-6 border border-transparent hover:border-[#842195] transition-colors duration-300"
                }
              >
                <CardContent className="pt-4">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />

                    <div className="ml-4">
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">{testimonial.quote}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* call to action button */}
      <section className="py-20 bg-[#ffff]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#9B27AF] mb-4">
            Ready To Take Control of Your Finances?
          </h2>
          <p className="text-[#9B27AF] mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already managing their finaces
            smarter with Financer
          </p>

          <Link href="/dashboard">
            <Button
              size="lg"
              className="bg-[#9B27AF] animate-bounce py-3 px-9 hover:bg-[#842195]"
            >
              Start Free Trial
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
