import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white py-7 px-32">
      <div className="flex flex-col gap-6">
        <div className="text-xl">
          Questions? Call
          <span className="cursor-pointer underline">000-800-919-1694</span>
        </div>
        <div className="text-xl">
          <ul className="underline flex justify-between">
            <div className="flex flex-col gap-4">
              <li>FAQ</li>
              <li>Help</li>
              <li>Centre</li>
              <li>Account</li>
            </div>
            <div className="flex flex-col gap-4">
              <li>Media Centre</li>
              <li>Investor Relations</li>
              <li>Jobs</li>
              <li>Ways to Watch</li>
            </div>
            <div className="flex flex-col gap-4">
              <li>Terms of Use</li>
              <li>Privacy</li>
              <li>Cookie Preferences</li>
              <li>Corporate Information</li>
            </div>
            <div className="flex flex-col gap-4">
              <li>Contact Us</li>
              <li>Speed Test</li>
              <li>Legal Notices</li>
              <li>Only on Netflix</li>
            </div>
          </ul>
        </div>
        <div className="text-3xl font-semibold">Netflix India.......!</div>
      </div>
    </div>
  );
};

export default Footer;
