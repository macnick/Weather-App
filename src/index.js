console.log('Hello Weather');
// alert('Everything OK');
async function geo() {
  await navigator.geolocation.getCurrentPosition(
    (pos) => {
      console.log(pos);
    },
    (err) => console.log('Here is my error: ', err.message)
  );
}

console.log(geo());
