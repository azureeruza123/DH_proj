document.addEventListener("DOMContentLoaded", () => {
  const headerContent = `

    <div class="header_inner">
      <h1 class="header_logo">
        <a href="/" class="pc_b"><img src="https://placehold.jp/150x150.png" alt="大阪 梅田 デリバリーヘルス アイドル研究所"></a>
        <a href="/" class="sp_b"><img src="https://placehold.jp/150x150.png" alt="大阪 梅田 デリバリーヘルス アイドル研究所"></a>
      </h1>
      <div class="header_info pc_b">
        <p class="flex">OPEN 10:00～翌5:00</p>
        <!-- <dl class="header_time flex">
          <dt>OPEN</dt>
          <dd>
            10:00<span>～翌</span>5:00
          </dd>
        </dl> -->
        <!-- <dl class="header_time flex">
          <dt>電話受付</dt>
          <dd>
            00:00<span>～</span>00:00)
          </dd>
        </dl> -->
        <dl class="header_tel flex">
          <dt><i class="fas fa-phone"></i></dt>
          <dd>06-6379-5284</dd>
        </dl>
      </div>
      <!-- <div class="header_info sp_b">
        <a href="tel:06-6379-5284"><i class="fas fa-phone-square-alt"></i></a>
        <a href="https://line.me/ti/p/H_IFUh2EOu"><i class="fab fa-line"></i></a>
      </div> -->
    </div><!-- header_inner -->
    <p class="sp_menubtn">
      <span></span>
      <span></span>
      <span></span>
    </p>
    <div class="globalnavi_wrapper">
      <nav class="globalnavi">
        <ul class="globalmenu">
          <li class="sp_b closeBtn"><span><i class="fas fa-times"></i>閉じる</span></li>
          <li><a href="${ROOT_PATH}/"><i class="fas fa-home"></i>Top<span>トップ</span></a></li>
          <li><a href="${ROOT_PATH}/system"><i class="fas fa-tint"></i>System<span>料金システム</span></a></li>
          <li><a href="${ROOT_PATH}/girllist"><i class="fas fa-hand-holding-heart"></i>Idol<span>所属アイドル</span></a></li>
          <li><a href="${ROOT_PATH}/daysche"><i class="fas fa-calendar-check"></i>Schedule<span>出勤情報</span></a></li>
          <li><a href="${ROOT_PATH}/ranking"><i class="fas fa-calendar-check"></i>Ranking<span>ランキング</span></a></li>
          <li><a href="${ROOT_PATH}/eventList"><i class="fas fa-calendar-check"></i>Event<span>イベント</span></a></li>
          <li><a href="https://www.cityheaven.net/osaka/A2701/A270101/idolkenkyujo/diarylist/?lo=1"><i
                class="fas fa-camera"></i>PhotoDiary<span>写メ日記</span></a></li>
          <li class="sp_b"><a href="${ROOT_PATH}/voice?a=l"><i class="fas fa-comment-dots"></i>レビュー<span>Review</span></a></li>
          <li><a href="https://www.cityheaven.net/osaka/A2701/A270101/idolkenkyujo/reviews/"><i
                class="fa-solid fa-star-half-stroke"></i>Evaluate<span>口コミ</span></a></li>
          <li><a href="https://www.cityheaven.net/osaka/A2701/A270101/idolkenkyujo/A6ShopReservation/"><i
                class="fa-solid fa-bell-concierge"></i>Reserve<span>ネット予約</span></a></li>
          <li><a href="https://www.girlsheaven-job.net/osaka/ma-49/sa-465/idolkenkyujo/"><i
                class="fas fa-seedling"></i>Recruit<span>キャスト求人</span></a></li>
          <li><a href="https://mensheaven.jp/8/idolkenkyujo/"><i
                class="fas fa-seedling"></i>Recruit<span>スタッフ求人</span></a></li>
          <li class="sp_b"><a href="${ROOT_PATH}/link"><i class="fas fa-link"></i>リンク<span>Link</span></a></li>
        </ul>
      </nav>
    </div><!-- globalnavi_wrapper -->

  `;
  document.querySelector("header").innerHTML = headerContent;
});
