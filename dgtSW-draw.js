const students36 = [
  "강건희",
  "구민지",
  "권준영",
  "김근태",
  "김서은",
  "김어진",
  "김연우",
  "김원재",
  "김재무",
  "김재형",
  "김현성",
  "문소원",
  "문희태",
  "박선영",
  "배지윤",
  "설예원",
  "안채연",
  "유하은",
  "유혜린",
  "윤수민",
  "이경나",
  "이다예",
  "이범진",
  "이승연",
  "전강훈",
  "전아영",
  "정민철",
  "정승연",
  "정승우",
  "정재문",
  "조세린",
  "최민호",
  "최정인",
  "최주현",
  "표하영",
  "홍아윤",
];

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    const randomPosition = Math.floor(Math.random() * (index + 1));
    const temp = array[index];
    array[index] = array[randomPosition];
    array[randomPosition] = temp;
  }
  return array;
}

const group = document.querySelectorAll(".dgt-group");

const runButton = document.querySelector(".dgt-draw-button");
runButton.addEventListener("click", function printShuffle() {
  shuffle(students36);
  [...group].forEach(function (currentValue, currentIndex, listObj) {
    const stdNum = currentIndex * 4;
    currentValue.innerHTML = `<div class="dgt-group"><b>${
      currentIndex + 1
    }조 : (조장) ${students36[stdNum]}</b>, ${students36[stdNum + 1]}, ${
      students36[stdNum + 2]
    }, ${students36[stdNum + 3]}</div>`;
  });
});
