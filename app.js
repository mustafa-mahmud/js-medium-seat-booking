'use strict';

const seats = document.querySelectorAll('.container .row .seat:not(.occupied)');
const selected = document.getElementById('movie');
const count = document.getElementById('count');
const total = document.getElementById('total');

const storeIndex = localStorage.getItem('seats')
  ? JSON.parse(localStorage.getItem('seats'))
  : [];

const addClass = (index) => {
  seats[index].classList.toggle('selected');

  if (storeIndex.indexOf(index) !== -1) {
    storeIndex.splice(storeIndex.indexOf(index), 1);
  } else {
    storeIndex.push(index);
  }

  localStorage.setItem('seats', JSON.stringify(storeIndex));

  selectedValue();
};

const addClassFromLS = () => {
  if (storeIndex.length) {
    storeIndex.forEach((index) => {
      seats[index].classList.add('selected');
    });
  }

  const value = localStorage.getItem('value')
    ? localStorage.getItem('value')
    : selected.value;
  selected.value = value;

  selectedValue();
};

const selectedValue = () => {
  const value = selected.value;

  count.textContent = storeIndex.length;
  total.textContent = storeIndex.length * value;

  localStorage.setItem('value', value);
};

addClassFromLS();

seats.forEach((seat, index) => {
  seat.addEventListener('click', () => addClass(index));
});

selected.addEventListener('change', selectedValue);
