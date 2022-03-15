import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { getStatus } from '../helpers/status.helpers';
import { IStatus } from '../models/IStatus';

const About: NextPage<IStatus> = ({ lastSync, syncedProducts }) => {
  return (
    <>
      <Head>
        <title>Om APK | Jämför bäst alkohol per krona på systembolaget</title>
        <meta name="author" content="Axel Froborg" />
      </Head>

      <div className="pt-12 px-4 max-w-7xl mx-auto space-y-4">
        <div className="bg-red-300 flex justify-start rounded-sm overflow-hidden shadow-sm">
          <div className="w-2 bg-red-500"></div>
          <div className="py-4 ml-4">
            <p className="font-semibold">
              Denna hemsidan är inte associerad med Systembolaget
            </p>
            <p className="text-sm opacity-80">
              All informationen kommer direkt från{' '}
              <a
                className="underline"
                rel="noreferrer"
                target="_blank"
                href="https://systembolaget.se"
              >
                systembolaget.se
              </a>
            </p>
          </div>
        </div>

        <div className="bg-white rounded-md shadow-sm p-4">
          <h2 className="font-semibold text-xl">APK - Alkohol per krona</h2>
          <p className="text-gray-500 text-sm">
            Ett mått på hur mycket alkohol du får för priset du betalar
          </p>

          <div className="mt-4">
            <h3 className="text-lg font-semibold">Teknisk information</h3>
            <p className="text-sm text-gray-500">
              Vi synkroniserar produkter regelbundet för att alltid vara up to
              date med sortimentet
            </p>

            <div className="flex flex-col gap-2 mt-4">
              <div className="">
                <p className="font-medium">Senast synkroniserad</p>
                <p>{new Date(lastSync).toLocaleString()}</p>
              </div>

              <div className="">
                <p className="font-medium">Antal synkroniserade produkter</p>
                <p>{syncedProducts} st</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

export const getServerSideProps: GetServerSideProps<IStatus> = async ({}) => {
  const res = await getStatus();

  return {
    props: res,
  };
};
