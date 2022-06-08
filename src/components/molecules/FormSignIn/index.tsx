import { Text } from "../../atoms/Text";

export const FormSignIn = () => {
  return (
    <form className="mt-8 space-y-6">
      <Text text='Sign In'/>
      <div className="rounded-md shadow-sm -space-y-px">
        <input
          id="email-address"
          name="email"
          type="email"
          required
          placeholder="Email address"
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-5"
        />

        <input
          id="password"
          name="password"
          type="password"
          required
          placeholder="Password"
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-5"
        />
      </div>
      <div>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Sign In
        </button>
      </div>
    </form>
  );
}