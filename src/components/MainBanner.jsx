import Swal from 'sweetalert2';

export const MainBanner = ({ setPage }) => {
  const handleClickStart = async () => {
    const { value: email } = await Swal.fire({
      title: 'Input email address',
      input: 'email',
      inputLabel: 'Enter your email address',
      inputPlaceholder: 'Enter your email address',
      // text: 'Do you want to continue',
      icon: 'info',
      // confirmButtonText: 'Cool',
    });

    if (email) {
      const sumbit = await Swal.fire({
        title: 'Thank you!',
        text: `We will send you the latest offers to ${email}`,
        icon: 'success',
      });

      if (sumbit.isConfirmed) {
        // TODO: Change URL
        // window.location.href = 'www.naver.com';
        console.log('Sumbit');
        setPage(1);
      }
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <section className="bg-white py-8 dark:bg-gray-900 md:py-16">
        <div className="mx-auto grid max-w-screen-2xl px-4 pb-8 md:grid-cols-12 lg:gap-12 lg:pb-16 xl:gap-4">
          <div className="content-center justify-self-start md:col-span-7 md:text-start">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight dark:text-white md:max-w-2xl md:text-5xl xl:text-6xl">
              {/* TODO: Change Text */}
              Limited Time Offer!
              <br />
              Up to 50% OFF!
            </h1>
            <p className="mb-4 max-w-2xl text-gray-500 dark:text-gray-400 md:mb-12 md:text-lg lg:mb-5 lg:text-xl">
              {/* TODO: Change Text */}
              Don't Wait - Limited Stock at Unbeatable Prices!
            </p>
            <a
              href="#"
              className="inline-block rounded-lg bg-primary-700 px-6 py-3.5 text-center font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              onClick={() => handleClickStart()}
            >
              {/* TODO: Change Text */}
              Shop Now
            </a>
          </div>
          <div className="hidden md:col-span-5 md:mt-0 md:flex justify-between gap-4 w-full">
            <div className="flex flex-col justify-between items-center">
              <div>안녕하세요 아마 설명일듯</div>
              <div className="bg-banner-before w-40 h-40 bg-contain bg-center bg-no-repeat"></div>
            </div>
            <div className="flex flex-col justify-between items-center">
              <div>안녕하세요 아마 설명일듯</div>
              <div className="bg-banner-after w-40 h-40 bg-contain bg-center bg-no-repeat"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
