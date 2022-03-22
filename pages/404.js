import Link from "next/link";

const NotFound = () => {
  return (
    <div className='container d-flex justify-content-center align-items-center flex-column' style={{height: '500px'}}>
      <h1>404</h1>
      <p>Page not found</p>
        <Link href='/'
              className='btn btn-primary'>Go to home page</Link>
    </div>
  );
};

export default NotFound;