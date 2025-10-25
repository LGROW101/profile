'use client';
import Link from 'next/link';
import { FaMedium } from "react-icons/fa6";
import { ImGithub } from "react-icons/im";
import { BsLinkedin } from "react-icons/bs";
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PersonalInfoProps {
  text: string;
}

export default function PersonalInfo({ text }: PersonalInfoProps) {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf'; 
    link.download = 'Chaloemrat_CV.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="text-center p-10 py-10">
      <h2 className="text-5xl py-2 text-gray-800 dark:text-blue-300 md:text-6xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        {`Hi! I'm a`}
        <span className="wrap">{text}</span>
      </h2>
      <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
         Focusing on DevOps and Security, with a growing interest in Site Reliability Engineering (SRE).
      </p>

      {/* Social Media Links */}
      <div className="text-5xl flex justify-center items-center gap-16 py-3 text-gray-600 dark:text-gray-400">
        {/* GitHub */}
        <Link 
          href="https://github.com/LGROW101" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex flex-col items-center hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
        >
          <ImGithub />
        </Link>

        {/* LinkedIn */}
        <Link 
          href="https://www.linkedin.com/in/chaloemrat-hengsahatsawat-6253682a7/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex flex-col items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <BsLinkedin />
        </Link>

        {/* Medium */}
        <Link 
          href="https://medium.com/@Chaloemrat" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex flex-col items-center hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
        >
          <FaMedium />
        </Link>
      </div>

      {/* Download CV Button */}
      <Button 
        size="lg" 
        className="gap-2 mt-4" 
        onClick={handleDownload}
      >
        <Download className="w-5 h-5" />
        Download CV
      </Button>
    </div>
  );
}