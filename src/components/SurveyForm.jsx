import { useEffect, useState } from 'react';

export const SurveyForm = ({ userEmail }) => {
  const testArray = new Array(24).fill(0);

  const [userSelection, setUserSelection] = useState([]);

  const handleClickEnhancedImage = index => {
    const newUserSelection = [...userSelection];
    if (userSelection.includes(index)) {
      const idx = newUserSelection.indexOf(index);
      newUserSelection.splice(idx, 1);
    } else {
      newUserSelection.push(index);
    }
    setUserSelection(newUserSelection);
  };

  useEffect(() => {
    const newUserSelection = [...userSelection];
    if (userSelection.length > 3) {
      newUserSelection.shift();
      setUserSelection(newUserSelection);
    }
    console.log(newUserSelection);
  }, [userSelection]);

  const setIsActive = index => {
    return userSelection.includes(index) ? 'bg-blue-300' : '';
  };

  useEffect(() => {
    //  TODO: Get Data from API by userEmail
    console.log('SurveyForm', userEmail);
  }, []);

  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        {/* TODO: Change to Original Images */}
        <div className="mx-auto max-w-5xl">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
            Product description
          </h2>
          <div className="my-8 xl:mb-16 xl:mt-12">
            <img
              className="w-full dark:hidden"
              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-showcase.svg"
              alt=""
            />
            <img
              className="hidden w-full dark:block"
              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-showcase-dark.svg"
              alt=""
            />
          </div>
          <div className="mx-auto max-w-2xl space-y-6">
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              The iMac "M1" 8-Core CPU/8-Core GPU/4 USB-C Shaped Ports (2021)
              model features a 5-nm Apple M1 processor with 8 cores (4
              performance cores and 4 efficiency cores), an 8-core GPU, a
              16-core Neural Engine, 8 GB of onboard RAM, and a 1 TB onboard
              SSD.
            </p>
          </div>

          {/* TODO: Add Selection images */}
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl mt-20">
            Product description
          </h2>
          <div className="my-8 xl:mb-16 xl:mt-12 flex flex-wrap gap-4 w-full justify-between">
            {testArray.map((_, index) => {
              return (
                <div
                  className={
                    `flex flex-col grow justify-between h-48 min-w-[157px] items-center outline outline-1 hover:outline-blue-700 rounded outline-gray-200 px-3 py-3 ` +
                    setIsActive(index)
                  }
                  onClick={() => handleClickEnhancedImage(index)}
                  key={index}
                >
                  <div className="self-start">No. {index}</div>
                  <div className="grow w-full h-40 bg-banner-after bg-contain bg-no-repeat bg-center"></div>
                </div>
              );
            })}
          </div>

          <div className="w-full flex justify-between items-center">
            <button
              type="button"
              className="w-16 h-10 py-2 px-2 rounded bg-white text-blue-600 border border-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white"
            >
              Prev
            </button>
            <div className="font-semibold">1 / 4</div>
            <button
              type="button"
              className="w-16 h-10 py-2 px-2 rounded bg-white text-blue-600 border border-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
