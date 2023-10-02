const drawerButton = document.querySelector(".drawer-button");
// const drawerBackdropOne = document.querySelector(".drawer-backdrop-one");
// const drawerBackdropTwo = document.querySelector(".drawer-backdrop-two");
// const drawerBackdropThree = document.querySelector(".drawer-backdrop-three");

drawerButton.addEventListener("click", () => {
  console.log("click");
  drawerButton.classList.toggle("drawer-button--animate");
  // drawerBackdropOne.classList.toggle("drawer-backdrop-one--active");
  // drawerBackdropTwo.classList.toggle("drawer-backdrop-two--active");
  // drawerBackdropThree.classList.toggle("drawer-backdrop-three--active");
});
