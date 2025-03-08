

// @mui
import { useTheme } from '@mui/material/styles';

/***************************  ILLUSTARION -  GROOVY SITTING DOODLE  ***************************/

export default function GroovySittingDoodle() {
  const theme = useTheme();

  return (
    <svg viewBox="0 0 1024 768" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M521.934 324.833C559.299 321.861 594.947 335.785 624.811 357.487C663.301 385.458 695.924 425.46 718.006 467.611C720.355 469.42 722.669 471.275 724.967 473.147C737.257 483.159 749.264 493.734 759.907 505.504C765.849 512.074 781.434 528.05 774.668 538.127C773.232 540.267 770.874 541.495 768.512 542.342C761.89 544.713 754.987 545.914 748.456 548.688C740.394 552.111 732.034 556.905 726.869 564.214C725.4 566.293 725.017 568.746 723.042 569.662C720.948 570.634 717 570.255 714.711 570.479C710.11 570.931 705.508 571.382 700.906 571.832C690.095 572.892 678.794 573.009 668.218 575.62L619.565 587.633C609.614 590.09 598.177 591.444 588.74 595.482C574.658 601.509 561.223 610.333 547.748 617.605C541.233 621.121 534.717 624.638 528.201 628.154C525.019 629.872 522.841 629.895 519.112 630.182L492.202 632.252C487.861 632.586 485.777 634.334 485.208 629.99L478.953 582.232L475.647 556.978C475.45 555.476 475.508 548.036 474.277 547.138C473.505 546.575 468.975 547.787 468.137 547.89L455.923 549.386C447.126 550.463 438.33 551.54 429.533 552.617C428.819 552.704 424.864 552.659 424.42 553.243C423.9 553.928 424.889 557.854 424.978 558.699C425.911 567.567 426.845 576.435 427.778 585.303C427.887 586.331 429.136 591.1 428.478 591.944C428.02 592.53 424.706 592.601 424.033 592.711C415.547 594.096 407.062 595.481 398.576 596.867C392.499 597.859 384.557 597.809 378.812 600.094C375.513 601.406 372.249 604.761 369.399 606.858L328.013 637.312C321.736 641.93 313.276 640.754 305.632 641.336L217.455 648.054C217.528 645.308 217.602 642.562 217.675 639.815C218.063 625.27 218.45 610.725 218.838 596.18L219.346 577.156C219.378 575.952 218.897 572.429 219.684 571.539C220.73 570.358 225.405 569.846 226.856 569.416C231.723 567.975 236.589 566.535 241.455 565.095C255.732 560.869 270.007 556.643 284.283 552.418C298.393 548.242 312.501 544.065 326.61 539.889C331.438 538.46 336.265 537.031 341.092 535.602C342.207 535.272 346.102 534.833 346.877 533.89C347.854 532.702 347.417 527.633 347.573 526.127C348.339 518.778 349.431 511.462 350.761 504.195C360.353 451.777 382.772 398.533 424.341 363.564C451.819 340.448 486.287 327.668 521.934 324.833ZM528.524 429.949C524.825 425.606 518.611 418.521 512.076 419.697C506.765 420.653 503.871 427.237 502.02 431.614C494.579 449.206 492.271 469.371 489.957 488.172C488.505 499.969 487.337 511.818 486.59 523.681C513.096 521.642 539.602 519.603 566.108 517.564C564.857 509.118 563.854 500.594 562.348 492.189C561.593 487.976 559.505 484.183 557.72 480.291C549.736 462.883 541.021 444.622 528.524 429.949Z"
        fill={theme.palette.primary.lighter}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M896.469 87L897.117 87.0112C914.707 87.4792 930.219 98.7982 942.25 110.777C948.199 116.7 953.624 123.667 956.177 131.774C959.125 141.139 958.155 151.44 955.912 160.839C950.957 181.61 944.901 202.488 938.091 222.731C934.74 232.689 929.881 242.453 927.352 252.645C925.267 261.042 934.047 267.158 934.383 275.787C934.722 284.492 928.865 292.67 920.817 295.781C917.389 297.106 913.242 295.999 910.082 297.357C907.192 298.598 906.18 302.261 905.625 305.073C904.869 308.908 905.005 312.74 905.22 316.609C905.352 318.976 904.762 322.839 905.917 324.95C906.71 326.4 908.155 326.874 909.4 327.866C911.099 329.22 912.231 330.905 913.721 332.461C916.177 335.029 918.54 336.42 919.207 340.166C919.562 339.315 919.917 338.464 920.271 337.614C922.102 340.963 923.459 342.569 921.718 345.748C927.119 345.218 930.319 355.016 931.735 358.732C934.328 365.532 936.109 372.598 938.708 379.402C942.27 388.731 946.95 397.937 949.223 407.698C951.132 415.902 952.643 424.328 954.34 432.589C955.296 437.24 956.129 441.965 957.878 446.4C958.558 448.122 959.82 449.281 960.602 450.816C961.671 452.917 961.253 454.027 961.304 456.328C961.394 460.43 963.982 463.093 964.796 467.078C965.665 471.335 966.375 475.64 967.252 479.906C969.019 488.499 972.292 497.08 973.08 505.784C973.995 515.891 975.958 525.874 976.945 535.984C977.809 544.818 976.341 554.302 978.186 562.848C979.822 570.433 977.794 577.369 977.072 584.9C976.889 586.812 979.834 598.196 975.101 596.01C975.99 598.694 977.236 599.973 977.303 602.917C977.365 605.671 976.655 608.502 976.075 611.172C974.955 616.332 974.209 621.956 972.015 626.79C969.534 632.258 965.753 632.913 960.613 634.789C957.133 636.059 950.867 640.591 948.125 635.743C946.49 640.72 943.298 637.28 939.72 637.002C939.744 637.003 937.672 637.769 937.284 637.822C936.026 637.991 934.539 637.398 933.287 637.294C930.166 637.035 927.104 637.452 924.051 638.084C917.016 639.542 910.21 641.558 903.071 642.574C889.126 644.558 875.46 643.62 861.495 644.489C834.165 646.188 806.383 644.762 779.032 644.026C776.096 643.947 772.932 644.358 770.035 643.907C766.912 643.42 766.231 641.942 763.798 640.462C759.753 638.004 755.265 640.395 751.069 641.293C738.749 643.93 725.883 644.125 713.465 646.676C688.235 651.857 664.989 662.082 640.822 670.707C630.345 674.446 618.048 680.501 606.75 680.764C593.058 681.06 596.292 667.574 598.808 658.905C590.897 661.005 578.474 670.601 570.433 665.032C560.85 658.396 573.043 647.364 573.617 639.564C556.49 643.119 537.062 650.916 519.678 644.578C516.333 643.359 513.422 640.781 509.831 640.362C506.098 639.926 502.152 641.245 498.378 641.222C489.78 641.167 481.431 640.023 472.836 641.082C453.673 643.442 434.782 644.734 415.464 645.243C396.016 645.755 376.567 646.907 357.11 646.859C347.234 646.834 337.175 645.663 327.319 646.188C323.449 646.394 315.12 649.205 312.401 645.272C309.671 648.545 307.352 646.358 303.85 646.721C304.499 646.654 302.026 648.084 301.654 648.222C299.813 648.906 298.092 648.698 296.17 648.678C291.05 648.626 286.267 651.022 281.173 650.79C279.885 650.732 278.911 650.357 277.818 649.915C277.559 649.81 277.621 648.696 277.206 648.603C274.714 648.045 275.358 649.571 273.776 650.341C272.022 651.193 269.427 649.814 270.425 652.436C265.666 652.227 261.157 653.831 256.827 651.009C258.874 655.533 251.723 651.775 249.854 651.701C246.748 651.576 244.028 653.129 240.93 653.487C237.215 653.915 233.482 652.192 229.847 653.244C226.999 654.067 226.024 656.048 223.06 655.035C220.542 654.175 218.969 652.306 217.747 650.263C216.061 647.444 215.845 646.186 211.779 646.136C208.764 646.099 205.733 646.748 202.689 646.742C199.201 646.735 195.368 646.365 192.184 648.023C188.754 649.809 186.739 652.528 182.935 653.927C165.829 660.217 147.051 658.552 129.203 658.445C121.673 658.4 116.147 659.092 114.033 650.503C112.247 643.246 111.531 635.657 109.827 628.34C107.739 619.375 105.444 611.057 100.811 603.042C96.3171 595.269 92.5361 587.239 88.6231 579.165C80.4851 562.373 69.1571 548.086 56.5271 534.44C51.7291 529.255 46.2301 523.479 46.0067 516.013C45.8431 509.566 48.6831 502.887 52.4081 497.751C55.7341 493.167 61.2141 487.996 67.4131 489.065C71.1461 489.709 73.5931 492.72 76.3791 494.979C79.4241 497.447 82.7411 499.129 86.4111 500.475C94.9691 503.614 102.146 507.049 109.557 512.467C117.056 517.95 124.066 524.09 130.551 530.739C143 543.504 155.756 556.765 162.909 573.294C165.728 579.806 167.529 586.086 169.451 592.838C171.339 599.468 176.479 597.641 182.259 596.688C189.303 595.526 196.382 594.903 203.473 594.167C206.142 593.89 209.905 593.808 211.512 591.286C213.284 588.505 211.254 584.902 211.093 582.017C211.007 580.476 211.518 579.34 211.646 577.837C211.793 576.128 211.288 574.567 211.286 572.865C211.284 569.205 212.997 565.945 215.844 563.728C221.171 559.578 228.941 557.104 235.248 554.821C243.859 551.703 253.086 550.171 261.954 547.946C271.939 545.44 281.984 543.182 292.023 540.906C301.887 538.67 311.736 536.37 321.706 534.648C327.554 533.638 333.898 534.007 339.567 532.161C345.592 530.199 344.593 524.137 344.575 518.766C344.546 509.896 345.644 500.764 346.943 491.995C349.707 473.353 356.291 455.109 362.276 437.294C368.042 420.136 375.185 403.668 386.977 389.744C398.456 376.189 412.545 363.922 427.16 353.849C442.388 343.353 459.333 335.77 475.229 326.4C471.755 323.743 467.611 321.476 465.615 317.384C463.361 312.765 464.316 307.242 464.412 302.305C464.52 296.733 464.69 291.842 466.68 286.534C467.769 283.627 471.979 278.113 471.334 274.952C470.253 269.644 458.641 265.767 454.365 263.583C447.659 260.157 440.94 256.677 434.76 252.352C428.829 248.203 423.249 243.209 419.656 236.84C418.637 235.033 417.798 233.135 417.147 231.165C416.422 228.967 416.929 228.218 414.732 228.057C411.225 227.799 405.967 231.319 403.012 232.874C387.777 240.891 371.045 251.68 353.069 250.964C346.547 250.705 339.215 248.656 336.909 241.854C333.873 232.899 340.212 223.648 345.774 217.18C334.925 218.885 314.919 224.214 306.358 214.534C300.653 208.084 304.956 197.846 309.74 192.253C316.061 184.865 325.072 180.367 333.396 175.666C323.182 171.772 311.875 169.282 302.893 162.766C294.302 156.535 295.364 146.962 302.149 139.612C309.403 131.755 322.087 127.731 332.063 124.814C344.299 121.236 356.455 121.523 369.064 121.763C391.694 122.193 411.133 130.535 429.694 143.147C439.508 149.816 449.181 157.013 457.885 165.09C466.049 172.665 474.758 179.709 482.802 187.366C490.596 194.785 496.727 203.977 504.953 210.908C511.948 216.801 519.617 225.154 528.503 227.77C537.926 230.544 546.408 235.132 555.911 237.863C566.691 240.96 575.951 246.139 585.941 251.08C627.866 271.816 672.873 285.311 717.073 300.198C739.681 307.812 762.439 313.179 785.52 318.994C797.111 321.914 807.874 323.472 819.835 322.944C822.593 322.823 825.227 322.751 827.947 323.134C829.941 323.414 831.457 324.168 833.24 322.976C835.802 321.264 836.765 316.808 838.292 314.271C829.78 311.632 821.447 308.777 817.563 300.054C815.116 294.557 813.846 288.146 812.773 282.248C812.197 279.074 812.184 275.871 811.692 272.695C811.422 270.941 810.588 269.108 810.652 267.316C810.461 268.313 804.118 265.034 803.198 264.425C799.649 262.074 799.003 257.335 799.032 253.335C799.066 248.817 800.43 243.851 803.498 240.425C804.95 238.803 806.678 237.587 808.789 236.976C810.287 236.542 812.263 237.11 813.584 236.673C819.444 234.736 820.1 220.235 820.931 214.956C822.763 203.324 824.588 192.219 828.542 181.069C835.751 160.741 845.029 140.985 856.08 122.477C865.549 106.618 875.009 87.2262 895.828 87H896.469ZM716.492 575.32C708.065 576.779 699.992 579.759 691.852 582.286C684.25 584.646 676.545 586.149 668.746 587.683C653.225 590.737 637.363 593.532 622.067 597.513C617.76 598.634 615.494 601.164 611.736 602.923C608.95 604.227 606.335 602.906 603.437 602.795C597.128 602.554 590.128 604.612 584.06 606.146C569.735 609.765 557.025 616.051 544.062 623C542.902 623.621 535.059 627.21 535.431 628.696C535.733 629.909 545.703 626.652 547.289 626.411C555.317 625.188 563.159 622.657 571.128 621.085C577.669 619.794 584.284 618.92 590.797 617.487C598.045 615.893 613.485 610.349 614.099 622.32C614.762 635.258 600.475 639.237 591.887 645.272C592.844 646.923 606.622 641.479 608.33 640.929C614.189 639.04 619.624 635.635 625.589 634.185C635.967 631.662 634.71 643.124 628.981 648.223C622.615 653.887 612.087 655.599 608.562 664.316C613.191 665.986 619.243 662.85 623.495 661.291C629.079 659.244 634.684 657.228 640.302 655.276C652.913 650.894 664.891 644.857 677.569 640.682C703.581 632.118 731.076 629.662 758.268 628.14C755.845 618.741 753.195 609.397 751.018 599.936C750.086 595.887 749.233 591.819 748.527 587.724C748.036 584.876 748.454 578.061 746.492 575.815C744.103 573.079 737.881 576.922 734.495 576.849C731.178 576.777 728.758 575.065 725.693 574.525C722.783 574.013 719.339 574.827 716.492 575.32ZM227.737 629.726C227.737 634.219 226.958 639.669 232.868 640.194C237.648 640.619 246.999 641.165 250.812 637.766C247.158 635.985 243.005 635.674 239.124 634.647C235.08 633.576 231.346 631.818 227.737 629.726ZM325.283 547.86C323.485 547.873 320.452 549.872 318.812 550.43C315.811 551.45 312.761 552.311 309.697 553.122C300.491 555.56 288.638 555.94 284.411 565.822C282.301 570.754 280.838 583.437 273.506 583.391C266.989 583.349 263.086 573.943 258.437 570.596C253.632 567.138 246.014 569.492 240.832 570.994C235.566 572.519 227.394 574.476 227.985 581.15C228.41 585.948 229.276 590.315 229.235 595.216C229.184 601.455 228.657 607.681 228.657 613.92C232.354 608.855 235.579 598.672 242.129 596.635C248.746 594.577 252.489 606.138 254.21 610.569C256.343 616.059 259.024 622.285 259.187 628.235C259.238 630.103 258.104 635.235 259.403 636.771C260.556 638.135 264.991 637.146 266.424 636.997C275.293 636.074 284.115 634.925 293.012 634.155C297.581 633.76 298.825 632.757 298.378 627.842C298.027 623.982 297.918 620.303 298.402 616.428C300.562 599.127 311.216 583.301 329.23 580.297C340.085 578.486 352.762 579.81 363.599 581.549C367.776 582.219 372.311 584.242 376.555 584.066C379.69 583.936 378.68 583.758 379.322 580.807C379.771 578.744 380.732 576.984 382.301 575.554C383.541 574.424 385.115 575.062 386.284 573.585C387.13 572.516 387.003 571.06 387.402 569.828C388.181 567.431 389.589 564.196 392.392 563.591C396.903 562.616 401.698 568.656 403.975 571.771C406.327 574.992 407.038 584.608 410.821 585.867C415.186 587.318 420.379 581.597 421.289 577.993C422.513 573.145 420.971 567.9 420.234 563.099C420.182 562.755 419.967 559.565 419.73 559.357C419.093 558.796 414.294 558.953 413.444 558.911C409.263 558.712 405.075 558.702 400.89 558.691C384.483 558.65 368.411 557.037 352.113 555.317C354.48 559.176 358.533 565.512 354.373 569.586C351.29 572.604 345.726 571.09 341.854 571.712C336.384 572.59 327.163 577.781 321.95 573.986C314.604 568.636 322.914 559.444 325.642 554.388C326.226 553.304 328.392 549.49 327.474 548.219C326.679 547.118 326.447 547.851 325.283 547.86ZM202.937 607.319C199.186 608.463 195.407 609.563 191.575 610.411C187.08 611.406 180.11 610.44 177.923 615.385C176.259 619.145 177.085 625.211 178.437 628.956C179.985 633.245 183.618 634.348 187.906 634.675C192.91 635.057 197.98 634.25 202.925 633.566C204.874 633.296 206.952 632.809 208.932 632.806C210.107 632.803 212.479 633.878 213.524 632.999C214.877 631.86 213.986 625.39 213.88 623.839C213.617 619.998 212.888 616.208 212.689 612.361C212.547 609.598 213.589 605.843 210.35 605.254C208.333 604.887 204.69 606.785 202.937 607.319ZM505.838 531.282C503.035 531.767 500.248 532.114 497.401 532.071C495.647 532.044 493.547 531.448 491.926 532.41C488.932 534.187 489.378 538.868 489.48 541.789C489.605 545.333 489.915 548.93 490.293 552.456C490.654 555.828 492.504 561.381 489.891 564.27C488.048 562.253 487.139 555.658 483.582 555.899C479.671 556.163 481.479 562.413 481.826 564.651C483.743 577.022 485.928 589.4 487.641 601.807C488.455 607.705 489.507 613.56 490.052 619.487C490.417 623.465 490.54 627.047 494.986 627.871C499.106 628.635 503.736 627.331 507.901 627.231C512.189 627.128 514.645 626.837 517.112 622.961C511.205 621.668 501.848 622.459 498.52 616.211C494.64 608.922 502.824 602.364 506.851 597.382C509.942 593.556 516.262 580.836 522 588.391C524.066 591.111 524.439 595.262 525.482 598.426C527.179 603.567 529.252 608.634 531.286 613.648C549.895 604.042 568.99 595.382 589.285 589.989C584.111 581.244 577.706 573.369 573.833 563.89C569.493 553.267 565.898 542.354 561.461 531.765C554.426 535.871 546.905 525.917 539.9 525.516C528.834 524.883 516.687 529.402 505.838 531.282ZM395.606 602.899C391.748 605.197 386.073 609.666 385.147 614.286C383.547 622.273 392.662 616.933 395.476 615.185C401.367 611.526 407.139 610.357 413.904 612.612C422.58 615.503 430.575 620.384 439.887 616.676C444.52 614.83 454.797 610.886 452.024 603.809C450.112 598.931 444.517 603.115 441.56 604.864C433.818 609.443 427.407 606.542 419.671 603.237C411.934 599.931 403.222 598.363 395.606 602.899ZM120.851 561.911C117.754 566.301 124.05 565.353 126.814 565.781C132.594 566.674 138.547 571.283 136.954 577.805C135.401 584.164 129.316 588.139 128.157 594.814C127.161 600.546 128.121 607.801 133.656 610.948C136.765 612.715 143.56 613.443 146.689 611.413C151.467 608.313 145.533 603.697 142.372 602.162C138.183 600.127 134.8 599.025 136.873 593.679C139.4 587.162 144.308 582.161 143.872 574.704C143.512 568.526 140.251 561.505 134.31 558.938C130.056 557.101 123.752 557.798 120.851 561.911ZM543.718 542.972C549.072 542.743 549.285 549.213 549.015 552.395C548.646 556.746 549.436 561.383 549.527 565.748C549.648 571.529 550.858 590.461 540.635 587.649C534.061 585.841 528.652 579.541 523.367 575.493C518.505 571.767 506.145 567.298 505.344 560.234C504.44 552.255 514.186 550.762 519.77 549.494C527.742 547.684 535.482 543.326 543.718 542.972ZM517.636 332.682C509.146 333.501 500.703 334.762 492.623 337.582C487.156 339.49 478.759 340.858 474.884 345.54C471.534 349.589 472.986 355.361 471.897 360.145C470.424 366.617 465.956 365.732 461.623 361.691C456.437 356.853 454.937 353.35 447.718 357.89C432.773 367.288 420.924 381.163 409.069 394.017C418.236 396.793 436.219 397.465 439.264 408.918C440.928 415.18 435.911 419.735 431.403 423.152C425.582 427.565 419.506 431.646 413.812 436.236C408.499 440.519 396.585 457.572 393.215 442.579C391.128 433.298 395.038 423.707 393.379 414.539C386.171 426.161 378.852 437.755 372.243 449.733C366.618 459.93 363.347 470.837 360.649 482.111C364.855 482.386 369.233 480.251 373.391 481.512C377.395 482.726 379.269 486.514 379.55 490.438C380.028 497.091 376.956 503.863 375.41 510.252C374.349 514.64 373.131 524.599 367.786 526.027C361.694 527.654 357.871 518.283 355.155 514.475C352.569 518.45 352.612 524.265 352.234 528.822C351.975 531.955 350.227 537.812 353.751 539.544C357.049 541.166 364.003 539.134 367.53 538.985C374.074 538.707 380.745 538.177 387.291 538.37C393.476 538.553 402.576 541.859 404.992 534.258C406.637 529.083 408.086 510.485 416.86 520.575C420.758 525.056 423.806 530.164 427.571 534.73C431.369 539.335 434.822 539.637 440.494 539.404C451.722 538.944 462.686 541.1 473.672 542.841C483.312 544.368 482.047 536.186 481.904 528.902C481.685 517.611 483.924 505.804 485.145 494.575C488.049 467.874 494.009 441.494 503.178 416.241C495.508 413.629 481.758 424.167 476.087 416.164C471.425 409.585 477.414 400.522 479.852 394.372C482.893 386.699 484.431 378.683 489.391 371.883C490.956 369.736 493.183 366.859 496.213 367.582C498.813 368.203 499.849 371.519 501.312 373.39C505.956 379.328 511.888 383.781 516.016 390.258C518.541 394.22 520.505 398.454 521.325 403.106C521.551 404.385 521.265 407.004 522.165 408.077C524.956 411.402 533.749 411.353 537.657 413.392C550.999 420.355 555.688 440.623 560.869 453.403C562.329 457.002 563.776 460.61 564.552 464.425C565.07 466.975 565.045 470.217 566.428 472.504C569.447 477.497 578.827 473.038 583.43 472.265C591.145 470.969 598.822 469.733 606.568 468.645C611.294 467.982 618.173 466.269 621.774 470.456C625.507 474.797 623.36 481.634 621.486 486.291C618.427 493.892 614.519 501.154 611.291 508.686C608.716 514.694 607.434 522.434 602.486 527.063C598.2 531.075 591.107 532.225 586.061 528.96C583.181 527.097 575.787 509.075 573.836 509.88C577.358 523.8 582.522 537.994 587.978 551.279C589.653 555.36 592.53 563.681 596.763 565.894C600.272 567.729 608.234 564.262 611.824 563.59C615.228 562.952 621.948 560.188 625.203 562.213C629.148 564.669 629.629 571.219 630.072 575.285C630.401 578.3 629.804 580.55 633.472 580.4C636.056 580.295 638.664 579.035 641.144 578.401C646.901 576.932 652.876 575.96 658.737 575.014C672.292 572.825 685.842 570.642 699.391 568.398C711.039 566.469 722.535 566.48 733.06 560.955C738.395 558.155 744.511 557.3 750.192 555.427C755.826 553.57 761.442 552.365 767.339 551.667C780.228 550.143 792.77 548.65 805.508 546.039C812.479 544.61 819.437 543.113 826.371 541.512C832.543 540.087 838.51 537.823 844.652 536.426C849.762 535.264 853.959 536.137 856.148 530.337C857.718 526.178 857.353 521.517 857.756 517.164C859.599 497.275 852.634 477.273 851.209 457.493C850.747 451.087 850.605 444.661 850.124 438.26C849.904 435.327 850.037 426.787 846.615 425.206C846.304 427.552 846.546 431.498 843.881 432.661C845.183 432.093 843.474 439.022 843.382 439.718C843.018 442.484 843.926 445.444 843.447 448.158C843.827 449.113 843.661 449.832 842.951 450.316C842.467 450.708 842.114 451.204 841.894 451.803C841.86 453.738 842.427 452.598 842.454 453.266C842.722 459.922 841.597 466.822 842.078 473.64C842.587 480.847 844.196 487.917 845.418 495.025C846.515 501.405 847.697 507.798 848.612 514.207C849.254 518.705 849.73 523.868 847.31 527.962C842.715 535.735 829.412 534.89 821.664 536.161C808.786 538.275 795.89 540.182 782.965 541.978C778.003 542.667 772.981 544.241 767.961 544.32C762.598 544.404 759.728 542.238 756.347 538.28C749.535 530.307 745.142 521.251 739.468 512.578C736.281 507.706 733.63 506.422 728.265 504.935C723.282 503.554 719.283 499.918 715.229 496.894C706.713 490.542 695.716 483.635 690.128 474.28C684.247 464.436 692.534 461.168 700.469 458.482C698.538 453.35 694.751 449.228 691.631 444.813C688.084 439.793 684.868 434.579 681.049 429.748C673.265 419.901 665.49 410.105 657.936 400.074C651.479 391.501 644.953 383.38 636.712 376.435C628.435 369.459 619.22 363.742 610.131 357.902C605.383 354.851 597.048 347.056 591.047 347.853C585.226 348.627 582.924 359.469 581.47 364.026C579.801 369.255 579.212 376.546 575.324 380.663C569.61 386.713 563.677 377.183 560.95 372.791C555.957 364.746 550.847 356.773 545.861 348.721C543.589 345.05 540.307 341.557 538.958 337.395C538.942 337.345 538.311 333.766 538.948 334.267L538.992 334.307L538.948 334.259C537.523 332.846 532.255 332.553 530.285 332.382L530.105 332.366C525.961 331.975 521.768 332.283 517.636 332.682ZM461.981 558.267C457.208 558.238 452.449 558.793 447.698 559.182C443.525 559.523 439.7 558.885 435.534 558.634C430.38 558.324 427.831 558.864 429.018 564.187C429.881 568.06 430.918 573.219 434.895 574.856C440.267 577.068 447.503 576.77 453.227 577.608C457.429 578.223 461.62 578.778 465.804 579.479C468.583 579.945 470.01 580.432 471.311 577.283C472.399 574.644 471.698 571.118 471.327 568.392C471.041 566.3 471.212 562.621 470.224 560.76C468.749 557.982 464.885 558.285 461.981 558.267ZM684.496 505.189C691.508 511.599 696.227 519.794 701.522 527.566C704.755 532.311 711.08 539.876 706.487 545.629C702.574 550.533 693.475 549.411 688.001 549.647C679.399 550.018 672.373 553.905 664.187 555.91C643.57 560.96 660.693 526.305 663.549 519.073C665.553 513.999 667.62 508.948 670.044 504.057C671.137 501.852 673.318 495.422 676.036 494.58C679.976 493.359 682.002 502.909 684.496 505.189ZM507.355 432.325C504.078 438.589 503.546 447.259 501.992 454.1C497.243 475.018 494.466 496.322 492.283 517.642C503.142 513.335 514.604 513.037 526.07 511.983C534.377 511.219 542.005 510.344 550.314 510.699C551.73 510.759 555.803 511.478 556.97 510.274C558.537 508.658 556.639 504.149 556.176 502.449C553.658 493.216 552.551 483.675 549.689 474.499C546.771 465.141 543.224 455.796 539.45 446.749C536.69 440.132 532.899 433.679 526.21 430.434C520.354 427.594 510.99 425.377 507.355 432.325ZM462.634 473.037C467.108 479.782 472.775 485.682 477.145 492.49C480.243 497.319 483.871 506.251 476.429 509.321C473.817 510.398 470.733 509.932 467.996 509.98C463.763 510.053 459.571 510.417 455.331 510.316C451.321 510.22 447.349 509.734 443.349 509.525C440.828 509.394 437.661 509.588 435.44 508.14C429.487 504.257 433.792 496.328 435.709 491.255C437.745 485.866 440.494 480.77 443.147 475.663C444.986 472.121 447.736 464.904 451.919 463.46C456.873 461.75 460.57 469.926 462.634 473.037ZM679.583 396.614C689.416 408.048 697.954 420.52 705.994 433.258C709.918 439.474 713.728 445.763 717.532 452.053C720.021 456.169 721.89 461.434 724.922 465.162C731.839 473.665 733.763 455.112 734.782 451.079C738.543 436.208 743.2 421.457 747.343 406.679L743.097 406.679C726.171 406.67 709.945 406.42 693.466 401.433C688.801 400.022 684.548 396.959 679.583 396.614ZM643.834 399.497C649.188 403.451 683.459 426.666 669.043 435.624C666.06 437.478 661.185 436.637 657.814 436.903C653.494 437.244 649.106 437.662 644.838 438.427C639.313 439.419 633.945 441.148 628.394 442.024C623.981 442.721 618.133 443.534 614.19 440.786C607.686 436.252 611.634 427.348 613.781 421.584C616.834 413.394 619.725 402.43 627.298 397.552C629.06 396.417 631.219 392.364 633.115 391.993C636.084 391.411 641.662 397.894 643.834 399.497ZM832.91 206.928C830.326 208.905 830.208 213.011 829.538 215.909C827.284 225.657 824.138 235.146 822.271 244.998C820.451 254.607 819.879 264.067 820.772 273.805C821.368 280.3 821.437 288.292 825.385 293.823C830.11 300.441 839.466 300.102 846.542 302.062C853.35 303.948 860.1 309.789 852.674 315.861C850.035 318.018 846.57 318.369 843.961 320.447C840.743 323.012 838.895 327.608 837.528 331.366C836.402 334.46 836.435 335.051 839.798 336.144C841.334 336.643 842.886 336.96 844.502 336.826C848.182 336.52 851.465 334.09 854.546 332.264C862.404 327.607 871.48 321.39 880.862 320.687C883.861 320.463 887.27 321.69 890.186 320.716C892.903 319.807 892.069 319.251 892.541 316.724C894.41 306.708 895.169 296.877 900.276 287.816C902.797 283.345 909.461 274.199 913.928 281.16C915.793 284.067 916.468 285.487 920.606 284.595C923.973 283.87 927.672 281.207 927.004 277.318C926.375 273.649 921.55 271.151 918.626 269.543C914.731 267.403 912 267.65 907.759 267.143C896.106 265.75 904.276 248.707 905.956 242.312C907.012 238.293 908.247 233.098 905.475 229.469C901.256 223.949 892.065 225.764 886.275 226.547C878.268 227.63 869.527 228.207 862.033 224.573C854.105 220.729 850.726 212.059 843.292 207.844C840.545 206.286 835.732 204.766 832.91 206.928ZM867.703 277.335C873.212 277.261 870.534 285.116 869.026 287.757C865.848 293.327 859.041 295.481 853.064 293.427C848.336 291.802 843.222 284.624 850.627 283.434C854.178 282.864 857.693 283.096 861.058 281.407C862.975 280.445 865.453 277.365 867.703 277.335ZM853.882 235.565C857.305 237.643 851.463 250.915 850.479 253.601C848.877 257.985 847.451 260.815 851.527 264.194C854.361 266.544 859.951 268.572 857.282 273.255C854.812 277.588 846.337 275.771 842.891 273.651C837.882 270.568 839.358 264.663 840.463 259.817C841.185 256.642 847.787 231.865 853.882 235.565ZM314.884 148.423C325.44 152.932 336.234 157.005 347.403 159.722C357.164 162.097 366.762 164.658 376.822 164.1C386.129 163.585 387.239 172.728 381.923 179.06C379.035 182.5 375.684 182.414 371.475 182.547C366.548 182.703 362.073 184.07 357.321 185.294C350.084 187.158 342.757 188.741 335.744 191.372C332.125 192.73 328.554 194.327 325.326 196.473C323.297 197.823 318.769 200.255 321.164 202.141C324.626 204.866 334.902 201.133 339.022 200.887C348.615 200.315 358.189 199.449 367.728 198.248C372.4 197.659 377.416 197.077 381.841 195.38C384.736 194.27 387.941 191.514 391.219 192.214C398.135 193.691 394.708 204.059 391.568 207.432C386.905 212.441 379.826 214.653 373.803 217.499C369.593 219.489 365.409 221.596 361.321 223.823C359.39 224.875 350.39 228.816 350.675 231.808C350.974 234.953 358.078 233.367 359.835 233.081C371.561 231.174 382.142 226.64 392.976 222C397.718 219.969 402.527 218.02 407.17 215.768C410.413 214.194 413.601 211.796 417.184 211.081C425.632 209.394 425.262 218.829 428.588 223.926C438.474 239.074 457.575 245.536 472.437 254.29C478.059 257.601 483.422 261.414 488.581 265.403C492.266 268.251 493.739 272.171 497.854 268.415C501.283 265.284 502.937 260.692 505.135 256.71C507.694 252.074 511.112 247.981 513.735 243.383C517.611 236.59 518.772 230.111 510.26 227.611C501.324 224.987 494.252 221.074 486.657 215.491C468.018 201.789 452.552 184.292 433.967 170.485C416.749 157.693 398.491 145.689 376.906 142.254C356.448 138.997 334.003 139.799 314.884 148.423ZM873.297 246.816C872.86 250.588 871.931 258.633 866.691 258.934C860.327 259.299 864.601 239.966 868.206 237.79C873.978 234.306 873.667 243.62 873.297 246.816ZM814.08 245.276C806.136 245.934 803.872 254.635 811.812 257.716L814.08 245.276ZM843.535 237.64C842.515 241.589 842.878 247.926 839.709 250.957C835.242 255.228 833.297 248.96 833.33 245.386C833.362 241.851 835.114 233.009 839.845 232.543C843.887 232.145 840.523 236.831 843.535 237.64ZM929.267 149.781C926.363 155.824 929.485 161.788 931.223 167.728C927.658 168.877 922.854 168.008 920.677 171.776C919.305 174.151 919.544 177.727 919.955 180.299C920.292 182.409 922.022 185.25 920.582 187.208C918.697 189.771 914.018 188.586 911.939 191.437C908.779 195.773 910.552 205.677 914.986 208.941C921.218 213.526 917.499 202.274 917.118 200.225C916.162 195.092 921.48 195.79 925.112 193.717C927.061 192.605 927.409 192.39 927.856 190.016C928.269 187.829 928.05 186.094 927.529 183.737C925.761 175.74 928.852 177.046 935.205 175.284C940.685 173.763 940.246 169.384 938.854 164.781C937.762 161.173 934.507 155.254 938.033 152.178C939.432 150.957 941.557 151.729 941.859 149.181C942.063 147.461 939.755 144.641 938.543 143.652C934.366 140.242 930.965 146.247 929.267 149.781Z"
        fill={theme.palette.text.primary}
      />
    </svg>
  );
}
