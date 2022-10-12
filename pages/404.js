import Link from 'next/link'

const NotFound = () => {

  return (

    <div className="not-found">
      <h1>Error 404 - Not Found</h1>
      <span className="">Please check the URL for proper spelling and capitalization. Or return:</span>
      <Link href="/"><a>Home</a></Link>
    </div>

  );

}

export default NotFound;
