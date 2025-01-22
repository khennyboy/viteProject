export default function BirthdayWishes() {
 
  return (
    <section className="mt-24 bg-gray-50" id="wishes">
      <h2 className="text-3xl font-bold text-center mb-8">Leave Your Birthday Wishes</h2>
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        <div className="flex-1">
          <form  className="mb-8 max-w-lg mx-auto">
            <textarea
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
        </div>

      
        <div className="hidden lg:block flex-1">
          <img
            src="https://plus.unsplash.com/premium_photo-1677221924410-0d27f4940396?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Birthday Celebration"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
