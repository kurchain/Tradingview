https://github.com/su38pp/Tradingview

※ Tradingview 개발 가이드



1. html 내 해당 소스 추가

<script type="text/javascript" src="/assets/charting_library/charting_library.min.js"></script>
<script type="text/javascript" src="/assets/charting_library/datafeed.js"></script>
<script type="text/javascript" src="/assets/scripts/tv_chart.js"></script>



2. Datafeed.js
- 트레이딩뷰 내부 시간 간격을 설정합니다.

- firebase에서 만들 data를 기준으로 시간 간격 별 data를 가공하면 화면을 출력 합니다.




3. tv_chart.js
- 웹 화면 위젯으로 화면을 구성합니다.




4. 참고 사이트 

- https://github.com/tradingview/charting_library/wiki/JS-Api

: 트레이딩뷰 js api

- https://github.com/tradingview/charting_library/wiki/UDF

: UDF 개발 안내

- https://github.com/oxarbitrage/open-explorer

- https://github.com/tradingview/charting-library-examples

: github 최신 버전 에는 오류가 있습니다.

