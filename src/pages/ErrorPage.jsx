import { useRouteError } from 'react-router-dom';

function ErrorPage() {
    const error = useRouteError();
    console.error(error);
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-[#18181B]'>
      <h1 className='text-4xl font-bold text-white mb-10'>Oops!</h1>
      <p className='text-2xl text-white mb-10'>Sorry, an unexpected error has occurred.</p>
      <p className='text-lg text-white'><i>{error.statusText || error.message}</i></p>
    </div>
  )
}

export default ErrorPage