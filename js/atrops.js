const myAtropos = Atropos({
    el: '.my-atropos',
    activeOffset: 40,
  });
  
  setTimeout(() => {
    // destroy it when needed
    myAtropos.destroy();
  }, 10000)