import { useRouter } from "next/router";
import type { DocsThemeConfig } from "nextra-theme-docs";
import { useConfig } from "nextra-theme-docs";

const logo = (
  <span>
    <svg
      version="1.0"
      width="208px"
      height="72px"
      viewBox="0 -1.915 208.016 69.945"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M 48.374 33.177 C 48.161 34.444 48.191 34.739 48.526 34.779 C 48.81 34.81 49.927 34.191 50.302 33.785 C 51.043 32.984 51.368 32.579 51.368 32.426 C 51.368 32.334 51.448 32.264 51.55 32.264 C 51.652 32.264 51.915 32.132 52.139 31.959 C 52.737 31.534 54.178 31.118 55.172 31.107 C 55.933 31.098 56.045 31.128 56.897 31.534 C 58.176 32.152 58.43 32.375 58.835 33.207 C 59.232 34.039 59.262 34.424 59.018 35.581 C 58.825 36.544 58.582 37.021 57.993 37.65 C 57.415 38.269 56.847 38.502 56.076 38.421 C 55.406 38.35 54.949 38.096 53.853 37.173 C 52.362 35.925 52.057 35.925 50.332 37.152 C 49.927 37.447 49.277 37.893 48.891 38.147 L 48.201 38.603 L 48.201 42.255 C 48.201 44.262 48.201 46.241 48.191 46.646 C 48.171 47.356 48.181 47.407 48.466 47.65 C 48.749 47.884 48.81 47.904 49.378 47.823 C 50.089 47.731 50.282 47.731 51.885 47.864 C 53.265 47.975 53.61 48.127 53.925 48.725 C 54.218 49.284 54.229 50.389 53.965 50.957 C 53.63 51.646 53.103 51.768 51.641 51.484 C 51.205 51.403 50.332 51.332 49.713 51.332 C 49.085 51.332 48.414 51.282 48.212 51.231 C 47.958 51.16 46.903 51.18 44.762 51.291 C 41.119 51.475 41.089 51.475 40.734 51.291 C 39.881 50.846 39.435 49.578 39.81 48.685 C 40.063 48.066 41.332 47.722 42.945 47.833 C 43.909 47.894 43.909 47.894 44.173 47.61 C 44.69 47.062 44.711 46.961 44.61 45.206 C 44.558 44.303 44.538 43.026 44.568 42.356 C 44.65 40.277 44.63 39.141 44.478 38.329 C 44.336 37.568 44.336 37.518 44.558 36.889 C 44.894 35.936 44.812 35.834 43.351 35.449 C 42.986 35.347 42.143 35.246 41.474 35.215 C 40.804 35.185 40.185 35.114 40.105 35.063 C 39.688 34.82 39.496 34.536 39.394 34.029 C 39.252 33.349 39.384 32.882 39.8 32.538 C 40.094 32.284 40.195 32.264 41.931 32.061 C 43.818 31.838 44.224 31.757 45.33 31.412 C 46.578 31.017 47.522 30.945 48.019 31.199 C 48.486 31.442 48.577 31.959 48.374 33.177 Z M 88.099 32.355 C 88.099 32.72 88.049 33.359 87.998 33.755 C 87.886 34.617 87.927 34.779 88.282 34.871 C 88.495 34.921 88.586 34.88 88.748 34.647 C 88.87 34.485 89.307 34.008 89.723 33.583 C 90.586 32.71 91.793 31.919 93.021 31.432 C 93.761 31.138 93.954 31.107 95.182 31.067 C 97.496 30.996 99.555 31.351 100.073 31.909 C 100.214 32.061 100.58 32.314 100.895 32.487 C 101.382 32.741 101.605 32.963 102.254 33.846 C 103.106 35.002 103.238 35.073 103.797 34.668 C 104.324 34.292 105.542 33.289 106.272 32.619 C 107.886 31.168 109.367 30.824 112.452 31.188 C 114.126 31.392 114.725 31.624 116.064 32.599 C 116.693 33.055 117.211 33.491 117.221 33.562 C 117.221 33.644 117.445 34.029 117.728 34.424 C 118.276 35.226 118.439 35.732 118.682 37.386 C 118.804 38.228 118.814 39.039 118.743 42.204 C 118.692 44.293 118.621 46.18 118.581 46.392 C 118.469 47.032 118.652 47.174 120.437 47.884 C 121.321 48.228 122.102 48.563 122.183 48.634 C 122.437 48.837 122.7 49.547 122.7 50.044 C 122.7 50.622 122.477 51.099 122.142 51.231 C 121.665 51.414 120.681 51.454 119.595 51.332 C 118.986 51.271 117.413 51.201 116.105 51.18 C 114.187 51.149 113.619 51.17 113.182 51.302 C 112.513 51.484 111.843 51.414 111.478 51.099 C 111.154 50.815 111.062 50.186 111.224 49.385 C 111.407 48.513 111.589 48.401 113.213 48.127 C 113.964 48.005 114.623 47.873 114.674 47.843 C 114.725 47.803 114.796 47.59 114.836 47.346 C 114.877 47.113 114.958 46.859 115.03 46.778 C 115.1 46.677 115.141 45.866 115.151 44.242 C 115.151 42.427 115.192 41.737 115.303 41.392 C 115.415 41.068 115.435 40.784 115.374 40.429 C 115.334 40.145 115.252 39.445 115.192 38.867 C 115.12 38.208 115.03 37.761 114.938 37.67 C 114.857 37.589 114.786 37.437 114.786 37.345 C 114.786 37.244 114.623 36.828 114.421 36.433 C 113.882 35.357 113.426 35.134 111.132 34.851 C 110.433 34.759 109.591 34.617 109.266 34.536 L 108.657 34.394 L 108.352 34.678 C 108.18 34.84 107.713 35.165 107.318 35.388 C 106.922 35.621 106.536 35.875 106.465 35.966 C 106.384 36.057 106.059 36.271 105.735 36.433 C 105.278 36.655 105.004 36.909 104.527 37.518 C 103.573 38.705 103.472 38.999 103.482 40.327 C 103.482 40.936 103.533 41.828 103.594 42.305 C 103.645 42.782 103.655 43.35 103.614 43.573 C 103.563 43.796 103.533 44.668 103.523 45.511 L 103.523 47.032 L 103.867 47.407 C 104.162 47.722 104.274 47.783 104.649 47.792 C 104.893 47.792 105.461 47.803 105.907 47.813 C 106.851 47.833 107.216 48.005 107.439 48.543 C 107.733 49.253 107.551 50.683 107.124 51.018 C 106.912 51.18 106.668 51.19 104.365 51.17 C 102.985 51.16 101.574 51.12 101.24 51.079 C 100.803 51.028 100.276 51.068 99.372 51.221 C 97.83 51.484 97.009 51.495 96.47 51.241 C 95.913 50.987 95.831 50.866 95.618 49.882 C 95.436 49.05 95.436 48.999 95.608 48.715 C 96.014 48.046 96.856 47.681 97.983 47.681 C 99.058 47.681 99.514 47.295 99.606 46.322 C 99.677 45.592 99.869 41.961 99.911 40.621 C 99.931 40.003 100.001 39.404 100.063 39.282 C 100.245 38.948 100.194 37.447 99.991 37.021 C 99.789 36.595 98.48 35.347 97.841 34.972 C 97.009 34.485 94.674 34.424 93.203 34.851 C 92.797 34.972 92.472 35.154 92.148 35.459 C 91.884 35.712 91.478 35.956 91.174 36.057 C 90.554 36.26 88.992 37.426 88.536 38.025 C 88.343 38.278 88.171 38.664 88.109 38.979 C 87.957 39.759 87.947 41.301 88.089 42.356 C 88.15 42.853 88.201 44.181 88.191 45.297 L 88.171 47.326 L 88.576 47.498 C 88.8 47.599 89.601 47.752 90.342 47.843 C 91.793 48.026 92.016 48.127 92.32 48.715 C 92.635 49.314 92.422 50.349 91.854 50.936 C 91.387 51.423 90.879 51.495 89.093 51.322 C 87.338 51.149 84.467 51.149 82.66 51.312 C 80.631 51.495 80.519 51.434 80.418 49.983 C 80.317 48.472 80.631 48.138 82.305 47.995 C 83.421 47.894 83.543 47.853 84.03 47.346 C 84.487 46.869 84.558 46.444 84.487 44.536 C 84.436 43.36 84.467 42.7 84.588 41.889 C 84.69 41.21 84.75 40.155 84.75 39.039 C 84.75 38.066 84.802 37.011 84.852 36.696 C 84.984 36.017 84.913 35.824 84.395 35.509 C 84.091 35.327 83.797 35.276 82.488 35.185 C 81.646 35.134 80.895 35.073 80.834 35.053 C 80.59 34.982 80.286 34.12 80.225 33.37 C 80.165 32.436 80.265 32.213 80.946 31.869 C 81.403 31.645 81.616 31.615 83.229 31.543 C 84.558 31.493 85.167 31.422 85.664 31.27 C 86.79 30.915 86.821 30.915 87.308 31.047 C 87.896 31.209 88.099 31.554 88.099 32.355 Z M 76.988 33.765 C 77.577 34.343 77.942 34.83 78.297 35.469 C 80.185 38.918 80.479 42.325 79.201 46.058 C 78.602 47.803 78.531 47.945 78.074 48.188 C 77.872 48.3 77.12 48.837 76.421 49.385 C 74.948 50.511 73.904 51.14 72.91 51.484 C 71.722 51.9 70.992 51.961 68.607 51.86 C 66.09 51.738 65.482 51.596 64.559 50.886 C 64.254 50.653 63.767 50.308 63.483 50.136 C 62.082 49.253 59.901 46.311 59.749 45.105 C 59.719 44.912 59.627 44.617 59.546 44.455 C 59.332 44.039 59.14 41.595 59.211 40.277 C 59.252 39.689 59.363 38.846 59.475 38.4 C 59.576 37.954 59.739 37.264 59.83 36.879 C 60.053 35.925 60.388 35.296 61.21 34.272 C 62.691 32.436 64.172 31.503 66.385 31.037 C 67.318 30.844 69.561 30.783 70.291 30.935 C 74.705 31.858 75.355 32.132 76.988 33.765 Z M 18.705 22.487 C 18.867 22.638 18.897 22.801 18.897 23.663 C 18.897 24.788 18.836 24.951 18.37 25.245 C 18.065 25.428 17.852 25.448 16.137 25.458 C 14.24 25.469 13.763 25.539 13.661 25.813 C 13.631 25.894 13.681 26.33 13.773 26.777 C 13.905 27.446 13.945 28.349 13.955 31.624 C 13.986 35.895 14.037 36.422 14.463 36.503 C 14.879 36.585 18.228 34.363 19.455 33.187 C 19.851 32.812 20.368 32.365 20.623 32.193 C 20.876 32.02 21.282 31.665 21.535 31.402 C 21.789 31.138 22.256 30.793 22.571 30.631 C 22.976 30.428 23.281 30.164 23.605 29.738 C 24.102 29.089 24.701 28.592 26.507 27.325 C 27.826 26.391 28.395 25.864 28.303 25.631 C 28.273 25.55 27.978 25.408 27.654 25.316 C 26.447 24.981 26.132 24.849 25.767 24.545 C 25.29 24.15 25.128 23.642 25.31 23.094 C 25.594 22.253 26.254 22.05 27.978 22.294 C 28.974 22.435 29.846 22.466 32.666 22.446 L 36.127 22.415 L 36.391 22.699 C 36.634 22.953 36.654 23.054 36.654 23.804 C 36.654 25.143 36.36 25.367 34.28 25.61 C 33.58 25.691 32.9 25.813 32.778 25.884 C 32.19 26.188 30.028 27.831 29.247 28.552 C 28.77 28.988 27.999 29.647 27.522 30.012 C 24.681 32.203 23.169 33.562 23.006 34.089 C 22.875 34.495 23.058 34.779 23.879 35.52 C 24.326 35.936 24.772 36.402 24.854 36.574 C 24.934 36.737 25.777 37.65 26.71 38.603 C 27.644 39.547 28.486 40.48 28.577 40.652 C 28.669 40.844 28.821 40.987 28.932 40.987 C 29.034 40.987 29.227 41.159 29.359 41.362 C 29.491 41.575 29.836 41.909 30.11 42.113 C 30.393 42.316 30.688 42.559 30.769 42.66 C 30.85 42.752 31.419 43.36 32.017 44.009 C 32.626 44.658 33.57 45.764 34.117 46.464 C 35.842 48.655 35.538 48.421 36.898 48.553 C 38.633 48.725 38.786 48.878 38.786 50.379 C 38.786 51.221 38.775 51.251 38.471 51.535 C 38.045 51.92 37.547 51.981 35.974 51.83 C 34.503 51.687 29.673 51.657 28.273 51.778 L 27.359 51.87 L 26.984 51.545 C 26.264 50.906 26.203 49.466 26.872 48.888 C 27.157 48.644 28.01 48.493 29.115 48.493 C 29.988 48.493 30.12 48.462 30.333 48.269 C 30.465 48.147 30.566 47.975 30.566 47.873 C 30.566 47.772 30.11 47.275 29.541 46.747 C 28.974 46.23 28.435 45.642 28.334 45.45 C 28.232 45.257 27.705 44.658 27.167 44.131 C 26.629 43.603 26.092 42.985 25.98 42.772 C 25.868 42.549 25.431 42.051 25.016 41.656 C 24.599 41.26 23.98 40.591 23.656 40.165 C 23.331 39.739 22.885 39.242 22.672 39.069 C 22.449 38.898 21.992 38.35 21.657 37.853 C 20.906 36.767 20.429 36.321 20.003 36.321 C 19.597 36.321 19.394 36.433 18.532 37.173 C 18.126 37.518 17.416 37.995 16.949 38.238 C 16.492 38.482 15.934 38.826 15.731 39.019 C 15.528 39.201 15.174 39.445 14.94 39.567 C 14.717 39.678 14.534 39.82 14.534 39.871 C 14.534 39.922 14.412 40.084 14.26 40.216 L 13.986 40.48 L 13.945 43.34 C 13.935 44.922 13.955 46.637 13.996 47.163 C 14.118 48.574 14.037 48.533 17 48.594 C 19.272 48.644 19.374 48.655 19.8 48.898 C 20.754 49.435 21.068 50.785 20.409 51.495 C 20.206 51.707 20.094 51.738 19.405 51.738 C 18.978 51.738 18.583 51.789 18.522 51.85 C 18.441 51.931 18.176 51.911 17.568 51.789 C 15.437 51.352 12.839 51.261 9.136 51.475 C 5.28 51.707 5.3 51.718 5.3 50.257 C 5.3 49.243 5.504 48.594 5.859 48.452 C 5.949 48.421 6.913 48.391 7.989 48.391 C 9.755 48.391 9.957 48.37 10.029 48.208 C 10.079 48.117 10.12 45.531 10.13 42.478 C 10.14 39.424 10.191 36.848 10.232 36.747 C 10.312 36.565 10.496 33.623 10.486 32.669 C 10.486 32.365 10.465 30.743 10.455 29.069 C 10.424 26.411 10.404 25.986 10.252 25.762 C 10.09 25.498 10.059 25.498 8.527 25.438 C 6.153 25.346 6.011 25.265 5.929 23.927 C 5.879 22.993 6.011 22.588 6.457 22.303 C 6.731 22.132 6.873 22.121 7.634 22.182 C 8.111 22.222 10.749 22.263 13.499 22.283 C 18.106 22.303 18.522 22.324 18.705 22.487 Z M 72.016 13.216 C 71.225 13.916 71.114 14.312 71.448 15.274 C 71.712 16.025 72.209 16.827 73.132 17.973 C 74.482 19.656 75.081 21.188 74.98 22.679 C 74.948 23.125 74.898 23.572 74.848 23.683 C 74.776 23.856 74.807 23.865 75.273 23.804 C 76.41 23.642 77.506 22.78 78.024 21.644 L 78.287 21.067 L 78.592 21.422 C 79.281 22.222 79.87 23.927 79.88 25.134 C 79.88 26.077 79.677 27.223 79.403 27.791 C 79.068 28.48 77.872 29.718 77.232 30.012 C 76.603 30.316 75.7 30.469 75.07 30.388 C 74.786 30.347 74.026 30.134 73.386 29.921 C 72.25 29.536 70.565 29.211 68.922 29.069 C 67.278 28.927 64.863 29.383 63.27 30.144 C 62.417 30.55 62.387 30.56 62.022 30.408 C 60.905 29.972 59.556 28.704 59.038 27.598 C 58.795 27.06 58.724 26.777 58.693 26.036 C 58.602 24.241 59.13 22.953 60.5 21.593 C 61.24 20.863 61.545 20.64 62.366 20.245 C 63.128 19.869 63.493 19.748 64 19.707 C 64.366 19.687 64.659 19.697 64.659 19.748 C 64.659 19.798 64.589 20.062 64.507 20.336 C 64.183 21.422 64.406 22.385 65.136 23.034 C 65.39 23.257 65.705 23.44 65.837 23.44 C 66.142 23.44 66.517 22.973 66.791 22.253 C 67.146 21.32 67.106 20.357 66.639 18.571 C 66.121 16.613 66.11 15.822 66.567 14.889 C 66.75 14.524 67.085 14.058 67.308 13.855 C 67.836 13.388 68.769 12.942 69.632 12.749 C 70.423 12.577 72.006 12.546 72.28 12.699 C 72.473 12.8 72.453 12.831 72.016 13.216 Z M 68.81 15.153 C 68.495 15.386 68.323 15.609 68.222 15.924 C 68.09 16.35 68.1 16.451 68.515 18.105 C 69.145 20.63 69.124 21.867 68.404 23.399 C 67.379 25.579 65.451 25.986 63.737 24.383 C 63.28 23.957 62.631 22.882 62.631 22.557 C 62.631 22.294 62.336 22.435 61.819 22.932 C 60.723 23.997 60.296 25.671 60.835 26.807 C 61.098 27.375 61.392 27.72 61.961 28.156 L 62.316 28.42 L 63.208 28.065 C 66.294 26.827 70.068 26.827 73.894 28.055 C 74.675 28.308 75.395 28.511 75.497 28.511 C 76.227 28.511 77.252 27.77 77.638 26.959 C 77.84 26.543 78.054 24.86 77.912 24.86 C 77.872 24.86 77.577 25.002 77.242 25.164 C 76.451 25.559 75.415 25.803 74.685 25.752 C 73.964 25.701 73.376 25.326 73.072 24.738 C 72.879 24.373 72.868 24.22 72.93 23.653 C 73.112 22.182 73.062 21.624 72.666 20.802 C 72.463 20.386 72.026 19.697 71.692 19.271 C 70.453 17.719 69.754 16.512 69.479 15.467 C 69.399 15.143 69.317 14.869 69.287 14.849 C 69.266 14.829 69.054 14.96 68.81 15.153 Z M 69.226 33.521 C 69.196 33.552 68.871 33.583 68.515 33.592 C 67.897 33.613 67.227 33.846 65.715 34.556 C 65.543 34.637 65.157 35.023 64.863 35.418 C 64.569 35.804 64.183 36.219 64.02 36.341 C 63.655 36.605 63.402 37.163 63.24 38.096 C 63.168 38.482 63.016 38.958 62.904 39.151 C 62.721 39.445 62.711 39.536 62.823 39.84 C 62.915 40.094 62.935 40.611 62.874 41.788 C 62.793 43.655 62.925 44.486 63.503 45.734 C 63.99 46.808 64.345 47.194 65.603 48.026 L 66.74 48.776 L 68.485 48.848 C 70.129 48.918 70.301 48.898 71.58 48.644 C 72.858 48.391 72.97 48.34 73.741 47.823 C 75.07 46.93 75.142 46.849 75.233 46.078 C 75.283 45.601 75.395 45.297 75.588 45.013 C 76.197 44.161 76.227 44.05 76.227 42.863 C 76.227 42.244 76.156 41.199 76.065 40.53 C 75.984 39.871 75.934 39.212 75.974 39.08 C 76.055 38.755 74.959 36.929 74.178 36.087 C 73.853 35.743 73.539 35.337 73.477 35.185 C 73.315 34.79 72.463 34.252 71.407 33.887 C 70.555 33.592 69.348 33.39 69.226 33.521 Z"
      ></path>
      <path
        fill="currentColor"
        d="M 159.345 10.586 C 159.483 10.738 159.504 10.823 159.524 11.404 C 159.563 12.486 159.378 12.744 158.316 13.094 C 158.025 13.192 157.682 13.325 157.556 13.384 C 157.1 13.615 156.764 14.07 156.671 14.592 C 156.565 15.179 156.942 17.093 157.365 18.116 C 157.477 18.386 157.854 19.073 158.203 19.64 C 159.042 21.026 159.299 21.56 159.464 22.227 C 159.602 22.788 159.8 23.237 160.23 23.982 C 160.355 24.206 160.666 24.979 160.917 25.698 C 161.589 27.665 161.682 27.869 162.204 28.562 C 163.076 29.73 163.333 29.948 163.828 29.948 C 164.171 29.948 164.402 29.829 164.706 29.493 C 165.201 28.945 165.538 28.087 166.303 25.467 C 166.858 23.56 166.819 23.646 167.466 22.557 C 167.96 21.719 168.212 21.158 168.746 19.739 C 169.459 17.845 170.007 15.965 170.172 14.849 C 170.344 13.615 170.106 13.358 168.344 12.896 C 167.353 12.632 166.858 12.401 166.647 12.123 C 166.469 11.873 166.482 11.365 166.693 10.903 C 166.839 10.593 166.904 10.52 167.169 10.408 C 167.512 10.256 167.67 10.256 170.1 10.414 C 171.063 10.481 171.921 10.481 174.16 10.421 C 177.824 10.315 178.438 10.381 178.748 10.89 C 178.847 11.055 178.881 11.22 178.881 11.583 C 178.881 12.025 178.868 12.064 178.682 12.216 C 178.425 12.434 178.002 12.585 176.761 12.922 C 175.415 13.285 174.959 13.431 174.516 13.654 C 173.856 13.985 173.368 14.671 172.84 16.017 C 172.701 16.36 172.437 16.915 172.245 17.245 C 171.598 18.36 171.42 18.769 171.42 19.105 C 171.42 19.383 171.367 19.502 170.998 20.056 C 170.515 20.775 170.437 20.98 170.232 21.996 C 170.073 22.775 170.007 22.946 169.288 24.53 C 168.852 25.494 168.819 25.599 168.772 26.186 C 168.693 27.176 168.264 28.417 167.162 30.872 C 166.098 33.234 166.066 33.32 165.934 34.04 C 165.762 34.964 165.716 35.075 165.333 35.735 C 164.937 36.409 164.792 36.804 164.686 37.504 C 164.62 37.959 164.528 38.197 163.993 39.253 C 162.99 41.252 162.005 43.674 162.065 43.998 C 162.111 44.216 161.887 44.981 161.636 45.476 C 160.917 46.921 159.398 48.34 158.104 48.789 C 157.418 49.033 157.061 49.053 156.46 48.901 C 155.839 48.742 153.767 48.36 153.516 48.36 C 153.14 48.36 152.737 47.647 152.611 46.769 C 152.526 46.149 152.605 45.825 152.908 45.516 C 153.14 45.285 153.212 45.252 153.681 45.192 C 154.315 45.1 155.536 44.691 156.348 44.294 C 158.289 43.337 159.491 41.945 160.897 39.015 C 161.167 38.454 161.385 37.973 161.385 37.94 C 161.385 37.907 161.444 37.689 161.517 37.458 C 161.61 37.148 161.742 36.923 161.979 36.653 C 162.329 36.25 162.401 35.98 162.23 35.67 C 162.191 35.59 162.118 35.34 162.072 35.115 C 162.005 34.799 161.801 34.402 161.2 33.366 C 156.889 26.001 155.246 22.524 154.922 20.129 C 154.85 19.574 154.77 19.429 154.347 19.079 C 153.647 18.498 152.731 16.677 152.44 15.285 C 152.386 15.034 152.341 14.75 152.341 14.651 C 152.341 14.487 152.255 14.434 151.225 13.932 C 150.578 13.622 149.991 13.292 149.838 13.146 C 149.488 12.836 149.112 12.077 149.06 11.589 C 149.006 11.074 149.125 10.758 149.409 10.639 C 149.713 10.514 151.991 10.408 154.585 10.408 C 155.727 10.408 156.876 10.381 157.127 10.355 C 157.807 10.276 158.679 10.276 158.949 10.349 C 159.074 10.388 159.252 10.494 159.345 10.586 Z M 193.649 10.105 C 194.23 10.428 194.388 10.487 195.18 10.646 C 195.748 10.758 196.144 10.804 196.303 10.777 C 196.632 10.718 196.962 10.474 197.2 10.118 L 197.399 9.821 L 198.362 9.821 C 199.557 9.821 199.55 9.821 199.742 10.777 C 199.848 11.286 199.874 11.688 199.874 12.711 C 199.874 13.912 199.861 14.051 199.709 14.526 C 199.577 14.935 199.544 15.179 199.544 15.72 C 199.544 16.189 199.518 16.427 199.458 16.472 C 199.287 16.618 198.309 16.902 197.96 16.908 L 197.597 16.915 L 197.563 16.387 C 197.524 15.826 197.511 15.793 197.221 15.416 C 196.956 15.08 196.514 14.803 195.081 14.083 C 193.265 13.179 192.48 12.961 190.084 12.717 L 188.73 12.579 L 187.767 12.85 C 186.056 13.325 185.278 13.694 184.617 14.341 C 183.607 15.325 183.436 17.033 184.222 18.248 C 184.716 19.02 185.304 19.349 186.637 19.613 C 187.112 19.713 187.641 19.858 187.819 19.951 C 188.136 20.109 188.183 20.115 189.555 20.115 C 190.929 20.115 190.975 20.122 191.291 20.28 C 191.589 20.432 191.688 20.446 192.507 20.446 C 193.55 20.446 194.764 20.643 196.012 21.013 C 196.448 21.144 196.923 21.284 197.068 21.323 C 197.293 21.389 197.484 21.574 198.396 22.636 C 199.828 24.312 200.145 24.926 200.435 26.603 C 200.574 27.368 200.567 28.668 200.435 29.328 C 200.026 31.294 198.824 32.977 196.673 34.587 C 195.405 35.538 195.088 35.676 192.909 36.224 C 190.407 36.851 190.341 36.857 188.552 36.428 C 187.793 36.244 187.086 36.065 186.987 36.026 C 186.888 35.993 186.274 35.657 185.614 35.293 C 183.891 34.329 183.231 34.02 182.802 33.987 C 182.347 33.948 182.254 34.026 181.944 34.693 C 181.666 35.293 181.343 35.702 181.019 35.854 C 180.709 36 179.797 35.96 179.316 35.782 C 179.006 35.663 178.98 35.637 178.907 35.333 C 178.741 34.706 178.59 32.707 178.484 29.916 C 178.451 29.005 178.405 28.206 178.378 28.127 C 178.359 28.047 178.372 27.863 178.418 27.718 C 178.471 27.513 178.543 27.414 178.702 27.335 C 179.276 27.031 180.22 26.965 180.993 27.163 C 181.527 27.301 181.6 27.42 181.825 28.463 C 182.009 29.354 182.135 29.625 182.623 30.232 C 183.522 31.327 184.802 32.053 187.384 32.918 C 189 33.459 189.582 33.558 190.619 33.452 C 192.328 33.274 193.834 32.759 195.14 31.908 C 196.191 31.229 197.101 30.205 197.101 29.711 C 197.101 29.592 197.207 29.11 197.332 28.648 C 197.61 27.612 197.583 27.42 197.088 26.879 C 196.527 26.266 195.345 25.751 193.438 25.295 C 192.929 25.17 192.348 25.025 192.15 24.972 C 191.952 24.913 191.615 24.867 191.404 24.867 C 190.981 24.867 188.394 24.451 186.915 24.141 C 182.808 23.29 180.841 21.738 179.778 18.531 C 179.25 16.947 179.336 15.938 180.129 14.275 C 180.399 13.707 180.531 13.523 181.086 12.942 C 182.412 11.55 183.64 10.699 184.974 10.25 C 185.792 9.979 187.371 9.708 189.212 9.53 C 189.839 9.471 192.263 9.55 192.625 9.643 C 192.83 9.695 193.292 9.9 193.649 10.105 Z M 140.708 10.105 C 141.276 10.428 141.441 10.487 142.2 10.639 C 142.669 10.731 143.118 10.81 143.197 10.81 C 143.487 10.81 143.983 10.494 144.214 10.15 L 144.438 9.821 L 145.409 9.821 C 146.617 9.821 146.604 9.814 146.795 10.817 C 146.901 11.352 146.927 11.781 146.927 12.764 C 146.927 13.952 146.92 14.051 146.756 14.513 C 146.61 14.915 146.578 15.127 146.57 15.72 L 146.564 16.433 L 146.326 16.558 C 146.03 16.71 145.178 16.947 144.94 16.947 C 144.577 16.947 144.544 16.902 144.59 16.485 C 144.656 15.878 144.379 15.397 143.672 14.909 C 143.19 14.585 141.032 13.529 140.417 13.325 C 139.579 13.048 138.642 12.87 137.116 12.717 L 135.79 12.585 L 134.925 12.816 C 133.361 13.239 132.489 13.615 131.841 14.15 C 130.541 15.212 130.409 17.409 131.571 18.651 C 132.033 19.139 132.522 19.37 133.585 19.594 C 134.119 19.699 134.635 19.851 134.812 19.951 C 135.123 20.115 135.156 20.115 136.562 20.115 C 137.955 20.115 138.002 20.122 138.318 20.28 C 138.615 20.432 138.715 20.446 139.506 20.446 C 140.754 20.446 141.725 20.617 143.62 21.178 L 144.373 21.396 L 145.415 22.617 C 146.57 23.975 146.96 24.596 147.231 25.521 C 147.759 27.335 147.7 29.163 147.06 30.661 C 146.379 32.264 144.927 33.835 142.913 35.148 C 142.213 35.603 141.81 35.775 140.886 35.986 C 140.523 36.065 139.751 36.264 139.169 36.415 C 137.553 36.838 137.275 36.838 135.473 36.402 L 134.02 36.052 L 132.555 35.24 C 129.802 33.709 129.445 33.644 129.042 34.587 C 128.805 35.135 128.448 35.617 128.132 35.802 C 127.861 35.96 127.795 35.966 127.266 35.933 C 126.949 35.92 126.547 35.847 126.362 35.775 C 126.065 35.663 126.033 35.63 125.953 35.359 C 125.801 34.831 125.537 31.473 125.537 30.047 C 125.537 29.612 125.504 28.938 125.457 28.549 C 125.352 27.519 125.451 27.348 126.277 27.137 C 126.778 27.005 127.716 27.044 128.197 27.21 C 128.593 27.348 128.653 27.467 128.865 28.463 C 129.055 29.367 129.174 29.638 129.636 30.199 C 130.257 30.971 131.268 31.677 132.475 32.205 C 133.618 32.7 135.77 33.38 136.424 33.452 C 138.477 33.683 141.415 32.707 143.078 31.234 C 143.527 30.839 144.088 30.093 144.088 29.882 C 144.088 29.79 144.2 29.288 144.339 28.76 C 144.583 27.836 144.59 27.783 144.504 27.48 C 144.247 26.608 142.801 25.823 140.556 25.329 C 140.193 25.249 139.731 25.124 139.533 25.051 C 139.322 24.979 138.866 24.899 138.443 24.867 C 137.262 24.781 133.994 24.2 132.68 23.837 C 130.897 23.355 129.604 22.656 128.627 21.646 C 127.808 20.795 127.247 19.831 126.798 18.485 C 126.296 16.967 126.382 15.925 127.167 14.242 C 127.392 13.76 127.538 13.568 128.178 12.902 C 129.518 11.503 130.594 10.758 131.987 10.263 C 132.713 9.998 134.648 9.669 136.232 9.53 C 136.938 9.471 139.308 9.55 139.685 9.643 C 139.896 9.702 140.358 9.906 140.708 10.105 Z"
        transform="matrix(1, 0, 0, 1, 0.11871341471686137, 15.26219196447801)"
      ></path>
    </svg>
    <style jsx>{`
      span {
        padding: 0.5rem 0.5rem 0.5rem 0;
        mask-image: linear-gradient(
          60deg,
          black 25%,
          rgba(0, 0, 0, 0.2) 50%,
          black 75%
        );
        mask-size: 400%;
        mask-position: 0%;
      }
      span:hover {
        mask-position: 100%;
        transition: mask-position 1s ease, -webkit-mask-position 1s ease;
      }
    `}</style>
  </span>
);

