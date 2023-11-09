import Image from "next/image";

export default function Home() {
  return (
    <main className="my-auto px-5 flex justify-center lg:justify-between items-center">
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-white text-5xl font-bold text-center ">
          Redesign rooms in seconds <span className="text-blue-700">using AI</span> 
        </h1>
        <p className="text-gray-500 text-lg text-center">
          Take a picture of a room and instantly redesign it in 8+ diffenrent
          themes. Join thousands of happy customers and remodel your room today!
        </p>
        <button className="bg-blue-500 hover:opacity-90 rounded-lg text-white font-semibold px-5 py-3">
          Redesign your room
        </button>
      </div>
      <div></div>
    </main>
  );
}
