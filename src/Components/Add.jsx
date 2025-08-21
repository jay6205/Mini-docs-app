import React, { useState } from "react";

function Add({ setData }) {
  const [clicked, setClicked] = useState(false);
  const [desc, setDesc] = useState("");
  const [fs, setFS] = useState("");
  const [close, setClose] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [tagTitle, setTagTitle] = useState("");
  const [color, setColor] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      description: desc,
      fileSize: fs,
      close: close,
      tagDetails: {
        isOpen: isOpen,
        tagTitle: tagTitle,
        tagColor: color,
      },
    };
    setData((prev) => [...prev, newItem]);
    setClicked(false);
    setDesc("");
    setFS("");
    setClose(false);
    setIsOpen(false);
    setTagTitle("");
    setColor("");
  };
  return (
    <div className="m-5">
      {!clicked && (
        <button
          onClick={() => setClicked(true)}
          className="cursor-pointer px-4 py-2 bg-zinc-900 text-white rounded-lg shadow hover:bg-zinc-400 active:scale-95 transition"
        >
          Add
        </button>
      )}
      {clicked && (
        <div className="max-w-md mx-auto bg-zinc-900 text-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Add New Item</h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-sm mb-1">Description</label>
              <input
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                type="text"
                placeholder="Enter description"
                className="w-full px-3 py-2 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">File Size</label>
              <input
                value={fs}
                onChange={(e) => setFS(e.target.value)}
                type="text"
                placeholder="e.g. 0.9mb"
                className="w-full px-3 py-2 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500"
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                checked={close}
                onChange={(e) => setClose(e.target.checked)}
                type="checkbox"
                id="close"
                className="accent-zinc-600"
              />
              <label htmlFor="close" className="text-sm">
                Close
              </label>
            </div>

            <div className="border-t border-zinc-700 pt-3">
              <h3 className="text-sm font-medium mb-2">Tag Details</h3>

              <div className="flex items-center gap-2 mb-2">
                <input
                  checked={isOpen}
                  onChange={(e) => setIsOpen(e.target.checked)}
                  type="checkbox"
                  id="isOpen"
                  className="accent-zinc-600"
                />
                <label htmlFor="isOpen" className="text-sm">
                  Is Open
                </label>
              </div>

              <div>
                <label className="block text-sm mb-1">Tag Title</label>
                <input
                  value={tagTitle}
                  onChange={(e) => setTagTitle(e.target.value)}
                  type="text"
                  placeholder="Download Now"
                  className="w-full px-3 py-2 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Tag Color</label>
                <select
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500"
                >
                  <option value="green">Green</option>
                  <option value="sky">Sky</option>
                  <option value="red">Red</option>
                  <option value="yellow">Yellow</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 bg-zinc-700 hover:bg-zinc-600 rounded-lg shadow active:scale-95 transition"
            >
              Add
            </button>
            <button
              type="button"
              onClick={() => setClicked(false)}
              className="w-full px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg shadow active:scale-95 transition"
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Add;
