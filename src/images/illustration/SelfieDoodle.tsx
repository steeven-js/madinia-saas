

// @mui
import { useTheme } from '@mui/material/styles';

/***************************  ILLUSTARION -  SELFIE DOODLE  ***************************/

export default function SelfieDoodle() {
  const theme = useTheme();

  return (
    <svg viewBox="0 0 1024 768" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M530.353 382.02C532.587 382.453 536.292 388.846 537.809 390.663C542.699 396.524 547.59 402.384 552.481 408.244C554.439 410.59 557.262 413.053 558.656 415.767C559.729 417.856 560.097 420.735 560.737 422.973C568.69 450.776 576.468 478.758 582.261 507.103C583.509 513.204 584.692 519.347 585.385 525.54C585.727 528.601 586.626 533.1 585.293 536.058C583.79 539.392 578.954 540.778 575.811 541.811C569.699 543.823 563.299 545.021 556.967 546.096C541.711 548.686 526.263 550.19 510.843 551.407C506.133 551.778 501.284 551.772 496.603 552.405C494.367 552.707 495.037 552.107 494.333 553.608C493.352 555.697 494.002 560.054 493.886 562.331C493.611 567.686 493.338 573.04 493.063 578.396L490.819 622.216C490.061 637.024 489.303 651.833 488.543 666.642C488.257 672.253 487.969 677.864 487.682 683.476C487.529 686.475 487.986 690.347 487.182 693.251C486.573 695.447 487.574 694.8 484.881 694.93C478.645 695.231 472.184 694.476 465.946 694.253C458.871 694 451.796 693.747 444.719 693.494C442.698 693.421 440.44 693.995 439.626 692.546C438.635 690.782 439.39 685.931 439.32 683.961C439.123 678.472 438.927 672.981 438.731 667.492C438.192 652.422 437.653 637.352 437.114 622.283C436.379 601.731 435.642 581.178 434.907 560.624C427.04 562.208 419.171 563.792 411.302 565.375C399.677 567.715 388.05 570.055 376.423 572.394C371.09 573.467 364.758 575.916 359.251 575.126C353.782 574.341 351.521 572.005 351.214 566.814C350.885 561.249 351.013 555.64 351.088 550.07C351.211 540.96 351.472 531.851 351.816 522.746C367.351 521.347 382.886 519.947 398.42 518.548C406.692 517.802 414.964 517.058 423.235 516.312C425.112 516.144 429.74 516.506 430.577 515.091C431.88 512.891 430.43 505.658 430.391 503.17L430.021 479.648L428.663 393.102C432.382 393.224 436.101 393.335 439.821 393.439C456.002 393.896 472.263 394.558 488.449 394.06C496.566 393.811 504.256 391.621 511.919 389.037C515.994 387.664 520.027 386.168 524.028 384.595C525.287 384.1 528.994 381.758 530.353 382.02ZM508.414 462.536L500.147 502.967L528.435 501.093L508.414 462.536Z"
        fill={theme.palette.primary.lighter}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M744.689 134.63C744.111 139.127 744.522 144.03 739.445 145.215C734.747 146.313 729.592 146.005 724.802 146.39C719.419 146.822 714.052 147.413 708.681 147.946C701.908 148.616 702.874 146.014 701.394 140.23C700.04 134.948 697.881 129.677 696.085 124.526C695.25 122.132 694.254 119.929 693.115 117.673C692.084 115.63 692.575 112.852 691.463 111.135C687.672 105.277 669.18 121.295 667.462 118.138C670.591 115.702 676.006 112.976 676.966 108.808C678.095 103.909 674.982 102.446 671.07 104.237C661.444 108.647 650.336 112.093 639.838 113.7C643.233 111.431 673.94 93.5437 663.635 88.238C661.312 87.0423 658.21 89.2932 656.115 90.1446C652.791 91.4966 649.319 92.4029 645.848 93.2888C642.192 94.2221 638.526 95.12 634.849 95.9686C632.27 96.5642 627.673 98.6792 625.16 98.1572C622.609 97.6268 627.128 96.0431 627.868 95.6699C631.095 94.0444 634.269 92.2978 637.418 90.5289C643.007 87.3903 648.168 83.7549 652.419 78.9023C655.626 75.2408 660.921 67.245 658.689 62.1821C657.395 59.2473 654.559 56.5349 652.893 53.7545C650.948 50.5071 649.378 47.0456 647.689 43.6623C650.516 44.9055 653.69 45.2237 656.576 46.3394C659.462 47.456 662.393 48.3595 665.395 49.1895C671.418 50.8542 677.424 51.1501 683.393 52.5002C690.149 54.0281 697.19 55.7365 704.054 56.6196C710.031 57.3872 715.406 59.0231 720.527 62.2817C730.985 68.9385 738.239 78.5013 741.909 90.327C744.059 97.2546 744.582 104.483 744.835 111.69C745.102 119.29 745.662 127.064 744.689 134.63ZM685.997 135.189C678.694 140.513 670.18 144.673 662.343 149.202C657.858 151.792 653.279 154.213 648.704 156.642C645.458 158.365 641.514 161.536 637.941 162.42C635.681 162.98 635.849 163.022 634.419 160.961C633.052 158.993 631.858 156.875 630.578 154.848C628.219 151.111 625.837 147.388 623.456 143.665C618.117 135.32 612.788 126.976 607.178 118.808C601.55 110.612 596.151 102.265 590.699 93.9532C588.165 90.0888 585.647 86.2095 582.958 82.4512C580.904 79.5816 575.64 75.2045 578.14 71.8258C580.462 68.6872 585.752 66.08 588.881 63.7044C592.704 60.804 596.55 57.9334 600.363 55.0182C608.561 48.7512 616.543 42.2117 624.733 35.9364C631.683 48.1269 639.859 59.5553 648.107 70.8888C640.649 75.6483 633.114 80.1724 625.255 84.2471C619.45 87.2563 610.57 91.3226 606.903 97.0313C603.291 102.652 606.839 109.138 613.277 109.241C617.127 109.303 620.965 108.283 624.74 107.7C627.465 107.28 632.44 105.316 634.897 106.7C630.481 109.518 614.46 117.729 623.096 124.929C629.27 130.075 639.706 122.565 646.374 124.111C644.342 128.011 642.229 134.234 647.871 136.355C652.566 138.121 658.711 134.83 662.936 133.084C665.99 131.824 669.023 130.52 672.026 129.144C674.413 128.049 677.272 125.83 679.823 125.358C682.799 124.806 688.859 133.101 685.997 135.189ZM550.235 422.688C554.414 421.926 556.559 420.198 557.875 425.271C559.054 429.816 560.222 434.193 561.741 438.653C555.214 439.217 549.457 442.333 544.698 446.717C541.308 449.84 534.568 457.296 536.239 462.526C540.299 475.237 560.804 446.722 563.24 443.675C566.223 448.034 567.32 453.742 568.803 458.728C569.858 462.276 573.774 469.078 568.597 469.94C561.33 471.152 547.695 473.858 548.556 484.151C549.575 496.3 565.03 496.231 573.701 496.778C578.59 497.085 578.612 501.002 579.308 505.386C579.62 507.346 580.592 509.995 578.928 511.431C577.45 512.705 572.923 512.74 570.999 513.153C565.391 514.357 559.787 515.584 554.179 516.787C547.814 518.153 544.448 516.24 538.497 514.496C536.293 513.85 534.08 514.123 533.918 511.656C533.819 510.142 535.3 507.802 535.785 506.305C537.706 500.382 539.341 494.284 539.893 488.064C540.696 479.026 539.693 465.475 528.564 463.711C523.27 462.872 522.251 462.598 519.862 457.63C517.276 452.257 513.172 447.281 514.164 441.091C514.882 436.606 513.671 428.119 516.533 424.399C517.857 422.679 520.437 421.653 522.197 420.391C524.441 418.781 526.602 417.058 528.693 415.255C530.452 413.741 532.597 410.779 534.591 409.685C537.027 408.346 537.102 409.258 538.852 411.348C541.434 414.434 545.54 423.545 550.235 422.688ZM562.045 442.768C560.597 445.69 557.251 448.407 555.119 450.847C552.975 453.301 550.946 455.894 548.555 458.118C545.923 460.566 536.574 466.479 538.634 458.52C540.236 452.329 546.234 447.316 551.512 444.227C552.534 443.627 564.496 437.823 562.045 442.768ZM572.272 472.238C573.199 476.382 573.698 480.653 574.489 484.826C574.895 486.96 577.139 492.114 576.224 494.166C574.674 497.644 560.727 493.526 557.835 492.33C550.953 489.481 547.793 482.167 554.14 476.958C556.547 474.984 571.345 468.097 572.272 472.238ZM581.416 522.002C582.193 525.957 584.466 529.624 580.709 532.615C577.589 535.098 572.478 536.792 568.634 537.676C563.395 538.88 561.71 535.944 558.937 532.168C555.955 528.108 552.781 524.185 549.487 520.372C559.83 518.057 570.173 515.741 580.517 513.426C580.511 516.308 580.86 519.178 581.416 522.002ZM556.633 540.36C551.239 540.08 545.435 541.704 539.965 542.131C533.133 542.664 526.32 543.44 519.483 543.899C521.234 538.31 524.381 533.325 526.842 528.045C529.311 522.747 531.045 522.174 536.726 521.765C541.99 521.387 545.702 519.575 549.587 524.04C553.629 528.685 557.289 533.732 560.979 538.655C559.723 539.495 558.223 540.442 556.633 540.36ZM518.076 541.5C516.745 542.47 512.641 539.714 511.258 539.18C508.567 538.14 507.971 537.805 506.566 535.181C505.36 532.925 503.441 530.36 503.063 527.785C502.564 524.39 504.066 519.92 504.614 516.547C506.07 520.059 510.851 520.466 514.081 521.04C516.524 521.476 523.763 520.783 525.605 522.523C527.64 524.445 523.893 529.806 522.917 531.825C521.752 534.235 520.313 539.871 518.076 541.5ZM515.468 544.285C513.866 544.545 509.257 546.138 509.349 543.213C509.452 539.871 515.795 543.476 515.468 544.285ZM507.345 544.11C507.053 546.924 500.998 546.691 500.859 544.216C500.624 540.033 507.81 539.617 507.345 544.11ZM500.422 468.231C498.874 472.64 489.446 474.217 485.825 475.574C482.518 476.814 472.639 482.536 469.229 480.46C480.771 472.528 492.599 464.754 502.378 454.626C502.778 457.128 502.169 459.218 501.431 461.586C500.765 463.723 501.108 466.278 500.422 468.231ZM497.552 484.308C495.891 495.107 494.261 506.049 492.013 516.741C487.731 515.432 484.199 512.78 479.699 511.856C475.593 511.012 471.351 510.992 467.211 511.608C458.389 512.92 450.524 517.284 442.826 521.536C442.115 514.131 440.643 506.205 440.817 498.773C440.961 492.599 451.526 490.771 456.318 488.221C459.217 486.678 461.839 484.508 465.142 483.97C468.54 483.416 471.82 483.432 475.178 482.397C483.115 479.948 490.586 476.065 498.362 473.171C498.998 476.878 498.115 480.655 497.552 484.308ZM490.134 530.013C489.782 532.468 490.227 536.849 488.356 538.72C486.594 540.482 482.832 540.54 480.509 541.017C473.432 542.474 466.362 543.944 459.295 545.446C456.134 546.118 452.971 546.76 449.797 547.36C448.283 547.645 444.485 549.098 443.21 547.893C442 546.748 442.901 543.093 442.966 541.56C443.096 538.497 443.269 535.424 443.077 532.36C442.708 526.482 443.036 524.231 448.506 521.19C454.318 517.959 460.321 515.747 466.862 514.549C473.486 513.337 479.796 514 486.1 516.542C487.854 517.25 490.485 518.122 491.302 520.013C492.413 522.587 490.509 527.405 490.134 530.013ZM482.167 624.759C479.573 626.385 473.929 626.108 470.949 626.438C466.137 626.97 461.295 626.667 456.515 625.924C452.917 625.366 447.548 624.592 444.79 622.066C440.872 618.477 445.393 618.312 448.392 618.565C457.109 619.298 465.936 618.786 474.646 618.156C476.341 618.033 480.899 616.544 482.534 617.241C484.624 618.132 483.984 623.62 482.167 624.759ZM477.224 682.763C460.983 681.185 451.566 667.735 445.676 653.986C442.515 646.604 443.655 638.859 443.343 631.053C443.286 629.627 442.391 626.089 443.857 625.024C445.234 624.023 450.806 627.117 452.313 627.486C460.038 629.38 468.581 629.561 476.324 627.722C479.678 626.925 481.556 625.444 482.621 628.768C483.479 631.445 482.071 636.377 481.918 639.183C481.652 644.035 482.413 683.266 477.224 682.763ZM444.779 682.778C444.717 680.422 443.528 656.615 444.681 656.543C448.108 663.935 451.628 670.547 457.866 675.985C461.052 678.764 464.635 681.268 468.62 682.76C470.118 683.32 478.602 683.745 479.018 685.603C479.745 688.854 473.953 687.542 472.235 687.278C470.857 687.064 469.616 686.477 468.264 686.232C465.688 685.765 463.253 686.393 460.666 686.445C456.735 686.525 452.875 686.112 448.942 686.453C445.347 686.763 444.875 686.35 444.779 682.778ZM447.176 575.995C461.08 571.501 472.7 580.012 480.039 591.152C484.223 597.505 485.158 601.947 484.427 609.469C484.164 612.162 484.648 613.985 482.173 615.082C479.722 616.169 474.155 615.363 471.504 615.487C463.879 615.843 456.283 616.316 448.658 615.864C443.705 615.571 443.005 614.732 443.091 609.924C443.193 604.136 442.712 598.375 442.384 592.578C442.03 586.306 439.876 578.354 447.176 575.995ZM442.626 567.659C442.635 563.406 442.38 559.043 442.639 554.797C442.898 550.588 444.69 550.796 448.663 550.078C457.269 548.522 465.864 546.781 474.353 544.672C477.711 543.838 481.505 542.237 485.004 542.224C488.674 542.21 488.48 544.097 488.235 547.348C487.691 554.547 486.372 561.64 485.971 568.801C485.538 576.53 485.311 584.358 485.345 592.096C485.357 594.707 485.992 596.642 483.766 594.198C481.536 591.749 480.445 587.848 478.455 585.096C474.378 579.462 468.318 574.93 461.593 573.021C457.875 571.966 453.964 571.783 450.174 572.547C449.024 572.778 443.263 575.528 442.53 574.985C442.033 574.617 442.625 567.831 442.626 567.659ZM493.492 715.044C499.007 718.993 505.114 722.183 511.297 724.954C514.775 726.512 528.545 729.792 528.985 733.3C529.219 735.171 526.937 737.269 525.443 737.49C523.547 737.771 520.423 736.533 518.492 736.298C511.469 735.446 504.46 735.44 497.608 733.485C483.927 729.581 469.743 728.481 455.92 725.077C452.631 724.268 449.334 723.508 446.029 722.775C442.889 722.078 441.482 722.197 441.371 718.842C441.126 711.477 443.239 703.932 443.255 696.476C454.438 697.752 465.659 697.735 476.873 698.786C481.678 699.235 481.566 700.146 483.671 704.345C485.857 708.7 489.575 712.239 493.492 715.044ZM438.968 475.77C438.826 473.043 438.716 470.31 438.469 467.591C438.303 465.764 436.635 460.658 437.576 459.236C438.693 457.547 439.819 458.578 441.819 458.53C444.456 458.468 446.663 457.408 448.837 456.021C452.955 453.395 456.016 449.938 458.688 445.903C461.038 442.353 460.601 437.502 460.572 433.25C460.498 422.257 461.299 411.533 460.628 400.491C460.32 395.419 464.649 398.53 468.146 399.187C473.865 400.26 480.081 399.517 485.893 399.531C485.677 400.883 473.791 404.239 471.871 405.517C466.956 408.786 464.089 414.016 464.538 419.979C465.439 431.975 478.651 433.98 488.305 434.003C480.296 441.085 472.43 447.837 466.135 456.573C461.493 463.015 453.319 475.716 460.906 482.842C454.199 486.652 447.551 490.889 439.966 492.723C439.626 487.073 439.262 481.423 438.968 475.77ZM435.923 256.791C438.653 258.545 439.802 256.065 441.88 254.781C444.807 252.971 445.776 253.149 446.147 249.108C446.834 241.613 443.681 234.828 439.722 228.695C437.923 225.907 436.128 222.587 433.588 220.407C431.272 218.421 428.932 219.105 426.787 217.051C425.944 216.243 426.125 215.104 424.733 215.136C423.816 215.158 421.588 217.997 420.83 218.625C418.439 220.605 415.513 222.112 412.378 220.479C407.814 218.103 409.28 209.477 412.825 206.683C415.554 204.531 418.78 204.863 421.888 204.516C424.218 204.257 424.703 204.358 423.744 201.691C423.072 199.824 421.524 198.367 420.759 196.54C419.288 193.033 419.608 188.77 418.974 185.059C418.403 181.733 417.07 178.136 417.118 174.758C417.181 170.457 418.586 169.34 422.313 168.134C425.923 166.966 428.912 164.391 431.987 162.228C435.468 159.779 439.28 158.162 442.856 155.926C445.284 154.407 446.851 151.337 449.522 152.771C452.694 154.475 456.049 159.407 458.747 161.928C454.799 164.434 453.882 165.53 454.425 170.436C454.925 174.933 455.841 178.941 459.279 182.074C460.599 183.278 463.063 184.242 464.086 185.63C465.28 187.247 464.504 185.822 464.353 187.647C464.273 188.632 463.494 189.276 463.664 190.414C464.421 195.468 470.228 192.485 472.62 190.729C481.169 184.456 465.207 179.474 461.415 177.188C458.797 175.609 457.503 170.57 461.651 171.909C464.41 172.799 470.644 180.349 471.277 173.467C478.119 177.442 482.341 185.886 488.079 191.225C492.215 195.075 497.773 199.346 494.489 205.496C490.305 213.335 482.006 216.893 474.431 220.275C467.082 223.555 468.608 232.838 472.536 238.52C474.807 241.804 477.782 243.729 481.361 245.324C485.018 246.956 485.777 248.872 486.576 252.655C487.463 256.851 486.521 258.543 482.887 260.711C479.339 262.829 475.629 264.88 471.841 266.537C463.651 270.121 455.154 270.347 446.442 271.569C443.389 271.997 440.461 272.889 438.795 269.862C436.921 266.455 436.784 260.588 435.923 256.791ZM434.606 240.489C432.556 239.408 427.606 242.997 425.015 243.154C420.822 243.409 418.069 243.313 414.347 245.537C407.312 249.741 401.474 255.153 395.832 261.023C389.477 267.634 383.159 274.28 376.826 280.911C373.956 283.914 371.071 286.902 368.155 289.86C365.857 292.192 363.611 295.471 360.767 297.135C360.915 295.158 362.126 293.76 362.556 291.928C362.807 290.857 362.369 289.948 362.531 288.922C362.584 288.589 363.479 287.431 363.614 287.052C363.977 286.05 364.421 285.06 364.852 284.019C365.254 283.048 365.196 282.041 365.603 281.027C366.023 279.981 367.171 279.289 367.57 278.259C368.738 275.244 366.805 273.846 363.713 273.917C364.923 267.884 365.452 264.934 371.759 262.807C377.785 260.774 383.671 258.493 389.207 255.317C394.121 252.498 398.222 248.434 402.947 245.292C407.177 242.478 412.442 239.53 412.399 233.76C414.797 235.387 417.044 236.755 419.788 235.136C422.103 233.769 422.411 232.668 425.087 232.41C427.272 232.201 428.626 232.145 430.576 233.106C432.871 234.236 433.185 235.022 434.521 231.694C436.04 232.973 439.88 238.298 439.751 240.406C439.682 241.567 439.506 242.091 438.067 242.397C436.026 242.831 436.105 241.279 434.606 240.489ZM425.045 555.644C424.048 557.173 419.842 556.891 418.218 556.87C413.267 556.806 411.536 552.651 409.364 548.635C405.939 542.305 400.82 529.155 406.439 522.512C410.873 517.268 419.511 523.875 422.536 527.835C425.149 531.256 424.372 536.388 424.615 540.494C424.82 543.954 427.016 552.626 425.045 555.644ZM411.519 557.937C409.54 559.916 403.115 559.497 400.493 559.922C395.811 560.68 391.156 561.591 386.615 562.974C383.234 564.003 379.892 566.772 379 562.059C378.252 558.097 378.624 553.344 378.696 549.345C378.773 545.03 379.224 540.77 379.599 536.475C379.853 533.57 379.218 528.226 381.589 525.996C383.633 524.075 388.602 523.89 391.255 523.253C395.611 522.208 400.163 520.836 404.692 521.304C402.05 528.475 401.825 535.996 404.658 543.142C405.466 545.182 412.742 556.714 411.519 557.937ZM378.226 529.368C377.122 540.155 376.012 551.01 377.075 561.851C377.139 562.498 377.911 565.46 377.575 565.923C377.228 566.403 374.479 566.652 373.854 566.799C371.375 567.387 368.9 568.01 366.405 568.532C361.548 569.548 360.915 566.48 359.962 561.979C357.921 552.336 361.878 541.881 364.275 532.62C365.443 528.11 366.309 527.59 370.743 527.216C373.829 526.957 378.695 524.784 378.226 529.368ZM359.473 569.613C357.617 571.301 355.762 563.336 355.599 562.525C354.95 559.302 355.311 556.033 355.32 552.759C355.336 547.646 354.945 542.557 354.938 537.468C354.933 534.715 352.871 529.087 356.128 527.631C357.084 527.204 360.881 527.382 361.743 527.944C363.533 529.113 362.827 529.87 362.297 531.903C361.109 536.466 360.083 541.052 359.049 545.653C358.034 550.164 357.034 554.505 357.517 559.164C357.676 560.705 360.656 568.537 359.473 569.613ZM418.657 519.351C423.181 518.076 423.423 521.542 423.416 524.859C422.726 524.331 416.297 520.016 418.657 519.351ZM358.144 275.852C357.036 277.679 350.015 278.178 348.008 278.659C344.061 279.604 340.113 280.543 336.176 281.527C328.8 283.372 321.606 285.452 314.046 286.417C318.197 279.77 319.489 274.029 318.717 265.734C317.742 255.26 316.504 244.893 314.092 234.64C311.715 224.531 308.963 214.489 306.313 204.447C305.011 199.513 303.603 194.673 301.871 189.873C300.482 186.025 298.314 181.182 300.67 177.238C306.651 181.601 311.447 186.302 314.858 192.93C318.513 200.035 321.703 207.329 325.944 214.127C327.884 217.234 330.148 220.069 332.222 223.077C333.457 224.867 334.356 227.449 335.927 228.96C337.739 230.7 339.671 231.52 340.707 228.584C341.818 225.432 338.274 219.196 337.228 216.236C334.701 209.091 332.195 201.96 330.247 194.631C328.67 188.706 326.064 181.543 326.987 175.292C327.9 169.103 332.099 173.532 334.223 176.41C338.604 182.342 341.227 189.256 344.104 195.981C346.749 202.159 349.834 208.049 352.761 214.085C353.779 216.185 355.121 221.61 357.789 222.234C361.666 223.143 361.337 217.683 360.967 215.467C358.51 200.781 352.096 186.719 350.765 171.778C350.701 171.064 349.774 165.512 350.519 165.049C351.964 164.15 353.914 169.782 354.538 171.162C357.781 178.339 360.04 185.904 362.112 193.486C363.875 199.934 365.469 206.43 367.448 212.816C368.535 216.327 369.781 219.779 371.009 223.242C372.121 226.378 373.249 231.739 376.147 233.806C380.258 236.738 394.972 229.766 396.463 235.999C397.524 240.429 383.88 243.997 380.975 245.342C377.15 247.113 373.398 249.052 369.571 250.825C366.674 252.165 362.51 252.715 360.414 255.239C358.193 257.912 357.838 261.666 357.772 264.982C357.721 267.492 359.46 273.686 358.144 275.852ZM348.846 324.226C348.651 325.618 347.545 327.462 347.047 328.787C346.033 331.486 345.172 334.711 343.762 337.233C342.549 339.405 340.759 341.347 339.588 343.551C338.476 345.643 338.328 348.055 337.03 350.149C335.545 352.542 333.09 354.264 331.615 356.642C330.888 357.816 330.137 359.156 329.109 360.405C325.471 364.832 321.86 369.008 318.934 373.75C318.185 374.964 314.531 380.263 313.076 380.55C310.036 381.147 313.575 376.825 314.17 375.931C318.478 369.465 322.304 362.659 326.462 356.093C330.49 349.736 334.611 343.428 338.488 336.975C341.649 331.714 343.835 324.161 348.973 320.455C348.993 321.715 348.951 322.972 348.846 324.226ZM489.32 264.807C491.823 275.095 494.816 285.064 497.636 295.26C500.254 304.72 503.738 314.844 504.823 324.597C505.898 334.258 508.368 344.033 511.689 353.203C513.225 357.446 514.804 361.705 516.471 365.899C517.387 368.203 518.411 370.455 519.45 372.705C520.257 374.453 522.389 377.284 522.471 379.136C522.536 380.619 523.052 380.027 521.588 381.141C520.072 382.296 517.445 381.877 515.68 382.08C511.075 382.613 506.585 384.345 502.095 385.467C493.437 387.631 483.117 389.348 474.245 387.843C470.513 387.209 466.637 386.66 462.947 385.835C458.407 384.819 457.473 382.94 456.541 378.477C454.503 368.721 452.748 358.99 451.065 349.168C449.065 337.486 446.899 325.817 445.355 314.062C443.795 302.17 442.675 290.266 440.231 278.503C450.089 280.152 459.373 282.014 469.261 279.313C478.016 276.921 484.337 272.245 489.32 264.807ZM527.912 392.173C530.115 396.716 524.803 400.8 522.229 404.299C518.834 408.91 515.663 413.729 511.715 417.9C510.53 413.16 509.49 407.826 506.33 403.933C502.293 398.961 497.581 400.993 492.635 398.641C497.822 396.118 504.444 397.081 509.946 394.831C515.374 392.612 520.854 390.87 525.903 387.987C526.574 389.382 527.237 390.78 527.912 392.173ZM508.677 498.156C505.362 498.34 507.58 491.349 507.795 489.612C508.387 484.837 508.985 480.062 509.503 475.278C512.238 482.491 514.973 489.703 517.706 496.914C514.701 497.343 511.715 497.987 508.677 498.156ZM503.285 532.729C503.737 533.734 505.846 537.084 504.181 537.702C501.899 538.548 501.624 533 503.285 532.729ZM499.329 455.033C488.769 463.464 478.283 471.917 466.857 479.175C464.353 480.766 461.832 481.431 460.173 478.277C458.869 475.798 460.246 473.004 461.083 470.577C463.216 464.388 466.932 459.008 471.05 453.971C479.276 443.912 489.065 435.321 501.556 431.355C503.6 430.706 506.755 428.748 507.471 431.452C507.892 433.042 506.108 437.013 505.746 438.506C504.254 444.67 504.58 450.842 499.329 455.033ZM529.727 516.521C529.96 523.68 510.389 517.906 507.951 516.626C510.509 515.768 529.622 513.302 529.727 516.521ZM536.995 516.566C538.157 516.876 542.617 517.269 540.951 518.793C539.46 520.157 532.708 519.61 530.919 519.778C532.121 515.828 533.034 515.511 536.995 516.566ZM533.369 506.976C532.932 508.569 532.754 510.999 531.326 512.09C529.548 513.45 525.768 512.624 523.755 512.635C520.336 512.653 516.921 512.828 513.518 513.168C512.216 513.297 506.943 514.886 505.723 513.802C504.827 513.006 505.161 509.27 505.813 508.43C507.153 506.704 510.239 507.302 512.173 507.233C519.25 506.98 526.289 506.959 533.369 506.976ZM528.826 480.513C527.827 479.029 527.648 479.045 527.222 476.803C526.767 474.403 525.608 472.35 524.927 470.031C523.429 464.928 528.217 465.382 531.729 467.253C540.84 472.107 538.641 489.068 536.388 497.009C533.112 494.601 531.903 493.509 530.776 489.623C530.348 488.146 529.868 486.696 529.422 485.227C529.095 484.146 529.323 481.253 528.826 480.513ZM529.615 397.961C532.158 397.654 534.486 405.547 533.759 407.255C532.272 410.749 526.588 413.87 523.694 416.1C521.767 417.585 519.852 419.287 517.793 420.582C515.88 421.783 514.78 421.109 513.002 421.686C510.428 422.519 509.805 425.242 507.171 426.412C503.465 428.059 498.974 428.52 495.103 430.007C490.407 431.811 486.103 431.86 481.179 431.005C474.097 429.776 465.797 426.262 466.435 417.658C467.56 402.476 497.711 394.697 505.933 407.57C508.074 410.92 508.04 414.826 509.43 418.425C510.935 422.32 512.394 420.789 514.657 417.92C517.619 414.167 520.37 410.212 523.215 406.369C524.135 405.127 527.779 398.184 529.615 397.961ZM344.841 545.778C344.697 548.36 344.851 550.979 343.953 553.443C343.049 555.927 341.214 557.936 340.158 560.351C338.017 565.244 338.033 571.165 338.118 576.408C338.317 588.608 341.206 600.457 342.734 612.511C337.648 612.499 332.391 612.556 327.461 611.102C323.058 609.803 322.356 606.585 321.11 602.53C317.614 591.141 313.837 579.801 312.708 567.874C312.171 562.19 311.945 556.46 311.688 550.758C311.464 545.756 312.587 543.574 317.103 541.098C326.918 535.714 337.092 531.231 346.806 525.592C345.813 532.283 345.219 539.026 344.841 545.778ZM763.837 146.059C761.447 145.621 759.035 145.347 756.623 145.059C755.365 144.908 751.444 145.118 750.503 144.298C749.382 143.322 751.322 135.942 751.422 134.358C752.029 124.835 751.323 115.017 750.449 105.53C748.869 88.3543 743.468 72.4427 731.005 60.0754C724.802 53.9192 717.829 49.035 709.357 46.6781C704.422 45.3047 699.336 44.5724 694.389 43.2408C690.4 42.1651 686.676 40.9341 682.531 40.5079C674.264 39.6574 666.706 36.5337 658.638 34.7267C652.703 33.397 643.156 30.2436 639.308 36.946C636.278 33.3933 633.231 30.7256 629.411 28.0755C625.752 25.5371 625.153 23.0015 620.672 25.9325C611.966 31.6281 603.811 38.5762 595.679 45.0562C588.084 51.1082 580.736 57.4459 572.776 63.0112C564.658 68.6882 566.197 78.3217 570.015 86.3082C577.197 101.34 588.276 114.192 597.973 127.077C604.048 135.149 610.142 143.232 616.192 151.32C621.976 159.05 626.978 167.997 633.737 174.942C637.998 179.32 643.084 173.595 646.93 170.949C651.703 167.664 656.393 164.256 661.172 160.98C671.123 154.156 681.772 147.764 692.278 141.824C693.042 143.99 693.806 146.156 694.57 148.322C692.263 148.495 689.145 147.98 687.972 150.461C686.294 154.004 690.41 154.469 691.131 156.501C691.776 158.315 689.133 163.107 688.351 164.742C686.593 168.426 684.138 171.602 681.434 174.634C670.735 186.635 657.195 195.219 643.457 203.401C628.757 212.155 613.001 217.5 596.907 223.141C588.723 226.009 580.229 227.342 571.784 229.178C563.646 230.948 555.516 233.273 547.201 233.941C530.188 235.306 512.135 236.329 495.328 232.66C493.489 232.259 491.542 231.389 489.67 231.224C488.17 231.091 487.059 231.72 485.642 231.801C482.601 231.975 480.858 229.255 478.442 231.782C477.233 233.046 477.211 235.168 475.527 232.809C473.384 229.808 478.861 229.228 480.891 228.373C487.726 225.494 493.22 219.698 497.562 213.84C501.902 207.986 502.525 201.734 499.883 194.88C497.242 188.029 491.234 183.385 486.725 177.821C484.543 175.127 482.536 172.277 480.14 169.762C478.861 168.418 476.801 167.132 476.721 165.778C476.628 164.203 477.571 163.421 477.007 161.507C476.861 161.009 476.235 160.726 476.102 160.179C475.892 159.307 476.217 158.559 476.108 157.709C475.854 155.761 475.09 154.537 474.009 152.94C473.335 151.943 472.35 149.946 471.423 149.199C469.798 147.889 467.582 148.423 465.93 147.095C463.316 144.995 462.396 140.569 460.084 138.02C456.828 134.432 456.134 138.057 452.685 136.914C449.736 135.935 449.77 131.497 447.387 129.996C444.03 127.882 441.202 131.772 438.221 132.638C434.3 133.778 435.806 129.353 432.311 128.95C429.154 128.586 424.782 134.989 423.207 137.263C421.604 135.394 419.849 132.209 416.963 133.35C413.934 134.548 413.395 140.124 411.181 142.113C410.41 142.805 410.573 143.315 409.623 143.634C408.398 144.044 406.764 142.265 405.179 142.807C401.983 143.902 402.373 148.168 402.366 150.932C398.594 150.381 395.963 150.1 394.7 154.165C393.464 158.144 392.995 156.388 389.019 157.68C385.59 158.794 385.111 162.05 384.545 165.234C384.195 167.214 384.519 168.023 385.051 169.828C385.723 172.102 385.723 172.073 384.628 174.244C382.719 178.031 382.605 182.204 382.299 186.372C381.975 190.819 381.197 194.868 382.461 199.212C383.243 201.9 383.302 205.558 385.935 207.063C386.98 207.66 388.753 207.333 389.642 207.925C391.339 209.054 390.822 210.774 391.952 212.424C392.799 213.659 394.164 213.778 395.113 214.779C396.144 215.868 396.205 217.196 396.792 218.526C398.531 222.464 400.166 224.369 394.499 224.594C391.004 224.732 387.275 225.781 383.793 225.459C379.684 225.08 378.662 222.784 377.355 219.287C370.764 201.665 367.222 182.565 358.541 165.807C356.635 162.128 348.812 147.097 345.506 158.049C342.717 167.286 346.376 178.559 347.778 187.753C343.377 183.787 341.75 176.642 338.408 171.799C335.94 168.221 328.21 159.434 323.68 164.469C320.109 168.438 321.002 176.853 321.66 181.597C322.702 189.103 325.1 196.336 326.813 203.697C324.656 200.876 323.592 197.431 322.096 194.254C320.219 190.27 317.876 186.49 315.207 182.989C312.875 179.93 310.267 177.086 307.44 174.478C305.279 172.483 301.408 168.117 298.339 167.881C290.441 167.275 292.925 181.764 294.128 185.906C296.621 194.492 299.325 202.84 301.26 211.599C305.044 228.711 309.628 245.428 312.415 262.757C313.032 266.6 313.776 269.667 312.256 273.36C310.917 276.614 309.527 280.506 307.057 283.008C301.463 288.674 296.819 294.724 292.639 301.551C288.161 308.863 283.551 316.259 279.895 324.022C278.215 327.593 276.84 331.455 274.908 334.891C273.164 337.991 271.067 340.441 269.827 343.874C263.904 360.276 259.518 376.391 257.509 393.759C255.86 408.018 257.397 426.985 274.613 430.322C282.522 431.855 289.623 428.348 296.754 425.453C304.131 422.459 309.464 417.593 315.481 412.421C322.957 405.995 330.719 399.965 338.274 393.646C345.832 387.324 352.814 380.312 360.332 373.922C367.758 367.608 374.475 360.903 380.897 353.572C387.267 346.299 392.442 338.242 398.609 330.867C398.586 340.415 397.168 349.876 396.771 359.41C396.407 368.153 396.399 376.886 396.751 385.624C397.104 394.356 394.797 402.669 394.778 411.383C394.759 419.883 394.422 428.334 394.236 436.824C394.152 440.634 393.406 444.907 394.829 448.581C395.891 451.325 399.232 452.183 402.081 452.923C406.485 454.066 419.735 451.865 421.701 456.57C422.775 459.137 421.694 463.811 421.778 466.648C421.917 471.323 422.089 475.997 422.249 480.671C422.414 485.498 422.575 490.326 422.751 495.152C422.908 499.404 423.735 504.143 423.222 508.353C422.784 511.962 420.68 511.49 417.345 511.675C412.312 511.953 407.277 512.177 402.241 512.396C394.855 512.72 387.146 512.572 380.065 513.444C377.09 513.81 373.841 513.654 370.703 514.251C366.768 514.999 363.134 515.189 359.144 515.387C355.926 515.546 351.79 515.312 349.263 517.691C348.386 518.516 348.19 519.5 347.568 520.418C346.404 522.138 347.052 521.686 345.141 522.073C337.679 523.585 330.592 525.29 323.295 527.833C319.642 529.106 316.252 530.815 312.583 532.013C309.366 533.063 307.009 534.355 305.42 537.512C302.579 543.151 303.299 551.309 303.504 557.386C303.828 566.867 305.934 575.893 308.206 585.062C310.569 594.6 312.422 604.395 317.018 613.158C318.529 616.038 320.159 619.712 323.244 621.213C327.228 623.15 333.353 621.976 337.7 621.983C340.618 621.988 348.433 622.99 350.613 620.544C352.725 618.175 350.6 611.494 350.302 608.554C349.257 598.252 347.376 587.854 347.401 577.482C349.781 580.998 353.908 587.068 358.037 581.68C359.053 580.354 358.657 579.738 360.461 578.97C361.46 578.545 363.564 578.284 364.651 578.358C366.13 578.457 366.677 579.052 368.036 578.76C369.238 578.503 370.591 577.426 371.97 577.099C389.063 573.036 406.058 568.657 423.225 565.037C427.764 564.08 427.119 567.565 427.418 571.489C427.75 575.828 427.118 580.212 427.72 584.504C428.244 588.238 428.652 591.877 427.914 595.633C427.043 600.063 427.604 603.76 428.47 608.148C431.809 625.067 431.213 643.417 431.966 660.613C432.357 669.569 431.516 678.713 432.358 687.621C432.677 690.986 434.555 692.845 435.316 695.905C436.19 699.42 433.806 703.894 433.081 707.299C431.625 714.133 429.066 723.914 433.747 729.86C436.275 733.072 439.589 733.537 443.331 734.623C447.809 735.923 452.223 737.438 456.723 738.669C473.163 743.169 490.928 744.049 507.778 746.529C511.903 747.136 515.73 747.079 519.883 746.792C522.442 746.614 528.746 747.456 530.875 745.924C532.015 745.104 531.437 744.078 532.017 743.076C532.84 741.652 533.837 741.074 535.239 740.188C537.56 738.721 540.244 737.864 540.636 734.836C541.593 727.419 532.325 723.49 527.369 720.283C521.036 716.184 513.386 714.601 506.665 711.255C502.956 709.409 499.379 707.317 495.806 705.222C494.256 704.314 491.115 703.286 490.036 701.856C488.934 700.397 490.013 698.314 490.469 696.229C492.352 687.613 491.716 678.803 492.69 670.097C493.664 661.376 493.399 652.601 493.72 643.836C494.052 634.809 494.797 625.805 495.369 616.791C495.896 608.466 496.428 600.007 496.516 591.673C496.599 583.945 497.652 576.364 497.902 568.585C497.986 565.946 497.513 561.157 499.265 558.921C500.803 556.96 505.892 557.206 508.266 556.862C514.666 555.933 520.756 555.119 527.082 554.559C542.137 553.227 558.89 552.246 573.125 546.999C578.995 544.835 586.807 541.879 588.755 535.138C590.995 527.388 588.071 517.864 587.974 509.941C587.871 501.481 585.419 493.228 583.58 485.031C581.599 476.207 580.352 467.231 578.213 458.441C576.249 450.374 573.064 443.231 570.054 435.573C568.832 432.467 561.875 421.764 564.033 419.124C565.196 417.703 569.383 417.343 571.081 416.692C574.742 415.292 578.41 413.699 581.786 411.704C586.294 409.04 596.163 404.633 596.618 398.714C597.051 393.056 591.492 387.339 588.667 382.897C584.114 375.738 578.372 369.479 574.036 362.179C565.273 347.425 558.304 331.265 551.915 315.365C548.573 307.046 547.482 299.214 546.932 290.335C556.636 290.358 566.514 291.552 576.158 290.195C586.653 288.717 597.162 286.23 607.565 284.18C626.509 280.446 644.699 276.23 662.248 267.822C678.683 259.949 695.358 251.332 708.965 238.834C716.001 232.372 723.178 225.786 729.254 218.396C735.496 210.805 740.191 202.18 745.006 193.657C750.321 184.251 754.552 174.365 757.897 164.076C758.569 162.007 758.573 159.373 759.434 157.419C760.406 155.213 762.173 155.155 764.018 153.993C766.614 152.358 768.342 146.887 763.837 146.059Z"
        fill={theme.palette.text.primary}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M537.89 40.7595C540.109 42.6654 549.67 49.3789 552.759 47.7465C556.569 45.7313 550.536 39.6609 548.912 38.1643C546.845 36.2603 539.458 30.5002 536.63 31.0349C530.978 32.1043 535.894 39.0441 537.89 40.7595Z"
        fill={theme.palette.text.primary}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M542.613 109.662C543.866 107.195 547.201 106.288 548.742 103.901C550.597 101.031 551.449 98.5194 550.765 95C546.017 96.598 540.617 101.435 537.44 105.217C534.785 108.378 531.014 114.983 537.942 115C537.882 114.06 537.822 113.118 537.76 112.179C539.838 112.481 541.669 111.521 542.613 109.662Z"
        fill={theme.palette.text.primary}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M519.997 68.6177C523.058 69.4974 525.584 69.3728 528.711 69.4416C530.98 69.4922 534.081 70.7394 535.92 69.3336C534.287 68.3886 536.35 68.3364 535.946 67.4149C535.607 66.6467 534.962 66.8984 534.439 66.2765C532.571 64.0608 530.946 64.0878 527.984 63.627C525.689 63.2682 522.314 62.4408 520.108 63.5817C517.787 64.7828 516.889 67.7241 519.997 68.6177Z"
        fill={theme.palette.text.primary}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M563.562 136.579C565.542 134.919 567.699 130.113 568.1 127.633C568.256 126.661 567.556 125.917 567.639 125.202C567.8 123.839 570.6 121.205 567.667 120.087C565.1 119.108 562.689 126.712 562.036 128.371C561.367 130.068 559.545 133.374 560.105 135.015C560.569 136.377 562.226 137.699 563.562 136.579Z"
        fill={theme.palette.text.primary}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M587.241 33.6624C589.032 32.0003 590.165 30.1152 589.98 27.8295C589.833 26.029 588.484 19.8214 586.967 20.0039C581.928 20.6121 584.193 36.4929 587.241 33.6624Z"
        fill={theme.palette.text.primary}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M480.864 311.197C480.45 309.679 478.942 300.399 476.336 301.031C474.356 301.511 476.413 309.678 476.505 310.753C476.698 313.001 472.376 312.927 470.368 312.623C467.183 312.142 467.439 310.276 466.963 307.381C466.784 306.287 466.094 301.342 463.812 303.153C462.27 304.377 463.373 310.474 463.501 311.865C463.946 316.684 464.468 324.912 467.333 329.287C468.475 331.032 469.503 331.894 470.703 329.656C471.917 327.391 469.168 320.488 468.687 318.172C470.955 318.393 477.481 317.658 478.846 320.013C480.093 322.162 478.098 328.303 482.099 328.801C484.473 329.097 484.043 326.348 483.815 324.234C483.336 319.798 482.034 315.481 480.864 311.197Z"
        fill={theme.palette.text.primary}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M486.943 309.05C484.315 310.237 487.615 327.545 491.459 326.987C495.947 326.334 489.447 307.919 486.943 309.05Z"
        fill={theme.palette.text.primary}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M484.014 303.319C483.691 307.216 488.755 308.668 488.994 304.433C489.179 301.166 484.356 299.222 484.014 303.319Z"
        fill={theme.palette.text.primary}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M456.216 199.996C458.529 208.612 479.572 212.277 476.737 200.657C475.317 194.839 469.388 200.008 465.247 199.331C462.569 198.893 454.589 193.92 456.216 199.996Z"
        fill={theme.palette.text.primary}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M450.932 184.627C451.921 180.017 441.836 174.928 438.177 176.197C432.823 178.055 432.846 189.93 436.93 193.087C437.468 193.502 439.115 194.493 439.921 193.703C441.195 192.454 439.804 192.795 439.506 191.548C439.035 189.565 437.492 187.019 439.028 184.762C441.933 180.5 449.515 191.233 450.932 184.627Z"
        fill={theme.palette.text.primary}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M420.181 207.005C416.544 206.801 413.563 212.445 418.912 211.972C419.937 211.881 422.138 211.623 422.733 210.547C423.716 208.764 421.779 207.095 420.181 207.005Z"
        fill={theme.palette.text.primary}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M596.58 72.4624C595.336 70.6622 592.727 67.765 590.482 69.5707C588.492 71.172 588.839 75.1242 589.602 77.0881C591.656 82.3753 596.508 87.0854 602 84.0392C600.092 80.2179 599.017 75.9866 596.58 72.4624Z"
        fill={theme.palette.text.primary}
      />
    </svg>
  );
}
