import Head from 'next/head';
import PropTypes from 'prop-types';

const AppHead = ({ title, description, keyword, image }) => (
  <Head>
    <title>{title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="keywords"
      content={`pkwu, pkwu mipa 5, sma negeri 11 semarang, smanse, osis smanse, mapel pkwu sma kelas 10, sma 11 semarang, sma 11, sma, ilham, ilham shofa, hame dev, hame, mpk indonesia, mpk kelas, mpk smanse ${keyword}`}
    />
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
    <link rel="apple-touch-icon" sizes="180x180" href="/smanse.png" />
    <link rel="manifest" href="/manifest.json" />
    <meta name="theme-color" content="#FFFFFF" />
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta
      name="google-site-verification"
      content="x_NCP81pzq_UseKnMEM1WLiZnzW-zbT8uW-qbscQUJM"
    />
  </Head>
);

AppHead.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keyword: PropTypes.string,
  image: PropTypes.string,
};

AppHead.defaultProps = {
  title: 'X MIPA 5 SMANSE',
  description:
    'Class of sman 11 semarang.',
  keyword: '',
  image: '/smanse.png',
};

export default AppHead;
