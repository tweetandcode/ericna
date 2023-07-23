import Image from 'next/image'
import React from 'react';

function Tag({ children } : { children:React.ReactNode}) {
  return (
    <div className='hover:bg-black hover:text-white cursor-pointer border-2 rounded-full py-2 px-4 text-[14px]'>{children}</div>
  );
}

function Routine({ children } : { children: React.ReactNode }) {
  return (
    <div className="">
      <h4 className='text-4xl font-bold mb-8'>{children}</h4>
      <div className='rounded-2xl border-4 items-center border-dotted flex py-[46px] px-[112px] gap-2'>
      <svg width="32" height="32" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" width="52" height="52" rx="26" fill="black"/>
<path d="M32.5 27H27.5V32C27.5 32.55 27.05 33 26.5 33C25.95 33 25.5 32.55 25.5 32V27H20.5C19.95 27 19.5 26.55 19.5 26C19.5 25.45 19.95 25 20.5 25H25.5V20C25.5 19.45 25.95 19 26.5 19C27.05 19 27.5 19.45 27.5 20V25H32.5C33.05 25 33.5 25.45 33.5 26C33.5 26.55 33.05 27 32.5 27Z" fill="white" fill-opacity="0.9"/>
</svg>
<div className='text-gray-300'>Add Product</div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <header className='py-[27px] border-b-2 max-w-[1400px] mx-auto px-10'>
        <div className="flex justify-between items-center">
          <h1 className="logo font-bold text-2xl">Breakout</h1>

          <nav>
            <ul className='flex gap-4 items-center'>
              <li><a href="">Home</a></li>
              <li><a href="">Products</a></li>
              <li><a href="">Discussions</a></li>
              <li><a className="font-bold" href="">Skin Diary</a></li>
              <li><a href="">Blog</a></li>
            </ul>
          </nav> 

          <div className='flex items-center gap-2'>
            <div>
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.29 27.29L28 26V21C28 17.93 26.36 15.36 23.5 14.68V14C23.5 13.17 22.83 12.5 22 12.5C21.17 12.5 20.5 13.17 20.5 14V14.68C17.63 15.36 16 17.92 16 21V26L14.71 27.29C14.08 27.92 14.52 29 15.41 29H28.58C29.48 29 29.92 27.92 29.29 27.29ZM26 27H18V21C18 18.52 19.51 16.5 22 16.5C24.49 16.5 26 18.52 26 21V27ZM22 32C23.1 32 24 31.1 24 30H20C20 31.1 20.89 32 22 32Z" fill="black"/>
                <rect x="0.5" y="0.5" width="43" height="43" rx="21.5" stroke="black"/>
              </svg>
            </div>


            <div className='flex items-center bg-[#C3BFF4] rounded-[32px] gap-2 p-[4px] pr-[16px]'>
              <div>
                <img src="/profile.png" alt="" />
              </div>
              <div>Jocelyn Culhane</div>
            </div>
          </div>
        </div>
        <h2 className='text-[64px] font-bold'>My Routine</h2>
      </header>

      <main className='grid grid-flow-col auto-cols-max	gap-[24px] mt-[64px] max-w-[1400px] mx-auto px-10'>
        <div className="border p-[24px] rounded-[28px] max-w-[390px]">
          <img src="dog.png" alt="" />
          <h3 className="mt-[40px] text-[32px] font-bold">Jocelyn Culhane</h3>
          <h4 className="font-bold text-xl">@ryry</h4>
          <p className='mt-[24px]'><span className='font-semibold'>Age</span>: 30-40</p>
          <p className='mt-4'><span className='font-semibold'>Location</span>: New-York, USA</p>
          <p className='mt-4'>
            <div className='font-semibold mb-4'>About me</div>
            <p className="text-left font-light text-[14px]">
              I'm a passionate individual with a love for exploring the wonders of life. Curiosity is my driving force, and I'm constantly seeking new experiences and knowledge that broaden my horizons. Whether it's diving into the depths of a gripping novel or embarking on an adventure in the great outdoors, I embrace every opportunity to learn and grow.
            </p>
          </p>
          <p className='mt-4'>
            <div className='font-semibold'>My skin</div>
            <div className='flex gap-2 flex-wrap mt-2'>
              <Tag>Combination</Tag>
              <Tag>Sensitive</Tag>
              <Tag>Lines</Tag>
              <Tag>Acne</Tag>
              <Tag>Redness</Tag>
            </div>
          </p>
        </div>
        <div>
          <div className='px-4 flex gap-4 mb-8'>
            <div className='font-bold'>Feed</div>
            <div className='font-bold border-b-2 border-black'>My Routine</div>
            <div className='font-bold'>Skincare Shelf</div>
          </div>
          <div className="flex flex-col gap-20">
            <Routine>☀️ Morning</Routine>
            <Routine>🌙 Night</Routine>
          </div>
        </div>
      </main>

      <footer className='bg-[#C3BFF4] mt-[196px]'>
        <div className="max-w-[1400px] mx-auto px-10 flex justify-between py-[54px]">
        <div className='font-bold'>Breakout</div>
        <div className='flex gap-4 text-[14px]'>
          <div className='flex gap-2'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.075 3.35999C9.075 3.35999 6.01875 3.56999 4.02 5.17499C4.01063 5.17874 3.99938 5.18436 3.99 5.18999C3.64313 5.51062 3.3825 6.00749 3.06 6.71999C2.7375 7.43249 2.39625 8.34937 2.085 9.37499C1.46438 11.4281 0.960002 13.9481 0.960002 16.32C0.958127 16.4044 0.978752 16.4869 1.02 16.56C1.72125 17.7919 3.01125 18.5362 4.215 19.005C5.41875 19.4737 6.53063 19.6612 7.095 19.68C7.25438 19.6856 7.40625 19.6125 7.5 19.485L8.67 17.865C9.61313 18.0881 10.7194 18.24 12 18.24C13.2806 18.24 14.3869 18.0881 15.33 17.865L16.5 19.485C16.5938 19.6125 16.7456 19.6856 16.905 19.68C17.4694 19.6612 18.5813 19.4737 19.785 19.005C20.9888 18.5362 22.2788 17.7919 22.98 16.56C23.0213 16.4869 23.0419 16.4044 23.04 16.32C23.04 13.9481 22.5356 11.4281 21.915 9.37499C21.6038 8.34937 21.2625 7.43249 20.94 6.71999C20.6175 6.00749 20.3569 5.51062 20.01 5.18999C20.0006 5.18436 19.9894 5.17874 19.98 5.17499C17.9813 3.56999 14.925 3.35999 14.925 3.35999C14.8894 3.35624 14.8556 3.35624 14.82 3.35999C14.6531 3.38249 14.5125 3.49124 14.445 3.64499C14.445 3.64499 14.2819 4.00312 14.175 4.51499C13.2394 4.36499 12.4519 4.31999 12 4.31999C11.5481 4.31999 10.7606 4.36499 9.825 4.51499C9.71813 4.00312 9.555 3.64499 9.555 3.64499C9.4725 3.45749 9.27938 3.34312 9.075 3.35999ZM8.775 4.39499C8.81063 4.49249 8.835 4.58436 8.865 4.69499C7.78313 4.94624 6.59813 5.35686 5.49 6.04499C5.31563 6.11811 5.20125 6.28686 5.19563 6.47624C5.19188 6.66374 5.29875 6.83811 5.4675 6.92061C5.63813 7.00124 5.84063 6.97686 5.985 6.85499C8.20875 5.47686 11.0381 5.27999 12 5.27999C12.9619 5.27999 15.7913 5.47686 18.015 6.85499C18.1594 6.97686 18.3619 7.00124 18.5325 6.92061C18.7013 6.83811 18.8081 6.66374 18.8044 6.47624C18.7988 6.28686 18.6844 6.11811 18.51 6.04499C17.4019 5.35686 16.2169 4.94624 15.135 4.69499C15.165 4.58436 15.1894 4.49249 15.225 4.39499C15.7725 4.46249 17.9006 4.74936 19.35 5.89499C19.4438 5.98124 19.77 6.46124 20.07 7.12499C20.37 7.78874 20.685 8.65312 20.985 9.64499C21.57 11.58 22.0425 13.9669 22.065 16.155C21.5194 17.0381 20.4956 17.6944 19.44 18.105C18.48 18.4781 17.5838 18.645 17.115 18.69L16.305 17.595C16.7175 17.4619 17.0888 17.3175 17.415 17.175C18.6263 16.6425 19.275 16.08 19.275 16.08C19.4738 15.9019 19.4906 15.5962 19.3125 15.3975C19.1344 15.1987 18.8288 15.1819 18.63 15.36C18.63 15.36 18.1275 15.8194 17.025 16.305C16.62 16.4831 16.1288 16.6594 15.57 16.815C15.4406 16.8 15.3113 16.8375 15.21 16.92C14.3156 17.1375 13.2525 17.28 12 17.28C10.7381 17.28 9.67313 17.1244 8.775 16.905C8.67375 16.8375 8.55 16.8094 8.43 16.83C7.86938 16.6744 7.38188 16.4831 6.975 16.305C5.8725 15.8194 5.37 15.36 5.37 15.36C5.26125 15.2587 5.11125 15.2156 4.965 15.24C4.77938 15.2681 4.62563 15.4012 4.575 15.5831C4.5225 15.7631 4.5825 15.9581 4.725 16.08C4.725 16.08 5.37375 16.6425 6.585 17.175C6.91125 17.3175 7.2825 17.4619 7.695 17.595L6.885 18.69C6.41625 18.645 5.52 18.4781 4.56 18.105C3.50438 17.6944 2.48063 17.0381 1.935 16.155C1.9575 13.9669 2.43 11.58 3.015 9.64499C3.315 8.65312 3.63 7.78874 3.93 7.12499C4.23 6.46124 4.55625 5.98124 4.65 5.89499C6.09938 4.74936 8.2275 4.46249 8.775 4.39499ZM8.88 10.08C7.65563 10.08 6.72 11.1919 6.72 12.48C6.72 13.7681 7.65563 14.88 8.88 14.88C10.1044 14.88 11.04 13.7681 11.04 12.48C11.04 11.1919 10.1044 10.08 8.88 10.08ZM15.12 10.08C13.8956 10.08 12.96 11.1919 12.96 12.48C12.96 13.7681 13.8956 14.88 15.12 14.88C16.3444 14.88 17.28 13.7681 17.28 12.48C17.28 11.1919 16.3444 10.08 15.12 10.08ZM8.88 11.04C9.51188 11.04 10.08 11.6475 10.08 12.48C10.08 13.3125 9.51188 13.92 8.88 13.92C8.24813 13.92 7.68 13.3125 7.68 12.48C7.68 11.6475 8.24813 11.04 8.88 11.04ZM15.12 11.04C15.7519 11.04 16.32 11.6475 16.32 12.48C16.32 13.3125 15.7519 13.92 15.12 13.92C14.4881 13.92 13.92 13.3125 13.92 12.48C13.92 11.6475 14.4881 11.04 15.12 11.04Z" fill="black" stroke="black"/>
</svg>

            Discord
          </div>
          <div className='flex gap-2'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

            Facebook
          </div>
          <div className='flex gap-2'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 7.99999V13C16 13.7956 16.3161 14.5587 16.8787 15.1213C17.4413 15.6839 18.2044 16 19 16C19.7957 16 20.5587 15.6839 21.1213 15.1213C21.6839 14.5587 22 13.7956 22 13V12C21.9999 9.74302 21.2362 7.55247 19.8333 5.78452C18.4303 4.01658 16.4706 2.77521 14.2726 2.26229C12.0747 1.74936 9.76794 1.99503 7.72735 2.95936C5.68676 3.92368 4.0324 5.54995 3.03326 7.57371C2.03412 9.59748 1.74897 11.8997 2.22417 14.1061C2.69937 16.3125 3.90698 18.2932 5.65063 19.7263C7.39429 21.1593 9.57143 21.9603 11.8281 21.9991C14.0847 22.0379 16.2881 21.3122 18.08 19.94" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            Email
          </div>
        </div>

        <div className='flex text-[14px] gap-4'>
          <div>Privacy Policy</div>
          <div>2023.Breakout</div>
        </div>
        </div>
      </footer>
    </>
  )
}
