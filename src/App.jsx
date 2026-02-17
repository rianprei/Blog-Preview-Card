import "./App.css";

function App() {
  return (
    <div className="bg-[#f4d04e] min-h-screen justify-center justify-items-center items-center flex flex-col box-border">
      <main className="p-[20px] h-[500px] w-[350px] rounded-2xl border border-black shadow-[8px_8px_0px_0px_black] bg-white flex flex-col box-border">
        <img
          src="/public/images/illustration-article.svg"
          alt=""
          className="h-[185px] w-[px] rounded-2xl"
        />
        <p className="bg-[#f4d04e] p-2 mb-3 mt-5 font-extrabold w-20 rounded-sm">
          Learning
        </p>
        <p className="mb-2">Published 17 fev 2026</p>
        <h1 className="font-extrabold text-[22px] mb-3">HTML & CSS foundations</h1>
        <p className="text-gray-500">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
        <div className="flex flex-col mt-6">
        <img className="w-[40px]" src="public/images/image-avatar.webp" alt="" />
        <p className="font-extrabold relative bottom-8 left-13">Greg Hooper</p>
        </div>
      </main>
    </div>
  );
}

export default App;
