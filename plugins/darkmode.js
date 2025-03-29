export default ({ app }) => {
    // LocalStorage'dan dark mode bilgisini kontrol et
    const darkMode = localStorage.getItem('darkMode') === 'true';

    // Eğer dark mode aktifse, body'ye dark-mode sınıfını ekle
    if (darkMode) {
        document.body.classList.add('dark-mode');
    }

    // Dark mode değiştirme fonksiyonu
    app.$darkMode = {
        toggle() {
            const isDarkMode = document.body.classList.contains('dark-mode');
            if (isDarkMode) {
                document.body.classList.remove('dark-mode');
                localStorage.setItem('darkMode', 'false');
            } else {
                document.body.classList.add('dark-mode');
                localStorage.setItem('darkMode', 'true');
            }
        },
        isDarkMode: darkMode
    };
};