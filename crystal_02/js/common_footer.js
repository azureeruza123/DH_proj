document.addEventListener("DOMContentLoaded", () => {
  const footerContent = `

    <div class="footer_wrapper flex">
      <div class="footer_info flex">
        <img src="https://placehold.jp/150x150.png" alt="大阪 梅田 デリバリーヘルス アイドル研究所">
        <p>大宮デリバリーヘルス Crystal</p>
        <dl>
          <dt>TEL</dt>
          <dd>
            06-6379-5284
          </dd>
        </dl>
        <dl>
          <dt></dt>
          <dd>
            OPEN 10:00～翌5:00
          </dd>
          <!-- <dd>
            10:00<span>～翌</span>5:00
          </dd> -->
        </dl>
      </div><!-- footer_info -->
  
      <div class="footer_sitemap flex">
        <p class="pc_footer_twitter"><a href="https://twitter.com/idol__lab"><i class="fab fa-twitter"></i></a></p>
        <ul>
          <li><a href="${ROOT_PATH}/">トップ</a></li>
          <li><a href="${ROOT_PATH}/system">料金システム</a></li>
          <li><a href="${ROOT_PATH}/girllist">所属アイドル</a></li>
          <li><a href="${ROOT_PATH}/daysche">出勤情報</a></li>
          <li><a href="${ROOT_PATH}/ranking">ランキング</a></li>
          <li><a href="${ROOT_PATH}/eventList">イベント</a></li>
          <li><a href="https://www.cityheaven.net/osaka/A2701/A270101/idolkenkyujo/diarylist/?lo=1">写メ日記</a></li>
          <li><a href="${ROOT_PATH}/voice?a=l">レビュー</a></li>
          <li><a href="https://www.cityheaven.net/osaka/A2701/A270101/idolkenkyujo/A6ShopReservation/">ネット予約</a></li>
          <li><a href="https://www.girlsheaven-job.net/osaka/ma-49/sa-465/idolkenkyujo//">キャスト求人</a></li>
          <li><a href="https://mensheaven.jp/8/idolkenkyujo/">スタッフ求人</a></li>
          <!--<li><a href="https://www.cityheaven.net/osaka/A2702/A270201/mens_torokeruspa/A6ShopReservation/">ネット予約</a></li>-->
        </ul>
      </div>
    </div>
    <p class="copyright"><a href="/">Copyright&copy; 大宮Crystal All Rights Reserved.</a></p>
  
    <ul id="footer_fixedmenu" class="flex">
      <li>
        <a href="tel:06-6379-5284" class="eventTracking" data-ecategory="tel" data-eaction="click" data-elabel="tel@トップ@footer"><i class="fas fa-phone"></i>TEL</a>
      </li>
      <li>
        <a href="/girllist" target="_self"><i class="fas fa-hand-holding-water"></i><span>所属アイドル</span></a>
      </li>
      <li>
        <a href="/daysche" target="_self"><i class="fas fa-calendar-alt"></i>出勤予定</a>
      </li>
      <li>
        <a href="https://line.me/ti/p/ZDBzXsA0Kf"><i class="fab fa-line"></i>LINE</a>
      </li>
    </ul>
  
    <p id="totop"><i class="fa fa-chevron-up" aria-hidden="true"></i></p>

  `;
  document.querySelector("footer").innerHTML = footerContent;
});
