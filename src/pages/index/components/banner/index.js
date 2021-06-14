import React, { useEffect } from 'react'
import './styles.styl'
import LinkHtml from "@components/link-html"
import ImageMax from "@components/image-max"
import { motion, useViewportScroll, useTransform } from "framer-motion"
import dynamic from 'next/dynamic'
import { FadeScrollComponentY, FadeScrollComponentX } from "@components/fade-scroll"
import { useInView } from 'react-intersection-observer'

const ScrollspyNav = dynamic(() => import('@components/scrollspy-nav'), { ssr: false })

const HOME_DATA = [
  {
    id: 'introduction'
  },
  {
    id: 'blog-post'
  },
  {
    id: 'tech-sharing'
  },
  {
    id: 'open-resource'
  },
]

export default function Banner({ heroPost = {}, noticeInView = () => {} }) {
  const { scrollY } = useViewportScroll();
  const manY = useTransform(scrollY, [0, 450], [-20, 60]);
  const earphoneY = useTransform(scrollY, [0, 450], [0, 100]);
  const giftY = useTransform(scrollY, [0, 450], [5, -20]);

  const [screenRef, inView] = useInView({
    rootMargin: '-84px 0px 0px 0px',
  })

  useEffect(() => {
    noticeInView(inView)
  }, [inView])

  return (
    <section className="home-banner">
      <div className="banner-main">
        {/* 小程序创意动画 */}
        <section className="animation">
          <LinkHtml className="animation-module" href={`/blog/posts/${heroPost.slug}`} title={heroPost.title}>
            <FadeScrollComponentX>
              <h2>{heroPost.title}</h2>
              <p>{heroPost.description}</p>
              <div className='read-more'>立即查看</div>
            </FadeScrollComponentX> 
          </LinkHtml>
          <FadeScrollComponentY direction='rtl' className="animation-little">
            <motion.div className="animation-bg" style={{ y: manY}}>
              <ImageMax src='/images/banner-man.png' maxWidth='1118' width='559' height='511' alt='banner-animation' />
            </motion.div>
            <motion.div className="animation-earphone" style={{ y: earphoneY}}>
              <ImageMax src='/images/banner-earphone.png' maxWidth='230' width='115' height='101' alt='banner-animation' />
            </motion.div>
            <motion.div className="animation-gift" style={{ y: giftY }}>
              <ImageMax src='/images/banner-gift.png' maxWidth='298' width='149' height='119' alt='banner-animation' />
            </motion.div>
          </FadeScrollComponentY>
        </section>
      </div>
      <div ref={screenRef}></div>
      {/* 技术优势    */}
      <ScrollspyNav
        offset={-90}
        scrollTargetIds={HOME_DATA.map(item => item.id)}
        activeNavClass="is-active"
        scrollDuration={300}
      >
        <ul className="program-category banner-main">
          <li>
            <a href='#introduction'>
              <FadeScrollComponentY delay='0.1'>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                  <g fill="none" transform="translate(0 8)">
                    <path className='icon-color-line' d="M40.2649985,4.46511628 L8.8512806,4.46511628 C8.27843955,4.46511628 7.81395349,4.93261463 7.81395349,5.50938231 L7.81395349,21.2813154 C7.81395349,21.858083 8.27843955,22.3255814 8.8512806,22.3255814 C9.42412164,22.3255814 9.8886077,21.858083 9.8886077,21.2813154 L9.8886077,6.55355358 L39.2276714,6.55355358 L39.2276714,21.2812206 L39.2276714,21.2812206 C39.2276714,21.8579883 39.6921574,22.3255814 40.2649985,22.3255814 C40.8378395,22.3255814 41.3023256,21.8579883 41.3023256,21.2812206 L41.3023256,5.50928754 C41.3023256,4.93261463 40.8377454,4.46511628 40.2649985,4.46511628 Z" />
                    <path className='icon-color-line' d="M47.0703732,24.98182 L45.1677132,24.98182 L45.1677132,3.14338344 C45.1677132,1.41012476 43.766898,0 42.0450821,0 L5.95501163,0 C4.23310202,0 2.83238053,1.41012476 2.83238053,3.14338344 L2.83238053,24.98182 L0.929720566,24.98182 C0.416250813,24.98182 0,25.4007428 0,25.9177193 L0,27.7549773 C0,30.3008838 2.05753527,32.372093 4.58663396,32.372093 L43.413366,32.372093 C45.9424647,32.372093 48,30.3008838 48,27.7549773 L48,25.9177193 C48,25.4007428 47.5839367,24.98182 47.0703732,24.98182 Z M4.89835332,3.14338344 C4.89835332,2.55694821 5.37244799,2.0797028 5.95501163,2.0797028 L42.0448946,2.0797028 C42.6276457,2.0797028 43.1015529,2.55685384 43.1015529,3.14338344 L43.1015529,24.98182 L29.1140256,24.98182 C29.0481192,24.9796494 28.9801503,24.9853118 28.9126502,24.9984297 C28.4750244,25.0831768 28.158805,25.4687859 28.158805,25.9173418 C28.158805,26.7073401 27.5203662,27.3499274 26.735771,27.3499274 L21.2644165,27.3499274 C20.4796337,27.3499274 19.8413825,26.7072457 19.8413825,25.9173418 C19.8413825,25.3932873 19.4100379,24.9704008 18.8900994,24.9816313 L4.89835332,24.9816313 L4.89835332,3.14338344 Z M46.1407464,27.7549773 L46.1407464,27.7549773 C46.1407464,29.2688182 44.917119,30.5002944 43.4134598,30.5002944 L4.58663396,30.5002944 C3.08288102,30.5002944 1.85944113,29.2688182 1.85944113,27.7549773 L1.85944113,26.8536186 L18.1160041,26.8536186 C18.5179112,28.221181 19.7772574,29.2218203 21.2643228,29.2218203 L26.7356772,29.2218203 C28.2227426,29.2218203 29.4820888,28.2210866 29.8840896,26.8536186 L46.1407464,26.8536186 L46.1407464,27.7549773 L46.1407464,27.7549773 Z" />
                    <path className='icon-color-dot' d="M25.3588776 10.3620466C24.9380585 9.94133332 24.2560853 9.94133332 23.8351684 10.3620466L17.059727 17.1376514C16.6390057 17.5583647 16.6390057 18.2405205 17.059727 18.6612337 17.2701366 18.8716392 17.5458591 18.9767442 17.8214839 18.9767442 18.0972064 18.9767442 18.3728312 18.8714437 18.5832407 18.6612337L25.3588776 11.8857266C25.7795989 11.4650134 25.7795989 10.7828576 25.3588776 10.3620466zM28.7329958 14.8018941C28.3458774 14.4148725 27.7185191 14.4148725 27.3314008 14.8018941L24.8484108 17.2848402C24.4613824 17.6718618 24.4613824 18.299389 24.8484108 18.6865005 25.04197 18.8800563 25.2956116 18.9767442 25.5491634 18.9767442 25.802895 18.9767442 26.0563567 18.8800563 26.2499159 18.6865005L28.7329058 16.2035543C29.1200242 15.8165328 29.1200242 15.1890056 28.7329958 14.8018941z" />
                  </g>
                </svg>
                <h3>基础架构</h3>
                <p>熟悉 React 框架<br />熟悉 Taro 小程序<br /></p>
              </FadeScrollComponentY>
            </a>
          </li>
          <li>
            <a href='#blog-post'>
              <FadeScrollComponentY delay='0.15'>
                <svg xmlns="http://www.w3.org/2000/svg" width="41" height="48" viewBox="0 0 41 48">
                  <g fill="none" transform="translate(0 5)">
                    <path className='icon-color-line' d="M37.6318829,15.7070508 C38.3688871,14.9898038 38.6290764,13.9371483 38.3110938,12.9598923 C37.9930317,11.9826364 37.1627791,11.2838027 36.1442808,11.1360992 L27.238383,9.84407038 C27.0635721,9.81875204 26.9124508,9.70914508 26.8342271,9.55088564 L22.8514155,1.49386115 C22.3959849,0.572400735 21.4736764,0 20.4444444,0 C19.415216,0 18.4929074,0.572400735 18.0374768,1.49386115 L14.0546652,9.55096501 C13.976362,9.70914508 13.8253203,9.81875204 13.6504298,9.84414975 L4.74469104,11.1360992 C3.72619276,11.2838027 2.89601967,11.9826364 2.57787807,12.9598923 C2.25973648,13.9371483 2.52000524,14.9898038 3.25708892,15.7070508 L9.70140388,21.9786167 C9.82788146,22.1017956 9.8856748,22.2791827 9.85578443,22.4530776 L8.33447616,31.3086217 C8.16053967,32.3214345 8.56962429,33.3256756 9.40226174,33.9296647 C10.2348992,34.5338126 11.3182659,34.6118311 12.2291271,34.1337987 L20.1946708,29.9527812 C20.3511183,29.8706355 20.5378536,29.8706355 20.6943805,29.9527812 L28.6600037,34.1337987 C29.0562101,34.3417424 29.4849301,34.4444444 29.9115833,34.4444444 C30.465668,34.4444444 31.0162548,34.2711051 31.4866306,33.9295853 C32.3192681,33.3255168 32.7284322,32.3211964 32.5544162,31.3085424 L31.0331079,22.4529982 C31.003297,22.2791033 31.0610109,22.1017162 31.1874885,21.9785374 L37.6318829,15.7070508 Z M28.9168542,22.8155504 L30.4381625,31.6712533 C30.4890397,31.9676128 30.3058022,32.1365869 30.2246371,32.1953984 C30.1433926,32.2541306 29.9257335,32.3761189 29.6592641,32.2361141 L21.6936408,28.0550966 C21.3026017,27.8499308 20.8736432,27.7472288 20.4446052,27.7472288 C20.0155671,27.7472288 19.5865291,27.8499308 19.1955695,28.0550172 L11.2300258,32.2359554 C10.9633973,32.3758808 10.7458177,32.2540512 10.6646527,32.1952397 C10.5834876,32.1364281 10.4001707,31.967454 10.4511274,31.6710946 L11.9724356,22.8155504 C12.121808,21.9460759 11.8333183,21.0593786 11.2004534,20.4435637 L4.75613841,14.1719977 C4.54046671,13.9619905 4.58927704,13.7177757 4.62035984,13.6225343 C4.65128365,13.5272135 4.75566144,13.3009359 5.05369063,13.2577598 L13.9593499,11.965731 C14.8337226,11.8389012 15.5893288,11.2909458 15.9804474,10.499728 L19.963259,2.4426241 C20.0965732,2.17301161 20.3442817,2.14388362 20.4446847,2.14388362 C20.5449287,2.14388362 20.7926371,2.17293224 20.9260308,2.4426241 L20.9260308,2.44270347 L24.9088424,10.4998073 C25.2998816,11.2910251 26.0554082,11.8389806 26.9297809,11.9658104 L35.8355992,13.2578392 C36.1336284,13.3010153 36.2379267,13.5272929 36.26893,13.6226137 C36.2999333,13.7179344 36.3488231,13.9622286 36.1330719,14.1720771 L29.688757,20.4436431 C29.0559716,21.0593786 28.7674819,21.9460759 28.9168542,22.8155504 Z" />
                    <path className='icon-color-dot' d="M32.8844637 1.54184249C32.397893 1.18754218 31.7171294 1.29567489 31.3637289 1.78332273L30.2080026 3.37799744C29.8546021 3.86564528 29.9623796 4.54830376 30.4488696 4.90260408 30.6422565 5.04330592 30.8661144 5.11111111 31.0879571 5.11111111 31.4246711 5.11111111 31.756629 4.9550541 31.9696045 4.66120466L33.1253307 3.06652996C33.4787312 2.5788013 33.3709537 1.89614281 32.8844637 1.54184249zM10.4586251 3.37790043L9.30290477 1.78321083C8.94958663 1.29572007 8.26874586 1.18758635 7.78217768 1.54172834 7.29577072 1.89603197 7.18791316 2.57869683 7.54131192 3.06634922L8.69703227 4.66103882C8.91008722 4.95513346 9.24204345 5.11111111 9.57883633 5.11111111 9.8007585 5.11111111 10.0246959 5.04330528 10.21784 4.90252132 10.7042469 4.5482985 10.8121045 3.86563364 10.4586251 3.37790043zM3.9470528 24.0537028C3.76344782 23.5063815 3.15655571 23.2067552 2.59140287 23.3846173L.743643809 23.9662764C.178490965 24.1441385-.130650429 24.7322022.0529545476 25.2795236.200635079 25.7200505.622408766 26 1.07588518 26 1.18604816 26 1.29812287 25.9834098 1.40860448 25.948609L3.25636354 25.3669499C3.82143673 25.1890878 4.13065777 24.6011785 3.9470528 24.0537028zM20.4444444 36C19.8308077 36 19.3333333 36.470547 19.3333333 37.0509688L19.3333333 38.9490312C19.3333333 39.529453 19.8308077 40 20.4444444 40 21.0580812 40 21.5555556 39.529453 21.5555556 38.9490312L21.5555556 37.0509688C21.5555556 36.4704692 21.0581634 36 20.4444444 36zM39.9230302 23.9662551L38.0752711 23.3845678C37.5103573 23.2068514 36.9032262 23.5062606 36.7196212 24.0537628 36.5360162 24.601265 36.8451576 25.1892029 37.4103105 25.3670736L39.2580695 25.9487609C39.3685511 25.9834862 39.4805462 26 39.5907092 26 40.0442652 26 40.4660389 25.7199598 40.6137195 25.2794887 40.7973244 24.7320636 40.4881034 24.1441258 39.9230302 23.9662551z" />
                  </g>
                </svg>

                <h3>用户体验</h3>
                <p>擅长响应式设计<br />精准还原设计稿<br />强调组件化开发</p>
              </FadeScrollComponentY>
            </a>
          </li>
          <li>
            <a href='#tech-sharing'>
              <FadeScrollComponentY delay='0.2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="39" height="48" viewBox="0 0 39 48">
                  <g fill="none" transform="translate(0 4)">
                    <path className='icon-color-dot' d="M20.1521181,14.905126 C17.4336969,14.905126 15.2219921,17.1168307 15.2219921,19.835252 C15.2219921,22.5538228 17.4336969,24.7654528 20.1521181,24.7654528 C22.8707638,24.7654528 25.0824685,22.553748 25.0824685,19.835252 C25.0824685,17.1168307 22.8707638,14.905126 20.1521181,14.905126 Z M20.1521181,22.899937 C18.4622402,22.899937 17.0875079,21.5251299 17.0875079,19.835252 C17.0875079,18.145374 18.462315,16.7706417 20.1521181,16.7706417 C21.8419961,16.7706417 23.216878,18.1454488 23.216878,19.835252 C23.216878,21.5250551 21.8420709,22.899937 20.1521181,22.899937 Z" />
                    <path className='icon-color-line' d="M38.1718976,11.3111339 C38.5349921,8.64290551 38.118189,6.37337795 36.9663701,4.69696457 C37.154874,4.28083465 37.2607205,3.81959843 37.2607205,3.33382677 C37.2607205,1.50541339 35.7732598,0.0178779528 33.9447717,0.0178779528 C32.7091732,0.0178779528 31.6299134,0.69776378 31.0595394,1.70251969 C27.935685,1.54640551 24.1109252,2.69425984 20.1519685,4.98136614 C13.3926063,1.07492126 7.27273622,0.605681102 4.09809055,3.78144882 C2.71834646,5.16119291 2.00375197,7.13539764 2.00704331,9.52049606 C0.82769685,10.0292323 0,11.2028937 0,12.5666299 C0,14.3950433 1.48753543,15.8825787 3.31594882,15.8825787 C3.33517323,15.8825787 3.35409843,15.8814567 3.37324803,15.8810827 C3.88325591,17.1781693 4.52835827,18.5034567 5.29793307,19.8353268 C1.39148819,26.5946142 0.922322835,32.7144843 4.09794094,35.8891299 C5.49892913,37.2904921 7.47275984,37.9821969 9.82240157,37.9821969 C12.797622,37.9821969 16.3752323,36.8718937 20.1518937,34.6893622 C23.9288543,36.8721181 27.5060906,37.9821969 30.4816102,37.9821969 C32.8311772,37.9821969 34.8056063,37.2904921 36.2067441,35.8893543 C39.3821378,32.7138858 38.9121496,26.5937165 35.0046575,19.8348031 C36.7233346,16.8595827 37.8165827,13.9223622 38.1718976,11.3111339 Z M33.9447717,1.8833937 C34.7444921,1.8833937 35.3952047,2.5341063 35.3952047,3.33382677 C35.3952047,4.13354724 34.7444921,4.78425984 33.9447717,4.78425984 C33.1450512,4.78425984 32.4943386,4.13354724 32.4943386,3.33382677 C32.4943386,2.5341063 33.1449764,1.8833937 33.9447717,1.8833937 Z M30.6369016,3.55397244 C30.7506772,5.28005512 32.1903386,6.64985039 33.9447717,6.64985039 C34.5799252,6.64985039 35.1737126,6.47002362 35.6784843,6.15914173 C36.3689921,7.41284252 36.5922047,9.08454331 36.323437,11.0597205 C36.0349961,13.1798661 35.1951811,15.5623465 33.8805157,18.0182087 C32.3817598,15.7450906 30.5805748,13.5506654 28.508752,11.4786929 C26.4370039,9.40694488 24.2419055,7.60531102 21.9675906,6.10528346 C25.1521102,4.39767717 28.1594961,3.51200787 30.6369016,3.55397244 Z M3.31594882,14.017063 C2.51622835,14.017063 1.86551575,13.3664252 1.86551575,12.5666299 C1.86551575,11.7669094 2.51622835,11.1161969 3.31594882,11.1161969 C4.11566929,11.1161969 4.76638189,11.7669094 4.76638189,12.5666299 C4.76645669,13.3663504 4.11574409,14.017063 3.31594882,14.017063 Z M5.15962205,15.3213307 C6.0468622,14.7255984 6.63197244,13.7132126 6.63197244,12.5666299 C6.63197244,10.9282165 5.43706693,9.56425591 3.87315748,9.29840551 C3.91093307,7.52100787 4.43732283,6.08052362 5.41724409,5.10052756 C7.80241732,2.7146811 12.7789213,3.13417717 18.3348504,6.10625591 C16.0609843,7.60605906 13.8665591,9.4073937 11.7952598,11.4786929 C9.72366142,13.5502913 7.92225197,15.7449409 6.42244882,18.0188819 C5.93525591,17.1088268 5.51359055,16.2071496 5.15962205,15.3213307 Z M5.41701969,34.5700512 C3.03117323,32.1849528 3.45066929,27.208374 6.42274803,21.6525945 C7.92247638,23.9263858 9.72381102,26.120811 11.795185,28.192185 C13.8665591,30.2634843 16.0609843,32.0648189 18.3347756,33.564622 C12.7788465,36.5364764 7.80241732,36.9559724 5.41701969,34.5700512 Z M13.1144134,26.8729567 C10.8920866,24.6507047 8.99635039,22.2854291 7.47268504,19.8353268 C8.99620079,17.3852992 10.8920118,15.0200984 13.1144134,12.7976969 C15.3367402,10.5753701 17.7019409,8.67955906 20.1520433,7.1559685 C22.6020709,8.67963386 24.9673465,10.5753701 27.1896732,12.7976969 C29.4126732,15.0207717 31.308185,17.3858976 32.8305039,19.8353268 C31.3082598,22.2846063 29.412748,24.6498819 27.1896732,26.8729567 C24.9673465,29.0952835 22.6020709,30.9910945 20.1520433,32.514685 C17.7020157,30.9910945 15.3366654,29.0952835 13.1144134,26.8729567 Z M34.8875906,34.570126 C32.5016693,36.9558228 27.5249409,36.5364764 21.9690866,33.5645472 C24.242878,32.0648189 26.4373031,30.2634843 28.5086772,28.1921102 C30.5806496,26.1201378 32.381685,23.9257126 33.8803661,21.6527441 C36.8531181,27.2082244 37.2731378,32.1847283 34.8875906,34.570126 Z" />
                  </g>
                </svg>
                <h3>交互动画</h3>
                <p>熟悉基础动画<br />创新动画专题<br />分享动画心得</p>
              </FadeScrollComponentY>
            </a>
          </li>
          <li>
            <a href='#open-resource'>
              <FadeScrollComponentY delay='0.25'>
                <svg xmlns="http://www.w3.org/2000/svg" width="55" height="48" viewBox="0 0 55 48">
                  <g fill="none" transform="translate(0 11)">
                    <path className='icon-color-line' d="M48.7645984,0.0724590164 C45.5704344,0.0724590164 42.9718197,2.67118033 42.9718197,5.86534426 C42.9718197,7.03033607 43.3186639,8.11519672 43.9128279,9.02445082 L37.6543934,15.2828852 C36.7450328,14.6887213 35.6601721,14.341877 34.4951803,14.341877 C33.2879918,14.341877 32.1660492,14.7135492 31.237082,15.3478852 L24.9141803,9.02402459 C25.5082377,8.11477049 25.8548689,7.03001639 25.8548689,5.8652377 C25.8548689,2.67107377 23.2562541,0.0724590164 20.0620902,0.0724590164 C16.8679262,0.0724590164 14.2693115,2.67107377 14.2693115,5.8652377 C14.2693115,7.03001639 14.6160492,8.11445082 15.2098934,9.02370492 L8.9512459,15.282459 C8.04209836,14.6885082 6.95745082,14.341877 5.79277869,14.341877 C2.59861475,14.341877 0,16.9405984 0,20.1347623 C0,23.3289262 2.59861475,25.927541 5.79277869,25.927541 C8.98694262,25.927541 11.5855574,23.3289262 11.5855574,20.1347623 C11.5855574,18.9697705 11.2387131,17.8849098 10.6445492,16.9755492 L16.9029836,10.7171148 C17.8123443,11.3112787 18.8972049,11.658123 20.0621967,11.658123 C21.227082,11.658123 22.3119426,11.3112787 23.2211967,10.7171148 L29.5790492,17.0758197 C29.0243115,17.9642951 28.7025082,19.0123934 28.7025082,20.1346557 C28.7025082,23.3288197 31.301123,25.927541 34.4952869,25.927541 C37.6894508,25.927541 40.2880656,23.3288197 40.2880656,20.1346557 C40.2880656,18.969877 39.9413279,17.8853361 39.3474836,16.9761885 L45.6062377,10.7174344 C46.5154918,11.3113852 47.6001393,11.6580164 48.7647049,11.6580164 C51.9588689,11.6580164 54.5574836,9.05940164 54.5574836,5.8652377 C54.5574836,2.67096721 51.9587623,0.0724590164 48.7645984,0.0724590164 Z M5.79277869,23.5330902 C3.91886066,23.5330902 2.39434426,22.0085738 2.39434426,20.1347623 C2.39434426,18.2608443 3.91886066,16.7363279 5.79277869,16.7363279 C7.66659016,16.7363279 9.19121311,18.2608443 9.19121311,20.1347623 C9.19121311,22.0085738 7.66669672,23.5330902 5.79277869,23.5330902 Z M20.0621967,9.26367213 C18.1883852,9.26367213 16.6637623,7.73915574 16.6637623,5.8652377 C16.6637623,3.99142623 18.1882787,2.46680328 20.0621967,2.46680328 C21.9361148,2.46680328 23.4606311,3.99131967 23.4606311,5.8652377 C23.4606311,7.73915574 21.9361148,9.26367213 20.0621967,9.26367213 Z M34.4951803,23.5330902 C32.6213689,23.5330902 31.0967459,22.0085738 31.0967459,20.1346557 C31.0967459,18.2607377 32.6212623,16.7362213 34.4951803,16.7362213 C36.3689918,16.7362213 37.8936148,18.2607377 37.8936148,20.1346557 C37.8935082,22.0085738 36.3689918,23.5330902 34.4951803,23.5330902 Z M48.7645984,9.26367213 C46.8907869,9.26367213 45.3661639,7.73915574 45.3661639,5.8652377 C45.3661639,3.99142623 46.8906803,2.46680328 48.7645984,2.46680328 C50.6384098,2.46680328 52.1630328,3.99131967 52.1630328,5.8652377 C52.1630328,7.73915574 50.6384098,9.26367213 48.7645984,9.26367213 Z" />
                    <path className='icon-color-dot' d="M18.8365738 14.7813197C18.369 14.3138525 17.6110574 14.3138525 17.1434836 14.7813197L14.7082213 17.216582C14.2407541 17.6840492 14.2407541 18.4420984 14.7083279 18.9096721 14.9421148 19.143459 15.2484672 19.2603525 15.5548197 19.2603525 15.8611721 19.2603525 16.1676311 19.1433525 16.4013115 18.9096721L18.8365738 16.4744098C19.3042541 16.0069426 19.3042541 15.2487869 18.8365738 14.7813197zM39.8484098 7.13284426C39.3808361 6.66537705 38.623 6.66537705 38.1552131 7.13295082L35.7199508 9.56821311C35.2524836 10.0356803 35.2524836 10.7937295 35.7199508 11.2613033 35.9538443 11.4949836 36.2601967 11.611877 36.5665492 11.611877 36.8730082 11.611877 37.1792541 11.494877 37.413041 11.2611967L39.8483033 8.82593443C40.315877 8.35836066 40.315877 7.60031148 39.8484098 7.13284426z" />
                  </g>
                </svg>

                <h3>开源创造</h3>
                <p>参与开源组织<br />开源精巧组件<br />热心开发者群体</p>
              </FadeScrollComponentY>
            </a>
          </li>
        </ul>
      </ScrollspyNav>
    </section>
  )
}