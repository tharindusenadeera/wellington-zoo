'use client';
import Description from './_components/description';
import Nav from './_components/nav';
import Button from './_components/button';
import { useState } from 'react';
import Image from 'next/image';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

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
      {!uploading ? (
        <>
          {count < 4 ? (
            <div className="flex flex-1 justify-center items-center text-center">
              <div className="bg-amber-700/60 xl:p-4 lg:p-4 md:p-4 sm: p-2 xs:p-2 h-3/4 w-5/6 bg-opacity-90 relative">
                <>
                  <Description
                    title={`${descriptionArr[count].title}`}
                    description={`${descriptionArr[count].description}`}
                  />
                  <Button
                    className="absolute left-1/2 -translate-x-1/2 bottom-5 w-40"
                    title={`${count === 3 ? 'Try It' : 'Next'}`}
                    onClick={handleButtonOnClick}
                  />
                </>
              </div>
            </div>
          ) : (
            <div className="flex flex-1 justify-center items-center text-center">
              <div className="flex items-center bg-white backdrop-invert backdrop-opacity-10 w-48 p-4 text-black">
                <div className="mr-5">Upload Here</div> <AiOutlineCloudUpload size={30} onClick={handleUpload} />
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          <div className="flex flex-1 justify-center items-center text-center">
            <div style={{ width: 80, height: 80 }} className="mb-20">
              <CircularProgressbar
                value={66}
                styles={buildStyles({
                  rotation: 0.25,
                  pathTransitionDuration: 0.5,
                  pathColor: `rgba(62, 152, 199, ${66 / 100})`,
                  trailColor: '#d6d6d6',
                  backgroundColor: '#3e98c7',
                })}
              />
              <div className="flex justify-center items-center bg-white backdrop-invert backdrop-opacity-10 w-48 mt-2.5 p-4 -ml-14 text-black">
                Uploading ...
              </div>
            </div>
          </div>
          {/* <div className="flex flex-1 justify-center items-center text-center">
            <div className="flex items-center bg-white/20 backdrop-invert backdrop-opacity-10 w-48 p-4">
              Uploading ...
            </div>
          </div> */}
        </>
      )}
    </div>
  );
}
