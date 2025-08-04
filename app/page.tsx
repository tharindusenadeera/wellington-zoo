'use client';
import Description from './_components/description';
import Nav from './_components/nav';
import Button from './_components/button';
import { useState } from 'react';
import Image from 'next/image';
import { AiOutlineCloudUpload } from 'react-icons/ai';

const descriptionArr = [
  {
    title: 'KIA ORA',
    description: 'World First Giraffe Re-Identification System For Zoo Visitors',
  },
  {
    title: 'What is Re-Identification?',
    description: 'It is a process which focuses on ID Objects any time. This is same as your smartphone ID your face.',
  },
  {
    title: 'What is this app?',
    description: 'This app mainly focuses on ID Giraffes in zoo. We want you to feel like an explorer than a visitor.',
  },
  {
    title: 'How it Works?',
    description:
      'You just need to upload a clear picture of the Giraffe’s body. Then app will give you bio of the Giraffe.',
  },
];

export default function Home() {
  const [count, setCount] = useState<number>(0);
  const [uploading, setUploading] = useState<boolean>(false);

  const handleButtonOnClick = () => {
    if (count < 4) setCount((prev) => prev + 1);
  };

  const handleUpload = () => {
    setUploading(true);
  };

  return (
    <div className="h-screen flex flex-col">
      <Nav />
      {count < 4 ? (
        <div className="flex flex-1 justify-center items-center text-center">
          <div className="bg-amber-700/60 xl:p-4 lg:p-4 md:p-4 sm: p-2 xs:p-2 h-3/4 w-5/6 bg-opacity-90">
            {count < 4 ? (
              <>
                <Description
                  title={`${descriptionArr[count].title}`}
                  description={`${descriptionArr[count].description}`}
                />
                <Button title={`${count === 3 ? 'Try It' : 'Next'}`} onClick={handleButtonOnClick} />
              </>
            ) : (
              <div className="flex">
                Upload Here <Image src="/images/upload.png" alt="upload" width={10} height={10} />
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="flex flex-1 justify-center items-center text-center">
          <div className="flex items-center bg-white/20 backdrop-invert backdrop-opacity-10 w-48 p-4">
            <div className="mr-2">Upload Here</div>{' '}
            <AiOutlineCloudUpload width={50} height={50} onClick={handleUpload} />
          </div>
        </div>
      )}
    </div>
  );
}
