import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import useStyles from './Header.styles';
import Rt from 'components/Rt';

function Header() {
  const classes = useStyles();

  return (
    <>
      <header className={classes.header}>
        <div className={classes.logo}>
          <svg width="49px" height="50px" viewBox="0 0 49 50" version="1.1">
            <title>Rt COVID-19</title>
            <g
              id="rt-canada-logo"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g
                id="Logo"
                transform="translate(1.000000, 1.000000)"
                fill-rule="nonzero"
              >
                <path
                  d="M21.1483199,48 L22.1040057,48 L22.1052632,0 L18.2837776,6.98440226 C17.924138,7.64172791 17.1105476,7.89044573 16.4503699,7.54528631 L13.4412172,5.97049648 L15.6443244,17.770634 C15.8153419,18.6842912 14.6873812,19.2464442 14.0712154,18.5548564 L9.00985326,12.8622641 L8.30817872,15.2225453 C8.10320927,15.9128642 7.40907961,16.3290858 6.70992003,16.1806165 L0.922991249,14.9497171 L2.70861464,21.5838841 C2.88340454,22.2335959 2.57029171,22.915032 1.9667007,23.2018189 L0,24.1319727 L10.6307466,32.8675514 C11.0645777,33.2241315 11.240625,33.810395 11.075895,34.3484376 L10.1428439,37.4104584 L20.0455088,35.9701792 C20.8980811,35.8458203 21.6513124,36.5348702 21.6123305,37.4028446 L21.1483199,48 Z"
                  id="Path-Copy"
                  fill="#E64F40"
                ></path>
                <path
                  d="M45.2433334,19 C44.8472117,18.999939 44.4672966,19.1579546 44.1871962,19.4392724 C43.9070959,19.7205902 43.749764,20.1021566 43.7498248,20.5 L43.7498248,22 L39.6399379,22 C39.2763485,18.889872 38.0595205,15.9423652 36.1252141,13.48633 L39.0337824,10.56494 L40.204514,11.56055 C40.5816303,11.9402025 41.1318698,12.0887578 41.6476904,11.9501832 C42.1635109,11.8116086 42.5664243,11.4069898 42.7044576,10.888943 C42.8424908,10.3708962 42.6946406,9.81824838 42.3166738,9.43945 L37.3384012,4.43945 C36.9611429,4.06052161 36.4112608,3.91251703 35.8958901,4.05118815 C35.3805195,4.18985926 34.9779574,4.59413864 34.8398451,5.11173815 C34.7017328,5.62933765 34.8490528,6.18162161 35.2263111,6.56055 L36.2176524,7.73633 L33.3089049,10.65771 C30.8634107,8.71516401 27.9286779,7.4931354 24.8320484,7.12793 L24.8320484,3 L26.3255571,3 C27.1503991,3 27.8190657,2.32842712 27.8190657,1.5 C27.8190657,0.671572875 27.1503991,3.2273599e-13 26.3255571,3.2273599e-13 L22.7368421,3.2273599e-13 L22.7368421,48 L26.3255571,48 C27.1503991,48 27.8190657,47.3284271 27.8190657,46.5 C27.8190657,45.6715729 27.1503991,45 26.3255571,45 L24.8320484,45 L24.8320484,40.87207 C27.9287099,40.5068833 30.8634764,39.2848536 33.3089945,37.34229 L36.2176225,40.26367 L35.2262812,41.43945 C34.6430904,42.0252225 34.6431283,42.9749094 35.2263659,43.560635 C35.8096034,44.1463606 36.7551805,44.1463225 37.3383713,43.56055 L42.3166439,38.56055 C42.6946107,38.1817516 42.842461,37.6291038 42.7044277,37.111057 C42.5663944,36.5930102 42.1634811,36.1883914 41.6476605,36.0498168 C41.13184,35.9112422 40.5816005,36.0597975 40.2044841,36.43945 L39.0337526,37.43506 L36.1251843,34.51367 C38.0595014,32.0576382 39.2763399,29.110131 39.6399379,26 L43.7498248,26 L43.7498248,27.5 C43.7498248,28.3284271 44.4184914,29 45.2433334,29 C46.0681755,29 46.7368421,28.3284271 46.7368421,27.5 L46.7368421,20.5 C46.7368421,20.1021566 46.579571,19.7205902 46.2994706,19.4392724 C46.0193703,19.1579546 45.6394552,18.999939 45.2433334,19 Z M30.8846888,20 C29.4751971,20 28.204493,19.1472524 27.6651039,17.839392 C27.1257148,16.5315316 27.4238641,15.0261193 28.4205252,14.0251263 C29.4171863,13.0241333 30.916084,12.7246881 32.2182845,13.2664216 C33.520485,13.8081551 34.3695423,15.0843821 34.3695423,16.5 C34.3695423,17.4282626 34.0024101,18.3185105 33.3488698,18.9748913 C32.6953296,19.6312721 31.8089342,20 30.8846888,20 Z M26.613778,33 C25.5139886,33 24.6224331,32.1045695 24.6224331,31 C24.6224331,29.8954305 25.5139886,29 26.613778,29 C27.7135674,29 28.6051229,29.8954305 28.6051229,31 C28.6051229,32.1045558 27.7135538,33 26.613778,33 Z"
                  id="Shape-Copy"
                  stroke="#E64F40"
                  stroke-width="0.8"
                ></path>
              </g>
            </g>
          </svg>
          <Typography variant="h2" className={classes.marginLeft}>
            <Rt /> COVID-19
          </Typography>
        </div>
        <nav className={classes.headerNav}>
          <Link to="/" className={classes.navLink}>
            <Typography variant="h4">Canada</Typography>
          </Link>{' '}
          <Link to="/ontario" className={classes.navLink}>
            <Typography variant="h4">Ontario</Typography>
          </Link>{' '}
          <Link to="/resources" className={classes.navLink}>
            {' '}
            <Typography variant="h4">Resources</Typography>
          </Link>{' '}
        </nav>
      </header>
    </>
  );
}

export default Header;