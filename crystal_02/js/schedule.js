//.sellect_date

document.addEventListener("DOMContentLoaded", function () {
  const dateList = document.querySelector(".schedule_datelist");

  if (dateList) {
    const weekNames = ["日", "月", "火", "水", "木", "金", "土"];
    const weekClasses = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    const today = new Date();

    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);

      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      const weekDay = date.getDay();
      const weekClass = weekClasses[weekDay];
      const isActive = i === 0 ? "active" : ""; // 最初のタイルを active にする

      const listItem = `
        <li class="ti_${i} ${isActive}">
          <a>
            <span class="date"><span>${month}/</span>${day}</span>
            <span class="week ${weekClass}">(${weekNames[weekDay]})</span>
          </a>
        </li>
      `;
      dateList.insertAdjacentHTML("beforeend", listItem);
    }
  }
});







//動的に日付取得
document.addEventListener("DOMContentLoaded", function () {
  const sellectDateElement = document.querySelector(".sellect_date");

  if (sellectDateElement) {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const date = String(today.getDate()).padStart(2, '0');

    // 曜日を取得するための配列
    const weekDays = ['日', '月', '火', '水', '木', '金', '土'];
    const weekDay = weekDays[today.getDay()];

    // 日付を「03月30日（日）」の形式にフォーマット
    const formattedDate = `${month}月${date}日（${weekDay}）`;

    // HTMLを動的に書き換え
    sellectDateElement.innerHTML = `<i class="far fa-calendar-alt"></i> ${formattedDate}`;
  }
});


document.addEventListener('DOMContentLoaded', function() {
  function showContent(id) {
    // すべてのタイルから active クラスを削除
    document.querySelectorAll('.schedule_datelist li').forEach(item => {
      item.classList.remove('active');
    });

    // クリックされたタイルに active クラスを追加
    document.querySelector('.ti_' + id).classList.add('active');

    // すべてのコンテンツを非表示
    document.querySelectorAll('#ti_content > div').forEach(content => {
      content.style.display = 'none';
    });

    // 対応するコンテンツを表示
    document.querySelectorAll('.content_ti_' + id).forEach(content => {
      content.style.display = 'block';
    });
  }

  // 初期表示
  showContent('0'); // 最初は content_ti_0 のコンテンツを表示

  // タイルをクリックした時に対応するコンテンツを表示
  document.querySelectorAll('.schedule_datelist li').forEach((item, index) => {
    item.addEventListener('click', function() {
      showContent(index.toString());
    });
  });
});





