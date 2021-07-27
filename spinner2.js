let cursorMovements = [ '\r/    ', '\r|    ', '\r\\    ', '\r-    ', '\r    \n'];

const cursor = function(comments) {
  comments.forEach((movement, index) => {
    setTimeout(() => {
      process.stdout.write(movement);
    }, 100 * index);
  });
};

cursor(cursorMovements);