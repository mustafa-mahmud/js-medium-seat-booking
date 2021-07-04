'use strict';

const seats = document.querySelectorAll('.container .row .seat:not(.occupied)');
const selected = document.getElementById('movie');
const count = document.getElementById('count');
const total = document.getElementById('total');

const storeIndex = [];

const addClass = (index) => {
  seats[index].classList.toggle('selected');

  if (storeIndex.indexOf(index) !== -1) {
    storeIndex.splice(storeIndex.indexOf(index), 1);
  } else {
    storeIndex.push(index);
  }

  selectedValue();
};

const selectedValue = () => {
  const value = selected.value;

  count.textContent = storeIndex.length;
  total.textContent = storeIndex.length * value;
};

/////////////////////////////////
////////////////////////////////
seats.forEach((seat, index) => {
  seat.addEventListener('click', () => addClass(index));
});

selected.addEventListener('change', selectedValue);
