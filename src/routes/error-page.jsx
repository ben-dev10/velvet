import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className=" h-[100vh] flex justify-center items-center"
    >
      <div className="">
        <h1 className="h1 text-gray-400">Oops!</h1>
        <div className="text-gray-500">
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
      </div>
    </div>
  );
}