const config: DocsThemeConfig = {
  project: {
    link: "https://github.com/sebastianpennino/krom_docs_nextra",
  },
  docsRepositoryBase: "https://github.com/sebastianpennino/krom_docs_nextra/tree/main/pages/docs",
  primaryHue: 0,
  search: {
    error: 'error!...',
    placeholder: "Buscar...",
    emptyResult: () => {
      return(
        <span className="nx-block nx-select-none nx-p-8 nx-text-center nx-text-sm nx-text-gray-400">No hay resultados.</span>
      )
    }
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – Kromsys",
      };
    }
  },
  logo,
  i18n: [
    { locale: 'es', text: 'Español' },
    { locale: 'en', text: 'English' },
  ],
  head: function useHead() {
    const { title, ...rest } = useConfig();
    const { route } = useRouter();
    const socialCard =
      route === "/" || !title
        ? "https://kromsys-docs-nextra.vercel.app/og.jpeg"
        : `https://kromsys-docs-nextra.vercel.app/api/og?title=${title}`;

    return (
      <>
        {/* <pre style={{display: 'none'}}>{JSON.stringify({...rest}, null, 2)}</pre> */}
        <meta name="msapplication-TileColor" content="#000" />
        <meta name="theme-color" content="#000" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="Kromsys the free pen and paper RPG."
        />
        <meta
          name="og:description"
          content="Kromsys the free pen and paper RPG."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={socialCard} />
        <meta
          name="twitter:site:domain"
          content="kromsys-docs-nextra.vercel.app"
        />
        <meta
          name="twitter:url"
          content="https://kromsys-docs-nextra.vercel.app"
        />
        <meta
          name="og:title"
          content={title ? title + " – Kromsys" : "Kromsys"}
        />
        <meta name="og:image" content={socialCard} />
        <meta name="apple-mobile-web-app-title" content="Kromsys" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          rel="icon"
          href="/favicon-dark.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          href="/favicon-dark.png"
          type="image/png"
          media="(prefers-color-scheme: dark)"
        />
      </>
    );
  },
  editLink: {
    text: "Edit this page on GitHub →",
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === "separator") {
        return <span className="cursor-default">{title}</span>;
      }
      return <>{title}</>;
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  footer: {
    text: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <p className="text-xs">
          © {new Date().getFullYear()} The Kromsys Project
        </p>
      </div>
    ),
  },
  toc: {
    backToTop: true,
  },
};

export default config;
