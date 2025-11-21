import React, { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-sans bg-white relative selection:bg-gray-200 text-[#333]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Lato:wght@300;400;700&display=swap');
        .font-script { font-family: 'Great Vibes', cursive; }
        .font-body { font-family: 'Lato', sans-serif; }
      `}</style>

      <div className="fixed left-0 top-1/2 z-50 hidden lg:block">
        <div className="-translate-x-[calc(50%-18px)] -translate-y-1/2 -rotate-90 origin-center">
          <button className="bg-[#008da5] hover:bg-[#007a90] text-white text-xs font-bold py-1.5 px-4 shadow-md tracking-wide rounded-t-sm transition-colors cursor-pointer">
            Feedback
          </button>
        </div>
      </div>

      <div className="w-full md:w-[50%] lg:w-[60%] h-64 md:h-auto relative bg-gray-100 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop"
          alt="Couple dancing on the beach at sunset"
          className="w-full h-full object-cover object-center md:object-[center_top]"
        />

        <div className="absolute inset-0 bg-black/10 md:bg-transparent"></div>
      </div>

      <div className="w-full md:w-[50%] lg:w-[40%] flex flex-col items-center justify-center px-6 py-10 md:px-12 lg:px-20 bg-white font-body">
        <div className="w-full max-w-[440px] space-y-8">
          <div className="text-center mb-6">
            <h1 className="text-5xl md:text-6xl font-script text-black tracking-wide">
              Fairmont
            </h1>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900">
              Not yet a member
            </h2>
            <p className="text-[15px] text-gray-600 leading-snug">
              Save up to 10% right away on your stays by registering for free
            </p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm text-gray-600">
                Email address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition-all"
              />
            </div>

            <button className="w-full bg-[#333333] hover:bg-black text-white rounded-full py-3.5 text-sm font-bold transition-colors duration-200 shadow-sm">
              Register for free
            </button>
          </form>

          <div className="relative flex items-center py-1">
            <div className="grow border-t border-gray-200"></div>
            <span className="shrink-0 mx-4 text-gray-500 text-sm font-light">
              or
            </span>
            <div className="grow border-t border-gray-200"></div>
          </div>

          <div className="space-y-3">
            <button className="w-full border border-gray-300 rounded-full py-2.5 px-4 flex items-center justify-center space-x-3 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 group">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26-.19-.58z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                Continue with Google
              </span>
            </button>

            <button className="w-full border border-gray-300 rounded-full py-2.5 px-4 flex items-center justify-center space-x-3 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 group">
              <svg
                className="w-5 h-5 text-black"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24.02-1.44.62-2.2.44-3.06-.45C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.48-1.23 3.96-1.14 1.57.1 2.94.84 3.57 1.74-3.21 1.75-2.36 5.5 1.07 6.86-.5 1.63-1.42 3.38-2.63 4.77h-.05zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                Continue with Apple
              </span>
            </button>

            <button className="w-full border border-gray-300 rounded-full py-2.5 px-4 flex items-center justify-center space-x-3 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 group">
              <svg
                className="w-5 h-5 text-[#1877F2]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                Continue with Facebook
              </span>
            </button>
          </div>

          <div className="text-center text-sm pt-4">
            <span className="text-gray-600">Already a member? </span>
            <a
              href="#"
              className="text-[#008da5] underline underline-offset-2 hover:text-[#007a90]"
            >
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
