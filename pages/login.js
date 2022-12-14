import { getSession, signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Image from "next/image";

import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import Footer from "../components/footer";

const IndexPage = () => {
  const { data: session } = useSession();
  const signInButtonNode = () => {
    if (session) {
      return false;
    }
    return (
      <div>
        <Link href="/api/auth/signin">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-10"
            onClick={(e) => {
              e.preventDefault();
              signIn();
            }}
          >
            Sign In
          </button>
        </Link>
      </div>
    );
  };

  const signOutButtonNode = () => {
    if (!session) {
      return false;
    }

    return (
      <div>
        <Link href="/api/auth/signout">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-10"
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
          >
            Sign Out
          </button>
        </Link>
      </div>
    );
  };

  return (
    <>
      <Head>
        <title>台灣喉科醫學會首頁：登入</title>
        <meta name="description" content="TLA intro page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {!session ? (
        <SectionTitle pretitle="Not signed in" title=" Sign In">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-10"
            onClick={() => signIn()}
          >
            Sign in
          </button>
        </SectionTitle>
      ) : (
        <SectionTitle pretitle="Welcome" title="Signed-in User">
          {signOutButtonNode()}
          {signInButtonNode()}

          {
            //<pre>{JSON.stringify(session, null, 2)}</pre>
          }
          <div class="flex items-center space-x-4">
            <Image
              src={session.user.image}
              width="50"
              height="50"
              className="rounded-full"
            />
            <div class="font-medium dark:text-white">
              <div> {session.user.name}</div>
              <div class="text-sm text-gray-500 dark:text-gray-400">
                {session.user.email}
              </div>
            </div>
          </div>
        </SectionTitle>
      )}

      <Footer />
    </>
  );
};

export const getServerSideProps = async ({ req }) => {
  const session = await getSession({ req });
  return {
    props: {
      session,
    },
  };
};

export default IndexPage;
