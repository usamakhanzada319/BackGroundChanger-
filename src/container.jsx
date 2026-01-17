// import { useState } from "react";

// import "./App.css";

// function Container() {
//   const [color, setColor] = useState("olive");

//   return (
//     <>
//       <div
//         className="w-full h-screen duration-800"
//         style={{ backgroundColor: color }}
//       >
//         <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
//           <div
//             className=" flex flex-wrap justify-center gap-3  px-3 py-2 rounded-3xl"
//             style={{ backgroundColor: color }}
//           >
//             <button
//               className="outline-none px-4 rounded-full py-1 text-white shadow-2xl "
//               style={{ backgroundColor: "green" }}
//               onClick={() => setColor("green")}
//             >
//               AddGreen
//             </button>
//             <button
//               className="outline-none px-4 rounded-full py-1 text-white shadow-2xl "
//               style={{ backgroundColor: "red" }}
//               onClick={() => setColor("red")}
//             >
//               AddRed
//             </button>
//             <button
//               className="outline-none px-4 rounded-full py-1 text-white shadow-2xl "
//               style={{ backgroundColor: "yellow" }}
//               onClick={() => setColor("yellow")}
//             >
//               AddYellow
//             </button>
//             <button
//               className="outline-none px-4 rounded-full py-1 text-white shadow-2xl "
//               style={{ backgroundColor: "blue" }}
//               onClick={() => setColor("blue")}
//             >
//               AddBlue
//             </button>
//             <button
//               className="outline-none px-4 rounded-full py-1 text-white shadow-2xl "
//               style={{ backgroundColor: "purple" }}
//               onClick={() => setColor("purple")}
//             >
//               AddPurple
//             </button>
//             <button
//               className="outline-none px-4 rounded-full py-1 text-white shadow-2xl "
//               style={{ backgroundColor: "black" }}
//               onClick={() => setColor("black")}
//             >
//               AddBlack
//             </button>
//             <button
//               className="outline-none px-4 rounded-full py-1 text-black shadow-2xl "
//               style={{ backgroundColor: "white" }}
//               onClick={() => setColor("white")}
//             >
//               AddWhite
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// export default Container;

import { useState } from "react";

import "./App.css";

function Container() {
  const [color, setColor] = useState("olive");
  const colors = [
    { name: "Green", value: "green" },
    { name: "Red", value: "red" },
    { name: "Blue", value: "blue" },
    { name: "Purple", value: "purple" },
    { name: "Black", value: "black" },
    { name: "White", value: "white" },
    { name: "Yellow", value: "yellow" },
  ];

  return (
    <div
      className="w-full h-screen duration-300"
      style={{ backgroundColor: color }}
    >
      <div className="fixed top-50 left-1/2 transform -translate-x-1/2">
        <h1 className="text-3xl font-bold text-white bg-black/50  px-6 py-3 rounded-e-full">
          Current Color : <span className="capitalize">{color}</span>
        </h1>
      </div>

      <div className="flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className=" flex flex-wrap justify-center gap-3 px-6 py-4 rounded-3xl shadow-2xl">
          {colors.map((col, index) => (
            <button
              key={index}
              className={`outline-none px-5 py-2 rounded-full  font-medium transition-all duration-300 hover:scale-110 shadow-${
                col.value === "white" || col.value === "yellow" 
                  ? "text-black"
                  : "text-white"
              }`}
              style={{ backgroundColor: col.value }}
              onClick={() => setColor(col.value)}
            >
              {col.name}
            </button>
          ))}
        </div>
      </div>
      <div className=" fixed bottom-32 left-1/2  transform -translate-x-1/2 text-center">
        <p className="text-lg font-semibold bg-white/90px-4 py-2 rounded-full">
          Click Any Button To Change Color
        </p>
      </div>
    </div>
  );
}
export default Container;
