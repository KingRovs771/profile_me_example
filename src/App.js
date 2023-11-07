import React from 'react';

export default function Example() {
  return (
    <div className="min-h-full">
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl text-center font-bold tracking-tight text-gray-900">MY PERSONAL INFORMATION</h1>
        </div>
      </header>
      <main>
        <div className="h-100 w-100 auto mx-auto px-4 py-6 sm:px-6 lg:px-8 bg-gray-800 ">
          <div className="flex justify-center">
            <img className="flex h-64 w-64 rounded-full m-12 ring-2 ring-white items-center" src="https://storage.cloud.google.com/profile_bucket_dicoding/20221016_093926.jpg?authuser=1" alt="" />
          </div>
          <div>
            <h3 className="text-center font-bold text-white text-5xl underline">Rizky Budiarto</h3>
            <br></br>
            <p className="text-center font-medium text-white text-2xl">Full Stack Developer</p>
          </div>
        </div>

        <div className="flex columns-2 max-w-7xl mx-auto px-4 py-6	">
          <div className="mx-auto w-3/5">
            <h2 className="font-bold text-lg">My Story</h2>
            <p className="font-normal py-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
          <div className="mx-auto px-4 w-2/5">
            <h2 className="font-bold text-lg">Personal Information</h2>
            <div className="py-7 leading-10">
              <p>Age : 22 years old</p>
              <hr></hr>
              <p>Phone : +62-857-32xx-xxx</p>
              <hr></hr>
              <p>Email : rizkybudiarto890@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h3 className="font-bold text-2xl text-center">Find Me !</h3>
          <div className="columns-3 py-6">
            <div className="flex justify-center">
              <img className="w-12" src="https://storage.cloud.google.com/profile_bucket_dicoding/Facebook_f_logo_(2019).svg?authuser=1"></img>
            </div>
            <div className="flex justify-center">
              <img className="w-12" src="https://storage.cloud.google.com/profile_bucket_dicoding/Instagram_logo_2016.svg?authuser=1"></img>
            </div>
            <div className="flex justify-center">
              <img className="w-12" src="https://storage.cloud.google.com/profile_bucket_dicoding/LinkedIn_icon.svg?authuser=1"></img>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
