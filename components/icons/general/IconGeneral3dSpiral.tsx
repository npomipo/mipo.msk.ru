import stls from '@/styles/components/icons/general/IconGeneral3dSpiral.module.sass'
import { TPropClassNames, TPropColor } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { IconContainer } from '@/components/layout'

type TIconGeneral3dSpiralProps = TPropClassNames & TPropColor

const IconGeneral3dSpiral = ({
  classNames,
  color
}: TIconGeneral3dSpiralProps) => {
  return (
    <IconContainer classNames={[cn(stls.container, classNames)]}>
      <svg viewBox='0 0 51 54' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M20.961 14.3657C24.7454 13.6579 28.1889 12.8899 31.7239 12.9888C32.9547 13.0232 33.6203 12.3073 34.3406 11.5473C36.6047 9.15247 38.5161 6.48789 40.2653 3.70891C40.8678 2.75404 41.3113 1.69906 41.8341 0.693115C41.9819 0.41001 42.0367 -0.092637 42.5296 0.17207C42.957 0.401861 42.8236 0.799644 42.6678 1.18306C41.8288 3.2482 40.6124 5.09617 39.3968 6.94823C38.1968 8.77332 36.8038 10.4415 35.3388 12.0547C35.1694 12.2397 34.8139 12.4162 34.9855 12.7299C35.1861 13.0973 35.5825 13.1368 35.9871 13.1552C38.5559 13.2732 40.9346 14.0093 43.0383 15.5041C45.2689 17.0889 46.8707 19.1566 47.2093 21.9319C47.7478 26.3411 46.3187 30.1597 43.4306 33.4798C43.232 33.7076 43.1687 34.0536 42.9667 34.2757C42.3047 35.008 42.8877 35.2144 43.4293 35.252C44.9359 35.3522 46.2926 35.9118 47.6638 36.4595C49.4089 37.1588 50.7822 39.6408 50.7791 41.4927C50.7751 44.8445 48.6348 46.8758 46.5026 48.9439C44.7821 50.6131 42.8269 51.9546 40.6962 53.0625C40.1868 53.3285 39.8436 53.1702 39.6117 52.904C39.2296 52.4607 39.761 52.1685 40.0259 52.0183C41.4335 51.2082 42.8328 50.3893 44.1437 49.4312C44.9779 48.8197 46.1696 48.4706 46.6787 47.7247C47.5734 46.4122 48.7672 45.2913 49.3213 43.715C50.6882 39.8179 48.5967 37.6562 45.4559 36.678C44.3705 36.3397 43.2099 36.2343 42.0805 36.047C41.1891 35.8997 40.6749 36.5931 40.104 37.0568C37.5816 39.114 34.8781 40.8532 31.927 42.2545C27.9143 44.1586 23.6989 45.4216 19.4153 46.5002C18.5304 46.7243 17.6573 46.6115 16.8755 46.2216C15.3431 45.4564 15.1772 43.723 16.2466 42.1129C17.1774 40.7111 18.5841 40.0041 19.9753 39.3048C24.0686 37.2502 28.4223 35.9441 32.9554 35.3485C35.2357 35.0498 37.5292 34.5768 39.8521 34.9116C40.9027 35.0626 41.4637 34.3675 42.0279 33.736C44.4 31.0818 45.871 27.9718 46.2686 24.4415C46.4774 22.5895 46.0591 20.7508 45.0654 19.1304C42.9116 15.6197 39.4555 14.5522 35.6301 14.2234C35.353 14.2006 35.0719 14.1787 34.8038 14.1089C33.9331 13.8799 33.3295 14.068 32.6221 14.7694C30.6334 16.7396 28.4487 18.5 26.164 20.1366C24.3367 21.4457 22.4399 22.663 20.4906 23.7482C18.5357 24.8369 16.5095 25.8254 14.4065 26.6787C12.1186 27.6068 9.79828 28.407 7.45593 29.1456C5.83507 29.6575 4.10741 29.7214 2.54949 28.9768C0.172832 27.8396 0.291161 26.0054 1.53322 23.6783C2.27382 22.2882 3.58582 21.3448 5.01097 20.5267C6.85077 19.4697 8.76463 18.5551 10.6921 17.7317C13.2051 16.6579 15.7484 15.5752 18.4663 15.0349C19.4224 14.8424 20.3504 14.5317 20.961 14.3657ZM22.8295 15.1493C20.3536 15.5916 18.1185 16.1353 15.9572 16.8985C14.7799 17.3131 13.5405 17.5913 12.4338 18.1618C10.3066 19.2561 8.09289 20.1615 5.96788 21.266C4.56817 21.995 3.35329 22.8635 2.52493 24.1464C1.5019 25.7334 1.71394 27.8531 3.74068 28.2249C4.45278 28.3559 5.10528 28.3713 5.77854 28.2665C9.77499 27.6365 13.4609 26.0397 17.0419 24.2967C19.169 23.2603 21.2617 22.0772 23.2549 20.7231C25.8857 18.9356 28.3924 17.0125 30.8391 14.9912C31.093 14.7813 31.217 14.5848 31.088 14.2896C30.9657 14.0057 30.696 14.0456 30.4565 14.0767C27.8358 14.4157 25.1607 14.3403 22.8295 15.1493ZM22.275 44.5747C24.7638 44.1232 27.0896 43.1525 29.4039 42.2079C31.3149 41.4267 33.1362 40.4124 34.9595 39.4169C36.1895 38.7444 37.1628 37.7318 38.4049 37.1144C38.7181 36.96 38.9636 36.8291 38.8927 36.4375C38.808 35.9633 38.4161 36.12 38.141 36.116C36.2558 36.0966 34.3938 36.3293 32.5381 36.6591C27.4802 37.5583 22.5585 38.824 18.208 41.7278C17.726 42.0499 17.3422 42.4297 17.0393 42.8947C16.6566 43.4843 16.5554 44.1364 16.9059 44.7773C17.2534 45.4145 17.8491 45.5324 18.52 45.4753C19.819 45.3618 21.031 44.8904 22.275 44.5747Z'
          fill={color || colors['rho-2']}
        />
      </svg>
    </IconContainer>
  )
}

export default IconGeneral3dSpiral