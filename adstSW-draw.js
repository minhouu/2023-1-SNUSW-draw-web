const students22 = [
  "문소원",
  "김도은",
  "문다예",
  "홍성민",
  "구민지",
  "윤수민",
  "정승연",
  "연지은",
  "김어진",
  "문서진",
  "문희태",
  "유혜린",
  "정재문",
  "권준영",
  "최민호",
  "한다은",
  "이범진",
  "황유진",
  "안채연",
  "이지민",
  "김민수",
  "김보민",
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

// html select
const group = document.querySelectorAll(".dgt-group");

const runButton = document.querySelector(".dgt-draw-button");
runButton.addEventListener("click", function printShuffle() {
  const studentShuffled = shuffle(students22);
  [...group].forEach(function (currentValue, currentIndex, listObj) {
    const stdNum = currentIndex * 3;
    if (currentIndex == 6) {
      currentValue.innerHTML = `<div class="dgt-group"><b>${
        currentIndex + 1
      }조 : (조장) ${students22[stdNum]}</b>, ${students22[stdNum + 1]}, ${
        students22[stdNum + 2]
      }, ${students22[stdNum + 3]}</div>`;
    } else {
      currentValue.innerHTML = `<div class="dgt-group"><b>${
        currentIndex + 1
      }조 : (조장) ${students22[stdNum]}</b>, ${students22[stdNum + 1]}, ${
        students22[stdNum + 2]
      }</div>`;
    }
  });
});
