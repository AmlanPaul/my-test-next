import Head from "next/head";
import Link from "next/link";

function ConfirmRegistration(props) {
  return (
    <>
      <Head>
        <title>Registration Confirmation Page</title>
      </Head>
      <main>
        <div class="h-100 d-flex align-items-center justify-content-center">
          <div className="card text-center">
            <div className="card-body">
              <p className="card-text">
                You have successfully completed the Registration. Please
              </p>
              <Link href="/login" className="btn btn-primary">
                Log in
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ConfirmRegistration;
