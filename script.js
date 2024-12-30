const feature = document.getElementById('feature');
const company = document.getElementById('company');


feature.addEventListener('mouseover', function () {
    this.querySelector('img').src = 'images/icon-arrow-up.svg';
});
feature.addEventListener('mouseout', function () {
    this.querySelector('img').src = 'images/icon-arrow-down.svg';
});
company.addEventListener('mouseover', function () {
    this.querySelector('img').src = 'images/icon-arrow-up.svg';
});
company.addEventListener('mouseout', function () {
    this.querySelector('img').src = 'images/icon-arrow-down.svg';
});

 