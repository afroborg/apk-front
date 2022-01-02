import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import AlcoholGrid from '../components/alcohol-grid';
import Filters from '../components/filters';
import Pagination from '../components/pagination';
import { FetchAlcoholOptions, fetchAlcohols } from '../helpers/alcohol.helpers';
import { IAlcohol } from '../models/IAlcohol';
import { IResponseMeta } from '../models/IResponse';

type Props = {
  alcohols: IAlcohol[];
  meta: IResponseMeta;
  category: string;
};

const Home: NextPage<Props> = ({ alcohols, meta, category }) => {
  const router = useRouter();

  const filter = (options: FetchAlcoholOptions) => {
    const opts = router.query as FetchAlcoholOptions;
    const newOpts = { ...opts, ...options };

    router.push({
      pathname: '/',
      query: newOpts,
    });
  };

  return (
    <>
      <Head>
        <title>APK | Jämför bäst alkohol per krona på systembolaget</title>
        <meta
          name="description"
          content="Se vilken produkt på systembolaget som ger dig bäst APK (alkohol per krona), så att du kan få bäst valuta för dina pengar!"
        />
        <meta
          name="keywords"
          content="APK, Systembolaget, Student, Öl, Alkohol, Vin, Pengar"
        />
        <meta name="author" content="Axel Froborg" />
      </Head>

      <div className="p-6 flex flex-col gap-2 md:p-12 md:pt-6">
        <Filters
          activeCategory={category}
          onFilter={(c) => filter({ category: c })}
        />

        <AlcoholGrid alcohols={alcohols} />

        <Pagination {...meta} onPageChange={(page) => filter({ page })} />
      </div>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<Props> = async ({
  query,
}) => {
  const tryParse = (val: string, fb: number) => {
    if (!val) {
      return fb;
    }
    const parsed = parseInt(val, 10);
    return isNaN(parsed) ? fb : parsed;
  };

  const { page, per_page, category = 'Allt' } = query as Record<string, string>;

  const res = await fetchAlcohols({
    page: tryParse(page, 1),
    perPage: tryParse(per_page, 30),
  });

  return {
    props: {
      alcohols: res.data,
      meta: res.meta,
      category,
    },
  };
};
