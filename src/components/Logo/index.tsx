import * as React from 'react';
import { LogoSVG } from './styled';

interface LogoProps {
  color?: string;
  className?: string;
}

const Logo: React.FunctionComponent<LogoProps> = ({
  className,
  color = '#000'
}) => {
  return (
    <LogoSVG
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="121"
      height="98"
      viewBox="0 0 121 98"
    >
      <g fill="none" fillRule="evenodd">
        <path
          fill={color}
          d="M2.4985 93.3175C2.1435 93.3175 1.7805 93.2415 1.4365 93.0795.1875 92.4925-.3495 91.0035.2375 89.7535L38.3185 8.7295C38.8305 7.6415 40.0415 7.0715 41.2065 7.3725 42.3695 7.6725 43.1545 8.7575 43.0755 9.9575L39.9275 57.8315 65.0375 2.4675C65.6065 1.2115 67.0885.6535 68.3465 1.2235 69.6035 1.7945 70.1605 3.2755 69.5905 4.5335L38.8075 72.4035C38.3085 73.5045 37.0905 74.0875 35.9225 73.7965 34.7505 73.5025 33.9565 72.4125 34.0365 71.2075L37.2195 22.8255 4.7635 91.8805C4.3375 92.7865 3.4375 93.3175 2.4985 93.3175M71.2954 30.5934C62.2374 47.0044 63.2064 51.9614 65.1694 54.4144 66.5494 56.1394 68.7694 57.1764 70.7994 57.0584 72.9554 56.9324 74.9234 55.5404 76.4914 53.0314 79.2174 48.6714 77.9324 42.7924 71.2954 30.5934M70.4804 62.0674C67.0134 62.0674 63.5284 60.3684 61.2654 57.5384 56.4644 51.5384 58.6764 42.2024 69.1544 24.2404 69.6034 23.4724 70.4254 23.0004 71.3144 23.0004L71.3244 23.0004C72.2184 23.0044 73.0414 23.4854 73.4844 24.2604 82.0014 39.1644 85.4604 48.1164 80.7324 55.6814 77.6184 60.6624 73.7704 61.8934 71.0904 62.0494 70.8874 62.0614 70.6834 62.0674 70.4804 62.0674"
        />
        <path
          fill={color}
          d="M70.5659 76.9801C64.0369 76.9801 57.0349 74.4871 50.5849 68.3061 49.5869 67.3501 49.5529 65.7681 50.5089 64.7711 51.4629 63.7741 53.0469 63.7401 54.0439 64.6951 61.7859 72.1151 74.8709 75.7381 85.2969 66.1581 93.6779 58.4591 96.7649 44.0431 84.7689 29.1891 76.8369 19.3661 77.0649 13.3431 78.6529 10.0201 80.1309 6.9241 83.4509 5.0011 87.3139 5.0011 91.6349 5.0011 94.1839 7.1031 95.5609 8.8671 98.0409 12.0421 98.4419 16.2981 97.7399 19.1071 97.4049 20.4471 96.0459 21.2581 94.7079 20.9261 93.3679 20.5911 92.5539 19.2331 92.8879 17.8941 93.2949 16.2661 92.9909 13.6991 91.6209 11.9441 90.6139 10.6541 89.1649 10.0011 87.3139 10.0011 86.5849 10.0011 84.1289 10.1571 83.1639 12.1761 82.5259 13.5101 81.7849 17.5341 88.6599 26.0471 94.9659 33.8571 98.0759 42.3661 97.6509 50.6531 97.2709 58.0611 94.0859 64.8751 88.6799 69.8401 84.0349 74.1071 77.5729 76.9801 70.5659 76.9801M105.5776 25.0006C105.8926 22.4746 106.2066 19.5636 106.4776 16.2716 107.8866 19.0876 109.3456 22.1376 110.6846 25.0006L105.5776 25.0006zM120.6016 34.7136C120.2356 33.8806 111.5696 14.2196 106.6826 6.0756 106.1156 5.1296 104.9986 4.6686 103.9276 4.9386 102.8576 5.2086 102.0926 6.1466 102.0426 7.2486 101.2546 24.5956 98.8876 35.0566 98.8626 35.1596 98.5546 36.5046 99.3926 37.8466 100.7386 38.1566 102.0786 38.4646 103.4246 37.6286 103.7346 36.2826 103.7796 36.0886 104.2736 33.9036 104.8806 30.0006L112.9976 30.0006C114.7666 33.8726 115.9936 36.6536 116.0256 36.7276 116.4376 37.6646 117.3536 38.2216 118.3146 38.2216 118.6516 38.2216 118.9936 38.1536 119.3206 38.0086 120.5846 37.4526 121.1586 35.9776 120.6016 34.7136L120.6016 34.7136z"
        />
        <path
          fill={color}
          d="M72.1333,97.4498 C59.9883,97.4498 48.1373,92.8358 40.3193,84.4158 C39.3793,83.4048 39.4383,81.8228 40.4493,80.8828 C41.4623,79.9438 43.0443,80.0028 43.9833,81.0138 C53.9013,91.6938 71.2783,95.3978 86.2443,90.0228 C103.0043,84.0038 113.6143,68.1528 115.6193,46.3228 L102.1093,46.3228 C100.7283,46.3228 99.6093,45.2038 99.6093,43.8228 C99.6093,42.4418 100.7283,41.3228 102.1093,41.3228 L118.3143,41.3228 C119.0023,41.3228 119.6603,41.6068 120.1333,42.1078 C120.6053,42.6088 120.8503,43.2828 120.8103,43.9698 C119.3213,69.2588 107.3393,87.7598 87.9343,94.7288 C82.8213,96.5658 77.4483,97.4498 72.1333,97.4498"
        />
      </g>
    </LogoSVG>
  );
};

export default Logo;
