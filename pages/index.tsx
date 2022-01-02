import type { GetServerSideProps, NextPage } from 'next';
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
    console.log(options);

    const opts = router.query as FetchAlcoholOptions;
    const newOpts = { ...opts, ...options };

    router.push({
      pathname: '/',
      query: newOpts,
    });
  };

  return (
    <div className="p-6 flex flex-col gap-2 md:p-12 md:pt-6">
      <Filters activeCategory={category} />

      <AlcoholGrid alcohols={alcohols} />

      <Pagination {...meta} onPageChange={(page) => filter({ page })} />
    </div>
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
