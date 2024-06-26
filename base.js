// script.js

document.getElementById('search-button').addEventListener('click', function() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const items = document.querySelectorAll('.cu');

    items.forEach(item => {
        const itemName = item.getAttribute('data-name').toLowerCase();
        if (itemName.includes(searchInput)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});

// 검색 입력창에서 엔터 키를 눌렀을 때도 검색이 작동하도록 이벤트 리스너 추가
document.getElementById('search-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('search-button').click();
    }
});
