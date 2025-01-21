import  { useState } from "react";

// Birthday Wishes Section with Form and Comments
export default function BirthdayWishes() {
  // State for storing the submitted wishes and comments
  const [wishes, setWishes] = useState([]);
  const [newWish, setNewWish] = useState("");
  const [newComment, setNewComment] = useState("");
  const [selectedWishIndex, setSelectedWishIndex] = useState(null);

  // Handle the form submission for new birthday wish
  const handleWishSubmit = (e) => {
    e.preventDefault();
    if (newWish) {
      setWishes([
        ...wishes,
        {
          wish: newWish,
          comments: [],
        },
      ]);
      setNewWish(""); // Clear input after submitting
    }
  };

  // Handle the comment submission
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment && selectedWishIndex !== null) {
      const updatedWishes = [...wishes];
      updatedWishes[selectedWishIndex].comments.push(newComment);
      setWishes(updatedWishes);
      setNewComment(""); // Clear comment input after submitting
    }
  };

  return (
    <section className="py-12 px-4 md:px-8 bg-gray-50" id="wishes">
      <h2 className="text-3xl font-bold text-center mb-8">Leave Your Birthday Wishes</h2>

      {/* Wish Submission Form */}
      <form onSubmit={handleWishSubmit} className="mb-8 max-w-lg mx-auto">
        <textarea
          value={newWish}
          onChange={(e) => setNewWish(e.target.value)}
          placeholder="Write your birthday wish here..."
          className="w-full p-4 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4"
          rows="4"
        />
        <button
          type="submit"
          className="w-full py-2 px-4 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition duration-200"
        >
          Submit Wish
        </button>
      </form>

      {/* Displaying Birthday Wishes */}
      <div className="w-full max-w-4xl mx-auto space-y-8">
        {wishes.length > 0 ? (
          wishes.map((wish, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg space-y-4"
            >
              <p className="text-lg font-semibold text-gray-700">{wish.wish}</p>

              {/* Comment Form for Each Wish */}
              <div>
                <h3 className="text-md font-medium text-gray-600 mb-2">Leave a Comment:</h3>
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Write your comment..."
                  className="w-full p-4 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4"
                  rows="3"
                />
                <button
                  onClick={() => {
                    setSelectedWishIndex(index);
                    handleCommentSubmit();
                  }}
                  type="button"
                  className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
                >
                  Add Comment
                </button>
              </div>

              {/* Displaying Comments for the Wish */}
              {wish.comments.length > 0 && (
                <div className="mt-4 space-y-2">
                  {wish.comments.map((comment, commentIndex) => (
                    <div
                      key={commentIndex}
                      className="bg-gray-100 p-4 rounded-md shadow-md"
                    >
                      <p className="text-gray-600">{comment}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No birthday wishes yet. Be the first to wish!</p>
        )}
      </div>
    </section>
  );
}
