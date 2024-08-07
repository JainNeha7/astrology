"use client";
import React from "react";
import Modal1 from "./Modal1";
import Modal2 from "./Modal2";
import Modal3 from "./Modal3";
import Modal4 from "./Modal4";
import Modal5 from "./Modal5";
import Modal6 from "./Modal6";
import Modal7 from "./Modal7";
import Modal8 from "./Modal8";
import Modal9 from "./Modal9";
import Modal10 from "./Modal10";
import Modal11 from "./Modal11";
import Modal12 from "./Modal12";
import Modal13 from "./Modal13";
import Modal14 from "./Modal14";
import Modal15 from "./Modal15";
import Modal16 from "./Modal16";
import Modal17 from "./Modal17";
import Modal18 from "./Modal18";
import Modal19 from "./Modal19";
import Modal20 from "./Modal20";
import Modal21 from "./Modal21";
// import Image from 'next/image'

function BookingSection() {
  return (
    <>
      <section>
        <div>
          <div className="my-8  bg-gradient-to-r rounded-full from-yellow-300 via-yellow-200 to-yellow-300 flex items-center justify-center">
            <div className="flex-col py-2">
              <h2 className="font-serif text-black text-4xl font-bold">
                {" "}
                Booking Section{" "}
              </h2>
              <div className="w-45 h-1 border-b-4 border-orange-500 mt-1 rounded-2xl"></div>
            </div>
          </div>

          <div className="flex pt-2  justify-center">
            <div className="flex-wrap flex justify-evenly  ">

              <div className="card my-4 card-compact w-96 bg-base-100 shadow-2xl">
                <figure>
                  <img src="/tarot.jpg" alt="card" />
                </figure>

                <div className="card-body ml-4">
                  <div className="flex justify-between">
                    <div>
                      <h2 className="card-title text-2xl font-serif font-bold">
                        Tarot Reading
                      </h2>
                      <div className="border-b-4 mb-2 border-yellow-400 w-36 h-1"></div>
                      <div className="rating ">
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                          checked
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        {/* <input type="radio" name="rating-1" className="mask mask-star" /> */}
                      </div>
                    </div>
                    {/* <div className=" ">
                      <div className="bg-orange-500 p-4 mr-4 mt-2 text-white font-bold text-lg rounded-full">
                        ₹ 5,555
                      </div>
                    </div> */}
                    <div className="flex items-center mt-2 flex-col">
                      <div className="bg-orange-500 p-4 text-white font-bold text-lg text-center text-nowrap rounded-full">
                        <p className="line-through">₹ 5,555</p>
                        <p>25% off</p>
                        ₹ 4,166.25
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-blue-600 hover:cursor-pointer hover:bg-yellow-300 rounded flex justify-center"
                    onClick={() =>
                      document.getElementById("my_modal_1").showModal()
                    }
                  >
                    <div className="text-white p-1 font-semibold text-lg font-sans">
                      Book Now{" "}
                    </div>
                  </div>
                  <Modal1 />
                </div>
              </div>

              {/* Another card */}

              <div className="card my-4 card-compact w-96 bg-base-100 shadow-2xl">
                <figure>
                  <img src="/soulrecord.png" alt="card" />
                </figure>

                <div className="card-body ml-4">
                  <div className="flex justify-between">
                    <div>
                      <h2 className="card-title text-2xl font-serif font-bold">
                        Soul records through akashic Records Reading
                      </h2>
                      <div className="border-b-4 mb-2 border-yellow-400 w-36 h-1"></div>
                      <div className="rating ">
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                          checked
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                      </div>
                    </div>
                    {/* <div className="flex-none">
                      <div className="bg-orange-500 p-4 mr-4 mt-2 text-white font-bold text-lg rounded-full">
                        ₹ 7,777
                      </div>
                    </div> */}
                    <div className="flex items-center mt-2 flex-col">
                      <div className="bg-orange-500 p-4 text-white font-bold text-lg text-center text-nowrap rounded-full">
                        <p className="line-through">₹ 7,777</p>
                        <p>25% off</p>
                        ₹ 5,832.75
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-blue-600 hover:cursor-pointer hover:bg-yellow-300 rounded flex justify-center"
                    onClick={() =>
                      document.getElementById("my_modal_2").showModal()
                    }
                  >
                    <div className="text-white p-1 font-semibold text-lg font-sans">
                      Book Now{" "}
                    </div>
                    <Modal2 />
                  </div>
                </div>
              </div>
              {/* Another card */}

              <div className="card my-4 card-compact w-96 bg-base-100 shadow-2xl">
                <figure>
                  <img src="/MEDIUMSHIP.png" alt="card" />
                </figure>

                <div className="card-body ml-4">
                  <div className="flex justify-between">
                    <div>
                      <h2 className="card-title text-2xl font-serif font-bold">
                        Mediumship
                      </h2>
                      <div className="border-b-4 mb-2 border-yellow-400 w-36 h-1"></div>
                      <div className="rating ">
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                          checked
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                      </div>
                    </div>
                    {/* <div className=" ">
                      <div className="bg-orange-500 p-4 mr-4 mt-2 text-white font-bold text-lg rounded-full">
                        ₹ 8,888
                      </div>
                    </div> */}
                    <div className="flex items-center mt-2 flex-col">
                      <div className="bg-orange-500 p-4 text-white font-bold text-lg text-center text-nowrap rounded-full">
                        <p className="line-through">₹ 8,888</p>
                        <p>25% off</p>
                        ₹ 6,666
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-blue-600 hover:cursor-pointer hover:bg-yellow-300 rounded flex justify-center"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    <div className="text-white p-1 font-semibold text-lg font-sans">
                      Book Now{" "}
                    </div>
                    <Modal3 />
                  </div>
                </div>
              </div>
              {/* Another card */}

              <div className="card my-4card-compact w-96 bg-base-100 shadow-2xl">
                <figure>
                  <img src="/pastlife.png" alt="card" />
                </figure>

                <div className="card-body ml-4">
                  <div className="flex justify-between">
                    <div>
                      <h2 className="card-title text-2xl font-serif font-bold">
                        Past Life Regression Online/Offline
                      </h2>
                      <div className="border-b-4 mb-2 border-yellow-400 w-36 h-1"></div>
                      <div className="rating ">
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                          checked
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                      </div>
                    </div>
                    {/* <div className=" flex-none">
                      <div className="bg-orange-500 p-4 mr-2 mt-2 text-white font-bold text-lg rounded-full">
                        ₹ 5,555
                      </div>
                    </div> */}
                    <div className="flex items-center mt-2 flex-col">
                      <div className="bg-orange-500 p-4 text-white font-bold text-lg text-center rounded-full text-nowrap">
                        <p className="line-through">₹ 5,555</p>
                        <p>25% off</p>
                        ₹ 4,166.25
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-blue-600 hover:cursor-pointer hover:bg-yellow-300 rounded flex justify-center"
                    onClick={() =>
                      document.getElementById("my_modal_4").showModal()
                    }
                  >
                    <div className="text-white p-1 font-semibold text-lg font-sans">
                      Book Now{" "}
                    </div>
                    <Modal4 />
                  </div>
                </div>
              </div>
              {/* Another card */}

              <div className="card my-4 card-compact w-96 bg-base-100 shadow-2xl">
                <figure>
                  <img src="/lamafhera.png" alt="card" />
                </figure>

                <div className="card-body ml-4">
                  <div className="flex justify-between">
                    <div>
                      <h2 className="card-title text-2xl font-serif font-bold">
                        Lamafera
                      </h2>
                      <div className="border-b-4 mb-2 border-yellow-400 w-36 h-1"></div>
                      <div className="rating ">
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                          checked
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                      </div>
                    </div>
                    {/* <div className=" ">
                      <div className="bg-orange-500 p-4 mr-4 mt-2 text-white font-bold text-lg rounded-full">
                        ₹ 2,222
                      </div>
                    </div> */}
                    <div className="flex items-center mt-2 flex-col">
                      <div className="bg-orange-500 p-4 text-white font-bold text-lg text-center rounded-full text-nowrap">
                        <p className="line-through">₹ 2,222</p>
                        <p>25% off</p>
                        ₹ 1,666.50
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-blue-600 hover:cursor-pointer hover:bg-yellow-300 rounded flex justify-center"
                    onClick={() =>
                      document.getElementById("my_modal_5").showModal()
                    }
                  >
                    <div className="text-white p-1 font-semibold text-lg font-sans">
                      Book Now{" "}
                    </div>
                    <Modal5 />
                  </div>
                </div>
              </div>
              {/* Another card */}

              <div className="card card-compact w-96 h-100 mt-1 bg-base-100 shadow-2xl">
                <figure>
                  <img
                    src="/humakara.jpeg"
                    alt="card"
                    className="w-4/6 0 -my-8"
                  />
                </figure>

                <div className="card-body ml-4">
                  <div className="flex justify-between">
                    <div>
                      <h2 className="card-title text-2xl font-serif font-bold">
                        Humkara with Haleem
                      </h2>
                      <div className="border-b-4 mb-2 border-yellow-400 w-36 h-1"></div>
                      <div className="rating ">
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                          checked
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                      </div>
                    </div>
                    <div className="flex-none ">
                      <h2 className="text-center">2 Sittings</h2>
                      {/* <div className="bg-orange-500 p-4 mr-4 mt-2 text-white font-bold text-lg rounded-full">
                        ₹ 8,888
                      </div> */}
                      <div className="flex items-center mt-2 flex-col">
                        <div className="bg-orange-500 p-4 text-white font-bold text-lg text-center rounded-full text-nowrap">
                          <p className="line-through">₹ 8,888</p>
                          <p>25% off</p>
                          ₹ 6,666
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-blue-600 hover:cursor-pointer hover:bg-yellow-300 rounded flex justify-center"
                    onClick={() =>
                      document.getElementById("my_modal_6").showModal()
                    }
                  >
                    <div className="text-white p-1 font-semibold text-lg font-sans">
                      Book Now{" "}
                    </div>
                    <Modal6 />
                  </div>
                </div>
              </div>
              {/* Another card */}

              <div className="card my-4 card-compact w-96 bg-base-100 shadow-2xl">
                <figure>
                  <img src="/markeshhealing.png" alt="card" />
                </figure>

                <div className="card-body ml-4">
                  <div className="flex justify-between">
                    <div>
                      <h2 className="card-title text-2xl font-serif font-bold">
                        Markesh Healings
                      </h2>
                      <div className="border-b-4 mb-2 border-yellow-400 w-36 h-1"></div>
                      <div className="rating ">
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                          checked
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                      </div>
                    </div>
                    <div className="flex-none ">
                      <h2 className="font-semibold text-center">(1 Month)</h2>
                      {/* <div className="bg-orange-500 p-4 mr-4 mt-2 text-white font-bold text-lg rounded-full ">
                        ₹ 33,333
                      </div> */}
                      <div className="flex items-center mt-2 flex-col">
                        <div className="bg-orange-500 p-4 text-white font-bold text-lg text-center rounded-full text-nowrap">
                          <p className="line-through">₹ 33,333</p>
                          <p>25% off</p>
                          ₹ 24,999.75
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-blue-600 hover:cursor-pointer hover:bg-yellow-300 rounded flex justify-center"
                    onClick={() =>
                      document.getElementById("my_modal_7").showModal()
                    }
                  >
                    <div className="text-white p-1 font-semibold text-lg font-sans">
                      Book Now{" "}
                    </div>
                    <Modal7 />
                  </div>
                </div>
              </div>
              {/* Another card */}

              <div className="card my-4 card-compact w-96 bg-base-100 shadow-2xl">
                <figure>
                  <img src="/planetry.png" alt="card" />
                </figure>

                <div className="card-body ml-4">
                  <div className="flex justify-between">
                    <div>
                      <h2 className="card-title text-2xl font-serif font-bold">
                        Planetry Shiftings Healings
                      </h2>
                      <div className="border-b-4 mb-2 border-yellow-400 w-36 h-1"></div>
                      <div className="rating ">
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                          checked
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                      </div>
                    </div>
                    <div className=" flex-none">
                      <h2>2 Sittings for chosen planet</h2>
                      {/* <div className="bg-orange-500 p-4 mr-4 mt-2 text-center text-white font-bold text-lg rounded-full">
                        ₹ 5,555
                      </div> */}

                      <div className="flex items-center mt-2 flex-col">
                        <div className="bg-orange-500 p-4 text-white font-bold text-lg text-center rounded-full text-nowrap">
                          <p className="line-through">₹ 5,555</p>
                          <p>25% off</p>
                          ₹ 4,166.25
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-blue-600 hover:cursor-pointer hover:bg-yellow-300 rounded flex justify-center"
                    onClick={() =>
                      document.getElementById("my_modal_8").showModal()
                    }
                  >
                    <div className="text-white p-1 font-semibold text-lg font-sans">
                      Book Now{" "}
                    </div>
                    <Modal8 />
                  </div>
                </div>
              </div>
              {/* Another card */}

              <div className="card my-4 card-compact w-96 bg-base-100 shadow-2xl">
                <figure>
                  <img src="/sadesati.png" alt="card" />
                </figure>

                <div className="card-body ml-4">
                  <div className="flex justify-between">
                    <div>
                      <h2 className="card-title text-2xl font-serif font-bold">
                        Sade Sati of Shani Vibration Shifting
                      </h2>
                      <div className="border-b-4 mb-2 border-yellow-400 w-36 h-1"></div>
                      <div className="rating ">
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                          checked
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                      </div>
                    </div>
                    <div className=" flex-none">
                      <h2 className="font-semibold text-center">(1 Month)</h2>
                      {/* <div className="bg-orange-500 p-4 mr-4 mt-2 text-white font-bold text-lg rounded-full">
                        ₹ 22,222
                      </div> */}
                      <div className="flex items-center mt-2 flex-col">
                        <div className="bg-orange-500 p-4 text-white font-bold text-lg text-center rounded-full text-nowrap">
                          <p className="line-through">₹ 22,222</p>
                          <p>25% off</p>
                          ₹ 16,666.50
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-blue-600 hover:cursor-pointer hover:bg-yellow-300 rounded flex justify-center"
                    onClick={() =>
                      document.getElementById("my_modal_9").showModal()
                    }
                  >
                    <div className="text-white p-1 font-semibold text-lg font-sans">
                      Book Now{" "}
                    </div>
                    <Modal9 />
                  </div>
                </div>
              </div>
              {/* Another card */}

              <div className="card my-4 card-compact w-96 bg-base-100 shadow-2xl">
                <figure>
                  <img src="/shivsakti.png" alt="card" />
                </figure>

                <div className="card-body ml-4">
                  <div className="flex justify-between">
                    <div>
                      <h2 className="card-title text-2xl font-serif font-bold">
                        Shalvik With Shiva Healing
                      </h2>
                      <div className="border-b-4 mb-2 border-yellow-400 w-36 h-1"></div>
                      <div className="rating ">
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                          checked
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                      </div>
                    </div>
                    <div className="flex-none ">
                      <h2>
                        (Personal Energy Chart
                        <br /> will be Prepared)
                      </h2>
                      {/* <div className="bg-orange-500 p-4 mr-4 mt-2 text-white text-center font-bold text-lg rounded-full">
                        ₹ 5,555
                      </div> */}

                      <div className="flex items-center mt-2 flex-col">
                        <div className="bg-orange-500 p-4 text-white font-bold text-lg text-center rounded-full text-nowrap">
                          <p className="line-through">₹ 5,555</p>
                          <p>25% off</p>
                          ₹ 4,166.25
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-blue-600 hover:cursor-pointer hover:bg-yellow-300 rounded flex justify-center"
                    onClick={() =>
                      document.getElementById("my_modal_10").showModal()
                    }
                  >
                    <div className="text-white p-1 font-semibold text-lg font-sans">
                      Book Now{" "}
                    </div>
                    <Modal10 />
                  </div>
                </div>
              </div>
              {/* Another card */}

              <div className="card my-4 card-compact w-96 bg-base-100 shadow-2xl">
                <figure>
                  <img src="/yogmaya.png" alt="card" />
                </figure>

                <div className="card-body ml-4">
                  <div className="flex justify-between">
                    <div>
                      <h2 className="card-title text-2xl font-serif font-bold">
                        Yogmaya
                      </h2>
                      <div className="border-b-4 mb-2 border-yellow-400 w-36 h-1"></div>
                      <div className="rating ">
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                          checked
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                      </div>
                    </div>
                    <div className="flex-none ">
                      <h2 className="font-semibold ">(1 Month)</h2>
                      {/* <div className="bg-orange-500 p-4 mr-4 mt-2 text-white font-bold text-lg rounded-full">
                        ₹ 55,555
                      </div> */}
                      <div className="flex items-center mt-2 flex-col">
                        <div className="bg-orange-500 p-4 text-white font-bold text-lg text-center rounded-full text-nowrap">
                          <p className="line-through">₹ 55,555</p>
                          <p>25% off</p>
                          ₹ 41,666.25
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-blue-600 hover:cursor-pointer hover:bg-yellow-300 rounded flex justify-center"
                    onClick={() =>
                      document.getElementById("my_modal_11").showModal()
                    }
                  >
                    <div className="text-white p-1 font-semibold text-lg font-sans">
                      Book Now{" "}
                    </div>
                    <Modal11 />
                  </div>
                </div>
              </div>
              {/* Another card */}

              <div className="card my-4 card-compact w-96 bg-base-100 shadow-2xl">
                <figure>
                  <img src="/maabaglamati.png" alt="card" />
                </figure>

                <div className="card-body ml-4">
                  <div className="flex justify-between">
                    <div>
                      <h2 className="card-title text-2xl font-serif font-bold">
                        Maa Baglamukhi healing
                      </h2>
                      <div className="border-b-4 mb-2 border-yellow-400 w-36 h-1"></div>
                      <div className="rating ">
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                          checked
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                      </div>
                    </div>
                    <div className="flex-none ">
                      <h2 className="text-center">3 Sittings</h2>
                      {/* <div className="bg-orange-500 p-4 mr-4 mt-2 text-white font-bold text-lg rounded-full">
                        ₹ 7,777
                      </div> */}
                      <div className="flex items-center mt-2 flex-col">
                        <div className="bg-orange-500 p-4 text-white font-bold text-lg text-center rounded-full text-nowrap">
                          <p className="line-through">₹ 7,777</p>
                          <p>25% off</p>
                          ₹ 5,832.75
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-blue-600 hover:cursor-pointer hover:bg-yellow-300 rounded flex justify-center"
                    onClick={() =>
                      document.getElementById("my_modal_12").showModal()
                    }
                  >
                    <div className="text-white p-1 font-semibold text-lg font-sans">
                      Book Now{" "}
                    </div>
                    <Modal12 />
                  </div>
                </div>
              </div>
              {/* Another card */}

              <div className="card my-4 card-compact w-96 bg-base-100 shadow-2xl">
                <figure>
                  <img src="/Anxietytreatments.png" alt="card" />
                </figure>

                <div className="card-body ml-4">
                  <div className="flex justify-between">
                    <div>
                      <h2 className="card-title text-2xl font-serif font-bold">
                        Holistic Treatment for Anxiety
                      </h2>
                      <div className="border-b-4 mb-2 border-yellow-400 w-36 h-1"></div>
                      <div className="rating ">
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                          checked
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                      </div>
                    </div>
                    <div className=" flex-none">
                      <h2 className="font-semibold ">(1 Month)</h2>
                      {/* <div className="bg-orange-500 p-4 mr-4 mt-2 text-white font-bold text-lg rounded-full">
                        ₹ 35,333
                      </div> */}
                      <div className="flex items-center mt-2 flex-col">
                        <div className="bg-orange-500 p-4 text-white font-bold text-lg text-center rounded-full text-nowrap">
                          <p className="line-through">₹ 35,333</p>
                          <p>25% off</p>
                          ₹ 26,499.75
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-blue-600 hover:cursor-pointer hover:bg-yellow-300 rounded flex justify-center"
                    onClick={() =>
                      document.getElementById("my_modal_14").showModal()
                    }
                  >
                    <div className="text-white p-1 font-semibold text-lg font-sans">
                      Book Now{" "}
                    </div>
                    <Modal14 />
                  </div>
                </div>
              </div>
              {/* Another card */}

              <div className="card my-4 card-compact w-96 bg-base-100 shadow-2xl">
                <figure>
                  <img
                    src="/Spiritualtreatmentforconceptualpregnancy.png"
                    alt="card"
                  />
                </figure>

                <div className="card-body ml-4">
                  <div className="flex justify-between">
                    <div>
                      <h2 className="card-title text-2xl font-serif font-bold">
                        Holistic Treatment for Pregnancy
                      </h2>
                      <div className="border-b-4 mb-2 border-yellow-400 w-36 h-1"></div>
                      <div className="rating ">
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                          checked
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                      </div>
                    </div>
                    <div className="flex-none ">
                      {/* <div className="bg-orange-500 p-4 mr-4 mt-2 text-white font-bold text-lg rounded-full">
                        ₹ 7,777
                      </div> */}
                      <div className="flex items-center mt-2 flex-col">
                        <div className="bg-orange-500 p-4 text-white font-bold text-lg text-center rounded-full text-nowrap">
                          <p className="line-through">₹ 7,777</p>
                          <p>25% off</p>
                          ₹ 5,832.75
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-blue-600 hover:cursor-pointer hover:bg-yellow-300 rounded flex justify-center"
                    onClick={() =>
                      document.getElementById("my_modal_15").showModal()
                    }
                  >
                    <div className="text-white p-1 font-semibold text-lg font-sans">
                      Book Now{" "}
                    </div>
                    <Modal15 />
                  </div>
                </div>
              </div>
              {/* Another card */}

              <div className="card my-4 card-compact w-96 bg-base-100 shadow-2xl">
                <figure>
                  <img src="/cancer.png" alt="card" />
                </figure>

                <div className="card-body ml-4">
                  <div className="flex justify-between">
                    <div>
                      <h2 className="card-title text-2xl font-serif font-bold">
                        Holistic Treatment Consultation for Health issues
                      </h2>
                      <div className="border-b-4 mb-2 border-yellow-400 w-36 h-1"></div>
                      <div className="rating ">
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                          checked
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                      </div>
                    </div>
                    <div className="flex-none ">
                      {/* <div className="bg-orange-500 p-4 mr-4 mt-2 text-white font-bold text-lg rounded-full">
                        ₹ 5,555
                      </div> */}
                      <div className="flex items-center mt-2 flex-col">
                        <div className="bg-orange-500 p-4 text-white font-bold text-lg text-center rounded-full text-nowrap">
                          <p className="line-through">₹ 5,555</p>
                          <p>25% off</p>
                          ₹ 4,166.25
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-blue-600 hover:cursor-pointer hover:bg-yellow-300 rounded flex justify-center"
                    onClick={() =>
                      document.getElementById("my_modal_17").showModal()
                    }
                  >
                    <div className="text-white p-1 font-semibold text-lg font-sans">
                      Book Now{" "}
                    </div>
                    <Modal17 />
                  </div>
                </div>
              </div>
              {/* Another card */}
              <div className="card  my-4 card-compact w-96 bg-base-100 shadow-2xl">
                <figure>
                  <img src="/vasudha.png" alt="card" />
                </figure>

                <div className="card-body ml-4">
                  <div className="flex justify-between">
                    <div>
                      <h2 className="card-title text-2xl font-serif font-bold">
                        Vasudha & Kuber energy
                      </h2>
                      <div className="border-b-4 mb-2 border-yellow-400 w-36 h-1"></div>
                      <div className="rating">
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                          checked
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                      </div>
                    </div>
                    <div className="flex-none ">
                      <h3>1 Sitting</h3>
                      {/* <div className="bg-orange-500 p-4 mr-4 mt-2 text-white font-bold text-lg rounded-full">
                        ₹ 7,777
                      </div> */}
                      <div className="flex items-center mt-2 flex-col">
                        <div className="bg-orange-500 p-4 text-white font-bold text-lg text-center rounded-full text-nowrap">
                          <p className="line-through">₹ 7,777</p>
                          <p>25% off</p>
                          ₹ 5,832.75
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() =>
                      document.getElementById("my_modal_18").showModal()
                    }
                    className="bg-blue-600 hover:cursor-pointer hover:bg-yellow-300 rounded flex justify-center"
                  >
                    <div className="text-white p-1 font-semibold text-lg font-sans">
                      Book Now{" "}
                    </div>
                    <Modal18 />
                  </div>
                </div>
              </div>
              {/* Another card */}

              <div className="card my-4 card-compact w-96 bg-base-100 shadow-2xl">
                <figure>
                  <img src="/vastuhealing.png" alt="card" />
                </figure>

                <div className="card-body ml-4">
                  <div className="flex justify-between">
                    <div>
                      <h2 className="card-title text-2xl font-serif font-bold">
                        Vastu healing
                      </h2>
                      <div className="border-b-4 mb-2 border-yellow-400 w-36 h-1"></div>
                      <div className="rating ">
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star "
                          checked
                        />
                      </div>
                    </div>
                    <div className="flex-none ">
                      {/* <div className="bg-orange-500 p-4 mr-4 mt-2 text-white font-bold text-lg rounded-full">
                        ₹ 7,777
                      </div> */}

                      <div className="flex items-center mt-2 flex-col">
                        <div className="bg-orange-500 p-4 text-white font-bold text-lg text-center rounded-full text-nowrap">
                          <p className="line-through">₹ 7,777</p>
                          <p>25% off</p>
                          ₹ 5,832.75
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-blue-600 hover:cursor-pointer hover:bg-yellow-300 rounded flex justify-center"
                    onClick={() =>
                      document.getElementById("my_modal_19").showModal()
                    }
                  >
                    <div className="text-white p-1 font-semibold text-lg font-sans">
                      Book Now{" "}
                    </div>
                    <Modal19 />
                  </div>
                </div>
              </div>
              {/* Another card */}
              <div className="card my-4 card-compact w-96 bg-base-100 shadow-2xl">
                <figure>
                  <img src="/physicaltreatment.png" alt="card" />
                </figure>

                <div className="card-body ml-4">
                  <div className="flex justify-between">
                    <div>
                      <h2 className="card-title text-2xl font-serif font-bold">
                        Course <br /> Advance Tarot Program
                      </h2>
                      <div className="border-b-4 mb-2 border-yellow-400 w-36 h-1"></div>
                      <div className="rating ">
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"

                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                          checked
                        />
                      </div>
                    </div>
                    <div className=" flex-none">
                      {/* <div className="bg-orange-500 p-4 mr-4 mt-2 text-white font-bold text-lg rounded-full">
                        ₹ 7,777
                      </div> */}

                      <div className="flex items-center mt-2 flex-col">
                        <div className="bg-orange-500 p-4 text-white font-bold text-lg text-center rounded-full text-nowrap">
                          <p className="line-through">₹ 7,777</p>
                          <p>25% off</p>
                          ₹ 5,832.75
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-blue-600 hover:cursor-pointer hover:bg-yellow-300 rounded flex justify-center"
                    onClick={() =>
                      document.getElementById("my_modal_16").showModal()
                    }
                  >
                    <div className="text-white p-1 font-semibold text-lg font-sans">
                      Book Now{" "}
                    </div>
                    <Modal16 />
                  </div>
                </div>
              </div>

              {/* Another Card .. */}

              <div className="card my-4 card-compact w-96 bg-base-100 shadow-2xl">
                <figure>
                  <img src="/newAstro.jpeg" alt="card" style={{ width: "300px", height: "300px", objectFit: "scale-down" }} />
                </figure>

                <div className="card-body ml-4">
                  <div className="flex justify-between">
                    <div>
                      <h2 className="card-title text-2xl font-serif font-bold">
                        Maa Kali Group Healing
                      </h2>
                      <div className="border-b-4 mb-2 border-yellow-400 w-36 h-1"></div>
                      <div className="rating ">
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        // checked
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        {/* <input type="radio" name="rating-1" className="mask mask-star" /> */}
                      </div>
                    </div>
                    <div className=" ">
                      <p style={{ marginLeft: "10px" }}>Per Hour</p>
                      {/* <div className="bg-orange-500 px-4 py-2 mr-4 mt-2 text-white font-bold text-lg rounded-full">
                        ₹1,111
                      </div> */}
                       <div className="flex items-center mt-2 flex-col">
                      <div className="bg-orange-500 p-4 text-white font-bold text-lg text-center rounded-full text-nowrap">
                        <p className="line-through">₹ 1,111</p>
                        <p>25% off</p>
                        ₹ 833.25
                      </div>
                    </div>
                    </div>
                  </div>
                  <div
                    className="bg-blue-600 hover:cursor-pointer hover:bg-yellow-300 rounded flex justify-center"
                    onClick={() =>
                      document.getElementById("my_modal_20").showModal()
                    }
                  >
                    <div className="text-white p-1 font-semibold text-lg font-sans">
                      Book Now{" "}
                    </div>
                  </div>
                  <Modal20 />
                </div>
              </div>

              {/* Another Card.. */}

              <div className="card my-4 card-compact w-96 bg-base-100 shadow-2xl">
                <figure>
                  <img src="/shalvik_healing_new1.jpeg" alt="card" style={{ width: "300px", height: "300px", objectFit: "scale-down" }} />
                </figure>

                <div className="card-body ml-4">
                  <div className="flex justify-between">
                    <div>
                      <h2 className="card-title text-2xl font-serif font-bold">
                        Navgraha Healings
                      </h2>
                      <div className="border-b-4 mb-2 border-yellow-400 w-36 h-1"></div>
                      <div className="rating">
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        // checked
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star"
                        />
                        {/* <input type="radio" name="rating-1" className="mask mask-star" /> */}
                      </div>
                    </div>
                    <div className=" ">
                      <p style={{ marginLeft: "10px" }}>One Month</p>
                      {/* <div className="bg-orange-500 p-4 mr-4 mt-2 text-white font-bold text-lg rounded-full">
                        ₹32,500
                      </div> */}
                       <div className="flex items-center mt-2 flex-col">
                      <div className="bg-orange-500 p-4 text-white font-bold text-lg text-center rounded-full text-nowrap">
                        <p className="line-through">₹ 32,500</p>
                        <p>25% off</p>
                        ₹ 24,375
                      </div>
                    </div>
                    </div>
                  </div>
                  <div
                    className="bg-blue-600 hover:cursor-pointer hover:bg-yellow-300 rounded flex justify-center"
                    onClick={() =>
                      document.getElementById("my_modal_21").showModal()
                    }
                  >
                    <div className="text-white p-1 font-semibold text-lg font-sans">
                      Book Now{" "}
                    </div>
                  </div>
                  <Modal21 />
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BookingSection;
