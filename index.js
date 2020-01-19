function oddOrEven(array) {
  array.map(i => {
    if(Number.isInteger(i / 2)){
      console.log('even', i)
      return 'even'
    } else {
      console.log('odd', i)
      return 'odd'
    }
  })
}

oddOrEven([0,1,3,4,2,2])