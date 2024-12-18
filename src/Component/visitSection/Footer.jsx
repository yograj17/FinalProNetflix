import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white py-6 px-6">
      <div className="flex flex-col gap-6">
        <div className="text-lg">
          Questions? Call
          <span className="cursor-pointer underline">000-800-919-1694</span>
        </div>
        <div className="text-md">
          <ul className="underline flex flex-col justify-between gap-2">
            <div className="flex flex-col gap-4">
              <li>FAQ</li>
              <li>Help</li>
              <li>Centre</li>
              <li>Account</li>

              <li>Media Centre</li>
              <li>Investor Relations</li>
              <li>Jobs</li>
              <li>Ways to Watch</li>

              <li>Terms of Use</li>
              <li>Privacy</li>
              <li>Cookie Preferences</li>
              <li>Corporate Information</li>

              <li>Contact Us</li>
              <li>Speed Test</li>
              <li>Legal Notices</li>
              <li>Only on Netflix</li>
            </div>
          </ul>
        </div>
        <div className="text-3xl font-semibold">Netflix Shirpur.......!</div>
      </div>
    </div>
  );
};

export default Footer;
