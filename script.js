function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

// ページ内リンクをクリックしたときにメニューを閉じる (モバイル用)
document.querySelectorAll('.menu a').forEach(item => {
    item.addEventListener('click', () => {
        const menu = document.querySelector('.menu');
        if (menu.classList.contains('active')) {
            menu.classList.remove('active');
        }
    });
});

// スクロール時のアニメーションやヘッダーの色の変更など、
// 今後追加したいJavaScriptの機能はここに追加していきます。